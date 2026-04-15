const fs = require('fs');

const qText = fs.readFileSync('qb.txt', 'utf8');
const aText = fs.readFileSync('ab.txt', 'utf8');

// Parse answers from Paper B
// The table format in this PDF is column-based, which makes line-by-line parsing difficult.
// Let's use the detailed "Answers" section instead where it says:
// 1
// Correct Answer
// d
// Explanation ...

const answers = [];
const ansLines = aText.split('\n');

let currentAnsQ = null;
let captureAnswer = false;
let currentExp = [];
let explanations = {};

for (let i = 0; i < ansLines.length; i++) {
  const line = ansLines[i].trim();
  
  // Look for standalone question numbers like "1", "2", etc. followed by "Correct Answer"
  if (line.match(/^\d+$/) && ansLines[i+1] && ansLines[i+1].trim() === "Correct Answer") {
    if (currentAnsQ) {
       explanations[currentAnsQ] = currentExp.join(' ').trim().replace(/\s+/g, ' ');
    }
    
    currentAnsQ = parseInt(line);
    if (currentAnsQ > 40) break;
    
    // The correct answer is usually on the next non-empty line after "Correct Answer"
    let j = i + 2;
    while (j < ansLines.length && !ansLines[j].trim()) j++;
    
    if (j < ansLines.length) {
       const ans = ansLines[j].trim(); // e.g. "d" or "a, b"
       let correctArr = [];
       const parts = ans.split(',').map(p => p.trim());
       parts.forEach(p => {
          if (p.length === 1 && p >= 'a' && p <= 'e') {
             correctArr.push(p.charCodeAt(0) - 'a'.charCodeAt(0));
          }
       });
       answers.push({ q: currentAnsQ, a: correctArr });
    }
    
    currentExp = [];
    captureAnswer = true;
    continue;
  }
  
  if (captureAnswer && currentAnsQ) {
    if (line.includes('Version 1.') || line.includes('Page ') || line.includes('© International Software Testing') || line.includes('Sample Exam') || line === 'Explanation / Rationale' || line === 'Number' || line === 'of' || line === 'Points' || line.match(/^FL-\d/)) {
       continue;
    }
    if (line.match(/^[a-e]\)/)) {
       currentExp.push(line);
    } else if (line.length > 0) {
       currentExp.push(line);
    }
  }
}

if (currentAnsQ) {
   explanations[currentAnsQ] = currentExp.join(' ').trim().replace(/\s+/g, ' ');
}

// Convert answers to a map
const ansMap = {};
answers.forEach(a => {
   ansMap[a.q] = a.a;
});

// Parse questions
const questions = [];
const qLines = qText.split('\n');

let currentQ = null;
let currentText = [];
let currentOptions = [];
let optionLines = [];
let parsingOptions = false;

for (let i = 0; i < qLines.length; i++) {
  const line = qLines[i];
  const qMatch = line.match(/^\s*Question #(\d+)/);
  
  if (qMatch && !line.includes('..................')) {
    if (currentQ) {
      if (optionLines.length > 0) {
         let opts = [];
         let currOpt = [];
         for(let ol of optionLines) {
            if (ol.match(/^\s*[a-e]\)/)) {
                if (currOpt.length > 0) opts.push(currOpt.join(' ').trim().replace(/\s+/g, ' '));
                currOpt = [ol.replace(/^\s*[a-e]\)\s*/, '')];
            } else {
                currOpt.push(ol);
            }
         }
         if (currOpt.length > 0) opts.push(currOpt.join(' ').trim().replace(/\s+/g, ' '));
         currentOptions = opts;
      }
      
      questions.push({
        id: currentQ + 40, // offset for paper B
        text: currentText.join(' ').trim().replace(/\s+/g, ' '),
        options: currentOptions,
        correctAnswers: ansMap[currentQ] || [0]
      });
    }
    const qNum = parseInt(qMatch[1]);
    if (qNum > 40) break;
    currentQ = qNum;
    currentText = [];
    currentOptions = [];
    optionLines = [];
    parsingOptions = false;
    continue;
  }
  
  if (currentQ) {
    if (line.includes('Version 1.') || line.includes('Page ') || line.includes('© International Software Testing') || line.includes('Certified Tester') || line.includes('Sample Exam') || line.trim() === '') {
       continue;
    }
    
    if (line.match(/^\s*[a-e]\)/)) {
       parsingOptions = true;
    }
    
    if (line.includes('Select ONE') || line.includes('Select TWO') || line.includes('Select TWO options')) {
       parsingOptions = false;
       continue; // Don't push to text
    }
    
    if (parsingOptions) {
       optionLines.push(line.trim());
    } else {
       currentText.push(line.trim());
    }
  }
}

if (currentQ && currentQ <= 40) {
  if (optionLines.length > 0) {
     let opts = [];
     let currOpt = [];
     for(let ol of optionLines) {
        if (ol.match(/^\s*[a-e]\)/)) {
            if (currOpt.length > 0) opts.push(currOpt.join(' ').trim().replace(/\s+/g, ' '));
            currOpt = [ol.replace(/^\s*[a-e]\)\s*/, '')];
        } else {
            currOpt.push(ol);
        }
     }
     if (currOpt.length > 0) opts.push(currOpt.join(' ').trim().replace(/\s+/g, ' '));
     currentOptions = opts;
  }
  questions.push({
    id: currentQ + 40,
    text: currentText.join(' ').trim().replace(/\s+/g, ' '),
    options: currentOptions,
    correctAnswers: ansMap[currentQ] || [0]
  });
}

const outputQuestions = questions.map(q => {
  return {
    id: q.id,
    text: q.text,
    options: q.options,
    category: "Fundamentals of Testing"
  };
});

const outputAnswers = questions.map((q, idx) => {
  let correct = q.correctAnswers;
  
  return {
    questionId: q.id,
    correctAnswers: correct,
    explanation: explanations[idx + 1] || "Refer to syllabus."
  };
});


// Replace Paper B in questions.ts
const qPath = 'client/src/data/questions.ts';
let qTsCode = fs.readFileSync(qPath, 'utf8');

let bStart = qTsCode.indexOf('"paper-b": [');
let cStart = qTsCode.indexOf('"paper-c": [');

let bBlock = `  "paper-b": [\n`;
outputQuestions.forEach(q => {
  bBlock += `    {
      id: ${q.id},
      text: ${JSON.stringify(q.text)},
      options: ${JSON.stringify(q.options, null, 2).replace(/\n/g, '\n      ').trim()},
      category: ${JSON.stringify(q.category)}
    },\n`;
});
bBlock += `  ],\n`;

if (bStart !== -1 && cStart !== -1) {
   qTsCode = qTsCode.substring(0, bStart) + bBlock + qTsCode.substring(cStart);
} else if (bStart !== -1) {
   // just assume paper b is till the end
   qTsCode = qTsCode.substring(0, bStart) + bBlock + "};\n";
}

fs.writeFileSync(qPath, qTsCode);

// Replace Paper B in answers.ts
const aPath = 'client/src/data/answers.ts';
let aTsCode = fs.readFileSync(aPath, 'utf8');

let aBStart = aTsCode.indexOf('"paper-b": [');
let aCStart = aTsCode.indexOf('"paper-c": [');

let aBBlock = `  "paper-b": [\n`;
outputAnswers.forEach(a => {
  aBBlock += `    {
      questionId: ${a.questionId},
      correctAnswers: ${JSON.stringify(a.correctAnswers)},
      explanation: ${JSON.stringify(a.explanation)}
    },\n`;
});
aBBlock += `  ],\n`;

if (aBStart !== -1 && aCStart !== -1) {
   aTsCode = aTsCode.substring(0, aBStart) + aBBlock + aTsCode.substring(aCStart);
} else if (aBStart !== -1) {
   aTsCode = aTsCode.substring(0, aBStart) + aBBlock + "};\n";
}

fs.writeFileSync(aPath, aTsCode);

console.log("Parsed Paper B successfully. Found " + outputQuestions.length + " questions.");

