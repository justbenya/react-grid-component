import React, { FunctionComponent, ReactNode } from 'react';
import classes from './Box.module.scss';

export const Box: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
  <div className={classes.Box}>{ children }</div>
);
