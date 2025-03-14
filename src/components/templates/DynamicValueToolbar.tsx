
import React from "react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { useTemplates } from "@/contexts/TemplateContext";
import { dynamicValues } from "@/utils/templateUtils";
import { Separator } from "@/components/ui/separator";

export function DynamicValueToolbar() {
  const { insertDynamicValue } = useTemplates();

  return (
    <div className="flex items-center mb-2">
      <div className="flex items-center text-sm text-zinc-500 mr-2">
        <span>Insert dynamic values:</span>
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="inline-flex ml-1">
                <Info className="h-3.5 w-3.5 text-zinc-400" />
              </button>
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
      
      <div className="flex flex-wrap items-center">
        {dynamicValues.map((value, index) => (
          <React.Fragment key={value.type}>
            {index > 0 && (
              <Separator orientation="vertical" className="mx-3 h-4" />
            )}
            <button
              type="button"
              onClick={() => insertDynamicValue(value.type)}
              className="text-xs text-black hover:text-zinc-700 transition-colors font-medium"
            >
              {value.label}
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
