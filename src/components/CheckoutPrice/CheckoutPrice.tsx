import React from 'react'
import { centsToDollars } from '../../utils/centsToDollars'
import Icon from '../Icon'
import { CheckoutPriceWrapper } from './styles'

interface Props {
  price: number
}

const CheckoutPrice: React.FC<Props> = ({ price }): JSX.Element => {
  return (
    <CheckoutPriceWrapper>
      <span>${centsToDollars(price)}</span>
      <Icon name='CheckmarkIcon' />
    </CheckoutPriceWrapper>
  )
}

export default CheckoutPrice
