import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const move = keyframes`
  100% {
    transform: translateY(40px);
  }
`;

const rotate = keyframes`
  to {
    transform: rotateZ(360deg);
  }
`;

export const zIndex = keyframes`
  25% {
    z-index: 1;
  }
  75% {
    z-index: -1;
  }
`;

export const zoom = keyframes`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const LoaderWrapper = styled.div`
  animation: ${fadeIn} 1s ease-in;
  animation-fill-mode: forwards;
  opacity: 0;
`;

export const LoaderWrapperInner = styled.div`
  position: absolute;
  width: 40px;
  height: 80px;
  margin: auto;
  animation: ${rotate} 10s linear infinite;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const LoaderWrapperInnerA = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  position: absolute;
  animation: ${move} 2s ease-in-out infinite alternate, ${zIndex} 4s ease-in-out infinite;

  &:after {
    display: block;
    content: '';
    transform: scale(0.5);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #2845ae;
    animation: ${zoom} 2s ease-in-out infinite alternate;
    animation-delay: -1s;
  }
`;

export const LoaderWrapperInnerB = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  position: absolute;
  animation: ${move} 2s ease-in-out infinite alternate-reverse, ${zIndex} 4s ease-in-out infinite reverse;

  &:after {
    display: block;
    content: '';
    transform: scale(0.5);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #5493f7;
    animation: ${zoom} 2s ease-in-out infinite alternate-reverse;
    animation-delay: -1s;
  }
`;