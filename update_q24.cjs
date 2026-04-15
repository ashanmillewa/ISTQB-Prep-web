const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// 1. Add import
if (!code.includes('import paperCQ24 from "../assets/images/paper-c-q24.png";')) {
  code = code.replace(
    /import paperCQ23 from "\.\.\/assets\/images\/paper-c-q23\.png";/,
    'import paperCQ23 from "../assets/images/paper-c-q23.png";\nimport paperCQ24 from "../assets/images/paper-c-q24.png";'
  );
}

// 2. Update question text and add image
const regex = /id:\s*104,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `You want to apply branch testing to the code represented by the following control flow graph.|||How many coverage items do you need to test?`;

  code = code.replace(
    regex,
    `id: 104,\n      text: ${JSON.stringify(newText)},\n      image: paperCQ24,\n      options:`
  );
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q24 to use image.');
} else {
  console.log('Could not find Q24 to update.');
}
