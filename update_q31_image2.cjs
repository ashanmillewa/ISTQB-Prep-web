const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

const regex = /id:\s*111,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `|||What is the estimated amount of work for iteration #5?`;

  code = code.replace(
    regex,
    `id: 111,\n      text: ${JSON.stringify(newText)},\n      image: paperCQ31,\n      options:`
  );
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q31 to use new image and removed redundant text.');
}
