const fs = require('fs');

const aText = fs.readFileSync('ac_new.txt', 'utf8');
const ansLines = aText.split('\n').map(l => l.trim());

const explanations = {};

let currentQ = null;
let currentExp = [];
let captureExp = false;

for (let i = 0; i < ansLines.length; i++) {
  const line = ansLines[i];
  
  // A very robust way to find questions in the explanations section:
  // "Question Number (#)" is followed by the number, then "Correct Answer", then the letter, then the explanation
  if (line === "Number" && ansLines[i+1] === "(#)") {
      const qNumLine = ansLines[i+2];
      if (qNumLine && qNumLine.match(/^\d+$/)) {
          if (currentQ && currentExp.length > 0) {
              explanations[currentQ] = currentExp.join(' ').replace(/\s+/g, ' ').trim();
          }
          currentQ = parseInt(qNumLine);
          currentExp = [];
          captureExp = false;
      }
  } else if (line === "Question" && ansLines[i+1] === "Correct" && ansLines[i+2] === "Explanation / Rationale") {
      // Alternative header format seen in PDF
      const qNumLine = ansLines[i+5]; // "Number", "(#)", "8"
      if (qNumLine && qNumLine.match(/^\d+$/)) {
          if (currentQ && currentExp.length > 0) {
              explanations[currentQ] = currentExp.join(' ').replace(/\s+/g, ' ').trim();
          }
          currentQ = parseInt(qNumLine);
          currentExp = [];
          captureExp = false;
      }
  } else if (line.match(/^[a-e]\)/i) || line.match(/^[a-e]\s+Is/i) || line.match(/^[a-e]\)\s+Is/i)) {
      captureExp = true;
  }
  
  if (captureExp && currentQ) {
      if (line === "Question Correct" || line === "Explanation / Rationale" || line === "Correct Answer" || line === "LO" || line === "K-Level" || line === "Points") {
          captureExp = false;
          continue;
      }
      
      if (line.includes('Version 1.') || line.includes('Page ') || line.includes('© International Software Testing') || line.includes('Sample Exam') || line.startsWith('FL-') || line === 'Number' || line === 'of' || line === 'Points' || line === '(#)') {
          continue;
      }
      
      if (line !== '' && !line.match(/^\d+$/) && !line.match(/^[a-e](\s*,\s*[a-e])*$/i)) {
          currentExp.push(line);
      }
  }
}

if (currentQ && currentExp.length > 0) {
   explanations[currentQ] = currentExp.join(' ').replace(/\s+/g, ' ').trim();
}

console.log(`Parsed ${Object.keys(explanations).length} explanations using robust method.`);

const aPath = 'client/src/data/answers.ts';
let aTsCode = fs.readFileSync(aPath, 'utf8');

for (let qNum = 1; qNum <= 40; qNum++) {
   const globalId = qNum + 80;
   const exp = explanations[qNum];
   
   if (exp) {
       const regex = new RegExp(`(questionId:\\s*${globalId},\\s*correctAnswers:\\s*\\[[^\\]]*\\](?:\\s*|\\n)*?,\\s*explanation:\\s*")[^"]*(")`, 'g');
       if (aTsCode.match(regex)) {
           aTsCode = aTsCode.replace(regex, (match, p1, p2) => {
              return p1 + exp.replace(/"/g, '\\"') + p2;
           });
       }
   }
}

fs.writeFileSync(aPath, aTsCode);
console.log(`Updated explanations in answers.ts`);
