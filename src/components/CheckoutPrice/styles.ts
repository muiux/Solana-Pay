import styled from "styled-components"
import { fontFamily } from "../Global/variables"

export const CheckoutPriceWrapper = styled.div`
  padding: 18px;
  display: flex;
  justify-content: space-between;

  background: #F1F3F5;
  border-radius: 12px;
  margin-bottom: 16px;

  & > span {
    font-family: ${fontFamily};
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    color: #010306;
  }
`