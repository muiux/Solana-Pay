import React from 'react'
import { BlockchainSelectWrapper, Logo, BlockchainSelectAction, PayWithWrapper, SubmitButton } from './styles'

interface Props {
  name: string
  logo: string
  payWith: {
    logo: string
    denom: string
  }
  selected: boolean
  handleSelect: () => void
}

const BlockchainSelect: React.FC<Props> = ({ logo, payWith, selected, handleSelect }): JSX.Element => {

  function renderPayWith () {
    return (
      <PayWithWrapper>
        <span>Pay with</span>
        <img src={payWith.logo} alt="" />
      </PayWithWrapper>
    )
  }
  return (
    <BlockchainSelectWrapper>
      <Logo src={logo} alt="" />
      <BlockchainSelectAction>
        {renderPayWith()}
        <SubmitButton onClick={handleSelect} submitted={selected}>
          {selected ? "Change" : "Select"}
        </SubmitButton>
      </BlockchainSelectAction>
    </BlockchainSelectWrapper>
  )
}

export default BlockchainSelect
