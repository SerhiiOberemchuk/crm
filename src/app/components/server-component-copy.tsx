import React from 'react';

export interface ServerComponentCopyProps {
  children?: React.ReactNode;
}

export default function ServerComponentCopy({
  children,
}: ServerComponentCopyProps) {
  console.log('Server component copy');

  return (
    <div>
      <span>Server component copy</span>
      {children}
    </div>
  );
}
