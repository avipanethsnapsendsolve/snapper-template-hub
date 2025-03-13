
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

interface DetailRowProps {
  label: string;
  enabled: boolean;
}

function DetailRow({ label, enabled }: DetailRowProps) {
  return (
    <div className="grid grid-cols-3 py-4 border-b border-zinc-100">
      <div className="text-sm font-medium text-zinc-700">{label}</div>
      <div className="text-sm text-zinc-700">
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          <span>Enabled</span>
        </div>
      </div>
      <div className="text-sm font-medium text-zinc-700">Primary colour</div>
      <div className="text-sm font-medium text-zinc-700">
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          <span>Enabled</span>
        </div>
      </div>
    </div>
  );
}

export function AuthorityDetails() {
  return (
    <div className="p-6 w-full">
      <div className="flex justify-between mb-6">
        <div>
          <h1 className="text-2xl font-medium text-zinc-900 mb-1">Authority Details</h1>
          <p className="text-zinc-500">Modify the fields below to update your authority's details.</p>
        </div>
        
        <Button className="bg-amber-500 hover:bg-amber-600 text-white transition-colors">
          <Save className="w-4 h-4 mr-2" /> Save
        </Button>
      </div>
      
      <div className="space-y-6">
        <Card className="shadow-sm border-zinc-200">
          <CardContent className="p-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <DetailRow key={i} label="Account type" enabled={true} />
            ))}
          </CardContent>
        </Card>
        
        <div>
          <h2 className="text-xl font-medium text-zinc-900 mb-4">Email configurations</h2>
          <Card className="shadow-sm border-zinc-200">
            <CardContent className="p-0">
              {Array.from({ length: 3 }).map((_, i) => (
                <DetailRow key={i} label="Account type" enabled={true} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
