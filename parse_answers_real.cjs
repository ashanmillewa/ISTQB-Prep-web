const fs = require('fs');

const aText = fs.readFileSync('ac_new.txt', 'utf8');
const ansLines = aText.split('\n').map(l => l.trim());

const answers = {};
const explanations = {};

let currentQ = null;
let currentExp = [];
let captureExp = false;

for (let i = 0; i < ansLines.length; i++) {
  const line = ansLines[i];
  
  // Find "Question #<num>"
  const qMatch = line.match(/^Question\s*#\s*(\d+)$/);
  if (qMatch) {
    if (currentQ) {
       explanations[currentQ] = currentExp.join(' ').replace(/\s+/g, ' ').trim();
    }
    
    currentQ = parseInt(qMatch[1]);
    if (currentQ > 40) break;
    
    currentExp = [];
    captureExp = false;
    continue;
  }
  
  if (currentQ) {
    if (line === "Correct Answer") {
       // Answer is right after Correct Answer (might be a few lines down depending on the layout)
       let j = i + 1;
       while (j < ansLines.length && !ansLines[j].match(/^[a-e](\s*,\s*[a-e])*$/i)) {
          // If it matches exactly a, b, c, d, e or a combination like b, e
          if (ansLines[j].match(/^[a-e](\s*,\s*[a-e])*$/i)) break;
          j++;
       }
       if (j < ansLines.length && ansLines[j].match(/^[a-e](\s*,\s*[a-e])*$/i)) {
          const ansStr = ansLines[j];
          let correctArr = [];
          const parts = ansStr.split(/[,&\s]+/).map(p => p.trim().toLowerCase());
          parts.forEach(p => {
             if (p.length === 1 && p >= 'a' && p <= 'e') {
                correctArr.push(p.charCodeAt(0) - 'a'.charCodeAt(0));
             }
          });
          answers[currentQ] = correctArr;
       }
    }
    
    if (line === "Explanation / Rationale") {
       captureExp = true;
       continue;
    }
    
    if (captureExp) {
       if (line.includes('Version 1.') || line.includes('Page ') || line.includes('© International Software Testing') || line.includes('Sample Exam') || line === 'Number' || line === 'of' || line === 'Points' || line.match(/^FL-\d/)) {
          continue;
       }
       if (line === 'Correct Answer') {
          // Sometimes it repeats
          continue;
       }
       if (line !== '') {
          currentExp.push(line);
       }
    }
  }
}

if (currentQ) {
   explanations[currentQ] = currentExp.join(' ').replace(/\s+/g, ' ').trim();
}

// Update answers.ts
const aPath = 'client/src/data/answers.ts';
let aTsCode = fs.readFileSync(aPath, 'utf8');

for (let qNum = 1; qNum <= 40; qNum++) {
   const globalId = qNum + 80;
   const exp = explanations[qNum];
   const cor = answers[qNum];
   
   if (exp && cor) {
       const regex = new RegExp(`(questionId:\\s*${globalId},\\s*correctAnswers:\\s*\\[.*?\\](?:\\s*|\\n)*?,\\s*explanation:\\s*")[\\s\\S]*?(")`, 'g');
       if (aTsCode.match(regex)) {
           aTsCode = aTsCode.replace(regex, (match, p1, p2) => {
              return `questionId: ${globalId},\n      correctAnswers: ${JSON.stringify(cor)},\n      explanation: ${JSON.stringify(exp)}`;
           });
       }
   }
}

fs.writeFileSync(aPath, aTsCode);
console.log(`Updated ${Object.keys(explanations).length} explanations from the document.`);
