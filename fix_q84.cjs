const fs = require('fs');

// Update Answers
const aPath = 'client/src/data/answers.ts';
let aTsCode = fs.readFileSync(aPath, 'utf8');

aTsCode = aTsCode.replace(
  /questionId:\s*84,\s*correctAnswers:\s*\[\s*0\s*\],\s*explanation:\s*"Explanation not found."/,
  'questionId: 84,\n      correctAnswers: [1, 4],\n      explanation: "b) and e) are correct."'
);
fs.writeFileSync(aPath, aTsCode);

// Update Questions
const qPath = 'client/src/data/questions.ts';
let qTsCode = fs.readFileSync(qPath, 'utf8');

// The question text should indicate two options
const regex = /(id:\s*84,\s*text:\s*")([^"]+?)(")/;
qTsCode = qTsCode.replace(regex, (match, p1, p2, p3) => {
  if (!p2.includes('TWO')) {
     return p1 + p2 + '\\n\\nSelect TWO options.' + p3;
  }
  return match;
});
fs.writeFileSync(qPath, qTsCode);

console.log("Fixed Paper C Question 4 (ID 84) to have two correct answers.");
