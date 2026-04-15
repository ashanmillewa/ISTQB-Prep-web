const fs = require('fs');
const path = 'client/src/pages/Exam.tsx';
let code = fs.readFileSync(path, 'utf8');

// The crash happens because currentQuestion is undefined.
// This happens if the user navigates to an exam paper that doesn't have any questions,
// or if currentQuestionIndex is out of bounds.

const target = `  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const handleSelectAnswer = (optionIndex: number, isMultiSelect: boolean = false) => {`;

const replacement = `  const totalQuestions = questions?.length || 0;
  const currentQuestion = questions?.[currentQuestionIndex];

  // Return early if no questions are loaded yet
  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center p-8 max-w-md w-full bg-card rounded-lg shadow-sm border border-border">
          <h2 className="text-xl font-bold mb-4">Paper Not Found</h2>
          <p className="text-muted-foreground mb-6">Sorry, we couldn't load the questions for this paper.</p>
          <Button onClick={() => setLocation('/papers')}>Return to Papers</Button>
        </div>
      </div>
    );
  }

  const handleSelectAnswer = (optionIndex: number, isMultiSelect: boolean = false) => {`;

if (code.includes('const currentQuestion = questions[currentQuestionIndex];')) {
  code = code.replace(target, replacement);
  fs.writeFileSync(path, code);
  console.log('Fixed undefined currentQuestion crash in Exam.tsx');
} else {
  console.log('Could not find target code in Exam.tsx');
}
