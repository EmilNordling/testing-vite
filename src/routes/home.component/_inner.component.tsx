import React from 'react';
import styled from 'styled-components';
import { TestService } from '../../application/test.service';
import { useService } from 'one-atom';

interface Props {}

const elements = {
  content: styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  `,
  aside: styled.div`
    width: 300px;
    height: 100%;
    background-color: var(--global-foreground-darker);
  `,
};

export function Inner(_: Props): JSX.Element {
  useService(TestService);

  return (
    <elements.content>
      <elements.aside>cool</elements.aside>
    </elements.content>
  );
}
