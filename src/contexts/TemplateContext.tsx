
import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  MessageTemplate, 
  TemplateHistoryEntry,
  DynamicValueType
} from "@/types/template";
import { 
  sampleTemplates, 
  createTemplate as createTemplateUtil,
  updateTemplate as updateTemplateUtil
} from "@/utils/templateUtils";
import { useToast } from "@/hooks/use-toast";

interface TemplateContextType {
  templates: MessageTemplate[];
  selectedTemplate: MessageTemplate | null;
  selectedTemplateContent: string;
  templateHistory: TemplateHistoryEntry[];
  setSelectedTemplate: (template: MessageTemplate | null) => void;
  updateSelectedTemplateContent: (content: string) => void;
  createTemplate: (name: string, content: string) => void;
  updateTemplate: (templateId: string, updates: Partial<MessageTemplate>) => void;
  deleteTemplate: (templateId: string) => void;
  saveTemplate: () => void;
  isDirty: boolean;
  insertDynamicValue: (valueType: DynamicValueType) => void;
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
}

const TemplateContext = createContext<TemplateContextType | null>(null);

export function TemplateProvider({ children }: { children: React.ReactNode }) {
  const [templates, setTemplates] = useState<MessageTemplate[]>(sampleTemplates);
  const [selectedTemplate, setSelectedTemplate] = useState<MessageTemplate | null>(null);
  const [selectedTemplateContent, setSelectedTemplateContent] = useState<string>("");
  const [isDirty, setIsDirty] = useState(false);
  const [templateHistory, setTemplateHistory] = useState<TemplateHistoryEntry[]>([]);
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  // When selected template changes, update content
  useEffect(() => {
    if (selectedTemplate) {
      setSelectedTemplateContent(selectedTemplate.content);
      setIsDirty(false);
    } else {
      setSelectedTemplateContent("");
      setIsDirty(false);
    }
  }, [selectedTemplate]);

  const updateSelectedTemplateContent = (content: string) => {
    setSelectedTemplateContent(content);
    setIsDirty(content !== (selectedTemplate?.content || ""));
  };

  const createTemplate = (name: string, content: string) => {
    const newTemplate = createTemplateUtil(name, content, "Current User");
    setTemplates([...templates, newTemplate]);
    setSelectedTemplate(newTemplate);
    setIsDirty(false);
    
    toast({
      title: "Template created",
      description: `"${name}" has been created successfully.`,
      variant: "default"
    });
  };

  const updateTemplate = (templateId: string, updates: Partial<MessageTemplate>) => {
    const templateIndex = templates.findIndex(t => t.id === templateId);
    if (templateIndex >= 0) {
      const updatedTemplate = updateTemplateUtil(
        templates[templateIndex],
        updates,
        "Current User"
      );
      
      const newTemplates = [...templates];
      newTemplates[templateIndex] = updatedTemplate;
      
      setTemplates(newTemplates);
      setSelectedTemplate(updatedTemplate);
      
      // Add to history if content changed
      if (updates.content) {
        const historyEntry: TemplateHistoryEntry = {
          id: crypto.randomUUID(),
          templateId,
          content: templates[templateIndex].content,
          modifiedAt: new Date(),
          modifiedBy: "Current User"
        };
        setTemplateHistory([...templateHistory, historyEntry]);
      }
      
      setIsDirty(false);
    }
  };

  const saveTemplate = () => {
    if (selectedTemplate && isDirty) {
      updateTemplate(selectedTemplate.id, { content: selectedTemplateContent });
      toast({
        title: "Template saved",
        description: `"${selectedTemplate.name}" has been updated successfully.`,
        variant: "default"
      });
    }
  };

  const deleteTemplate = (templateId: string) => {
    const templateToDelete = templates.find(t => t.id === templateId);
    if (!templateToDelete) return;
    
    const newTemplates = templates.filter(t => t.id !== templateId);
    setTemplates(newTemplates);
    
    if (selectedTemplate?.id === templateId) {
      setSelectedTemplate(null);
    }
    
    toast({
      title: "Template deleted",
      description: `"${templateToDelete.name}" has been deleted.`,
      variant: "default"
    });
  };

  const insertDynamicValue = (valueType: DynamicValueType) => {
    if (!textAreaRef.current) return;
    
    const textarea = textAreaRef.current;
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    
    const beforeText = selectedTemplateContent.substring(0, startPos);
    const afterText = selectedTemplateContent.substring(endPos);
    
    // Find the dynamic value
    const dynamicValues = {
      snapId: "[Snap ID]",
      referenceNumber: "[Reference Number]",
      snapperFullName: "[Snapper Name]",
      incidentTypeName: "[Incident Type]"
    };
    
    const valueToInsert = dynamicValues[valueType];
    
    // Create the new content
    const newContent = beforeText + valueToInsert + afterText;
    setSelectedTemplateContent(newContent);
    setIsDirty(true);
    
    // After React updates the DOM, set selection to after the inserted value
    setTimeout(() => {
      const newCursorPosition = startPos + valueToInsert.length;
      textarea.focus();
      textarea.setSelectionRange(newCursorPosition, newCursorPosition);
    }, 0);
  };

  const value = {
    templates,
    selectedTemplate,
    selectedTemplateContent,
    templateHistory,
    setSelectedTemplate,
    updateSelectedTemplateContent,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    saveTemplate,
    isDirty,
    insertDynamicValue,
    textAreaRef
  };

  return <TemplateContext.Provider value={value}>{children}</TemplateContext.Provider>;
}

export function useTemplates() {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error("useTemplates must be used within a TemplateProvider");
  }
  return context;
}
