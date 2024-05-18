import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  console.log('render layout');

  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
