import styled from 'styled-components';
import {
  breakpointDown,
  fontFamily,
  primaryColor,
  primaryWhite,
} from '../../components/Global/variables';

export const CartLoader = styled.div`
  background: transparent;
  min-height: 200px;
  max-width: 420px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  border-radius: 4px;
  font-family: ${fontFamily};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &.no-cart {
    max-width: 100%;
    padding: 48px 64px 56px;
  }

  p {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    padding-top: 16px;
    padding-bottom: 16px;
    position: absolute;
    bottom: 8px;
    transform: translateX(50%);
    right: 50%;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    padding: 16px 16px 8px 16px;

    &:last-of-type {
      padding-bottom: 0;
    }

    a {
      color: ${primaryColor};
      text-decoration: none;
      font-weight: 700;
      transition: all 0.2s ease-in-out;

      &:hover {
        opacity: 0.92;
      }
    }
  }

  .icon {
    width: 52px;
    height: 52px;
    margin-bottom: 8px;
  }
`;

export const CartContainerWrapper = styled.div`
  font-family: ${fontFamily};
`;

export const CartTextHeader = styled.div`
  font-family: ${fontFamily};
  padding: 40px 0 60px;
  position: relative;
  text-align: center;

  h1 {
    color: ${primaryWhite};
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    margin: 0;
    padding: 0;
  }

  h6 {
    color: ${primaryWhite};
    opacity: 0.7;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    margin: 0;
    padding: 0;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${primaryWhite};
  padding: 32px;
  width: 480px;
  position: relative;
  border-radius: 18px;

  ${breakpointDown.sm`
    flex-wrap: wrap-reverse;
  `}

  ${breakpointDown.xs`
    width: calc(100% + 48px);
    position: relative;
    min-width: 100%;
  `}
`;

export const CloseButton = styled.button`
  height: 36px;
  width: 36px;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 32px;
`

export const CheckoutHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  h2 {
    font-family: ${fontFamily};
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }

  p {
    font-family: ${fontFamily};
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: #7A7F8D;
    padding-top: 4px;
    padding-bottom: 2px;
  }
`;

export const CheckoutLabel = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #7A7F8D;
  margin-bottom: 10px;
`

export const WalletsContainer = styled.div`
  border: 1px solid #E5E5EA;
  border-radius: 12px;
  margin-bottom: 16px;

  & > div {
    border-bottom: 1px solid #E5E5EA;

    &:last-child {
      border: unset;
    }
  }
`

export const CheckoutButton = styled.button`
  background: #3066DB;
  border-radius: 10px;
  color: #FFFFFF;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  border: unset;
  cursor: pointer;

  width: 100%;
  height: 60px;
`