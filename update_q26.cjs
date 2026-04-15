const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

const regex = /id:\s*106,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `Consider the following list:\n\n\t• Correct input not accepted\n\t• Incorrect input accepted\n\t• Wrong output format\n\t• Division by zero\n\nWhat test technique is MOST PROBABLY used by the tester who uses this list when performing testing?`;

  code = code.replace(
    regex,
    `id: 106,\n      text: ${JSON.stringify(newText)},\n      options:`
  );
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q26 with tab spacing and line breaks.');
} else {
  console.log('Could not find Q26 to update.');
}
