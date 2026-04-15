const fs = require('fs');

const aText = fs.readFileSync('ac_new.txt', 'utf8');
const ansLines = aText.split('\n').map(l => l.trim());

const answers = {};
const explanations = {};

// Look at how the PDF text is structured based on the grep
// 241-20
// 242-
// 243:Correct Answer
// ...
// 251-b
// 252-c
// ... these are the answers for questions 1, 2, ...
// The explanations start on Page 6

let inExplanations = false;
let currentQ = null;
let currentExp = [];
let captureExp = false;

for (let i = 0; i < ansLines.length; i++) {
  const line = ansLines[i];
  
  if (line.match(/^Question #\d+$/) || line.match(/^Question\s+\d+$/)) {
     const match = line.match(/\d+/);
     if (match) {
        if (currentQ) explanations[currentQ] = currentExp.join(' ').replace(/\s+/g, ' ').trim();
        currentQ = parseInt(match[0]);
        currentExp = [];
        captureExp = false;
     }
  } else if (line === "Explanation / Rationale") {
     captureExp = true;
  } else if (captureExp && currentQ) {
     if (line.includes('Version 1.') || line.includes('Page ') || line.includes('© International Software Testing') || line.includes('Sample Exam') || line.startsWith('FL-') || line === 'Number' || line === 'of' || line === 'Points' || line === 'Correct Answer') {
        continue;
     }
     if (line !== '') {
        currentExp.push(line);
     }
  }
}

if (currentQ) explanations[currentQ] = currentExp.join(' ').replace(/\s+/g, ' ').trim();

// The previous parse_q_c.cjs had the answers map from the old PDF, we can use that for correctAnswers.
// Let's just update the explanations since the correct answers are already there, and we just need the newly uploaded explanations.

console.log(`Found ${Object.keys(explanations).length} explanations.`);

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
