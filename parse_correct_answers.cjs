const fs = require('fs');

const aText = fs.readFileSync('ac_new.txt', 'utf8');
const ansLines = aText.split('\n').map(l => l.trim());

const answers = {};

// Look for Question Number followed by the answer letter in the explanations section
// Example:
// 8
// d
// a) Is not correct...

for (let i = 0; i < ansLines.length; i++) {
  const line = ansLines[i];
  
  if (line.match(/^\d+$/)) {
      const qNum = parseInt(line);
      if (qNum >= 1 && qNum <= 40) {
          // Check if the next line is a valid answer string (e.g., 'a', 'b', 'c, d', 'a, b')
          // Or the line after that (if there's an empty line or something)
          for (let j = 1; j <= 3; j++) {
              if (i + j < ansLines.length) {
                  const possibleAns = ansLines[i+j].toLowerCase();
                  if (possibleAns.match(/^[a-e](\s*,\s*[a-e])*$/)) {
                      let correctArr = [];
                      const parts = possibleAns.split(/[,&\s]+/).map(p => p.trim());
                      parts.forEach(p => {
                          if (p.length === 1 && p >= 'a' && p <= 'e') {
                              correctArr.push(p.charCodeAt(0) - 'a'.charCodeAt(0));
                          }
                      });
                      answers[qNum] = correctArr;
                      break; // Found the answer for this question
                  }
              }
          }
      }
  }
}

// Another format to check is:
// Question Correct
// Explanation / Rationale
// Number Answer
// (#)
// 8
// d
for (let i = 0; i < ansLines.length; i++) {
    if (ansLines[i] === "(#)") {
        const qNumStr = ansLines[i+1];
        const ansStr = ansLines[i+2];
        
        if (qNumStr && qNumStr.match(/^\d+$/) && ansStr && ansStr.match(/^[a-e](\s*,\s*[a-e])*$/i)) {
            const qNum = parseInt(qNumStr);
            let correctArr = [];
            const parts = ansStr.split(/[,&\s]+/).map(p => p.trim().toLowerCase());
            parts.forEach(p => {
                if (p.length === 1 && p >= 'a' && p <= 'e') {
                    correctArr.push(p.charCodeAt(0) - 'a'.charCodeAt(0));
                }
            });
            answers[qNum] = correctArr;
        }
    }
}

console.log(`Extracted correct answers for ${Object.keys(answers).length} questions from explanations.`);

const aPath = 'client/src/data/answers.ts';
let aTsCode = fs.readFileSync(aPath, 'utf8');

const qPath = 'client/src/data/questions.ts';
let qTsCode = fs.readFileSync(qPath, 'utf8');

for (let qNum = 1; qNum <= 40; qNum++) {
   const globalId = qNum + 80;
   const cor = answers[qNum];
   
   if (cor) {
       // Update answers.ts
       const regexA = new RegExp(`questionId:\\s*${globalId},\\s*correctAnswers:\\s*\\[[^\\]]*\\]`, 'g');
       if (aTsCode.match(regexA)) {
           aTsCode = aTsCode.replace(regexA, `questionId: ${globalId},\n      correctAnswers: ${JSON.stringify(cor)}`);
       }
       
       // Update questions.ts
       const regexQ = new RegExp(`(id:\\s*${globalId},[\\s\\S]*?)(,\\s*correctAnswers:\\s*\\[.*?\\])?(\\s*\\})`, 'g');
       qTsCode = qTsCode.replace(regexQ, (match, p1, p2, p3) => {
           return p1 + `,\n      correctAnswers: ${JSON.stringify(cor)}` + p3;
       });
   }
}

fs.writeFileSync(aPath, aTsCode);
fs.writeFileSync(qPath, qTsCode);
console.log(`Updated correct answers in answers.ts and questions.ts`);
