const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

const regex = /id:\s*83,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `The ‘absence-of-defects fallacy’ is one of the principles of testing. Which of the following is an example of addressing this principle in practice?`;
  code = code.replace(
    regex,
    `id: 83,\n      text: ${JSON.stringify(newText)},\n      options:`
  );
  fs.writeFileSync(path, code);
  console.log('Updated Q3');
} else {
  console.log('Q3 not found');
}
