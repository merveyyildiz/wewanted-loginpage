import React from 'react';
import Goran from './Goran.js';
import Rectangle from './Rectangle.js';
import Mobil from './Mobil';
import { Responsive, Grid } from 'semantic-ui-react';
export default function Panel() {
  return (
    <>
      <Responsive minWidth={768.1}>
        <Goran/>
        <Rectangle/>
      </Responsive>

      <Responsive maxWidth={768}>
        <Mobil />
      </Responsive>
    </>
  );
  }
