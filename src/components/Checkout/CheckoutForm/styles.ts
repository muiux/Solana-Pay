import styled from 'styled-components';
import {
  breakpointDown,
  primaryError,
  fontFamily,
  primaryBlack,
  primaryColor,
  primaryWhite
} from '../../Global/variables';
import { lighten } from 'polished';

type ButtonComponentProps = {
  children?: HTMLCollection | string;
  onClick: (e?: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CartContainer = styled.div`
  display: flex;
  background: #f3f6fa;
  padding: 32px 30px;
  position: relative;
  margin-bottom: 40px;
`;

export const CartContainerDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${breakpointDown.sm`
    width: 100%;
    margin-bottom: 32px;
  `}
`;

export const CheckoutHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckoutHeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: ${fontFamily};
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }

  p {
    font-family: ${fontFamily};
    font-size: 13px;
    font-weight: 300;
    color: #929dac;
    padding-top: 4px;
    padding-bottom: 2px;
  }
`;

export const CheckoutHeaderButtons = styled.div`
  button {
    height: 36px;
    width: 36px;
    border: none;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CartContainerDetailStep = styled.div`
  padding: 24px 0 0;
  background: ${primaryWhite};
  position: relative;

  &:last-of-type {
    margin-bottom: 0;
  }

  > h2 {
    font-size: 16px;
    color: #929dac;
    margin-bottom: 12px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const CartContainerDetailStepInner = styled.div`
  position: relative;
`;

export const CartContainerDetailStepText = styled.div`
  font-family: ${fontFamily};
  max-width: 100%;
  padding-bottom: 24px;
  position: relative;

  &.price {
    padding: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F1F3F5;
    border-radius: 12px;
  }

  &.blockchain {
    
  }

  ${breakpointDown.xs`
    padding-right: 0;
  `}

  h2 {
    font-size: 28px;
    font-weight: 700;
    font-style: normal;
    padding-bottom: 8px;
  }

  p {
    color: ${primaryBlack};
    font-size: 22px;
    font-style: normal;
    font-weight: 600;

    ${breakpointDown.sm`
      word-break: break-all; 
    `}

    &.error {
      color: ${primaryError};
      padding: 8px 0;
    }
  }

  > label {
    display: block;
    font-size: 12px;
    font-weight: 300;
    font-style: normal;
    color: #929dac;
    padding-top: 12px;
    line-height: 16px;
    cursor: text;

    &.btn {
      cursor: pointer;
      line-height: 1.4;
    }

    input[type='radio'] {
      position: relative;
      line-height: 1;
      top: 2px;
      left: -2px;
    }
  }

  .blue {
    color: ${primaryColor};
  }
`;

export const CartContainerDetailEditButton = styled.button`
  background: #f2f5fd;
  color: #3066db;
  font-family: ${fontFamily};
  font-size: 16px;
  line-height: 1;
  height: 34px;
  border: none;
  padding: 8px 12px;
  position: absolute;
  right: 48px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.35s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.92;
  }
`;

export const CartContainerDetailStepButtonContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const CartContainerDetailStepForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 16px;

  .row {
    ${breakpointDown.sm`
      padding-bottom: 48px;
  `}
  }
`;

export const CartContainerDetailStepFormRow = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 16px;

  &.flex-direction-column {
    flex-direction: column;
    padding-top: 16px;

    p {
      padding-left: 0;
    }
  }

  ${breakpointDown.sm`
    flex-wrap: wrap;
  `}

  label {
    font-size: 12px;
    padding-bottom: 8px;
  }

  input[type='text'],
  input[type='number'] {
    height: 44px;

    &::placeholder {
      color: #929dac;
      font-weight: 300;
    }

    &:focus-within {
      outline: ${primaryColor} auto 2px;
    }
  }

  > div:last-of-type {
    padding-right: 0 !important;
  }
`;

export const CartContainerDetailStepFormQuarterColumnItem = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  padding-right: 16px;

  &.addressTwo {
    ${breakpointDown.sm`
      width: 100%;
    `}
  }

  ${breakpointDown.sm`
    width: 50%;
  `}

  &.error {
    label {
      color: ${primaryError};
    }

    input {
      border-color: ${primaryError};
    }
  }
`;

export const CartContainerDetailStepFormHalfColumnItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-right: 16px;

  &.error {
    label {
      color: ${primaryError};
    }

    input {
      border-color: ${primaryError};
    }
  }
`;

export const CartContainerDetailStepThreeFullColumnItem = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  padding-right: 16px;

  ${breakpointDown.sm`
    width: 100%;
    padding-right: 0;
  `}

  .pac-target-input {
    height: 44px !important;
    box-shadow: none !important;

    &::placeholder {
      color: #929dac !important;
      font-weight: 300 !important;
    }
  }

  &.error {
    label {
      color: ${primaryError};
    }

    input {
      border-color: ${primaryError};
    }
  }

  button {
    font-family: ${fontFamily};
    color: ${primaryColor};
    background: none;
    display: flex;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.2));
    border-radius: 4px;
    font-family: ${fontFamily};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
    padding: 2px 8px;
    box-shadow: 1px 2px 5px rgb(0 0 0 / 22%);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    margin-right: 8px;

    &:hover {
      background-color: ${lighten(0.1, primaryColor)};
      color: ${primaryWhite};
    }
  }
`;

export const CartContainerDetailStepFormFullColumnItem = styled.div`
  width: 100%;
  padding-right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${breakpointDown.sm`
    flex-direction: column;
    align-items: flex-start;
  `}

  input {
    width: 100% !important;
  }

  label {
    width: 160px;
    min-width: 160px;
    font-size: 14px;
    padding-bottom: 0;

    ${breakpointDown.sm`
      min-width: 100%;
      width: 100%;
      font-size: 12px; 
    `}
  }

  .pac-target-input {
    width: 100%;
    height: 44px !important;
    box-shadow: none !important;

    &::placeholder {
      color: #929dac !important;
      font-weight: 300 !important;
    }
  }

  &.error {
    label {
      color: ${primaryError};
    }

    input {
      border-color: ${primaryError};
    }
  }

  button {
    font-family: ${fontFamily};
    color: ${primaryColor};
    background: none;
    display: flex;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.2));
    border-radius: 4px;
    font-family: ${fontFamily};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
    padding: 2px 8px;
    box-shadow: 1px 2px 5px rgb(0 0 0 / 22%);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    margin-right: 8px;

    &:hover {
      background-color: ${lighten(0.1, primaryColor)};
      color: ${primaryWhite};
    }
  }
`;

export const BlueTextButton = styled.button<ButtonComponentProps>`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  border: none;
  font-family: ${fontFamily};
  color: ${primaryColor};
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.92;
  }
`;

export const BlockchainOptionsContainer = styled.div`
  border: 1px solid #cedaea;
  box-sizing: border-box;
  border-radius: 12px;
  margin-bottom: 8px;
  position: relative;
  transition: all 0.2s ease-in-out;

  .icon {
    justify-content: flex-start !important;
    align-items: center !important;
    height: 36px;
  }

  p {
    padding-left: 8px;
  }

  &.active {
    border: 1px solid #3066db;

    > label {
      cursor: default;
    }
  }

  &:not(.active) {
    &:hover {
      border: 1px solid #3066db;
    }
  }
`;

export const BlockchainContainer = styled.label`
  padding: 16px;
  display: flex;
  position: relative;
  align-items: center !important;
  justify-content: flex-start !important;
  cursor: pointer;
`;

export const BlockchainRadioContainer = styled.div`
  width: 0;
  height: 0;
  position: relative;

  input[type='radio'] {
    height: 0;
    width: 0;
  }
`;

export const BlockchainLogoContainer = styled.div`
  width: 100%;
  margin-left: 0;
  position: relative;
  display: flex;
  align-items: center;

  .icon {
    margin-right: 8px;
    user-select: none;
  }

  > span {
    font-family: ${fontFamily};
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    padding-bottom: 2px;
    user-select: none;
  }
`;

export const BlockchainDetailContainer = styled.div`
  margin-left: 8px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: absolute;
  top: 23px;
  right: 24px;

  span {
    color: #7A7F8D;
  }

  .icon {
    width: 24px;
    height: 24px;
    margin-left: 4px;
  }
`;

export const WalletOptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: none;
  padding: 0px 16px 17px;
  box-sizing: border-box;
  border-radius: 6px;
  text-align: left;
  font-family: ${fontFamily};

  div {
    width: 100%;
  }

  p {
    padding-left: 8px;
  }

  h4 {
    font-size: 14px;
    font-weight: 300;
    color: #929dac;
  }

  &.active {
    border: 1px solid #3066DB;
  }
`;

export const WalletSelectedContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #F1F3F5;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 16px 12px;
`;

export const WalletSelectedContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 12px;
  max-width: 48px;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const WalletSelectedContainerDetail = styled.div`
  font-family: ${fontFamily};

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #010306;
  }

  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #7A7F8D;

    span {
      color: #010306;
    }
  }
`;

export const WalletSelectedContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 48px;

  button[type='reset'] {
    border: none;
    outline: 0;
    background-color: transparent;
    margin: 0;
    padding: 4px 8px;
    cursor: pointer;
  }
`;

export const DepositCheckoutContainer = styled.div`
  padding: 16px;
  background: rgba(243, 246, 250, 0.5);
  border: 1px solid #cedaea;
  box-sizing: border-box;
  border-radius: 6px;
`;

export const ErrorModalContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 10px;
`;

export const CartContainerSummary = styled.div`
  padding: 18px;
  background: #F1F3F5;
  border-radius: 12px;

  label {
    font-size: 13px;
    font-weight: 400;
    color: #7A7F8D;
    display: block;
    padding-bottom: 16px;
  }
`;

export const CartContainerSummaryLineItem = styled.div`
  display: flex;
  font-family: ${fontFamily};
  padding-bottom: 16px;

  &:first-of-type {
    margin-top: 16px;
  }

  h4, h5 {
    width: 50%;
    padding-right: 8px;
    box-sizing: border-box;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1;
    color: #7A7F8D;
  }

  h5 {
    color: #010306;
  }

  &.lg {
    margin-bottom: 16px;
    h4, h5 {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;