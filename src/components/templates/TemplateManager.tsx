
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TemplateSelector } from "./TemplateSelector";
import { TemplateEditor } from "./TemplateEditor";
import { TemplateCreateModal } from "./TemplateCreateModal";
import { TemplateDeleteDialog } from "./TemplateDeleteDialog";
import { TemplateLengthWarningDialog } from "./TemplateLengthWarningDialog";
import { useTemplates } from "@/contexts/TemplateContext";
import { Info } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

export function TemplateManager() {
  const { saveTemplate, isDirty, selectedTemplate, templates } = useTemplates();
  const [lengthWarningOpen, setLengthWarningOpen] = useState(false);
  
  const handleSave = () => {
    // Check if any template exceeds the character limit
    const hasExcessiveTemplate = templates.some(template => template.content.length > 1000);
    
    if (hasExcessiveTemplate) {
      setLengthWarningOpen(true);
      return;
    }
    
    // If we get here, there are no excessive templates, so we can save
    saveTemplate();
  };

  return (
    <Card className="shadow-none border-zinc-200 bg-white rounded-lg w-full">
      <CardContent className="p-0">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-3 border-r border-zinc-100 bg-zinc-50 p-4">
            <div className="flex items-center mb-4">
              <div className="text-sm font-medium text-zinc-700 mr-1">Template editor</div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex text-zinc-400 hover:text-zinc-600">
                      <Info size={16} />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-zinc-800 text-white text-xs">
                    Create and edit template messages
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            {isDirty && selectedTemplate && (
              <Button 
                onClick={handleSave}
                className="w-full bg-orange-500 hover:bg-orange-600 text-black text-sm mt-4"
                size="sm"
              >
                Save changes
              </Button>
            )}
          </div>
          
          <div className="col-span-9 p-4">
            <div className="flex justify-between items-center">
              <TemplateSelector />
              <div className="flex space-x-2">
                <TemplateCreateModal />
                <TemplateDeleteDialog />
              </div>
            </div>
            
            <div className="mt-4">
              <TemplateEditor maxLength={1000} />
            </div>
          </div>
        </div>
      </CardContent>
      
      <TemplateLengthWarningDialog 
        open={lengthWarningOpen} 
        onOpenChange={setLengthWarningOpen} 
      />
    </Card>
  );
}
