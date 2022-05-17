import React from 'react'
import { AlertWrapper } from './styles'
import AlertImg from '../../utils/assets/alert.svg'

const Alert: React.FC = (): JSX.Element => {
  return (
    <AlertWrapper>
      <img src={AlertImg} alt='Alert' />
      <p>
        {`An error occurred setting up the widget.\nPlease try again.`}
      </p>
    </AlertWrapper>
  )
}

export default Alert
