import styled from "styled-components"

export const AlertWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;

  p {
    font-style: normal;
    font-weight: 450;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #7A7F8D;
    white-space: pre-line;
    margin-bottom: 20px;
  }
`

export const CloseButton = styled.button`
  height: 36px;
  width: 36px;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 32px;
`
