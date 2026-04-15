const fs = require('fs');

const aText = fs.readFileSync('ac_new.txt', 'utf8');
const ansLines = aText.split('\n').map(l => l.trim());

const explanations = {};

let currentQ = null;
let currentExp = [];
let captureExp = false;

// Format: 
// Question Correct
// Explanation / Rationale
// Number Answer
// (#)
// 8
// d
// a) Is not correct...

for (let i = 0; i < ansLines.length; i++) {
  const line = ansLines[i];
  
  if (line === "Explanation / Rationale") {
     // We are near a question block. 
     // Usually 3 lines down is the question number, then answer, then explanation
     const qNumMatch = ansLines[i+3] && ansLines[i+3].match(/^\d+$/);
     if (qNumMatch) {
         if (currentQ) explanations[currentQ] = currentExp.join(' ').replace(/\s+/g, ' ').trim();
         currentQ = parseInt(ansLines[i+3]);
         currentExp = [];
         captureExp = true;
         i += 4; // Skip the answer letter
         continue;
     }
  } else if (captureExp && currentQ) {
     if (line === "Explanation / Rationale" || line === "Question Correct" || line.match(/^Question #\d+$/)) {
        captureExp = false;
        i--;
        continue;
     }
     
     if (line.includes('Version 1.') || line.includes('Page ') || line.includes('© International Software Testing') || line.includes('Sample Exam') || line.startsWith('FL-') || line === 'Number' || line === 'of' || line === 'Points' || line === 'Correct Answer') {
        continue;
     }
     
     if (line !== '') {
        currentExp.push(line);
     }
  }
}

if (currentQ) explanations[currentQ] = currentExp.join(' ').replace(/\s+/g, ' ').trim();

console.log(`Parsed ${Object.keys(explanations).length} explanations.`);

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
