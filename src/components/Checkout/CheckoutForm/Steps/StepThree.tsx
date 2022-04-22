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

interface IStepThreeProps {
  step: number;
  selectedBlockchain: string;
  paymentMethod: string;
  checkoutLoading: boolean;
  cartPriceTotal: number;
  transactionAddress: string;
  config: any;
  checkoutDisabled: boolean;
  convertCentsToDollarsPrice: (val: number) => string;
  handleCheckout: (e: any) => void;
}

const StepThree = (props: IStepThreeProps) => {
  const {
    step,
    selectedBlockchain,
    paymentMethod,
    checkoutLoading,
    cartPriceTotal,
    transactionAddress,
    config,
    checkoutDisabled,
    convertCentsToDollarsPrice,
    handleCheckout
  } = props;

  console.log('cartPriceTotal: ', cartPriceTotal);

  return step === 3 ? (
    <CartContainerDetailStep>
      <h2>Summary</h2>
      <CartContainerDetailStepInner className={step === 3 ? 'active' : ''}>
        <CartContainerDetailStepText>
          {paymentMethod === 'deposit' ? (
            <>
              <label>
                Send the funds to the address below. As soon as the deposit is
                received, the purchase will be confirmed automatically.
              </label>
              <br />
              {selectedBlockchain === 'terra' ? (
                <DepositCheckoutContainer>
                  <p>Send ${convertCentsToDollarsPrice(cartPriceTotal)} UST</p>
                  <br />
                  <p>⚠️ Note: Please include both a wallet address and memo address.</p>
                  <p>Address: {config.lcdClient.ustAddress}</p>
                  <p>Memo: {config.lcdClient.ustMemo}</p>
                </DepositCheckoutContainer>
              ) : (
                <DepositCheckoutContainer>
                  <p>Send ${convertCentsToDollarsPrice(cartPriceTotal)} USDC</p>
                  <br />
                  <p>{transactionAddress}</p>
                </DepositCheckoutContainer>
              )}
            </>
          ) : (
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
                <h5>$19.99</h5>
              </CartContainerSummaryLineItem>
              <CartContainerSummaryLineItem>
                <h4>Shipping</h4>
                <h5>$0.00</h5>
              </CartContainerSummaryLineItem>
              <CartContainerSummaryLineItem>
                <h4>Tax</h4>
                <h5>$1.75</h5>
              </CartContainerSummaryLineItem>
              <CartContainerSummaryLineItem className='lg'>
                <h4>Total</h4>
                <h5>$21.74</h5>
              </CartContainerSummaryLineItem>
              <CartContainerDetailStepButtonContainer>
                {checkoutLoading ? (
                  <BlueButton
                    className="full disabled"
                    onClick={(e) => e.preventDefault()}
                  >
                    Loading..
                  </BlueButton>
                ) : (
                  <BlueButton
                    className={`full ${checkoutDisabled && 'disabled'}`}
                    onClick={(e) => handleCheckout(e)}
                  >
                    Checkout (${convertCentsToDollarsPrice(cartPriceTotal)}
                    &nbsp;${selectedBlockchain === 'terra' ? `UST` : `USDC`})
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
