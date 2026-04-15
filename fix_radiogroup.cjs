const fs = require('fs');

let qcContent = fs.readFileSync('./client/src/components/QuestionCard.tsx', 'utf8');

// Replace the div with role="radiogroup" back to a proper RadioGroup for single selection
// and use div only for multi-selection
qcContent = qcContent.replace(
  /<div className="space-y-2\.5 sm:space-y-3" role=\{isMultiSelect \? "group" : "radiogroup"\}>([\s\S]*?)<\/div>\s*<\/CardContent>/,
  `{isMultiSelect ? (
          <div className="space-y-2.5 sm:space-y-3" role="group">
            $1
          </div>
        ) : (
          <RadioGroup
            value={selectedOptions.length > 0 ? selectedOptions[0].toString() : ""}
            onValueChange={(val) => onSelectOption(parseInt(val), false)}
            className="space-y-2.5 sm:space-y-3"
          >
            $1
          </RadioGroup>
        )}
      </CardContent>`
);

fs.writeFileSync('./client/src/components/QuestionCard.tsx', qcContent);
console.log("RadioGroup fixed");
