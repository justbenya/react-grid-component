import { Grid, GridRuler, Box } from '@justbenya/react-grid-component';
import '@justbenya/react-grid-component/dist/index.css';
import React from 'react';

const App = () => {
  return (
    <div className='App' style={ { margin: 16, position: 'relative', height: '100vh' } }>
      <GridRuler spacing={ 1 } />
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
    </div>
  );

};

export default App;
