import styled from 'styled-components';
import { lighten } from 'polished';
import { fontFamily, primaryColor, primaryWhite, primaryBlack, primaryError, breakpointDown } from '../Global/variables';

export const ConnectButtonContainer = styled.div`
  position: relative;
`;

export const ConnectButtonList = styled.div`
  width: calc(100% + 14px);
  display: flex;
`;

export const ConnectButtonItem = styled.button`
  width: calc(50% - 7px);
  background: ${primaryWhite};
  padding: 16px 13px;
  margin-right: 14px;
  border: 1px solid #F1F3F5;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #F1F3F5;
  }

  &:nth-of-type(2n) {
    margin-right: 0;
  }

  ${breakpointDown.sm`
    width: 100%;

    &:nth-of-type(2n) {
      margin-top: 16px;
    } 
  `}
`;

export const ConnectButtonItemInner = styled.div`
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 1;

  span {
    text-align: left;
    font-family: ${fontFamily};
    padding-left: 4px;

    h5 {
      color: ${primaryBlack};
      font-size: 16px;
      font-weight: 500;
      line-height: 1;
    }

    h6 {
      color: #7A7F8D;
      font-size: 12px;
      font-weight: 300;
      padding-top: 4px;
      padding-left: 1px;

      > span > span {
        color: #06ab6f;
        padding-left: 0;
      }
    }
  }

  svg, img {
    max-width: 30px;
    max-height: 30px;
    margin: 0 8px 0 0;
  }
`;

export const TerraConnectMenu = styled.div`
  font-family: ${fontFamily};
  width: calc(90% - 8px);
  max-width: 450px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate( -50%, -50%);
  z-index: 9999;
  background-color: ${primaryWhite};
  border-radius: 4px;
  box-shadow: 10px 10px 500px ${primaryBlack};
  border: 1px solid rgba(255,255,255, 0.2);

  &.connectType {
    padding: 40px 24px;
    left: 50%;
    top: 50%;
    transform: translate( -50%, -50%);

    ${breakpointDown.xs`
      width: calc(90% - 8px);
    `}
  }

  &.connected {
    width: 100%;
    position: absolute !important;
    max-width: 200px !important;
    top: 96px !important;
    border: none !important;

    ${breakpointDown.xs`
      max-width: unset !important;
      border-radius: 4px;
    `}
  }

  .connectType--close__modal {
    position: absolute;
    top: 6px;
    right: 4px;
    background: none;
    border: none;
    outline: 0;
    cursor: pointer;
  }

  .connectType--title {
    font-family: ${fontFamily};
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    color: ${primaryBlack};
    padding-bottom: 24px;
    margin-bottom: 24px;
    text-align: center;
    border-bottom: 0.1em solid #CEDAEA;

    h2 {
      color: #100E1D;
      font-weight: 700;
      font-size: 36px;
      padding-bottom: 16px;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    }

    svg {
      width: 300px !important;
      height: 50px !important;
      object-fit: contain !important;
    }
  }

  ${breakpointDown.xs`
    padding: 0;
    width: 100%;

    a {
      border-radius: 0 !important;
      margin-bottom: 0 !important;
    }
  `}

  > .section {
    padding: 4px 8px;
  }
`;

export const TerraConnectMenuList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;

  hr {
    b
  }
`;

export const TerraConnectMenuListItem = styled.li`
  padding: 24px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;

  > p {
    font-weight: 600;
  }

  > span {
    font-size: 12px;
  }
`;

export const TerraConnectMenuListViewOnExplorerBtn = styled.a`
  font-family: ${fontFamily};
  font-size: 16px;
  text-decoration: none;
  border: none;
  background: none;
  display: block;
  width: 100%;
  text-align: center;
  color: ${primaryColor};
  padding: 24px 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${lighten(0.1, primaryColor)}
  }
`;

export const TerraConnectMenuWalletItem = styled.a`
  font-family: ${fontFamily};
  font-size: 16px;
  text-decoration: none;
  border: 1px solid #E2E9F2;
  background: rgb(234, 240, 251) !important;
  display: block;
  width: 100%;
  text-align: center;
  color: ${primaryBlack} !important;
  padding: 12px 4px 12px 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  max-width: 420px;
  margin: auto;
  margin-bottom: 8px;
  border-radius: 4px;

  > span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .image-container {
      background: ${primaryWhite};
      height: 52px;
      width: 52px;
      border-radius: 50%;
      border: 1px solid rgb(234, 240, 251);
      box-shadow: 1px 3px 5px rgb(0 0 0 / 8%);

      img {
        padding: 12px;
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }

    .CaretRightIcon {
      svg {
        path {
          fill: ${primaryBlack} !important;
        }
      }
    }
  }

  &:hover {
    color: ${lighten(0.1, primaryColor)} !important;
    background: ${primaryWhite} !important;
    background: white;
  }

  &.desktop {
    ${breakpointDown.xs`
      display: none;
    `}
  }

`;

export const TerraConnectMenuListDisconnectBtn = styled.button`
  font-family: ${fontFamily};
  display: block;
  border: none;
  background: ${primaryBlack}
  width: 100%;
  color: ${primaryError};
  font-size: 10px;
  padding: 6px 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-bottom: 0 !important;

  ${breakpointDown.xs`
    font-size: 12px;
    padding: 8px 4px;
  `}

  &:hover {
    color: ${primaryWhite};
    background: ${primaryColor};
  }

  &:focus {
    outline: 0;
    appearance: none;
  }
`;