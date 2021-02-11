import React, { Fragment } from 'react';
import { Home } from '../routes/home.component/mod';

interface Props {}

// const elements = {}

export function App(_: Props): JSX.Element {
  return (
    <Fragment>
      <Home />
    </Fragment>
  );
}
