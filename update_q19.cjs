const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

const regex = /id:\s*99,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `What is the MAIN difference between black-box test techniques and experience-based test techniques?`;

  code = code.replace(
    regex,
    `id: 99,\n      text: ${JSON.stringify(newText)},\n      options:`
  );
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q19.');
} else {
  console.log('Could not find Q19 to update.');
}
