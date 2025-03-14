
import React from "react";
import { useFontLoader } from "@/hooks/use-font-loader";

export const FontTester = () => {
  const { isFontLoaded, hasError } = useFontLoader("Bagoss");

  return (
    <div className="p-4 m-4 border rounded-md bg-white shadow-sm">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-zinc-500 mb-1">Font Status:</h3>
        <div className="flex items-center space-x-2">
          <div 
            className={`w-3 h-3 rounded-full ${
              isFontLoaded ? 'bg-green-500' : hasError ? 'bg-red-500' : 'bg-orange-500'
            }`}
          />
          <span className="text-sm">
            {isFontLoaded 
              ? 'Bagoss font loaded successfully' 
              : hasError 
              ? 'Error loading Bagoss font' 
              : 'Loading Bagoss font...'}
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl">This heading should use Bagoss font</h2>
        <p className="text-sm text-zinc-500">This paragraph uses Work Sans (the body font)</p>
      </div>
    </div>
  );
};
