import React from 'react';
import Box from './components/Box/Box';
import Grid from './components/Grid/Grid';
import GridRuler from './components/GridRuler/GridRuler';

function App() {
    return (
        <div className="App" style={ { margin: 16, position: 'relative', height: '100vh' } }>
            <GridRuler spacing={ 1 } />
            <Grid
                container spacing={ 1 }
                justifyContent={ 'space-between' }
                alignContent={ 'center' }
                style={ { height: '100%' } }
            >
                <Grid item xs={ 1 } sm={ 6 } md={ 4 } lg={ 3 }>
                    <Box>Box 1</Box>
                </Grid>

                <Grid item xs={ 1 } sm={ 6 } md={ 4 } lg={ 3 }>
                    <Box>Box 2</Box>
                </Grid>

                <Grid item xs={ 1 } sm={ 6 } md={ 4 } lg={ 3 }>
                    <Box>Box 3</Box>
                </Grid>

                <Grid item xs={ 1 } sm={ 6 } md={ 4 } lg={ 3 }>
                    <Box>Box 4</Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
