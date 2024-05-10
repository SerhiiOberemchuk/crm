import React from 'react';
import style from './ActiveLabel.module.css';

export interface ActiveLabelProps {
  children: React.ReactNode;
}

function ActiveLabel({ children }: ActiveLabelProps) {
  return <span className={style.label}>{children}</span>;
}

export default ActiveLabel;
