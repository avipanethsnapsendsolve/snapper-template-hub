
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useTemplates } from "@/contexts/TemplateContext";

export function TemplateDeleteDialog() {
  const { selectedTemplate, deleteTemplate } = useTemplates();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    if (selectedTemplate) {
      deleteTemplate(selectedTemplate.id);
      setOpen(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="border-destructive/30 text-destructive hover:bg-destructive/10 hover:text-destructive hover:border-destructive transition-colors"
          disabled={!selectedTemplate}
        >
          <Trash2 className="w-4 h-4 mr-1" /> Remove
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white/95 backdrop-blur-md animate-scale-in">
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Template</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete the template "{selectedTemplate?.name}"? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-border">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground transition-colors"
          >
            Confirm Remove
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
