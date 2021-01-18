import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';
import classes from './Grid.module.scss';

type Columns = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type JustifyContent = 'flex-start' | 'center' | 'space-between' | 'flex-end';
type AlignContent = 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
type AlignItems = 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';

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
    alignItems?: AlignItems;
    direction?: Direction;
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
    alignContent = 'stretch',
    alignItems = 'stretch',
    direction = 'row',
    ...props
}) => {

    const classNames = clsx({
        [classes.Grid__container]: container,
        [classes.Grid__item]: item && !container,
        [classes[`Grid__spacing-${ spacing }`]]: spacing && container,
        [classes[`Grid__xs-${ xs }`]]: xs && !container,
        [classes[`Grid__sm-${ sm }`]]: sm && !container,
        [classes[`Grid__md-${ md }`]]: md && !container,
        [classes[`Grid__lg-${ lg }`]]: lg && !container,
        [classes[`Grid__justifyContent-${ justifyContent }`]]: justifyContent,
        [classes[`Grid__alignContent-${ alignContent }`]]: alignContent,
        [classes[`Grid__alignItems-${ alignItems }`]]: alignItems,
        [classes[`Grid__direction-${ direction }`]]: direction,
    });

    return (
        <div className={ classNames } { ...props }>
            { children }
        </div>);
};

export default Grid;
