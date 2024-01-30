import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import DescriptionBlock from '@site/src/components/DescriptionBlock';
import CustomTranslate from '@site/src//components/CustomTranslate';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  DescriptionBlock,
  CustomTranslate,

};