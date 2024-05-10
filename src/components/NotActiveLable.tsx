import React from 'react';
import style from './NotActiveLabel.module.css';

export interface NotActiveLabelProps {
  children: React.ReactNode;
}

function NotActiveLabel({ children }: NotActiveLabelProps) {
  return <span className={style.label}>{children}</span>;
}

export default NotActiveLabel;
