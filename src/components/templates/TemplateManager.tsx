
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
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
    <Card className="shadow-sm border-border bg-white/80 backdrop-blur-sm w-full animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg">Message templates</CardTitle>
            <CardDescription>
              Create and manage message templates for communication
            </CardDescription>
          </div>
          
          <div className="flex space-x-2">
            <Button
              onClick={saveTemplate}
              disabled={!isDirty}
              className={`transition-all ${
                isDirty 
                  ? "bg-snapper-600 hover:bg-snapper-700 text-white" 
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <Save className="w-4 h-4 mr-1" /> Save
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-sm font-medium">Template editor</div>
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
