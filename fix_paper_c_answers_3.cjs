const fs = require('fs');

const aText = fs.readFileSync('ac_new.txt', 'utf8');

const answers = [];
const ansLines = aText.split('\n');

let currentAnsQ = null;
let captureAnswer = false;
let currentExp = [];
let explanations = {};
let ansMap = {};

for (let i = 0; i < ansLines.length; i++) {
  const line = ansLines[i].trim();
  
  if (line.match(/^\d+$/) && ansLines[i+1] && ansLines[i+1].trim() === "Correct Answer") {
    if (currentAnsQ) {
       explanations[currentAnsQ] = currentExp.join(' ').trim().replace(/\s+/g, ' ');
    }
    
    currentAnsQ = parseInt(line);
    if (currentAnsQ > 40) break;
    
    let j = i + 2;
    while (j < ansLines.length && !ansLines[j].trim()) j++;
    
    if (j < ansLines.length) {
       const ans = ansLines[j].trim(); 
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
    if (line.match(/^[a-e]\)/i) || line.match(/^[A-E]\)/i)) {
       currentExp.push(line);
    } else if (line.length > 0) {
       currentExp.push(line);
    }
  }
}

if (currentAnsQ) {
   explanations[currentAnsQ] = currentExp.join(' ').trim().replace(/\s+/g, ' ');
}

// Update Answers
const aPath = 'client/src/data/answers.ts';
let aTsCode = fs.readFileSync(aPath, 'utf8');

for (let qNum = 1; qNum <= 40; qNum++) {
   const globalId = qNum + 80;
   const exp = explanations[qNum] || "Explanation not found.";
   const cor = ansMap[qNum] || [0];
   
   const regex = new RegExp(`(questionId:\\s*${globalId},\\s*correctAnswers:\\s*\\[.*?\\],\\s*explanation:\\s*")[\\s\\S]*?(")`, 'g');
   if (aTsCode.match(regex)) {
       aTsCode = aTsCode.replace(regex, (match, p1, p2) => {
          return `questionId: ${globalId},\n      correctAnswers: ${JSON.stringify(cor)},\n      explanation: ${JSON.stringify(exp)}`;
       });
   }
}

fs.writeFileSync(aPath, aTsCode);
console.log("Updated Paper C answers and explanations from the new PDF.");

