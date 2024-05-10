import React from 'react';
export interface ActiveLabel {
  children: React.ReactNode;
}

function ActiveLabel({ children }: ActiveLabel) {
  return <span>{children}</span>;
}

export default ActiveLabel;
