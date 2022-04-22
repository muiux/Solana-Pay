import styled, { css } from 'styled-components';

const primaryColor:   string = '#3066DB';
const primaryError:   string = '#FF4D35';
const primarySuccess: string = '#4AC77C';
const primaryBlack:   string = '#212121';
const primaryWhite:   string = '#FFFFFF';

const fontFamily: string = 'sofia-pro, Open Sans, Helvetica';

export { primaryColor,primaryError, primarySuccess, primaryBlack, primaryWhite, fontFamily };

const breakpoints = {
  xs: '600px',
  sm: '768px',
  md: '992px',
  lg: '1200px'
};

export const breakpointDown = Object.keys(breakpoints).reduce(
  (accumulator: any, label: string) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

export const SimpleContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const ContainerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  box-sizing: border-box;

  @media screen and (max-width: 1200px) {
    max-width: 960px;
  }

  @media screen and (max-width: 992px) {
    max-width: 836px !important;
  }

  @media screen and (max-width: 768px) {
    max-width: 680px !important;
  }

  ${breakpointDown.xs`
    width: 100%;
    max-width: 600px !important;
    padding-left: 24px !important;
    padding-right: 24px !important;
  `}
`;

export const BlueButton = styled.button`
  text-align: center;  
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: ${primaryColor};
  border-radius: 8px;
  font-size: 16px;
  font-family: ${fontFamily};
  font-weight: 500;
  color: ${primaryWhite};
  padding: 8px 16px;
  width: 100%;
  height: 60px;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  transform: translateY(0);
  transition: all 0.2s ease-in-out;

  &.disabled, &[disabled] {
    background: #F1F3F5;
    color: #B0BAC5;
    cursor: default;
  }

  &.full {
    max-width: 100%;
    width: 100%;
  }

  &.full-xs {
    height: 36px;
    background: #f2f5fd;
    color: #3066DB;

    ${breakpointDown.xs`
      width: 100%;
    `}
  }
`;

export const GrayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.01);
  background: #f2f5fd;
  border-radius: 8px;
  font-size: 16px;
  font-family: ${fontFamily};
  font-weight: 500;
  color: ${primaryColor};
  padding: 8px 16px;
  width: 200px;
  height: 54px;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  transform: translateY(0);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const BlackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: ${primaryBlack};
  border-radius: 8px;
  font-size: 16px;
  font-family: ${fontFamily};
  font-weight: 500;
  color: ${primaryWhite};
  padding: 8px 16px;
  width: 200px;
  height: 54px;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  transform: translateY(0);
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-3px);
  }

  &:disabled {
    transform: translateY(0);
  }
`;

export const customSelectDropdownStyles = {
  placeholder: (provided, state) => ({
    ...provided,
    fontFamily: 'sofia-pro',
    color: '#000'
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: 'sofia-pro',
    background: '#FFF',
    color: '#000',
    cursor: 'pointer',
    borderBottom: '1px solid #D8D8D8'
  }),
  control: (provided, state) => ({
    width: 200,
    display: 'flex',
    fontFamily: 'sofia-pro',
    cursor: 'pointer',
    border: '1px solid #D8D8D8',
    borderRadius: 4,
    maxHeight: 60
  }),
  singleValue: (provided, state) => ({
    ...provided,
    width: 200,
    fontFamily: 'sofia-pro',
    color: '#000',
    cursor: 'pointer',
    overflow: 'visible',
    fontSize: 24,
    maxHeight: 60,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 2,
    transform: 'none',
    top: 0,
  }),
  menu: (provided, state) => ({
    ...provided,
    width: 200,
    fontFamily: 'sofia-pro',
    background: '#FFF'
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
    fontFamily: 'sofia-pro',
  }),
}