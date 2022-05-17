import styled from "styled-components"

export const WalletSelectWrapper = styled.div`
  padding: 15px;
  background: transparent;
`

export const WalletHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WalletTitle = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  width: 28px;
  height: 22px;
  margin-right: 10px;
`

export const WalletName = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #010306;
`

export const SubmitButton = styled.button<{isActive: boolean}>`
  background: ${({ isActive }) => !isActive ? "rgba(48, 102, 219, 0.1)" : "#3066DB"};
  border-radius: 6px;
  padding: 7px 10px;
  width: 70px;
  height: 32px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${({ isActive }) => !isActive ? "#3066DB" : "#FFFFFF"};
  border: unset;
  cursor: pointer;
`

export const WalletBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 38px;
`

export const Address = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #010306;
  margin-bottom: 5px;
`

export const BalanceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 5px;
  
  & > .balance {
    color: #7A7F8D;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }

  & > .icon {
    width: 20px;
    height: 20px;
  }

  & > .amount {
    color: #010306;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
`
