
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
          className="border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 hover:border-zinc-300 rounded"
          disabled={!selectedTemplate}
          size="sm"
        >
          <Trash2 className="w-4 h-4 mr-1.5" /> Remove
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white border-zinc-200">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-lg font-medium text-zinc-900">Delete Template</AlertDialogTitle>
          <AlertDialogDescription className="text-zinc-500 text-sm">
            Are you sure you want to delete the template "{selectedTemplate?.name}"? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-zinc-200 text-zinc-700">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-destructive hover:bg-destructive/90 text-white"
          >
            Confirm Remove
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
