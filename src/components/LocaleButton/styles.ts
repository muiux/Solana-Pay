import styled, { keyframes } from 'styled-components';
import { fontFamily, primaryWhite } from '../Global/variables';

export const DropdownContainer = styled.div`
  position: relative;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const DropdownLabel = styled.span`
  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: 500px;
  color: ${primaryWhite};
  padding: 0px 8px;
  border-radius: 4px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;

  > span.locale-title {
    cursor: pointer;
  }

  > span.emoji {
    padding-right: 8px;
    border-bottom: 2px solid #212121;
  }
`;

const fadeInLocaleAnimation = keyframes`
  0% {
    opacity: 0;
    top: -120px;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    top: -7px;
  }
`;

export const DropdownList = styled.div`
  position: absolute;
  top: -7px;
  right: -11px;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  max-width: 80px;
  box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.12);
  animation: ${fadeInLocaleAnimation} 0.5s forwards;
`;

export const DropdownItem = styled.div`
  font-family: 13px;
  font-weight: 300;
  color: #212121;
  padding: 4px 8px;
  font-weight: bold;
  background-color: ${primaryWhite};
  display: flex;
  flex-direction: row;

  &:first-of-type {
    padding-top: 8px;
  }

	&:last-of-type {
    border-bottom: none;
    padding-bottom: 8px;
	}
`;

export const DropdownIcon = styled.div`
  padding-top: 0;
`;

export const DropdownItemIcon = styled.span`
  padding-right: 0;

  > svg {
    max-height: 24px;
    max-width: 40px;
  }
`;

export const DropdownItemText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;