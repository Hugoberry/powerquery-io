import React from 'react';
import {Analytics} from '@vercel/analytics/react';

// Wraps the entire Docusaurus app so Vercel Analytics is mounted once
// and tracks client-side route changes across the SPA.
export default function Root({children}) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
