import React from 'react'
import { AlertWrapper, CloseButton } from './styles'
import AlertImg from '../../utils/assets/alert.svg'
import Icon from '../Icon';

interface Props {
  handleClose: () => void
}

const Alert: React.FC<Props> = ({ handleClose}): JSX.Element => {
  return (
    <AlertWrapper>
      <img src={AlertImg} alt='Alert' />
      <p>
        {`An error occurred setting up the widget.\nPlease try again.`}
      </p>
      
      <CloseButton type='button' title='Close' onClick={handleClose}>
        <Icon name='ModalClose' />
      </CloseButton>
    </AlertWrapper>
  )
}

export default Alert
