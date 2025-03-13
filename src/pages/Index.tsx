
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
        <header className="bg-zinc-900 text-white p-4 flex justify-end">
          <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-xs font-medium">
            CS
          </div>
        </header>
        
        <main className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto">
            <AuthorityDetails />
            
            <div className="px-6 pb-8">
              <h2 className="text-xl font-medium text-zinc-900 mb-4">Message templates</h2>
              <TemplateProvider>
                <TemplateManager />
              </TemplateProvider>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Index;
