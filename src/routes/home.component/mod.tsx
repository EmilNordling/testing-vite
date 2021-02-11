import React, { useEffect } from 'react';
import { addDashboardStyle } from '../../modules/add_dashboard_style';
import { Inner } from './_inner.component';

interface Props {}

// const elements = {}

export function Home(_: Props): JSX.Element {
  useEffect(() => {
    return addDashboardStyle();
  }, []);

  return <Inner />;
}
