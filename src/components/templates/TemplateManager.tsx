
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TemplateSelector } from "./TemplateSelector";
import { TemplateEditor } from "./TemplateEditor";
import { TemplateCreateModal } from "./TemplateCreateModal";
import { TemplateDeleteDialog } from "./TemplateDeleteDialog";
import { useTemplates } from "@/contexts/TemplateContext";

export function TemplateManager() {
  const { saveTemplate, isDirty, selectedTemplate } = useTemplates();

  return (
    <Card className="shadow-sm border-zinc-200 bg-white rounded-lg w-full">
      <CardContent className="p-0">
        <div className="px-4 py-4 flex justify-between items-center">
          <div className="w-full grid grid-cols-12 gap-4">
            <div className="col-span-3 border-r border-zinc-100 pr-4">
              <div className="text-sm font-medium text-zinc-700 mb-4">Template editor</div>
            </div>
            
            <div className="col-span-9 pl-4">
              <div className="flex justify-between items-center">
                <TemplateSelector />
                <div className="flex space-x-2">
                  <TemplateCreateModal />
                  <TemplateDeleteDialog />
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="border-t border-zinc-100">
          <div className="w-full grid grid-cols-12 gap-4">
            <div className="col-span-3 border-r border-zinc-100 p-4">
              <div className="text-sm font-medium text-zinc-700">Template editor</div>
              <div className="text-xs text-zinc-500 mt-1">
                Create and edit template messages
              </div>
            </div>
            
            <div className="col-span-9 p-4">
              <TemplateEditor maxLength={1000} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
