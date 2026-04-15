const fs = require('fs');

const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// Add import
if (!code.includes('import paperCQ17')) {
    code = code.replace(
        'import paperCQ15 from "../assets/images/paper-c-q15.png";',
        'import paperCQ15 from "../assets/images/paper-c-q15.png";\nimport paperCQ17 from "../assets/images/paper-c-q17.png";'
    );
}

// Update Q97
const newText = `id: 97,
      text: "Given the following review types:|||Which of the following BEST matches the review types and the descriptions?",
      image: paperCQ17,`;

// Regex replacement
code = code.replace(
    /id:\s*97,\s*text:\s*"Given the following review types:[\s\S]*?Which of the following BEST matches the review types and the descriptions\?",/,
    newText
);

fs.writeFileSync(path, code);
console.log("Updated Question 97 to include the image and text with separator.");
