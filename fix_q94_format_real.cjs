const fs = require('fs');

const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// There might be some weird whitespace, so let's use regex to find and replace it
code = code.replace(
  /text:\s*"The navigation system software has been updated due to it suggesting routes that break traffic[\s\S]*?the testing that will be performed\?"/,
  'text: "The navigation system software has been updated due to it suggesting routes that break traffic laws, such as driving the wrong way down one-way streets. Which of the following BEST describes the testing that will be performed?"'
);

fs.writeFileSync(path, code);
console.log("Fixed Q94 line break with regex");
