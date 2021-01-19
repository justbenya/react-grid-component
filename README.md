# @justbenya/react-grid-component

> A simple Material-UI-like responsive grid system for React.

[![NPM](https://img.shields.io/npm/v/@justbenya/react-grid-component.svg)](https://www.npmjs.com/package/@justbenya/react-grid-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

-----

⚡ [Playground / Storybook](https://competent-mccarthy-6f9f29.netlify.app/) ⚡

----

## Install

```bash
npm install @justbenya/react-grid-component
```

or

```bash
yarn add @justbenya/react-grid-component
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

## Development
Run ```yarn build``` from your terminal and you should be able to see the ```lib``` folder created.

### Storybook commands
Two commands to know about Storybook itself:

- ```yarn storybook``` will start an interactive version of Storybook that you can visit in your browser.
- ```yarn storybook:build``` will process (build) the Storybook javascript and assets, and create a static site with them in storybook-static.

## Publishing
```bash
npm publish
```

or

```bash
npm publish --access=public
```

## License

MIT © [justbenya](https://github.com/justbenya)
