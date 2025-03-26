
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface TemplateLengthWarningDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TemplateLengthWarningDialog({
  open,
  onOpenChange,
}: TemplateLengthWarningDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogTitle className="text-lg font-semibold">Message too long</DialogTitle>
        <DialogDescription className="py-4">
          You've created a template that exceeds the character limit.
          Check and edit the lengths of your template.
        </DialogDescription>
        <div className="mt-4 flex justify-center">
          <DialogClose asChild>
            <Button className="bg-orange-500 hover:bg-orange-600 text-black">
              Got it
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
