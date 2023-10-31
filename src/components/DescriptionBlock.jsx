import React from 'react';
import Translate from '@docusaurus/Translate';

const DescriptionBlock = ({ id, children }) => {
  if (id) {
    return <Translate id={id} />;
  }
  return <Translate>{children}</Translate>;
};

export default DescriptionBlock;
