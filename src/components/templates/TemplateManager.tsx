
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TemplateSelector } from "./TemplateSelector";
import { TemplateEditor } from "./TemplateEditor";
import { TemplateCreateModal } from "./TemplateCreateModal";
import { TemplateDeleteDialog } from "./TemplateDeleteDialog";
import { useTemplates } from "@/contexts/TemplateContext";
import { Info } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

export function TemplateManager() {
  const { saveTemplate, isDirty, selectedTemplate } = useTemplates();

  return (
    <Card className="shadow-sm border-zinc-200 bg-white rounded-lg w-full">
      <CardContent className="p-0">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-3 border-r border-zinc-100 p-4">
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
    </Card>
  );
}
