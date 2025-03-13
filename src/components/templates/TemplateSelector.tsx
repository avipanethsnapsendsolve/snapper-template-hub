
import React from "react";
import { ChevronDown } from "lucide-react";
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
        className="w-full h-10 px-3 py-2 text-sm rounded-md border border-zinc-200 focus:ring-amber-500 focus:border-amber-500 shadow-sm bg-white"
      >
        <SelectValue 
          placeholder="No template selected" 
          className="text-zinc-500"
        />
      </SelectTrigger>
      <SelectContent 
        className="w-full max-h-[300px] border border-zinc-200 shadow-md rounded-md bg-white"
      >
        <ScrollArea className="h-full max-h-[300px]">
          <SelectGroup>
            {templates.length === 0 ? (
              <div className="py-6 text-center text-zinc-500">
                <p>No templates available</p>
              </div>
            ) : (
              templates.map((template) => (
                <SelectItem 
                  key={template.id} 
                  value={template.id}
                  className="py-2.5 px-3 cursor-pointer text-sm text-zinc-800 data-[state=checked]:bg-amber-50 data-[state=checked]:text-amber-900 data-[highlighted]:bg-amber-50 data-[highlighted]:text-amber-900 rounded-sm my-0.5 transition-colors"
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
