import React, { useState, useEffect, useRef } from 'react';
import Fade from 'react-reveal/Fade';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { useStores } from '../../hooks/useStores';
import Layout from '../Layout';
import Loader from '../../components/Loader';
import Icon from '../../components/Icon';
import { convertCentsToDollarsPrice } from '../../utils/centsToDollars';
import { ContainerWrapper } from '../../components/Global/variables';
import { createOrder, currencyConversion } from '../../utils/apiServices';

import CheckoutForm from '../../components/Checkout/CheckoutForm';
import NotificationBanner from '../../components/Global/Notification';

import {
  CartLoader,
  CartContainerWrapper,
  CartContainer,
  CartContainerBanner,
  CheckoutDisabledBanner,
  DisabledBannerItem
} from './styles';

const CheckoutPage = observer(() => {
  const [cart, setCart]                         = useState<any[]>([]);
  const [loading, setLoading]                   = useState<boolean>(false);
  const [orderId, setOrderId]                   = useState<string>('');
  const [checkoutSuccessModalActive, setCheckoutSuccessModalActive] = useState<boolean>(false);
  const [cartPriceTotal]                        = useState<number>(2199);
  const [taxTotal, setTaxTotal]                 = useState<number>(0);
  const [taxRate, setTaxRate]                   = useState<number>(0);
  const [platformFee]                           = useState<number>(0);
  const [zincPriceTotal, setZincPriceTotal]     = useState<number>(0);
  const [prize, setPrize]                       = useState<{name: string, discount?: { location: string, type: string, value: number}}>({name: '', discount: { location: '', type: '', value: 0 }});
  const [notificationError, setNotificationError]  = useState<boolean>(false);
  const { userStore } = useStores();
  const [checkoutDisabled, setCheckoutDisabled] = useState<boolean>(false);
  const [checkoutSuccessTitle, setCheckoutSuccessTitle] = useState<string>('');
  const [checkoutSuccessIcon, setCheckoutSuccessIcon] = useState<any>();
  const [checkoutSuccessSubtitle, setCheckoutSuccessSubtitle] = useState<string>('');
  const [checkoutSuccessChild, setCheckoutSuccessChild] = useState<any>();
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const { auth, user } = userStore;

  // Shipping Address
  const [state, setState] = useState<string>('');

  // Payment Method
  const [walletAddress, setWalletAddress]   = useState<string>('');
  const [userUstBalance, setUserUstBalance] = useState<number>(0);
  const [usdcBalance, setUsdcBalance]       = useState<number>(0);
  let loadingTimer: any = useRef();
  let isMountedRef: any = useRef();

  useEffect(() => {
    // TODO: Why do we need this?
    isMountedRef.current = true;

    if (isMountedRef.current) {
      if (user && user.address) {
        setWalletAddress(user.address);
      } else {
        setWalletAddress('');
      }

      if (user && user.balances && user.balances.ust) {
        setUserUstBalance(user.balances.ust);
      } else {
        setUserUstBalance(0);
      }
    }

    return () => {
      isMountedRef.current = false;
    }
  }, [user]);

  const disabledBannerVisible = false;

  return (
    <Layout>
      <CartContainerWrapper>
        <ContainerWrapper>
  
          {disabledBannerVisible &&
            <Fade delay={1000}>
              <CartContainerBanner>
                <CheckoutDisabledBanner>
                  <DisabledBannerItem>
                    <Icon name='AccessDeniedIcon'/>
                    This is an unknown error. Please try again soon.
                  </DisabledBannerItem>
                </CheckoutDisabledBanner>
              </CartContainerBanner>
            </Fade>
          }
          
          {loading &&
            <Fade delay={150}>
              <CartContainer>
                <CartLoader>
                  <Loader />
                  <p>Checkout Loading..</p>
                </CartLoader>
              </CartContainer>
            </Fade>
          }

          {!loading &&
            <CartContainer>
              <CheckoutForm
                user={user}
                auth={auth}
                cart={cart}
                walletAddress={walletAddress}
                userUstBalance={userUstBalance}
                zincPriceTotal={zincPriceTotal}
                taxTotal={taxTotal}
                cartPriceTotal={cartPriceTotal}
                setLoading={setLoading}
                onSetState={setState}
                setTaxTotal={setTaxTotal}
                setTaxRate={setTaxRate}
                setOrderId={setOrderId}
                setCheckoutSuccessModalActive={setCheckoutSuccessModalActive}
                createOrder={createOrder}
                checkoutDisabled={checkoutDisabled || disabledBannerVisible}
                setCheckoutSuccessTitle={setCheckoutSuccessTitle}
                setCheckoutSuccessIcon={setCheckoutSuccessIcon}
                setCheckoutSuccessSubtitle={setCheckoutSuccessSubtitle}
                setCheckoutSuccessChild={setCheckoutSuccessChild}
                exchangeRate={exchangeRate}
              />
            </CartContainer>
          }

          {notificationError &&
            <NotificationBanner
              success={false}
              error={true}
              title='An error occurred'
              subtitle={'Please try again'}
              onClose={() => setNotificationError(false)}
            />
          }
        </ContainerWrapper>
      </CartContainerWrapper>
    </Layout>
  )
});

export default CheckoutPage;