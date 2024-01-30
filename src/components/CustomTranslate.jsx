import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import enTranslations from '../../i18n/en/code.json';

const CustomTranslate = ({ id }) => {
    // Check if the translation exists for the current locale
    const translation = translate({ id });

    if (translation !== id) {
        // If a translation is found, render it
        return <Translate id={id} />;
    } else {
        // Fallback to English translation if available
        const enTranslation = enTranslations[id]?.message || id;
        return <span>{enTranslation}</span>;
    }
};

export default CustomTranslate;
