import clsx from 'clsx';
import React, { FunctionComponent } from 'react';
import classes from './GridRuler.module.scss';

type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const GridRuler: FunctionComponent<{ spacing?: Spacing }> = ({ spacing }) => {
  const classNames = clsx(classes.GridRuler, {
    [classes[`GridRuler__spacing-${ spacing }`]]: spacing,
  });

  return (
    <div className={classNames}>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
          <div className={classes.GridRuler__item} key={number} />))
      }
    </div>
  );
};
