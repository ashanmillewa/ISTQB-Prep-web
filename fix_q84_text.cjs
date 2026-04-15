const fs = require('fs');

const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

code = code.replace(
  'text: "Which of the following test activities are MOST likely to involve the application of boundary value\\nanalysis and equivalence partitioning?"',
  'text: "TWO Which of the following test activities are MOST likely to involve the application of boundary value\\nanalysis and equivalence partitioning?"'
);

fs.writeFileSync(path, code);
console.log("Added TWO to Q84 text so it is recognized as multi-select");

const qcPath = 'client/src/components/QuestionCard.tsx';
let qcCode = fs.readFileSync(qcPath, 'utf8');
qcCode = qcCode.replace(
  '{question.text.split("|||")[0].trim()}',
  '{question.text.split("|||")[0].replace(/^TWO /, "").trim()}'
);
qcCode = qcCode.replace(
  '{question.text.split("|||")[1].trim()}',
  '{question.text.split("|||")[1].replace(/^TWO /, "").trim()}'
);
fs.writeFileSync(qcPath, qcCode);
console.log("Updated QuestionCard to hide the TWO prefix");

const resPath = 'client/src/pages/Results.tsx';
let resCode = fs.readFileSync(resPath, 'utf8');
resCode = resCode.replace(
  '{question.text.split("|||")[0].trim()}',
  '{question.text.split("|||")[0].replace(/^TWO /, "").trim()}'
);
if (resCode.includes('{question.text.split("|||")[1].trim()}')) {
  resCode = resCode.replace(
    '{question.text.split("|||")[1].trim()}',
    '{question.text.split("|||")[1].replace(/^TWO /, "").trim()}'
  );
}
fs.writeFileSync(resPath, resCode);
console.log("Updated Results to hide the TWO prefix");

