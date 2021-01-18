import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';
import classes from './Grid.module.scss';

type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type JustifyContent = 'flex-start' | 'center' | 'space-between' | 'flex-end';
type AlignContent = 'flex-start' | 'center' | 'flex-end';

const Grid: FunctionComponent<{
    children: ReactNode;
    container?: boolean;
    item?: boolean;
    spacing?: Spacing;
    xs?: Columns;
    sm?: Columns;
    md?: Columns;
    lg?: Columns;
    justifyContent?: JustifyContent;
    alignContent?: AlignContent;
} & React.HTMLAttributes<HTMLDivElement>> = ({
    children,
    container,
    item,
    spacing,
    xs,
    sm,
    md,
    lg,
    justifyContent,
    alignContent,
    ...props
}) => {

    const classNames = clsx({
        [classes.Grid__container]: container,
        [classes.Grid__item]: item,
        [classes[`Grid__spacing-${ spacing }`]]: spacing && container,
        [classes[`Grid__xs-${ xs }`]]: xs,
        [classes[`Grid__sm-${ sm }`]]: sm,
        [classes[`Grid__md-${ md }`]]: md,
        [classes[`Grid__lg-${ lg }`]]: lg,
        [classes[`Grid__justifyContent-${ justifyContent }`]]: justifyContent,
        [classes[`Grid__alignContent-${ alignContent }`]]: alignContent,
    });

    return (
        <div className={ classNames } { ...props }>
            { children }
        </div>);
};

export default Grid;
