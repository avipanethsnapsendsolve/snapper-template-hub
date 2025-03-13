
import React, { useState } from "react";
import { MessageTemplate } from "@/types/template";
import { ChevronDown, Check } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTemplates } from "@/contexts/TemplateContext";

export function TemplateSelector() {
  const { templates, selectedTemplate, setSelectedTemplate } = useTemplates();
  const [open, setOpen] = useState(false);

  const handleSelect = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setSelectedTemplate(template);
    }
  };

  return (
    <Select
      value={selectedTemplate?.id || ""}
      onValueChange={handleSelect}
    >
      <SelectTrigger 
        className="w-full border border-input bg-background rounded-md focus:ring-1 focus:ring-snapper-300 transition-all animate-in"
      >
        <SelectValue 
          placeholder="No template selected" 
          className="text-sm text-muted-foreground"
        />
      </SelectTrigger>
      <SelectContent 
        className="w-full max-h-[300px] bg-white/95 backdrop-blur-sm border border-border shadow-lg animate-scale-in"
      >
        <ScrollArea className="h-full max-h-[300px]">
          <SelectGroup>
            {templates.length === 0 ? (
              <div className="py-6 text-center text-muted-foreground">
                <p>No templates available</p>
              </div>
            ) : (
              templates.map((template) => (
                <SelectItem 
                  key={template.id} 
                  value={template.id}
                  className="py-2.5 px-3 cursor-pointer text-sm data-[state=checked]:bg-snapper-50 data-[state=checked]:text-snapper-900 data-[highlighted]:bg-snapper-50 data-[highlighted]:text-snapper-900 rounded-sm my-0.5 transition-colors"
                >
                  {template.name}
                </SelectItem>
              ))
            )}
          </SelectGroup>
        </ScrollArea>
      </SelectContent>
    </Select>
  );
}
