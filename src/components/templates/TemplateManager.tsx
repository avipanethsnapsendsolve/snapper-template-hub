
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { TemplateSelector } from "./TemplateSelector";
import { TemplateEditor } from "./TemplateEditor";
import { TemplateCreateModal } from "./TemplateCreateModal";
import { TemplateDeleteDialog } from "./TemplateDeleteDialog";
import { useTemplates } from "@/contexts/TemplateContext";

export function TemplateManager() {
  const { saveTemplate, isDirty, selectedTemplate } = useTemplates();

  return (
    <Card className="shadow-sm border-zinc-200 bg-white w-full">
      <CardHeader className="pb-3 border-b border-zinc-100">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg font-medium text-zinc-900">Message templates</CardTitle>
            <CardDescription className="text-zinc-500 text-sm">
              Create and manage message templates for communication
            </CardDescription>
          </div>
          
          <div className="flex space-x-2">
            <Button
              onClick={saveTemplate}
              disabled={!isDirty}
              className={`transition-all ${
                isDirty 
                  ? "bg-amber-500 hover:bg-amber-600 text-white" 
                  : "bg-zinc-100 text-zinc-400"
              }`}
              size="sm"
            >
              <Save className="w-4 h-4 mr-1.5" /> Save
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-sm font-medium text-zinc-700">Template editor</div>
              <div className="flex space-x-2">
                <TemplateDeleteDialog />
                <TemplateCreateModal />
              </div>
            </div>
            
            <div className="space-y-4">
              <TemplateSelector />
              <TemplateEditor maxLength={1000} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
