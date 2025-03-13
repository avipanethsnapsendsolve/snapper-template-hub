
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TemplateProvider } from "@/contexts/TemplateContext";
import { TemplateManager } from "./templates/TemplateManager";

interface DetailRowProps {
  label: string;
  enabled: boolean;
}

function DetailRow({ label, enabled }: DetailRowProps) {
  return (
    <div className="grid grid-cols-3 py-4 border-b border-zinc-100">
      <div className="text-sm font-medium text-zinc-700 px-4">{label}</div>
      <div className="text-sm text-zinc-700">
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          <span>Enabled</span>
        </div>
      </div>
      <div className="flex items-center justify-between px-4">
        <div className="text-sm font-medium text-zinc-700">Primary colour</div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          <span className="text-sm">Enabled</span>
        </div>
      </div>
    </div>
  );
}

export function AuthorityDetails() {
  return (
    <div className="w-full flex flex-col">
      <div className="sticky top-0 z-30 bg-white border-b border-zinc-200 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-start justify-between">
          <div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h1 className="text-xl font-medium text-zinc-900">Authority Details</h1>
            </div>
            <p className="text-sm text-zinc-500 mt-1 ml-9">Modify the fields below to update your authority's details.</p>
          </div>
          
          <Button size="sm" variant="outline" className="rounded border-zinc-200 text-zinc-700 bg-white hover:bg-zinc-50 font-medium px-4">
            Save
          </Button>
        </div>

        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex border-b border-zinc-200">
            <button className="text-sm font-medium text-zinc-900 px-4 py-2 border-b-2 border-orange-500">Details</button>
            <button className="text-sm font-medium text-zinc-500 px-4 py-2">Map</button>
            <button className="text-sm font-medium text-zinc-500 px-4 py-2">Configurations</button>
            <button className="text-sm font-medium text-zinc-500 px-4 py-2">Triage list</button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-medium text-zinc-900 mb-3">Cache</h2>
            <Card className="border-zinc-200 rounded-md shadow-sm">
              <CardContent className="p-0">
                <div className="py-4 px-4 border-b border-zinc-100 flex justify-between items-center">
                  <div className="text-sm font-medium text-zinc-700">Incident types</div>
                  <Button 
                    className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-md"
                    size="sm"
                  >
                    Clear cache
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-lg font-medium text-zinc-900 mb-3">Authority detail</h2>
            <Card className="border-zinc-200 rounded-md shadow-sm">
              <CardContent className="p-0">
                {Array.from({ length: 2 }).map((_, i) => (
                  <DetailRow key={i} label="Account type" enabled={true} />
                ))}
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-lg font-medium text-zinc-900 mb-3">Feature configurations</h2>
            <Card className="border-zinc-200 rounded-md shadow-sm">
              <CardContent className="p-0">
                {Array.from({ length: 6 }).map((_, i) => (
                  <DetailRow key={i} label="Account type" enabled={true} />
                ))}
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-lg font-medium text-zinc-900 mb-3">Email configurations</h2>
            <Card className="border-zinc-200 rounded-md shadow-sm">
              <CardContent className="p-0">
                {Array.from({ length: 3 }).map((_, i) => (
                  <DetailRow key={i} label="Account type" enabled={true} />
                ))}
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-lg font-medium text-zinc-900 mb-3">Message templates</h2>
            <TemplateProvider>
              <TemplateManager />
            </TemplateProvider>
          </section>
        </div>
      </div>

      <footer className="mt-8 py-4 border-t border-zinc-200 text-center text-xs text-zinc-500">
        <p>Copyright © 2025 Snap Send Solve.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">Terms of use</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Help Centre</a>
          <a href="#" className="hover:underline">Website</a>
        </div>
      </footer>
    </div>
  );
}
