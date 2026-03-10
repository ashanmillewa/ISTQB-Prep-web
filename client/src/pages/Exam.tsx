import { useState, useMemo } from "react";
import { useLocation, useSearch } from "wouter";
import { Navbar } from "@/components/Navbar";
import { QuestionCard } from "@/components/QuestionCard";
import { ExamTimer } from "@/components/ExamTimer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { samplePapers } from "@/data/mockData";
import { ChevronLeft, ChevronRight, Flag, LayoutGrid } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Exam() {
  const [_, setLocation] = useLocation();
  const searchString = useSearch();
  
  const paperId = useMemo(() => {
    const params = new URLSearchParams(searchString);
    return params.get("paper") || "paper-a";
  }, [searchString]);

  const currentPaper = useMemo(() => {
    return samplePapers.find(p => p.id === paperId) || samplePapers[0];
  }, [paperId]);

  const questions = currentPaper.questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [isExamActive, setIsExamActive] = useState(true);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const handleSelectAnswer = (optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  const toggleFlag = () => {
    const newFlags = new Set(flaggedQuestions);
    if (newFlags.has(currentQuestion.id)) {
      newFlags.delete(currentQuestion.id);
    } else {
      newFlags.add(currentQuestion.id);
    }
    setFlaggedQuestions(newFlags);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsExamActive(false);
    // Save results to local storage or pass via state? For now, let's use a URL query param or context
    // Ideally we'd use a proper state management, but for simplicity we'll pass via route state/mock
    
    // Calculate score
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) score++;
    });

    const results = {
      score,
      total: totalQuestions,
      answers,
      questions,
      paperId
    };
    
    localStorage.setItem('examResults', JSON.stringify(results));
    setLocation('/results');
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col w-full overflow-x-hidden">
      <Navbar />

      <div className="w-full px-2 sm:px-3 md:px-4 py-3 sm:py-4 md:py-6 lg:py-8 flex-grow">
        <div className="mx-auto max-w-7xl px-0 sm:px-2 md:px-4">
          <div className="grid lg:grid-cols-[260px_1fr] gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-start">
          
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block sticky top-24">
            <Card className="shadow-sm border-border/60">
              <CardContent className="p-4">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-semibold flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4" />
                    Question Navigator
                  </h3>
                  <span className="text-xs text-muted-foreground">{Object.keys(answers).length}/40 Answered</span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: "Unit 1: Fundamentals of Testing", range: [0, 8] },
                    { name: "Unit 2: Testing Throughout the S D L C", range: [8, 14] },
                    { name: "Unit 3: Static Testing", range: [14, 18] },
                    { name: "Unit 4: Test Analysis and Design", range: [18, 29] },
                    { name: "Unit 5: Managing the Test Activities", range: [29, 38] },
                    { name: "Unit 6: Test Tools", range: [38, 40] }
                  ].map((unit, uIdx) => (
                    <div key={uIdx} className="space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">{unit.name}</p>
                      <div className="grid grid-cols-5 gap-1.5">
                        {questions.slice(unit.range[0], unit.range[1]).map((q, qIdx) => {
                          const idx = unit.range[0] + qIdx;
                          const isAnswered = answers[q.id] !== undefined;
                          const isFlagged = flaggedQuestions.has(q.id);
                          const isCurrent = idx === currentQuestionIndex;
                          
                          return (
                            <button
                              key={q.id}
                              onClick={() => setCurrentQuestionIndex(idx)}
                              className={`
                                h-8 w-8 rounded text-xs font-medium transition-all relative
                                ${isCurrent ? 'ring-2 ring-primary ring-offset-2 z-10' : ''}
                                ${isAnswered ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}
                                ${isFlagged ? 'ring-1 ring-orange-400' : ''}
                              `}
                            >
                              {idx + 1}
                              {isFlagged && (
                                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-background" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-sm"></div> Answered
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-muted rounded-sm"></div> Unanswered
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div> Flagged
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="w-full min-w-0">
            {/* Header Info */}
            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-4 mb-3 sm:mb-4 md:mb-6">
              <div className="text-xs sm:text-sm font-medium text-muted-foreground truncate">
                Question {currentQuestionIndex + 1}/{totalQuestions}
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 justify-between sm:justify-end flex-shrink-0">
                <ExamTimer 
                  durationSeconds={60 * 60}
                  onTimeUp={handleSubmit}
                  isActive={isExamActive}
                />
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleFlag}
                  className={`text-xs sm:text-sm px-2.5 sm:px-4 py-1.5 sm:py-2 flex-shrink-0 ${flaggedQuestions.has(currentQuestion.id) ? "text-orange-500 border-orange-200 bg-orange-50" : ""}`}
                >
                  <Flag className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">{flaggedQuestions.has(currentQuestion.id) ? "Flagged" : "Flag"}</span>
                  <span className="sm:hidden">{flaggedQuestions.has(currentQuestion.id) ? "✓" : "⚑"}</span>
                </Button>
              </div>
            </div>

            {/* Question Card */}
            <div className="mb-4 sm:mb-5 md:mb-8 w-full min-w-0">
              <QuestionCard
                question={currentQuestion}
                selectedOption={answers[currentQuestion.id] ?? null}
                onSelectOption={handleSelectAnswer}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3 md:gap-4 w-full">
              <Button 
                variant="outline" 
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className="flex-1 sm:flex-none sm:w-28 md:w-32 text-xs sm:text-sm py-2 sm:py-2.5 whitespace-nowrap"
              >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-1.5 flex-shrink-0" />
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Prev</span>
              </Button>

              {currentQuestionIndex === totalQuestions - 1 ? (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="flex-1 sm:flex-none sm:w-28 md:w-32 text-xs sm:text-sm py-2 sm:py-2.5 whitespace-nowrap" variant="default">
                      <span className="hidden sm:inline">Submit</span>
                      <span className="sm:hidden">Submit</span>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Submit Exam?</AlertDialogTitle>
                      <AlertDialogDescription>
                        You have answered {Object.keys(answers).length} out of {totalQuestions} questions. 
                        Are you sure you want to finish the exam?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : (
                <Button 
                  onClick={handleNext}
                  className="flex-1 sm:flex-none sm:w-28 md:w-32 text-xs sm:text-sm py-2 sm:py-2.5 whitespace-nowrap"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-1.5 flex-shrink-0" />
                </Button>
              )}
            </div>
            
            {/* Mobile Navigator (Visible only on small screens) */}
            <div className="mt-4 sm:mt-5 md:mt-6 lg:hidden w-full">
               <p className="text-xs text-muted-foreground mb-2 truncate">Unit {Math.floor(currentQuestionIndex / 6) + 1} · Jump to question</p>
               <div className="flex overflow-x-auto gap-1 pb-1.5 -mx-2 px-2 sm:gap-1.5 sm:pb-2 sm:mx-0 sm:px-0">
                 {questions.map((q, idx) => (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`
                        flex-shrink-0 h-8 w-8 rounded-md text-xs font-semibold border transition-all
                        ${idx === currentQuestionIndex ? 'border-primary bg-primary text-primary-foreground ring-1 ring-primary ring-offset-1' : 'border-border/50 bg-background hover:border-primary/50'}
                        ${answers[q.id] !== undefined && idx !== currentQuestionIndex ? 'bg-primary/10 border-primary/30' : ''}
                      `}
                      title={`Question ${idx + 1}`}
                    >
                      {idx + 1}
                    </button>
                 ))}
               </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
