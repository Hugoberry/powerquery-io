import React from 'react';
import Translate from '@docusaurus/Translate';

const DescriptionBlock = ({ id }) => {
  if (!id) return null;

  // Try to get the translation for the current locale
  const translatedText = <Translate id={id} />;

  // If the translated text is the same as the id (meaning no translation found), 
  // then fetch the English translation as a fallback.
  if (translatedText === id) {
    const englishText = <Translate id={id} locale="en" />;
    return englishText;
  }

  return translatedText;
};

export default DescriptionBlock;
