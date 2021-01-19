# @justbenya/react-grid-component

> A simple Material-UI-like responsive grid system for React.

[![NPM](https://img.shields.io/npm/v/@justbenya/react-grid-component.svg)](https://www.npmjs.com/package/@justbenya/react-grid-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @justbenya/react-grid-component
```

## Usage

```tsx
import React from 'react'

import { Grid, Box } from '@justbenya/react-grid-component';
import '@justbenya/react-grid-component/dist/index.css';

const Example = () => {
  return (
    <Grid
      container spacing={ 1 }
      justifyContent={ 'space-between' }
      alignContent={ 'center' }
    >
      <Grid item xs={ 1 } sm={ 6 } md={ 4 } lg={ 3 }>
        <Box>div 1</Box>
      </Grid>

      <Grid item xs={ 1 } sm={ 6 } md={ 4 } lg={ 3 }>
        <Box>div 2</Box>
      </Grid>

      <Grid item xs={ 1 } sm={ 6 } md={ 4 } lg={ 3 }>
        <Box>div 3</Box>
      </Grid>

      <Grid item xs={ 1 } sm={ 6 } md={ 4 } lg={ 3 }>
        <Box>div 4</Box>
      </Grid>
    </Grid>
  );
};
```

## License

MIT © [justbenya](https://github.com/justbenya)
