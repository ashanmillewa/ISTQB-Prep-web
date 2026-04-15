const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// Add import
if (!code.includes('import paperCQ32 from "../assets/images/paper-c-q32.png";')) {
  code = code.replace(
    /import paperCQ31 from "\.\.\/assets\/images\/paper-c-q31\.png";/,
    'import paperCQ31 from "../assets/images/paper-c-q31.png";\nimport paperCQ32 from "../assets/images/paper-c-q32.png";'
  );
}

const regex = /id:\s*112,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `You are preparing a test execution schedule for executing seven test cases TC 1 to TC 7.|||Which test case should be executed sixth?`;

  code = code.replace(
    regex,
    `id: 112,\n      text: ${JSON.stringify(newText)},\n      image: paperCQ32,\n      options:`
  );
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q32 to use image.');
}
