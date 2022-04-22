import styled, { keyframes } from 'styled-components';
import { fontFamily, primaryColor } from '../variables';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0
  }
  100% {
    opacity: 1;
  }
`;

const move = keyframes`
  100% {
    right: 24px;
  }
`;

export const NotificationWrapper = styled.div`
  animation: ${fadeIn} 0.1s ease-in-out;
  animation-fill-mode: forwards;
  opacity: 0;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9999;
`;

export const NotificationInner = styled.div`
  animation: ${move} 0.1s ease-in-out;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  width: 290px;
  right: -240px;
  bottom: 24px;
  position: relative;
  font-family: ${fontFamily};
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #cedaea;
  background: #f9f9f9;

  &.success {
    background: #f2fff2;
  }

  h3 {
    color: #221221;
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    padding-bottom: 8px;
  }

  p {
    font-size: 12px;
    line-height: 16px;
    padding-bottom: 2px;
  }

  a {
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    color: ${primaryColor};
    display: flex;
    align-items: center;

    .icon {
      width: 24px;
      height: 24px;
      position: relative;
      top: 2px;
      left: -3px;

      svg {
        height: 12px;

        path {
          fill: ${primaryColor};
        }
      }
    }
  }

  button[type='button'] {
    position: absolute;
    top: 0;
    right: -4px;
    border: none;
    background: transparent;
    cursor: pointer;
    opacity: 1;
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 0.86;
    }

    .icon {
      svg {
        height: 20px;
        width: 20px;
        color: #cedaea;
      }
    }
  }

  .icon {
    float: left;
    margin-right: 15px;
    padding: 2px;
  }
`;
