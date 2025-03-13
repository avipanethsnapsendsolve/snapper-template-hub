
import React from "react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { useTemplates } from "@/contexts/TemplateContext";
import { DynamicValueType } from "@/types/template";
import { dynamicValues } from "@/utils/templateUtils";

export function DynamicValueToolbar() {
  const { insertDynamicValue } = useTemplates();

  return (
    <div className="flex items-center space-x-1 my-2">
      <div className="flex items-center text-sm text-muted-foreground mr-1">
        <span>Insert dynamic values:</span>
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6 ml-1">
                <Info className="h-3.5 w-3.5 text-muted-foreground" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-white/90 backdrop-blur-sm p-3 max-w-sm">
              <p className="text-xs">
                Dynamic values will be replaced with actual data when messages are sent.
                Click on a tag to insert it at the cursor position.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="flex flex-wrap gap-1">
        {dynamicValues.map((value) => (
          <DynamicValueButton
            key={value.type}
            type={value.type}
            label={value.label}
            description={value.description}
            onClick={() => insertDynamicValue(value.type)}
          />
        ))}
      </div>
    </div>
  );
}

interface DynamicValueButtonProps {
  type: DynamicValueType;
  label: string;
  description: string;
  onClick: () => void;
}

function DynamicValueButton({ type, label, description, onClick }: DynamicValueButtonProps) {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={onClick}
            className="dynamic-tag animate-in"
          >
            {label}
          </button>
        </TooltipTrigger>
        <TooltipContent className="bg-white/90 backdrop-blur-sm p-2">
          <p className="text-xs">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
