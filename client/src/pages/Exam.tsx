import { useState, useMemo, useEffect } from "react";
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
  const [answers, setAnswers] = useState<Record<number, number | number[]>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [isExamActive, setIsExamActive] = useState(true);

  // Automatically scroll the mobile navigator when question changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const container = document.getElementById('mobile-nav-scroll');
      const btn = document.getElementById(`nav-btn-${currentQuestionIndex}`);
      if (container && btn) {
        // Calculate exact scroll position to center the button in the container
        const scrollLeft = btn.offsetLeft - (container.offsetWidth / 2) + (btn.offsetWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

  const totalQuestions = questions?.length || 0;
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

  const handleSelectAnswer = (optionIndex: number, isMultiSelect: boolean = false) => {
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
      const answer = answers[q.id];
      if (Array.isArray(answer) && q.correctAnswers) {
        // Multi-select question
        const isCorrect = answer.length === q.correctAnswers.length && 
                          q.correctAnswers.every(ans => answer.includes(ans));
        if (isCorrect) score++;
      } else if (answer === q.correctAnswer) {
        // Single select question
        score++;
      }
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
                    { name: "Unit 2: Testing Throughout the SDLC", range: [8, 14] },
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
              <div className="hidden sm:block text-xs sm:text-sm font-medium text-muted-foreground truncate">
                Question {currentQuestionIndex + 1}/{totalQuestions}
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 justify-between sm:justify-end flex-shrink-0 w-full sm:w-auto">
                <div className="hidden sm:flex items-center text-sm font-medium text-muted-foreground mr-2">
                  {currentPaper?.title || "Exam Paper"}
                </div>
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

            {/* Mobile Navigator (Visible only on small screens) - TOP */}
            <div className="mb-3 sm:mb-4 lg:hidden w-full flex flex-col items-center relative">
               <p className="text-xs font-medium text-primary mb-2 bg-primary/10 px-3 py-1 rounded-full">
                 Question {currentQuestionIndex + 1} of {totalQuestions}
               </p>
               <div className="w-full relative">
                 <div className="flex overflow-x-auto gap-1 pb-1.5 -mx-3 px-3 sm:-mx-0 sm:px-0 sm:gap-1.5 sm:pb-0 w-full scroll-smooth" id="mobile-nav-scroll">
                   {questions.map((q, idx) => {
                      // Calculate if this button should be scrolled into view
                      // We don't do it automatically here to avoid fighting user scroll,
                      // but we ensure the active one stands out visually
                      return (
                        <button
                          key={q.id}
                          id={`nav-btn-${idx}`}
                          onClick={() => {
                            setCurrentQuestionIndex(idx);
                            // Ensure the clicked button comes into view smoothly
                            document.getElementById(`nav-btn-${idx}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                          }}
                          className={`
                            flex-shrink-0 h-8 w-8 rounded-md text-xs font-semibold border transition-all relative
                            ${idx === currentQuestionIndex ? 'border-primary bg-primary text-primary-foreground ring-1 ring-primary ring-offset-1 scale-110 shadow-sm z-10' : 'border-border/50 bg-background hover:border-primary/50'}
                            ${answers[q.id] !== undefined && idx !== currentQuestionIndex ? 'bg-primary/10 border-primary/30' : ''}
                          `}
                          title={`Question ${idx + 1}`}
                        >
                          {idx + 1}
                          {/* Show the current question indicator specifically on this button */}
                          {idx === currentQuestionIndex && (
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-0.5 rounded whitespace-nowrap shadow-sm animate-in fade-in zoom-in after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-primary">
                              Current
                            </span>
                          )}
                        </button>
                      );
                   })}
                 </div>
                 
                 {/* Visual indicators to show there are more questions to scroll */}
                 <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none sm:hidden"></div>
                 <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none sm:hidden"></div>
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
            <div className="flex flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4 w-full">
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

          </main>
        </div>
      </div>
    </div>
    </div>
  );
}
