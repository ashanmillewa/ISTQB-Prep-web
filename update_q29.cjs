const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// 1. Add import
if (!code.includes('import paperCQ29 from "../assets/images/paper-c-q29.png";')) {
  code = code.replace(
    /import paperCQ24 from "\.\.\/assets\/images\/paper-c-q24\.png";/,
    'import paperCQ24 from "../assets/images/paper-c-q24.png";\nimport paperCQ29 from "../assets/images/paper-c-q29.png";'
  );
}

// 2. Update question text and add image
const regex = /id:\s*109,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `You are using acceptance test-driven development and designing test cases based on the following user story:|||Which test case is the MOST reasonable one to test AC3?`;

  code = code.replace(
    regex,
    `id: 109,\n      text: ${JSON.stringify(newText)},\n      image: paperCQ29,\n      options:`
  );
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q29 to use image.');
} else {
  console.log('Could not find Q29 to update.');
}
