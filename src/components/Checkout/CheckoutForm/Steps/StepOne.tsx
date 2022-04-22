import Icon from '../../../Icon';
import {
  CartContainerDetailStep,
  CartContainerDetailStepInner,
  CartContainerDetailStepText,
} from '../styles';
import { convertCentsToDollarsPrice } from '../../../../utils/centsToDollars';

interface IStepTwoProps {
  step?: number;
  completedSteps: number[];
  cartPriceTotal: number;
}

const StepOne = ({ cartPriceTotal }: IStepTwoProps) => {

  return (
    <CartContainerDetailStep>
      <h2>Payment Overview</h2>
      <CartContainerDetailStepInner className='active'>
        <CartContainerDetailStepText className='price'>
          <p className='price'>${convertCentsToDollarsPrice(cartPriceTotal)}</p>
          <Icon name='CheckmarkIcon' />
        </CartContainerDetailStepText>
      </CartContainerDetailStepInner>
    </CartContainerDetailStep>
  );
};

export default StepOne;
