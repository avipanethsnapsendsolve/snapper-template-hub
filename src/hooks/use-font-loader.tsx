
import { useState, useEffect } from "react";

export function useFontLoader(fontFamily: string) {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if the font is already loaded (might be in cache)
    if (document.fonts.check(`1em ${fontFamily}`)) {
      setIsFontLoaded(true);
      return;
    }

    // Try to load the font
    const fontFaceObserver = async () => {
      try {
        // Wait for the font to be loaded
        await document.fonts.ready;
        
        // Verify the font is actually available
        const isLoaded = document.fonts.check(`1em ${fontFamily}`);
        
        console.log(`Font ${fontFamily} loaded:`, isLoaded);
        setIsFontLoaded(isLoaded);
        
        if (!isLoaded) {
          setHasError(true);
          console.error(`Font ${fontFamily} failed to load properly`);
        }
      } catch (error) {
        console.error(`Error loading font ${fontFamily}:`, error);
        setHasError(true);
      }
    };

    fontFaceObserver();
  }, [fontFamily]);

  return { isFontLoaded, hasError };
}
