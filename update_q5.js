const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// Ensure image is imported
if (!code.includes('import paperCQ5 from "../assets/images/paper-c-q5.png";')) {
  code = code.replace(
    /import paperCQ17 from "\.\.\/assets\/images\/paper-c-q17\.png";/,
    'import paperCQ17 from "../assets/images/paper-c-q17.png";\nimport paperCQ5 from "../assets/images/paper-c-q5.png";'
  );
}

// Ensure the text and image are properly set.
// The previous script might not have matched the exact text due to formatting differences.
const regex = /id:\s*85,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  code = code.replace(
    regex,
    `id: 85,
      text: "Which of the following BEST shows the testware produced by the activities?|||",
      image: paperCQ5,
      options:`
  );
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q5 to use the new image.');
} else {
  console.log('Could not find Q5 to update.');
}
