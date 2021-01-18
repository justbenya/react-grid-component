import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Box from '../Box/Box';
import GridRuler from '../GridRuler/GridRuler';
import Grid from './Grid';

export default {
    title: 'Grid',
    component: Grid,
} as Meta;

export const Template: Story = (args) => (
    <div style={ { position: 'relative' } }>
        <Grid { ...args }>
            <Grid item xs={ 1 }>
                <Box>Box 1</Box>
            </Grid>

            <Grid item xs={ 1 }>
                <Box>Box 2</Box>
            </Grid>

            <Grid item xs={ 1 }>
                <Box>Box 3</Box>
            </Grid>
        </Grid>
    </div>
);

export const Basic = Template.bind({});
Basic.args = {
    container: true,
    spacing: 2,
    justifyContent: 'center'
};

Basic.argTypes = {
    item: {
        table: {
            disable: true
        }
    },
    xs: {
        table: {
            disable: true
        }
    },
    sm: {
        table: {
            disable: true
        }
    },
    md: {
        table: {
            disable: true
        }
    },
    lg: {
        table: {
            disable: true
        }
    },
}

export const WithRuler: Story = (args) => (
    <div style={ { position: 'relative' } }>
        <GridRuler spacing={ 1 } />
        <Grid
            container
            spacing={ 1 }
            justifyContent={ 'space-between' }
            alignContent={ 'center' }
            style={ { height: '100%' } }
            { ...args }
        >
            <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
                <Box>Box 1</Box>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
                <Box>Box 2</Box>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
                <Box>Box 3</Box>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
                <Box>Box 4</Box>
            </Grid>
        </Grid>
    </div>
);

export const Interactive: Story = (args) => (
    <div style={ { position: 'relative' } }>
        <Grid { ...args }>
            <Grid item xs={ 1 } { ...args }>
                <Box>Box 1</Box>
            </Grid>

            <Grid item xs={ 1 } { ...args }>
                <Box>Box 2</Box>
            </Grid>

            <Grid item xs={ 1 } { ...args }>
                <Box>Box 3</Box>
            </Grid>

            <Grid item xs={ 1 } { ...args }>
                <Box>Box 4</Box>
            </Grid>
        </Grid>
    </div>
);

export const Padding: Story = (args) => (
    <div>
        <Grid container spacing={ 2 }>
            <Grid item xs={ 1 }>
                <Box>Box 1</Box>
            </Grid>

            <Grid item xs={ 1 }>
                <Box>Box 2</Box>
            </Grid>

            <Grid item xs={ 1 }>
                <Box>Box 3</Box>
            </Grid>

            <Grid item xs={ 1 }>
                <Box>Box 4</Box>
            </Grid>
        </Grid>
    </div>
);
