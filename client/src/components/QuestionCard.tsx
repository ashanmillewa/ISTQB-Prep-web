import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question } from "@/data/mockData";
import { motion } from "framer-motion";

interface QuestionCardProps {
  question: Question;
  selectedOption: number | number[] | null;
  onSelectOption: (optionIndex: number, isMultiSelect?: boolean) => void;
}

export function QuestionCard({ question, selectedOption, onSelectOption }: QuestionCardProps) {
  const isMultiSelect = (question.correctAnswers?.length ?? 0) > 1;
  const selectedOptions = Array.isArray(selectedOption) ? selectedOption : (selectedOption !== null ? [selectedOption] : []);
  return (
    <Card className="w-full shadow-sm border-border/60 overflow-hidden">
      <CardContent className="p-3 sm:p-5 md:p-8">
        <div className="mb-3 sm:mb-4 inline-block">
          <span className="text-[9px] sm:text-xs font-semibold uppercase tracking-wide text-muted-foreground bg-muted px-2.5 py-1 rounded-md inline-block">
            {question.category}
          </span>
        </div>
        
        <h2 className="text-sm sm:text-base md:text-xl font-['Calibri',_'Segoe_UI',_'Arial',_sans-serif] font-medium leading-snug sm:leading-normal md:leading-relaxed text-foreground mb-2 break-words whitespace-pre-wrap">
          {question.text.includes("|||") ? question.text.split("|||")[0].trim() : question.text}
        </h2>
        
        {question.image && (
          <div className="mb-3 sm:mb-5 md:mb-8 rounded-lg overflow-hidden border border-border/40 bg-white p-1 sm:p-2 w-full">
            <img 
              src={question.image} 
              alt="Question illustration" 
              className="w-full h-auto mx-auto object-contain"
            />
          </div>
        )}

        {question.text.includes("|||") && (
          <h2 className="text-sm sm:text-base md:text-xl font-['Calibri',_'Segoe_UI',_'Arial',_sans-serif] font-medium leading-snug sm:leading-normal md:leading-relaxed text-foreground mb-2 break-words whitespace-pre-wrap">
            {question.text.split("|||")[1].trim()}
          </h2>
        )}
        
        <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-4 sm:mb-6 md:mb-8 italic">
          {isMultiSelect ? "Select TWO options." : "Select ONE option."}
        </p>

        {isMultiSelect ? (
          <div className="space-y-2.5 sm:space-y-3" role="group">
            
          {question.options.map((option, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="w-full"
            >
              <div
                className={`flex items-start gap-2.5 sm:gap-3 rounded-lg border p-3 sm:p-4 cursor-pointer transition-all duration-200 min-h-[52px] sm:min-h-[60px] ${
                  selectedOptions.includes(index) 
                    ? "border-primary bg-primary/5 ring-1 ring-primary/20" 
                    : "border-border hover:border-primary/50 hover:bg-secondary/30"
                }`}
                onClick={() => onSelectOption(index, isMultiSelect)}
              >
                <div className="flex-shrink-0 pt-0.5 sm:pt-1">
                  {isMultiSelect ? (
                    <div className={`mt-0.5 h-4 w-4 rounded-sm border border-primary flex items-center justify-center ${selectedOptions.includes(index) ? 'bg-primary text-primary-foreground' : 'bg-transparent'}`}>
                      {selectedOptions.includes(index) && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                    </div>
                  ) : (
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-0.5" />
                  )}
                </div>
                <Label 
                  htmlFor={`option-${index}`}
                  className="flex-1 cursor-pointer text-xs sm:text-sm md:text-base font-['Calibri',_'Segoe_UI',_'Arial',_sans-serif] font-normal leading-normal sm:leading-snug break-words text-foreground"
                >
                  <span className="mr-2">{String.fromCharCode(97 + index)})</span>{option}
                </Label>
              </div>
            </motion.div>
          ))}
        
          </div>
        ) : (
          <RadioGroup
            value={selectedOptions.length > 0 ? selectedOptions[0].toString() : ""}
            onValueChange={(val) => onSelectOption(parseInt(val), false)}
            className="space-y-2.5 sm:space-y-3"
          >
            
          {question.options.map((option, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="w-full"
            >
              <div
                className={`flex items-start gap-2.5 sm:gap-3 rounded-lg border p-3 sm:p-4 cursor-pointer transition-all duration-200 min-h-[52px] sm:min-h-[60px] ${
                  selectedOptions.includes(index) 
                    ? "border-primary bg-primary/5 ring-1 ring-primary/20" 
                    : "border-border hover:border-primary/50 hover:bg-secondary/30"
                }`}
                onClick={() => onSelectOption(index, isMultiSelect)}
              >
                <div className="flex-shrink-0 pt-0.5 sm:pt-1">
                  {isMultiSelect ? (
                    <div className={`mt-0.5 h-4 w-4 rounded-sm border border-primary flex items-center justify-center ${selectedOptions.includes(index) ? 'bg-primary text-primary-foreground' : 'bg-transparent'}`}>
                      {selectedOptions.includes(index) && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                    </div>
                  ) : (
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-0.5" />
                  )}
                </div>
                <Label 
                  htmlFor={`option-${index}`}
                  className="flex-1 cursor-pointer text-xs sm:text-sm md:text-base font-['Calibri',_'Segoe_UI',_'Arial',_sans-serif] font-normal leading-normal sm:leading-snug break-words text-foreground"
                >
                  <span className="mr-2">{String.fromCharCode(97 + index)})</span>{option}
                </Label>
              </div>
            </motion.div>
          ))}
        
          </RadioGroup>
        )}
      </CardContent>
    </Card>
  );
}
