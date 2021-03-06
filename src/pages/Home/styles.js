import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { darken } from 'polished';

export const Container = styled.div`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  a:hover {
    text-decoration: none;
    color: #999;
  }
  a {
    text-decoration: none;
  }
`;

export const LinkStyled = styled(Link)`
  margin-top: 10px;

  > strong {
    font-size: 16px;
    line-height: 20px;
    color: #999;
    margin-top: 15px;
    text-decoration: none;
  }
`;

export const ColBootstrap = styled(Col)`
  display: flex;
  flex-direction: column;
  background: #191920;
  margin: 10px 10px;
  border-radius: 4px;
  padding: 10px;

  img {
    align-self: center;
    max-width: 220px;
  }

  > span {
    color: #999;
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
    margin-top: auto;
  }
`;

export const Btn = styled.button`
  padding: 0;
  background: #333;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;

  display: flex;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, '#333')};
  }

  &:focus {
    outline: none;
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
