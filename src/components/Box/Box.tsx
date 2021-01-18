import React, { FunctionComponent, ReactNode } from 'react';
import classes from './Box.module.scss';

const Box: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return (<div className={ classes.Box }>{ children }</div>);
};

export default Box;
