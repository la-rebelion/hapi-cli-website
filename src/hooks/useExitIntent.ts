import { useState, useEffect } from 'react';

export const useExitIntent = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShowExitIntent(true);
        setHasShown(true);
      }
    };

    const handleBeforeUnload = () => {
      if (!hasShown) {
        setShowExitIntent(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasShown]);

  const closeExitIntent = () => setShowExitIntent(false);

  return { showExitIntent, closeExitIntent };
};