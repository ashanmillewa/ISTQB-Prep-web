const fs = require('fs');

const aText = fs.readFileSync('ac_new.txt', 'utf8');
const ansLines = aText.split('\n').map(l => l.trim());

const explanations = {};

let currentQ = null;
let currentExp = [];
let captureExp = false;

// Another try to get all 40 explanations
// Looking at the grep, we have lines like:
// Question Correct
// Explanation / Rationale
// Number Answer
// (#)
// 8
// d
// a) Is not correct...

// We can just look for lines starting with "a) " followed by "b) ", "c) ", "d) " 
// and assign them to the last seen question number before them.

for (let i = 0; i < ansLines.length; i++) {
  const line = ansLines[i];
  
  // Find Question Number (could be standalone number before "Correct Answer" or just after "(#)")
  if (line.match(/^\d+$/)) {
      const num = parseInt(line);
      if (num >= 1 && num <= 40) {
          // Verify it's a question number by checking surrounding context
          let isQNum = false;
          if (ansLines[i-1] === '(#)' || ansLines[i+1] === 'Correct Answer') {
              isQNum = true;
          } else if (i > 2 && ansLines[i-2] === 'Number' && ansLines[i-1] === 'of') {
              isQNum = true; // From page header
          }
          
          if (isQNum) {
              if (currentQ && currentExp.length > 0) {
                  explanations[currentQ] = currentExp.join(' ').replace(/\s+/g, ' ').trim();
              }
              currentQ = num;
              currentExp = [];
              captureExp = false;
          }
      }
  } else if (line.match(/^[a-e]\)/i) || line.match(/^[a-e]\s+Is/i) || line.match(/^[a-e]\)\s+Is/i)) {
      captureExp = true;
  }
  
  if (captureExp && currentQ) {
      if (line === "Question Correct" || line === "Explanation / Rationale" || line === "Correct Answer" || line === "LO" || line === "K-Level" || line === "Points") {
          captureExp = false;
          continue;
      }
      
      if (line.includes('Version 1.') || line.includes('Page ') || line.includes('© International Software Testing') || line.includes('Sample Exam') || line.startsWith('FL-') || line === 'Number' || line === 'of' || line === 'Points') {
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

console.log(`Parsed ${Object.keys(explanations).length} explanations using heuristic method.`);

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

