import { Box, Grid, GridRuler } from "@justbenya/react-grid-component";
import "@justbenya/react-grid-component/dist/index.css";
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

export default {
  title: "GridRuler",
  component: Grid,
} as Meta;

export const WithRuler: Story = (args) => (
  <div style={ { position: "relative" } }>
    <GridRuler spacing={ 1 } />
    <Grid
      container
      spacing={ 1 }
      justifyContent={ "space-between" }
      alignContent={ "center" }
      style={ { height: "100%" } }
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
