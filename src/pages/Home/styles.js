import styled from 'styled-components';
import { Col, Button } from 'react-bootstrap';

import { darken } from 'polished';

export const Container = styled.div`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
`;

export const ColBootstrap = styled(Col)`
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: 10px 10px;
  border-radius: 4px;
  padding: 10px;

  img {
    align-self: center;
    max-width: 220px;
  }

  > strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 5px;
  }

  > span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
  }
`;

export const ButtonBootstrap = styled(Button)`
  padding: 0;
  background: #46a4d9;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;

  display: flex;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, '#46a4d9')};
  }

  div {
    margin: 0;
    display: flex;
    align-items: center;
    padding: 12px;
    background: rgba(0, 0, 0, 0.1);

    svg {
      margin-right: 5px;
    }
  }

  span {
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
`;
