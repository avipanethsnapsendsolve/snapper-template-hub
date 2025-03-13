
import React from "react";
import { Navigation } from "@/components/Navigation";
import { AuthorityDetails } from "@/components/AuthorityDetails";
import { TemplateManager } from "@/components/templates/TemplateManager";
import { TemplateProvider } from "@/contexts/TemplateContext";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Navigation />
      
      <div className="flex-1 flex flex-col">
        <header className="bg-zinc-900 text-white px-4 py-3 flex justify-between items-center">
          <h1 className="text-sm font-medium">City of Hobsons Bay</h1>
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-xs font-medium">
            CS
          </div>
        </header>
        
        <main className="flex-1 overflow-auto">
          <div className="max-w-full mx-auto">
            <AuthorityDetails />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Index;
