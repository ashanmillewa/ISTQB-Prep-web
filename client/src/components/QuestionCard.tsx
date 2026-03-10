import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question } from "@/data/mockData";
import { motion } from "framer-motion";

interface QuestionCardProps {
  question: Question;
  selectedOption: number | null;
  onSelectOption: (optionIndex: number) => void;
}

export function QuestionCard({ question, selectedOption, onSelectOption }: QuestionCardProps) {
  return (
    <Card className="w-full shadow-sm border-border/60 overflow-hidden">
      <CardContent className="p-3 sm:p-5 md:p-8">
        <div className="mb-3 sm:mb-4 inline-block">
          <span className="text-[9px] sm:text-xs font-semibold uppercase tracking-wide text-muted-foreground bg-muted px-2.5 py-1 rounded-md inline-block">
            {question.category}
          </span>
        </div>
        
        <h2 className="text-sm sm:text-base md:text-2xl font-serif font-medium leading-snug sm:leading-normal md:leading-relaxed text-foreground mb-3 sm:mb-5 md:mb-8 break-words">
          {question.text}
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

        <RadioGroup
          value={selectedOption !== null ? selectedOption.toString() : ""}
          onValueChange={(val) => onSelectOption(parseInt(val))}
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
                  selectedOption === index 
                    ? "border-primary bg-primary/5 ring-1 ring-primary/20" 
                    : "border-border hover:border-primary/50 hover:bg-secondary/30"
                }`}
                onClick={() => onSelectOption(index)}
              >
                <div className="flex-shrink-0 pt-0.5 sm:pt-1">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-0.5" />
                </div>
                <Label 
                  htmlFor={`option-${index}`}
                  className="flex-1 cursor-pointer text-xs sm:text-sm md:text-base font-normal leading-normal sm:leading-snug break-words text-foreground"
                >
                  {option}
                </Label>
              </div>
            </motion.div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
