const fs = require('fs');

// Update QuestionCard.tsx
let qcContent = fs.readFileSync('./client/src/components/QuestionCard.tsx', 'utf8');

// Change selectedOption type
qcContent = qcContent.replace(
  'selectedOption: number | null;',
  'selectedOption: number | number[] | null;'
);

// Change onSelectOption type
qcContent = qcContent.replace(
  'onSelectOption: (optionIndex: number) => void;',
  'onSelectOption: (optionIndex: number, isMultiSelect?: boolean) => void;'
);

// Add isMultiSelect detection
qcContent = qcContent.replace(
  'export function QuestionCard({ question, selectedOption, onSelectOption }: QuestionCardProps) {',
  'export function QuestionCard({ question, selectedOption, onSelectOption }: QuestionCardProps) {\n  const isMultiSelect = question.text.includes("TWO");\n  const selectedOptions = Array.isArray(selectedOption) ? selectedOption : (selectedOption !== null ? [selectedOption] : []);'
);

// Update rendering of options
qcContent = qcContent.replace(
  /className=\{`flex items-start[\s\S]*?selectedOption === index[\s\S]*?\?\s*"border-primary bg-primary\/5 ring-1 ring-primary\/20"[\s\S]*?:\s*"border-border hover:border-primary\/50 hover:bg-secondary\/30"[\s\S]*?\}`\}/,
  'className={`flex items-start gap-2.5 sm:gap-3 rounded-lg border p-3 sm:p-4 cursor-pointer transition-all duration-200 min-h-[52px] sm:min-h-[60px] ${\n                  selectedOptions.includes(index) \n                    ? "border-primary bg-primary/5 ring-1 ring-primary/20" \n                    : "border-border hover:border-primary/50 hover:bg-secondary/30"\n                }`}'
);

qcContent = qcContent.replace(
  /onClick=\{\(\) => onSelectOption\(index\)\}/,
  'onClick={() => onSelectOption(index, isMultiSelect)}'
);

qcContent = qcContent.replace(
  /<RadioGroupItem value=\{index.toString\(\)\} id=\{`option-\$\{index\}`\} className="mt-0.5" \/>/,
  `{isMultiSelect ? (
                    <div className={\`mt-0.5 h-4 w-4 rounded-sm border border-primary flex items-center justify-center \${selectedOptions.includes(index) ? 'bg-primary text-primary-foreground' : 'bg-transparent'}\`}>
                      {selectedOptions.includes(index) && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                    </div>
                  ) : (
                    <RadioGroupItem value={index.toString()} id={\`option-\${index}\`} className="mt-0.5" />
                  )}`
);

// Remove RadioGroup wrapper logic that forces single selection
qcContent = qcContent.replace(
  /<RadioGroup[\s\S]*?value=\{selectedOption !== null \? selectedOption\.toString\(\) : ""\}[\s\S]*?onValueChange=\{\(val\) => onSelectOption\(parseInt\(val\)\)\}[\s\S]*?className="space-y-2.5 sm:space-y-3"[\s\S]*?>/,
  '<div className="space-y-2.5 sm:space-y-3" role={isMultiSelect ? "group" : "radiogroup"}>'
);

qcContent = qcContent.replace(
  /<\/RadioGroup>/,
  '</div>'
);

// We still need RadioGroup for the import but we'll use our own logic for multi-select
fs.writeFileSync('./client/src/components/QuestionCard.tsx', qcContent);

// Update Exam.tsx
let eContent = fs.readFileSync('./client/src/pages/Exam.tsx', 'utf8');

eContent = eContent.replace(
  'const [answers, setAnswers] = useState<Record<number, number>>({});',
  'const [answers, setAnswers] = useState<Record<number, number | number[]>>({});'
);

eContent = eContent.replace(
  /const handleSelectAnswer = \(optionIndex: number\) => \{[\s\S]*?setAnswers\(prev => \(\{[\s\S]*?\.\.\.prev,[\s\S]*?\[currentQuestion\.id\]: optionIndex[\s\S]*?\}\)\);[\s\S]*?\};/,
  `const handleSelectAnswer = (optionIndex: number, isMultiSelect: boolean = false) => {
    setAnswers(prev => {
      const currentAnswer = prev[currentQuestion.id];
      
      if (isMultiSelect) {
        let newAnswer: number[] = [];
        if (Array.isArray(currentAnswer)) {
          if (currentAnswer.includes(optionIndex)) {
            newAnswer = currentAnswer.filter(idx => idx !== optionIndex);
          } else {
            newAnswer = [...currentAnswer, optionIndex];
            // If they select more than 2, remove the oldest one (assuming questions ask for "TWO")
            if (newAnswer.length > 2) {
              newAnswer.shift();
            }
          }
        } else if (currentAnswer !== undefined) {
          newAnswer = [currentAnswer, optionIndex];
        } else {
          newAnswer = [optionIndex];
        }
        return { ...prev, [currentQuestion.id]: newAnswer };
      }
      
      return { ...prev, [currentQuestion.id]: optionIndex };
    });
  };`
);

// Update scoring logic in Exam.tsx
eContent = eContent.replace(
  /if \(answers\[q\.id\] === q\.correctAnswer\) score\+\+;/,
  `const answer = answers[q.id];
      if (Array.isArray(answer) && q.correctAnswers) {
        // Multi-select question
        const isCorrect = answer.length === q.correctAnswers.length && 
                          q.correctAnswers.every(ans => answer.includes(ans));
        if (isCorrect) score++;
      } else if (answer === q.correctAnswer) {
        // Single select question
        score++;
      }`
);

fs.writeFileSync('./client/src/pages/Exam.tsx', eContent);
console.log("Components updated");
