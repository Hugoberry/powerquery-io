import { useEffect } from 'react';

const TallyQuiz = ({ formId = {} }) => {
  // Load the Tally widget script and handle the popup
  useEffect(() => {
    const widgetScriptSrc = 'https://tally.so/widgets/embed.js';

    const loadAndOpenPopup = () => {
      // Check if Tally is available and open the popup
      if (typeof Tally !== 'undefined') {
        Tally.openPopup(formId,{ autoClose: 5000 });
        return;
      }

      // Fallback if window.Tally is not available
      const script = document.createElement('script');
      script.src = widgetScriptSrc;
      script.onload = () => Tally.openPopup(formId,{ autoClose: 5000 });
      script.onerror = () => {
        console.error('Failed to load the Tally script');
      };
      document.body.appendChild(script);
    };

    // Load and open the popup
    loadAndOpenPopup();

    // Optionally, return a cleanup function to close the popup when the component unmounts
    return () => {
      if (typeof Tally !== 'undefined') {
        Tally.closePopup(formId);
      }
    };
  }, [formId]);

  return null; // This component does not render anything itself
};

export default TallyQuiz;
