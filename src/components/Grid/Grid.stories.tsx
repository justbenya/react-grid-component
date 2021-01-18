import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Box from '../Box/Box';
import GridRuler from '../GridRuler/GridRuler';
import Grid from './Grid';

export default {
    title: 'Grid',
    component: Grid,
} as Meta;

const Template: Story = (args) => (
    <div style={ { position: 'relative', height: '100vh' } }>
        <Grid { ...args } style={ { height: '100%' } }>
            <Grid item xs={ 1 }>
                <Box>1</Box>
            </Grid>

            <Grid item xs={ 1 }>
                <Box>2</Box>
            </Grid>

            <Grid item xs={ 1 }>
                <Box>3</Box>
            </Grid>
        </Grid>
    </div>
);

export const BasicContainer = Template.bind({});
BasicContainer.args = {
    container: true,
    spacing: 2,
    justifyContent: 'center',
};

BasicContainer.argTypes = {
    item: {
        table: {
            disable: true,
        },
    },
    xs: {
        table: {
            disable: true,
        },
    },
    sm: {
        table: {
            disable: true,
        },
    },
    md: {
        table: {
            disable: true,
        },
    },
    lg: {
        table: {
            disable: true,
        },
    },
};

export const RowInteractive: Story = (args) => (
    <div style={ { position: 'relative', height: '100vh' } }>
        <Grid container spacing={ 2 } style={ { height: '100%' } }>
            <Grid { ...args } >
                <Box>1</Box>
            </Grid>

            <Grid { ...args } >
                <Box>2</Box>
            </Grid>

            <Grid { ...args } >
                <Box>3</Box>
            </Grid>
        </Grid>
    </div>
);
RowInteractive.args = {
    item: true,
    xs: 1,
    sm: 4,
    md: 3,
    lg: 12,
};

RowInteractive.argTypes = {
    spacing: {
        table: {
            disable: true,
        },
    },
    justifyContent: {
        table: {
            disable: true,
        },
    },
    alignItems: {
        table: {
            disable: true,
        },
    },
    direction: {
        table: {
            disable: true,
        },
    },
    container: {
        table: {
            disable: true,
        },
    },
    alignContent: {
        table: {
            disable: true,
        },
    },
};


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
                <Box>1</Box>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
                <Box>2</Box>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
                <Box>3</Box>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
                <Box>4</Box>
            </Grid>
        </Grid>
    </div>
);

export const Interactive: Story = (args) => (
    <div style={ { position: 'relative' } }>
        <Grid { ...args }>
            <Grid item xs={ 1 }>
                <Box>1</Box>
            </Grid>

            <Grid item xs={ 1 }>
                <Box>2</Box>
            </Grid>

            <Grid item xs={ 1 }>
                <Box>3</Box>
            </Grid>

            <Grid item xs={ 1 }>
                <Box>4</Box>
            </Grid>
        </Grid>
    </div>
);
