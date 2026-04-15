const fs = require('fs');

const qText = fs.readFileSync('qd.txt', 'utf8');
const aText = fs.readFileSync('ad.txt', 'utf8');

// Parse answers from Paper D
const answers = [];
const ansLines = aText.split('\n');

let currentAnsQ = null;
let captureAnswer = false;
let currentExp = [];
let explanations = {};
let ansMap = {};

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
       const parts = ans.split(/[,&\s]+/).map(p => p.trim().toLowerCase());
       parts.forEach(p => {
          if (p.length === 1 && p >= 'a' && p <= 'e') {
             correctArr.push(p.charCodeAt(0) - 'a'.charCodeAt(0));
          }
       });
       answers.push({ q: currentAnsQ, a: correctArr });
       ansMap[currentAnsQ] = correctArr;
    }
    
    currentExp = [];
    captureAnswer = true;
    continue;
  }
  
  if (captureAnswer && currentAnsQ) {
    if (line.includes('Version 1.') || line.includes('Page ') || line.includes('© International Software Testing') || line.includes('Sample Exam') || line === 'Explanation / Rationale' || line === 'Number' || line === 'of' || line === 'Points' || line.match(/^FL-\d/)) {
       continue;
    }
    if (line.match(/^[a-e]\)/) || line.match(/^[A-E]\)/)) {
       currentExp.push(line);
    } else if (line.length > 0) {
       currentExp.push(line);
    }
  }
}

if (currentAnsQ) {
   explanations[currentAnsQ] = currentExp.join(' ').trim().replace(/\s+/g, ' ');
}

// Parse questions from Paper D
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
            if (ol.match(/^\s*[a-e]\)/i) || ol.match(/^\s*[A-E]\)/i)) {
                if (currOpt.length > 0) opts.push(currOpt.join(' ').trim().replace(/\s+/g, ' '));
                currOpt = [ol.replace(/^\s*[a-e]\)\s*/i, '')];
            } else if (ol.trim() !== '') {
                currOpt.push(ol);
            }
         }
         if (currOpt.length > 0) opts.push(currOpt.join(' ').trim().replace(/\s+/g, ' '));
         currentOptions = opts;
      }
      
      questions.push({
        id: currentQ + 120, // offset for paper D
        text: currentText.join('\n').trim(),
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
    if (line.includes('Version 1.') || line.includes('Page ') || line.includes('© International Software Testing') || line.includes('Certified Tester') || line.includes('Sample Exam') || line.trim() === 'Select ONE option.') {
       continue;
    }
    if (line.trim() === 'Select TWO options.') {
       continue;
    }
    
    if (line.match(/^\s*[a-e]\)/i) || line.match(/^\s*[A-E]\)/i)) {
       parsingOptions = true;
    }
    
    if (parsingOptions) {
       optionLines.push(line);
    } else {
       if (line.trim() !== '') {
          currentText.push(line.trim());
       } else if (currentText.length > 0 && currentText[currentText.length - 1] !== '') {
          currentText.push('');
       }
    }
  }
}

// Add the last question
if (currentQ) {
  if (optionLines.length > 0) {
     let opts = [];
     let currOpt = [];
     for(let ol of optionLines) {
        if (ol.match(/^\s*[a-e]\)/i) || ol.match(/^\s*[A-E]\)/i)) {
            if (currOpt.length > 0) opts.push(currOpt.join(' ').trim().replace(/\s+/g, ' '));
            currOpt = [ol.replace(/^\s*[a-e]\)\s*/i, '')];
        } else if (ol.trim() !== '') {
            currOpt.push(ol);
        }
     }
     if (currOpt.length > 0) opts.push(currOpt.join(' ').trim().replace(/\s+/g, ' '));
     currentOptions = opts;
  }
  
  questions.push({
    id: currentQ + 120,
    text: currentText.join('\n').trim(),
    options: currentOptions,
    correctAnswers: ansMap[currentQ] || [0]
  });
}

// Format questions output
const outputQuestions = questions.map(q => {
  return {
    id: q.id,
    text: q.text.replace(/\n{2,}/g, '\n\n'),
    options: q.options,
    category: "Fundamentals of Testing",
    correctAnswers: q.correctAnswers
  };
});

const outputAnswers = questions.map(q => {
  const originalQNum = q.id - 120;
  return {
    questionId: q.id,
    correctAnswers: q.correctAnswers,
    explanation: explanations[originalQNum] || "Explanation not found."
  };
});

// Update Questions
const qPath = 'client/src/data/questions.ts';
let qTsCode = fs.readFileSync(qPath, 'utf8');

let qDBlock = `  "paper-d": [\n`;
outputQuestions.forEach(q => {
  qDBlock += `    {
      id: ${q.id},
      text: ${JSON.stringify(q.text)},
      options: ${JSON.stringify(q.options, null, 2).replace(/\n/g, '\n      ').trim()},
      category: ${JSON.stringify(q.category)},
      correctAnswers: ${JSON.stringify(q.correctAnswers)}
    },\n`;
});
qDBlock += `  ]`;

let dIndex = qTsCode.indexOf('"paper-d": [');
if (dIndex !== -1) {
    qTsCode = qTsCode.substring(0, dIndex) + qDBlock + "\n};\n";
} else {
    let lastBrace = qTsCode.lastIndexOf('}');
    qTsCode = qTsCode.substring(0, lastBrace - 1) + `,\n` + qDBlock + "\n};\n";
}
fs.writeFileSync(qPath, qTsCode);
console.log('Added Paper D to questions.ts');

// Update Answers
const aPath = 'client/src/data/answers.ts';
let aTsCode = fs.readFileSync(aPath, 'utf8');

let aDBlock = `\n  "paper-d": [\n`;
outputAnswers.forEach(a => {
  aDBlock += `    {
      questionId: ${a.questionId},
      correctAnswers: ${JSON.stringify(a.correctAnswers)},
      explanation: ${JSON.stringify(a.explanation)}
    },\n`;
});
aDBlock += `  ]`;

let aDIndex = aTsCode.indexOf('"paper-d": [');
if (aDIndex !== -1) {
    aTsCode = aTsCode.substring(0, aDIndex) + aDBlock + "\n};\n";
} else {
    let lastBraceA = aTsCode.lastIndexOf('}');
    aTsCode = aTsCode.substring(0, lastBraceA - 1) + aDBlock + "\n};\n";
}
fs.writeFileSync(aPath, aTsCode);
console.log('Added Paper D to answers.ts');

// Add Paper D to mockData
const mPath = 'client/src/data/mockData.ts';
let mTsCode = fs.readFileSync(mPath, 'utf8');
if (!mTsCode.includes('id: "paper-d"')) {
   const newPaper = `
  {
    id: "paper-d",
    title: "Sample Exam D",
    description: "Official ISTQB Foundation Level v4.0 Sample Exam D",
    duration: 60,
    passingScore: 65,
    questions: questionsData["paper-d"]
  }`;
   let mIndex = mTsCode.lastIndexOf(']');
   mTsCode = mTsCode.substring(0, mIndex - 1) + `,` + newPaper + "\n];\n";
   fs.writeFileSync(mPath, mTsCode);
   console.log('Added Paper D to mockData.ts');
}

