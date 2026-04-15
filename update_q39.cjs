const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

const regex = /id:\s*119,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `Tools from which of the following categories help with the organization of test cases, detected defects and configuration management?`;

  code = code.replace(
    regex,
    `id: 119,\n      text: ${JSON.stringify(newText)},\n      options:`
  );
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q39.');
} else {
  console.log('Could not find Q39 to update.');
}
