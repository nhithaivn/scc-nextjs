import React from 'react';

import AppHead from './AppHead';

function AppLayout({ children }) {
  return (
    <div className="page-layout">
      <AppHead />
      {children}
    </div>
  );
}

export default AppLayout;
