import React from 'react';

import { Sanitize, GlobalStyles } from '../Styles';

export default function AppHead() {
  return (
    <>
      <Sanitize />
      <GlobalStyles />
    </>
  );
}
