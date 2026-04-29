import { useEffect, useState, useMemo } from "react";
import { Link, useLocation, useSearch } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, XCircle, AlertCircle, RotateCcw, Home as HomeIcon } from "lucide-react";
import { Question, samplePapers } from "@/data/mockData";

interface ExamResult {
  score: number;
  total: number;
  answers: Record<number, number | number[]>;
  questions: Question[];
  paperId?: string;
}

export default function Results() {
  const [results, setResults] = useState<ExamResult | null>(null);
  const [_, setLocation] = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem('examResults');
    if (!stored) {
      setLocation('/');
      return;
    }
    setResults(JSON.parse(stored));
  }, [setLocation]);

  if (!results) return null;

  const percentage = Math.round((results.score / results.total) * 100);
  const isPassed = percentage >= 50; // ISTQB Pass mark is 65%
  const paperLink = results.paperId ? `/exam?paper=${results.paperId}` : '/exam';

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Exam Results</h1>
          <p className="text-muted-foreground">
            Here is a detailed breakdown of your performance.
          </p>
        </div>

        {/* Score Card */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className={`border-l-4 ${isPassed ? 'border-l-green-500' : 'border-l-destructive'} shadow-md`}>
            <CardHeader>
              <CardTitle>Overall Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-bold">{percentage}%</span>
                <span className="text-muted-foreground mb-1">/ 100%</span>
              </div>
              <Progress value={percentage} className={`h-3 mb-4 ${isPassed ? "bg-green-100 [&>div]:bg-green-500" : "bg-red-100 [&>div]:bg-red-500"}`} />
              <div className="flex items-center gap-2 font-medium">
                {isPassed ? (
                  <span className="text-green-600 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Passed
                  </span>
                ) : (
                  <span className="text-destructive flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Failed
                  </span>
                )}
                <span className="text-muted-foreground font-normal">
                  ({results.score} out of {results.total} correct)
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {isPassed 
                  ? "Great job! You have demonstrated a solid understanding of the material. Review any incorrect answers to achieve perfection." 
                  : "Don't give up. The ISTQB exam requires precise understanding of terminology. Focus on the areas where you missed questions."}
              </p>
              <div className="flex gap-4">
                <Link href={paperLink}>
                  <Button className="w-full">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Retake Exam
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    <HomeIcon className="w-4 h-4 mr-2" />
                    Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Breakdown */}
        <h2 className="text-xl font-bold mb-6">Question Analysis</h2>
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {results.questions.map((q, idx) => {
              const userAnswer = results.answers[q.id];
              const isCorrect = Array.isArray(userAnswer) && q.correctAnswers 
                ? userAnswer.length === q.correctAnswers.length && q.correctAnswers.every(ans => userAnswer.includes(ans))
                : userAnswer === q.correctAnswer;
              const isSkipped = userAnswer === undefined;

              return (
                <AccordionItem key={q.id} value={`item-${q.id}`} className="border rounded-lg mb-4 px-2">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-start gap-4 text-left w-full">
                      <div className="mt-1">
                        {isCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
                        {!isCorrect && !isSkipped && <XCircle className="w-5 h-5 text-destructive" />}
                        {isSkipped && <AlertCircle className="w-5 h-5 text-orange-400" />}
                      </div>
                      <div className="flex-grow">
                        <span className="text-sm font-medium text-muted-foreground mr-2">Q{idx + 1}.</span>
                        <span className="font-['Calibri',_'Segoe_UI',_'Arial',_sans-serif] font-medium text-foreground whitespace-pre-wrap">{q.text}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-11 pr-4 pb-6">
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        {q.options.map((opt, optIdx) => (
                          <div 
                            key={optIdx}
                            className={`p-3 rounded-md text-sm border flex items-center justify-between
                              ${(q.correctAnswers?.includes(optIdx) || (!q.correctAnswers && optIdx === q.correctAnswer)) ? "bg-green-50 border-green-200 text-green-900" : ""}
                              ${((Array.isArray(userAnswer) ? userAnswer.includes(optIdx) : optIdx === userAnswer) && !(q.correctAnswers?.includes(optIdx) || (!q.correctAnswers && optIdx === q.correctAnswer))) ? "bg-red-50 border-red-200 text-red-900" : ""}
                              ${!((q.correctAnswers?.includes(optIdx) || (!q.correctAnswers && optIdx === q.correctAnswer))) && !(Array.isArray(userAnswer) ? userAnswer.includes(optIdx) : optIdx === userAnswer) ? "bg-background border-border" : ""}
                            `}
                          >
                            <span className="font-['Calibri',_'Segoe_UI',_'Arial',_sans-serif] whitespace-pre-wrap"><span className="mr-2">{String.fromCharCode(97 + optIdx)})</span>{opt}</span>
                            {(q.correctAnswers?.includes(optIdx) || (!q.correctAnswers && optIdx === q.correctAnswer)) && <span className="text-xs font-bold text-green-600 uppercase">Correct Answer</span>}
                            {((Array.isArray(userAnswer) ? userAnswer.includes(optIdx) : optIdx === userAnswer) && !(q.correctAnswers?.includes(optIdx) || (!q.correctAnswers && optIdx === q.correctAnswer))) && <span className="text-xs font-bold text-red-600 uppercase">Your Answer</span>}
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-100 rounded-md p-4 text-sm text-blue-900">
                        <span className="font-bold block mb-3">Explanation:</span>
                        <div className="space-y-2">
                          {q.explanation.split(/(?=[a-e]\) )/).map((part, index) => {
                            const trimmed = part.trim();
                            if (!trimmed) return null;
                            const optionMatch = trimmed.match(/^([a-e]\) )(.*)/s);
                            if (!optionMatch) {
                              return (
                                <p key={index} className="text-blue-800 mb-3 leading-relaxed">
                                  {trimmed}
                                </p>
                              );
                            }
                            const label = optionMatch[1];
                            const body = optionMatch[2];
                            const isCorrect = /is correct\b/i.test(body.slice(0, 40));
                            const isNotCorrect = /is not correct\b/i.test(body.slice(0, 40));
                            return (
                              <div key={index} className={`flex gap-2 rounded px-2 py-1.5 ${isCorrect ? "bg-green-100 text-green-900" : isNotCorrect ? "bg-white/60 text-blue-800" : "text-blue-800"}`}>
                                <span className="font-bold shrink-0">{label}</span>
                                <span className="leading-relaxed">{body}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        Category: <span className="font-medium">{q.category}</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
