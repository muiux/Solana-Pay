import styled from 'styled-components';
import { fontFamily, primaryColor, primaryWhite, primaryError } from '../../components/Global/variables';

export const FormInputContainer = styled.div`
  width: 100%;
  position: relative;

  input[type='text'],
  input[type='email'],
  input[type='password'] {
    width: 100%;
    height: 44px;
    padding: 14px 16px 14px 10px;
    outline: 0;
    border: 1px solid #CEDAEA;
    border-radius: 4px;
    background: ${primaryWhite};
    font-family: ${fontFamily};
    font-size: 16px;
    background-image: none !important;
    background-attachment: unset !important;
    cursor: text !important;

    &:focus {
      outline: 1px solid ${primaryColor};
    }

    &.error {
      outline: 1px solid ${primaryError};
    }
  }

  input:-internal-autofill-selected {
    background-color: ${primaryWhite} !important;
    font-family: ${fontFamily} !important;
    font: 500 16px ${fontFamily} !important;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active {
    background: ${primaryWhite};
    font-family: ${fontFamily};
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  label {
    font-size: 16px;
    font-family: ${fontFamily};
    padding: 0 12px;
    color: #999;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: -10px;
    transform: translate(0, 26px) scale(1);
    transform-origin: top left;
    transition: all 0.2s ease-out;

    &.active {
      transform: translate(0, 12px) scale(0.75);
    }
  }

  .reveal {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);

    &:hover {
      cursor: pointer;
    }
  }

  &:focus-within label {
    transform: translate(0, 12px) scale(0.75);
  }
`;

export const ErrorText = styled.p`
  font-family: ${fontFamily};
  color: ${primaryError};
  font-size: 14px;
`;
