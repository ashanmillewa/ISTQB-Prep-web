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
    <Card className="w-full shadow-sm border-border/60">
      <CardContent className="p-4 sm:p-6 md:p-8">
        <div className="mb-3 sm:mb-4">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded-md">
            {question.category}
          </span>
        </div>
        
        <h2 className="text-base sm:text-lg md:text-2xl font-serif font-medium leading-tight sm:leading-relaxed text-foreground mb-4 sm:mb-6 md:mb-8">
          {question.text}
        </h2>

        {question.image && (
          <div className="mb-4 sm:mb-6 md:mb-8 rounded-lg overflow-hidden border border-border/40 bg-white p-1 sm:p-2">
            <img 
              src={question.image} 
              alt="Question illustration" 
              className="max-w-full h-auto mx-auto"
            />
          </div>
        )}

        <RadioGroup
          value={selectedOption !== null ? selectedOption.toString() : ""}
          onValueChange={(val) => onSelectOption(parseInt(val))}
          className="space-y-2 sm:space-y-3"
        >
          {question.options.map((option, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div
                className={`flex items-start space-x-2 sm:space-x-3 rounded-lg border p-3 sm:p-4 cursor-pointer transition-all duration-200 hover:bg-secondary/50 ${
                  selectedOption === index 
                    ? "border-primary bg-primary/5 ring-1 ring-primary/20" 
                    : "border-border"
                }`}
                onClick={() => onSelectOption(index)}
              >
                <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1 sm:mt-0" />
                <Label 
                  htmlFor={`option-${index}`}
                  className="flex-grow cursor-pointer text-sm sm:text-base font-normal leading-snug sm:leading-normal"
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
