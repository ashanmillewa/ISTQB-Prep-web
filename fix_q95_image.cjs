const fs = require('fs');

const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// Add import
if (!code.includes('import paperCQ15')) {
    code = code.replace(
        '// Images for Paper C',
        '// Images for Paper C\nimport paperCQ15 from "../assets/images/paper-c-q15.png";'
    );
    // Fallback if the comment doesn't exist
    if (!code.includes('import paperCQ15')) {
        code = code.replace(
            'export const questionsData',
            'import paperCQ15 from "../assets/images/paper-c-q15.png";\n\nexport const questionsData'
        );
    }
}

// Update Q95
code = code.replace(
    /id:\s*95,\s*text:\s*"Given the following example defects:[\s\S]*?Which of the following BEST identifies example defects that could be found by static testing \(rather\\nthan dynamic testing\)\?",/,
    'id: 95,\n      text: "Given the following example defects:|||Which of the following BEST identifies example defects that could be found by static testing (rather than dynamic testing)?",\n      image: paperCQ15,'
);

fs.writeFileSync(path, code);
console.log("Updated Question 95 to include the image and text with separator.");
