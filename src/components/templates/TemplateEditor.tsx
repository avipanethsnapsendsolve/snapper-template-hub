
import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useTemplates } from "@/contexts/TemplateContext";
import { DynamicValueToolbar } from "./DynamicValueToolbar";

interface TemplateEditorProps {
  maxLength?: number;
}

export function TemplateEditor({ maxLength = 1000 }: TemplateEditorProps) {
  const { 
    selectedTemplate, 
    selectedTemplateContent, 
    updateSelectedTemplateContent,
    textAreaRef
  } = useTemplates();
  
  const [charCount, setCharCount] = useState(0);
  
  useEffect(() => {
    setCharCount(selectedTemplateContent.length);
  }, [selectedTemplateContent]);
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateSelectedTemplateContent(e.target.value);
    setCharCount(e.target.value.length);
  };

  const getCharCountClassname = () => {
    if (charCount >= maxLength) return "text-destructive font-medium";
    if (charCount >= maxLength * 0.9) return "text-amber-500 font-medium";
    return "text-zinc-400";
  };

  return (
    <div className="space-y-2 w-full">
      <DynamicValueToolbar />
      
      <div className="relative">
        <Textarea
          ref={textAreaRef}
          value={selectedTemplateContent}
          onChange={handleChange}
          placeholder="Please select a template to edit, or create a new template"
          disabled={!selectedTemplate}
          className={`min-h-[200px] resize-y rounded-md border ${
            !selectedTemplate ? 'bg-zinc-50 text-zinc-400' : 'bg-white'
          } ${
            selectedTemplate ? 'focus-visible:ring-amber-500 focus-visible:border-amber-500' : ''
          }`}
          maxLength={maxLength}
        />
        
        <div className="absolute bottom-2 right-3">
          <span className={`text-xs ${getCharCountClassname()}`}>
            {charCount} / {maxLength}
          </span>
        </div>
      </div>
    </div>
  );
}
