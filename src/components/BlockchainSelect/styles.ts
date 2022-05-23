import styled from 'styled-components'
import { fontFamily } from '../Global/variables'

export const BlockchainSelectWrapper = styled.div`
  background: #FFFFFF;
  border: 1px solid #E5E5EA;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border .3s;

  &:hover {
    border: 1px solid #3066DB;
  }
`

export const Logo = styled.img`
  height: 22px;
`

export const BlockchainSelectAction = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 20px;
`

export const PayWithWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;

  & > span {
    white-space: nowrap;
    color: #7A7F8D;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }

  & > img {
    height: 24px;
  }
`

export const SubmitButton = styled.button<{submitted: boolean}>`
  background: ${({ submitted }) => submitted ? 'rgba(48, 102, 219, 0.1)' : '#3066DB'};
  border-radius: 6px;
  padding: 7px;
  width: 70px;

  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${({ submitted }) => submitted ? '#3066DB' : '#FFFFFF'};
  border: unset;
  cursor: pointer;
`
