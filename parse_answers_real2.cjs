const fs = require('fs');

const aText = fs.readFileSync('ac_new.txt', 'utf8');
const ansLines = aText.split('\n').map(l => l.trim());

const answers = {};
const explanations = {};

let currentQ = null;
let currentExp = [];
let captureExp = false;

// The PDF has questions in the format "1" followed by "Correct Answer" or just "1" and some lines down "Correct Answer"
for (let i = 0; i < ansLines.length; i++) {
  const line = ansLines[i];
  
  if (line.match(/^\d+$/) && ansLines[i+2] && ansLines[i+2] === "Correct Answer") {
    if (currentQ) {
       explanations[currentQ] = currentExp.join(' ').replace(/\s+/g, ' ').trim();
    }
    currentQ = parseInt(line);
    currentExp = [];
    captureExp = false;
    
    // Look for the answer letter
    let j = i + 3;
    while (j < i + 15 && j < ansLines.length) {
       const possibleAns = ansLines[j].toLowerCase();
       if (possibleAns.match(/^[a-e](\s*,\s*[a-e])*$/)) {
          let correctArr = [];
          const parts = possibleAns.split(/[,&\s]+/).map(p => p.trim());
          parts.forEach(p => {
             if (p.length === 1 && p >= 'a' && p <= 'e') {
                correctArr.push(p.charCodeAt(0) - 'a'.charCodeAt(0));
             }
          });
          answers[currentQ] = correctArr;
          break;
       }
       j++;
    }
  } else if (line === "Explanation / Rationale") {
    captureExp = true;
    continue;
  } else if (captureExp && currentQ) {
    if (line.includes('Version 1.') || line.includes('Page ') || line.includes('© International Software Testing') || line.includes('Sample Exam') || line === 'Number' || line === 'of' || line === 'Points' || line.match(/^FL-\d/)) {
       continue;
    }
    if (line.match(/^\d+$/) && ansLines[i+2] && ansLines[i+2] === "Correct Answer") {
       // Reached next question
       captureExp = false;
       i--; // Re-process this line in the next iteration
       continue;
    }
    if (line !== '') {
       currentExp.push(line);
    }
  }
}

if (currentQ) {
   explanations[currentQ] = currentExp.join(' ').replace(/\s+/g, ' ').trim();
}

// Fallback parsing for the format seen in the text snippet
if (Object.keys(explanations).length === 0) {
  // Let's just use the previous parsing logic but more relaxed
  let inQ = null;
  let inExp = [];
  let inCap = false;
  for (let i = 0; i < ansLines.length; i++) {
    const line = ansLines[i];
    if (line.match(/^\d+$/)) {
       // Might be a question number. Let's check next few lines for "Correct Answer"
       let isQ = false;
       for (let k = 1; k <= 5; k++) {
          if (ansLines[i+k] === "Correct Answer") {
             isQ = true; break;
          }
       }
       if (isQ) {
          if (inQ) explanations[inQ] = inExp.join(' ').replace(/\s+/g, ' ').trim();
          inQ = parseInt(line);
          inExp = [];
          inCap = false;
          
          let j = i + 1;
          while (j < i + 20 && j < ansLines.length) {
             const possibleAns = ansLines[j].toLowerCase();
             if (possibleAns.match(/^[a-e](\s*,\s*[a-e])*$/)) {
                let correctArr = [];
                const parts = possibleAns.split(/[,&\s]+/).map(p => p.trim());
                parts.forEach(p => {
                   if (p.length === 1 && p >= 'a' && p <= 'e') {
                      correctArr.push(p.charCodeAt(0) - 'a'.charCodeAt(0));
                   }
                });
                answers[inQ] = correctArr;
                break;
             }
             j++;
          }
       }
    } else if (line === "Explanation / Rationale") {
       inCap = true;
    } else if (inCap && inQ) {
       if (line.includes('Version 1.') || line.includes('Page ') || line.includes('© International Software Testing') || line.includes('Sample Exam') || line === 'Number' || line === 'of' || line === 'Points' || line.match(/^FL-\d/)) {
          continue;
       }
       if (line !== '') inExp.push(line);
    }
  }
  if (inQ) explanations[inQ] = inExp.join(' ').replace(/\s+/g, ' ').trim();
}

console.log(`Parsed ${Object.keys(explanations).length} explanations and ${Object.keys(answers).length} answers.`);

// Update answers.ts
const aPath = 'client/src/data/answers.ts';
let aTsCode = fs.readFileSync(aPath, 'utf8');

for (let qNum = 1; qNum <= 40; qNum++) {
   const globalId = qNum + 80;
   const exp = explanations[qNum];
   const cor = answers[qNum];
   
   if (exp && cor) {
       const regex = new RegExp(`questionId:\\s*${globalId},\\s*correctAnswers:\\s*\\[.*\\],\\s*explanation:\\s*".*"`, 'g');
       if (aTsCode.match(regex)) {
           aTsCode = aTsCode.replace(regex, `questionId: ${globalId},\n      correctAnswers: ${JSON.stringify(cor)},\n      explanation: ${JSON.stringify(exp)}`);
       } else {
           // Fallback for multiline explanation format
           const regex2 = new RegExp(`questionId:\\s*${globalId},\\s*correctAnswers:\\s*\\[.*\\],\\n\\s*explanation:\\s*".*"`, 'g');
           aTsCode = aTsCode.replace(regex2, `questionId: ${globalId},\n      correctAnswers: ${JSON.stringify(cor)},\n      explanation: ${JSON.stringify(exp)}`);
       }
   }
}

fs.writeFileSync(aPath, aTsCode);
console.log(`Updated explanations in answers.ts`);

