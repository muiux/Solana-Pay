import { BlueButton } from '../../../Global/variables';
import {
  CartContainerDetailStep,
  CartContainerDetailStepInner,
  CartContainerDetailStepText,
  CartContainerDetailStepButtonContainer,
  DepositCheckoutContainer,
  CartContainerSummary,
  CartContainerSummaryLineItem
} from '../styles';
import { centsToDollars } from '../../../../utils/centsToDollars';
import config from '../../../../utils/config';

interface IStepThreeProps {
  step: number;
  blockchain: string;
  paymentMethod: string;
  checkoutLoading: boolean;
  subtotal: number;
  tax: number;
  shippingCost: number;
  price: number;
  transactionAddress: string;
  checkoutDisabled: boolean;
  handleCheckout: (e: any) => void;
}

const StepThree = (props: IStepThreeProps) => {
  const {
    step,
    blockchain,
    paymentMethod,
    checkoutLoading,
    subtotal,
    tax,
    shippingCost,
    price,
    transactionAddress,
    checkoutDisabled,
    handleCheckout
  } = props;

  return step === 3 ? (
    <CartContainerDetailStep>
      <h2>Summary</h2>
      <CartContainerDetailStepInner className={step === 3 ? 'active' : ''}>
        <CartContainerDetailStepText>
          {paymentMethod === 'deposit' && (
            <CartContainerSummary>
              <label>
                Send funds to the address below. As soon as the deposit is
                received, the purchase will be confirmed.
              </label>
              <br />
              {blockchain === 'terra' ? (
                <DepositCheckoutContainer>
                  <p>Send ${centsToDollars(price)} UST</p>
                  <br />
                  <p>⚠️ Note: Please include both a wallet address and memo address.</p>
                  <p>Address: {config.lcdClient.ustAddress}</p>
                  <p>Memo: {config.lcdClient.ustMemo}</p>
                </DepositCheckoutContainer>
              ) : (
                <DepositCheckoutContainer>
                  <p>Send ${centsToDollars(price)} USDC</p>
                  <br />
                  <p>{transactionAddress}</p>
                </DepositCheckoutContainer>
              )}
            </CartContainerSummary>
          )}

          {paymentMethod === 'wallet' && (
            <CartContainerSummary>
              <label>
                Click below to prompt your selected wallet to pay for this order.
              </label>
              {/* TODO: Only show if detect Wallet Connect / mobile in use */}
              {/* <label>
                Note: if using Desktop browser linked to a Mobile device for payment, please open your device to confirm this purchase.
              </label> */}
              <CartContainerSummaryLineItem>
                <h4>Subtotal</h4>
                <h5>${centsToDollars(subtotal)}</h5>
              </CartContainerSummaryLineItem>
              <CartContainerSummaryLineItem>
                <h4>Shipping</h4>
                <h5>${centsToDollars(shippingCost)}</h5>
              </CartContainerSummaryLineItem>
              <CartContainerSummaryLineItem>
                <h4>Tax</h4>
                <h5>${centsToDollars(tax)}</h5>
              </CartContainerSummaryLineItem>
              <CartContainerSummaryLineItem className='lg'>
                <h4>Total</h4>
                <h5>${centsToDollars(price)}</h5>
              </CartContainerSummaryLineItem>
              <CartContainerDetailStepButtonContainer>
                {checkoutLoading ? (
                  <BlueButton
                    className='full disabled'
                    onClick={(e) => e.preventDefault()}
                  >
                    Loading..
                  </BlueButton>
                ) : (
                  <BlueButton
                    className={`full ${checkoutDisabled && 'disabled'}`}
                    onClick={(e) => handleCheckout(e)}
                  >
                    Checkout
                  </BlueButton>
                )}
              </CartContainerDetailStepButtonContainer>
            </CartContainerSummary>
          )}
        </CartContainerDetailStepText>
      </CartContainerDetailStepInner>
    </CartContainerDetailStep>
  ) : null;
};

export default StepThree;
