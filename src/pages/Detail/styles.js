import styled from 'styled-components';
import { Col, Button } from 'react-bootstrap';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 15px 30px;
  border-radius: 4px;
  display: flex;

  div {
    display: flex;

    justify-content: center;

    img {
      max-width: 200px;
      align-self: center;
    }
  }
`;

export const ColBootstrap = styled(Col)`
  display: flex;
  flex-direction: column;

  padding: 0 30px 0 30px;
  h2 {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    text-align: justify;
  }

  strong {
    margin: 10px 0px 10px;
    font-weight: bold;
    color: #333;
  }

  > span {
    text-align: justify;
    line-height: 1.6;
    color: #666;
  }
`;

export const ButtonBootstrap = styled.button`
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
