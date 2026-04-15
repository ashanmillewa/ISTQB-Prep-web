const fs = require('fs');

const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

code = code.replace(
  'text: "The navigation system software has been updated due to it suggesting routes that break traffic\\nlaws, such as driving the wrong way down one-way streets. Which of the following BEST describes\\nthe testing that will be performed?"',
  'text: "The navigation system software has been updated due to it suggesting routes that break traffic laws, such as driving the wrong way down one-way streets. Which of the following BEST describes the testing that will be performed?"'
);

fs.writeFileSync(path, code);
console.log("Removed line breaks from Q94 text");
