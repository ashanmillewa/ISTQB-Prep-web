const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// Add import
if (!code.includes('import paperCQ31 from "../assets/images/paper-c-q31.png";')) {
  code = code.replace(
    /import paperCQ29 from "\.\.\/assets\/images\/paper-c-q29\.png";/,
    'import paperCQ29 from "../assets/images/paper-c-q29.png";\nimport paperCQ31 from "../assets/images/paper-c-q31.png";'
  );
}

const regex = /id:\s*111,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `At the beginning of each iteration, the team estimates the amount of work (in person-days) they will need to complete during the iteration. Let E(n) be the estimated amount of work for iteration n, and let A(n) be the actual amount of work done in iteration n. From the third iteration, the team uses the following estimation model based on extrapolation:|||What is the estimated amount of work for iteration #5?`;

  code = code.replace(
    regex,
    `id: 111,\n      text: ${JSON.stringify(newText)},\n      image: paperCQ31,\n      options:`
  );
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q31 to use image.');
}
