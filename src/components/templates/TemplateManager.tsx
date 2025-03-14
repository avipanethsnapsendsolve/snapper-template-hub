
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TemplateSelector } from "./TemplateSelector";
import { TemplateEditor } from "./TemplateEditor";
import { TemplateCreateModal } from "./TemplateCreateModal";
import { TemplateDeleteDialog } from "./TemplateDeleteDialog";
import { useTemplates } from "@/contexts/TemplateContext";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TemplateManager() {
  const { saveTemplate, isDirty, selectedTemplate } = useTemplates();
  const [activeTab, setActiveTab] = useState("editor");

  return (
    <Card className="shadow-sm border-zinc-200 bg-white rounded-lg w-full">
      <CardContent className="p-0">
        <div className="px-4 py-4 flex justify-between items-center">
          <div className="text-sm font-medium text-zinc-700">Template manager</div>
          <div className="flex space-x-2">
            <TemplateSelector />
            <TemplateCreateModal />
            <TemplateDeleteDialog />
          </div>
        </div>
      
        <div className="border-t border-zinc-100 px-4">
          <Tabs defaultValue="editor" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-transparent p-0 h-auto w-full justify-start border-b border-zinc-100">
              <TabsTrigger 
                value="editor" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:text-zinc-900 data-[state=inactive]:text-zinc-500 rounded-none px-4 py-2 font-medium"
              >
                Editor
              </TabsTrigger>
              <TabsTrigger 
                value="preview" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:text-zinc-900 data-[state=inactive]:text-zinc-500 rounded-none px-4 py-2 font-medium"
              >
                Preview
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="p-4">
          <TemplateEditor maxLength={1000} />
        </div>
      </CardContent>
    </Card>
  );
}
