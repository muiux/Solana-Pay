import styled from 'styled-components';
import { lighten } from 'polished';

import { fontFamily, primaryBlack } from './variables';

export const TerraKadoLinkCircular = styled.a`
  font-family: ${fontFamily};
  color: #FFF;
  background-color: ${primaryBlack};
  padding: 3px 8px;
  display: block;
  height: 40px;
  width: 160px;
  max-width: 160px;
  border-radius: 25px;
  border-width: 1px;
  box-shadow: 1px 2px 5px rgb(0 0 0 / 22%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.12s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  margin: 0 auto;

  &:focus {
    outline: 0;
    border-color: #3f51b5;
  }

  &:hover {
    background-color: ${lighten(0.2, primaryBlack)};
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }

  > span {
    font-weight: 600;
  }
`;