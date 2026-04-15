const fs = require('fs');

const aText = fs.readFileSync('ac_new.txt', 'utf8');
const ansLines = aText.split('\n').map(l => l.trim());

const answers = {};

for (let i = 0; i < ansLines.length; i++) {
  const line = ansLines[i];
  
  // Look for "Question Correct" followed by "Explanation / Rationale"
  if (line === "Question Correct" || (line === "Number" && ansLines[i+1] === "Answer")) {
      // Find "(#)"
      for (let j = 1; j <= 5; j++) {
          if (ansLines[i+j] === "(#)") {
              const qNumStr = ansLines[i+j+1];
              const ansStr = ansLines[i+j+2];
              
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
              break;
          }
      }
  }
}

// Fallback: The Answer Key at the beginning of the document
// Usually it's listed under "Correct Answer" column
let inAnswerKey = false;
let answerIndex = 1;
for (let i = 0; i < ansLines.length; i++) {
    if (ansLines[i] === "Correct Answer" && ansLines[i+2] === "LO") {
        inAnswerKey = true;
        // Skip header
        let j = i + 1;
        while (j < ansLines.length && !ansLines[j].match(/^[a-e](\s*,\s*[a-e])*$/i)) {
            j++;
        }
        
        while (j < ansLines.length && answerIndex <= 40) {
            const ansStr = ansLines[j];
            if (ansStr.match(/^[a-e](\s*,\s*[a-e])*$/i)) {
                let correctArr = [];
                const parts = ansStr.split(/[,&\s]+/).map(p => p.trim().toLowerCase());
                parts.forEach(p => {
                    if (p.length === 1 && p >= 'a' && p <= 'e') {
                        correctArr.push(p.charCodeAt(0) - 'a'.charCodeAt(0));
                    }
                });
                
                if (!answers[answerIndex]) {
                    answers[answerIndex] = correctArr;
                }
                answerIndex++;
            } else if (ansStr === "Page 6 of 37" || ansStr.includes("Version") || ansStr.includes("©")) {
                // Skip headers/footers
            } else if (ansStr.match(/^\d+$/)) {
                // Number column, ignore
            } else if (ansStr.length > 0) {
                // Could be other columns
            }
            j++;
        }
        break;
    }
}

console.log(`Found answers for ${Object.keys(answers).length} questions.`);

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
       const regexQ = new RegExp(`id:\\s*${globalId},\\s*text:[\\s\\S]*?options:\\s*\\[[\\s\\S]*?\\],\\s*category:\\s*".*?"(?:,\\s*correctAnswers:\\s*\\[.*?\\])?`, 'g');
       qTsCode = qTsCode.replace(regexQ, (match) => {
           // Strip out any existing correctAnswers
           let cleanMatch = match.replace(/,\s*correctAnswers:\s*\[.*?\]/g, '');
           return cleanMatch + `,\n      correctAnswers: ${JSON.stringify(cor)}`;
       });
   }
}

fs.writeFileSync(aPath, aTsCode);
fs.writeFileSync(qPath, qTsCode);
console.log(`Updated correct answers in answers.ts and questions.ts`);
