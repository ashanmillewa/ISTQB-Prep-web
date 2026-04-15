const fs = require('fs');

let qcContent = fs.readFileSync('./client/src/components/QuestionCard.tsx', 'utf8');

// Add "Select ONE option." or "Select TWO options." below the question text
qcContent = qcContent.replace(
  /<h2 className="text-sm sm:text-base md:text-2xl font-serif font-medium leading-snug sm:leading-normal md:leading-relaxed text-foreground mb-3 sm:mb-5 md:mb-8 break-words">\s*\{question\.text\}\s*<\/h2>/,
  `<h2 className="text-sm sm:text-base md:text-2xl font-serif font-medium leading-snug sm:leading-normal md:leading-relaxed text-foreground mb-2 break-words">
          {question.text}
        </h2>
        <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-4 sm:mb-6 md:mb-8 italic">
          {isMultiSelect ? "Select TWO options." : "Select ONE option."}
        </p>`
);

fs.writeFileSync('./client/src/components/QuestionCard.tsx', qcContent);
console.log("QuestionCard updated");
