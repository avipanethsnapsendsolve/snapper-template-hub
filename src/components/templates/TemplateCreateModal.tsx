
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTemplates } from "@/contexts/TemplateContext";

export function TemplateCreateModal() {
  const { createTemplate } = useTemplates();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [nameError, setNameError] = useState("");
  const [contentError, setContentError] = useState("");
  
  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      resetForm();
    }
  };
  
  const resetForm = () => {
    setName("");
    setContent("");
    setNameError("");
    setContentError("");
  };
  
  const handleCreate = () => {
    let hasError = false;
    
    // Validate name
    if (!name.trim()) {
      setNameError("Template name required");
      hasError = true;
    } else if (name.length > 100) {
      setNameError("Template name cannot exceed 100 characters");
      hasError = true;
    }
    
    // Validate content
    if (content.length > 1000) {
      setContentError("Template message cannot exceed 1000 characters");
      hasError = true;
    }
    
    if (hasError) return;
    
    // Create template
    createTemplate(name.trim(), content.trim());
    setOpen(false);
    resetForm();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    if (value.trim()) {
      setNameError("");
    }
    if (value.length > 100) {
      setNameError("Template name cannot exceed 100 characters");
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setContent(value);
    if (value.length > 1000) {
      setContentError("Template message cannot exceed 1000 characters");
    } else {
      setContentError("");
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button 
          variant="outline"
          className="border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 hover:border-zinc-300 text-sm font-medium rounded"
          size="sm"
        >
          New template
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white border-zinc-200">
        <DialogHeader>
          <DialogTitle className="text-lg font-medium text-zinc-900">Create New Template</DialogTitle>
          <DialogDescription className="text-zinc-500 text-sm">
            Fill out the form below to create a new message template.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-zinc-700">
              Template Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter template name"
              className={`border-zinc-200 ${nameError ? "border-destructive" : ""}`}
            />
            {nameError && (
              <p className="text-destructive text-sm">{nameError}</p>
            )}
            <p className="text-xs text-zinc-500 text-right">
              {name.length}/100 characters
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="content" className="text-zinc-700">Template Message</Label>
            <Textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              placeholder="Enter template content"
              className={`min-h-[150px] resize-y border-zinc-200 ${contentError ? "border-destructive" : ""}`}
            />
            <div className="flex justify-between items-center">
              {contentError && (
                <p className="text-destructive text-sm">{contentError}</p>
              )}
              <p className={`text-xs ${content.length > 1000 ? "text-destructive" : "text-zinc-500"} ml-auto`}>
                {content.length}/1000 characters
              </p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => setOpen(false)}
            className="border-zinc-200 text-zinc-700"
          >
            Cancel
          </Button>
          <Button 
            type="button" 
            onClick={handleCreate}
            className="bg-orange-500 hover:bg-orange-600 text-white transition-colors"
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
