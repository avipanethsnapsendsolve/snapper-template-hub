
import React from "react";
import { Navigation } from "@/components/Navigation";
import { AuthorityDetails } from "@/components/AuthorityDetails";
import { TemplateProvider } from "@/contexts/TemplateContext";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <div className="fixed top-0 left-0 right-0 bg-zinc-900 text-white h-12 flex items-center px-4 z-50">
        <div className="flex items-center space-x-2">
          <div className="text-white/80">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="currentColor"/>
              <path d="M7 12.5H17M7 8.5H13M7 16.5H15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="text-sm font-medium">City of Hobsons Bay</div>
        </div>
        <div className="ml-auto w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-xs font-medium">
          CS
        </div>
      </div>
      
      <Navigation />
      
      <div className="flex-1 flex flex-col ml-56 pt-12">
        <main className="flex-1 overflow-auto">
          <AuthorityDetails />
        </main>
      </div>
    </div>
  );
}

export default Index;
