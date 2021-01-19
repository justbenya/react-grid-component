import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Box } from '../Box/Box';
import { Grid } from '../Grid/Grid';
import { GridRuler } from './GridRuler';

export default {
  title: 'GridRuler',
  component: GridRuler,
} as Meta;

export const WithRuler: Story = (args) => (
  <div style={{ position: 'relative' }}>
    <GridRuler spacing={args.spacing} />
    <Grid
      container
      spacing={args.spacing}
      justifyContent="space-between"
      alignContent="center"
      style={{ height: '100%' }}
    >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>1</Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>2</Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>3</Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>4</Box>
      </Grid>
    </Grid>
  </div>
);
