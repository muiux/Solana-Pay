import styled, { keyframes } from 'styled-components';
import { fontFamily, primaryColor, primaryBlack } from '../../components/Global/variables';
import { lighten } from 'polished';

export const Landing_Container = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Landing_Background = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  position: absolute;
  z-index: -1;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.75;
  }
`;

const floatCircle = keyframes`
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0.75;
  }

  33% {
    transform: translateY(-2px) translateX(2px);
  }

  66% {
    transform: translateY(2px) translateX(-2px);
    opacity: 0.5;
  }

  100% {
    transform: translateY(0) translateX(0);
    opacity: 0.75;
  }
`;

const fadeIn2 = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.65;
  }
  100% {
    opacity: 0.8;
  }
`;

const floatCircle2 = keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }

  33% {
    transform: translateY(2px) translateX(-2px);
  }

  66% {
    transform: translateY(-2px) translateX(2px);
  }
  
  100% {
    transform: translateY(0) translateX(0);
  }
`;

const fadeIn3 = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.56;
  }
  100% {
    opacity: 0.7;
  }
`;

const floatCircle3 = keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }

  33% {
    transform: translateY(4px) translateX(-4px);
  }

  66% {
    transform: translateY(8px) translateX(4px);
  }
  
  100% {
    transform: translateY(0) translateX(0);
  }
`;

export const Landing_Watermark_Container = styled.div`
  user-select: none;
  webkit-drag: none;

  svg {
    @media screen and (max-width: 720px) {
      width: 100%;
      padding-left: 16px;
    }
    #kado-icon-bg-1 {
      animation: ${fadeIn} 2s forwards,
                 ${floatCircle} 5s infinite;
      opacity: 0;
    }

    #kado-icon-bg-2 {
      animation: ${fadeIn2} 3s forwards,
                 ${floatCircle2} 5s infinite;
      opacity: 0;
    }

    #kado-icon-bg-3 {
      animation: ${fadeIn3} 3s forwards,
                 ${floatCircle3} 5s infinite;
      opacity: 0;
    }
  }
`;

export const Landing_Container_Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Landing_Container_Inner_Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Landing_Container_Inner_Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 10px;
  animation: ${fadeIn2} 0.5s forwards;
  animation-delay: 2s;
  opacity: 0;

  > a {
    padding: 0 2px;
    margin: 0 8px;
    transform: translateY(0);
    opacity: 1;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: translateY(-3px);
      opacity: 0.87;
    }

    svg {
      width: 48px;
      height: 48px;
    }
  }
`;

export const Landing_Text_Container = styled.div`
  position: relative;
  user-select: none;
  webkit-drag: none;

  svg {
    padding-left: 32px;
    @media screen and (max-width: 720px) {
      width: 100%;
      padding-right: 16px;
      padding-left: 16px;
    }
  }

  h2 {
    font-family: 'sofia-pro';
    font-size: 20px;
    font-weight: 400;
    font-style: italic;
    color: #FFF;
    padding-left: 16px;
    position: absolute;
    transform: translateX(-50%);
    left: 25%;

    @media screen and (max-width: 720px) {
      padding-left: 0;
      margin-left: -16px;
      transform: none;
      left: unset;
    }
  }
`;