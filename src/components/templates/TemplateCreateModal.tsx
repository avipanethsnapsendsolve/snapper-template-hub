
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
import { Plus } from "lucide-react";
import { useTemplates } from "@/contexts/TemplateContext";

export function TemplateCreateModal() {
  const { createTemplate } = useTemplates();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [nameError, setNameError] = useState("");
  
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
  };
  
  const handleCreate = () => {
    // Validate
    if (!name.trim()) {
      setNameError("Template name required");
      return;
    }
    
    // Create template
    createTemplate(name.trim(), content.trim());
    setOpen(false);
    resetForm();
  };
  
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button 
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded"
          size="sm"
        >
          <Plus className="w-4 h-4 mr-1.5" /> New template
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
              onChange={(e) => {
                setName(e.target.value);
                if (e.target.value.trim()) setNameError("");
              }}
              placeholder="Enter template name"
              className={`border-zinc-200 ${nameError ? "border-destructive" : ""}`}
              maxLength={100}
            />
            {nameError && (
              <p className="text-destructive text-sm">{nameError}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="content" className="text-zinc-700">Template Message</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter template content"
              className="min-h-[150px] resize-y border-zinc-200"
              maxLength={1000}
            />
            <p className="text-xs text-zinc-500 text-right">
              {content.length}/1000 characters
            </p>
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
