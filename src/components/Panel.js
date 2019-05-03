import React from 'react';
import Goran from './Goran.js';
import Rectangle from './Rectangle.js';
import Mobil from './Mobil';
import { Responsive, Grid } from 'semantic-ui-react';
export default function Panel() {
  return (
    <>
      <Responsive minWidth={768.1}>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={9} style={{ margin: '0px', padding: '0px' }}>
              <Goran />
            </Grid.Column>
            <Grid.Column width={2} style={{ margin: '0px', padding: '0px' }}>
              <Rectangle />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>

      <Responsive maxWidth={768}>
        <Mobil />
      </Responsive>
    </>
  );
}
