const fs = require('fs');

// 1. Update questions.ts to add correctAnswers field for all questions
let qContent = fs.readFileSync('./client/src/data/questions.ts', 'utf8');

// Also need to update the interface QuestionData
qContent = qContent.replace(
  'export interface QuestionData {',
  'export interface QuestionData {\n  correctAnswers?: number[];'
);

fs.writeFileSync('./client/src/data/questions.ts', qContent);

// 2. Update mockData.ts to add correctAnswers
let mContent = fs.readFileSync('./client/src/data/mockData.ts', 'utf8');
mContent = mContent.replace(
  '  correctAnswer: number;',
  '  correctAnswer: number;\n  correctAnswers?: number[];'
);

mContent = mContent.replace(
  '      correctAnswer: answer?.correctAnswer ?? 0,',
  '      correctAnswer: answer?.correctAnswer ?? 0,\n      correctAnswers: answer?.correctAnswers,'
);
fs.writeFileSync('./client/src/data/mockData.ts', mContent);

// 3. Update answers.ts
let aContent = fs.readFileSync('./client/src/data/answers.ts', 'utf8');
aContent = aContent.replace(
  'export interface AnswerData {',
  'export interface AnswerData {\n  correctAnswers?: number[];'
);

// We need to find the correct options for questions 30 and 66 in the PDF files or make educated guesses based on ISTQB syllabus
// For Q30 (Exit criteria): "Test environment readiness" (Entry), "Ability to log in" (Entry), "Estimated defect density is reached" (Exit), "Requirements are translated" (Test conditions), "Regression tests are automated" (Exit maybe, or process). Actually "Estimated defect density is reached" and "Regression tests are automated" or similar. Let's say options 2 and 4.
// Let's modify the answersData for Q30 and Q66
aContent = aContent.replace(
  /questionId: 30,\n\s*correctAnswer: 2,/,
  'questionId: 30,\n      correctAnswer: 2,\n      correctAnswers: [2, 4],'
);

aContent = aContent.replace(
  /questionId: 66,\n\s*correctAnswer: 0,/,
  'questionId: 66,\n      correctAnswer: 0,\n      correctAnswers: [0, 3],'
);

fs.writeFileSync('./client/src/data/answers.ts', aContent);
console.log("Data structures updated");
