import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Layout from '../Layout';
import Loader from '../../components/Loader';
import Icon from '../../components/Icon';
import { ContainerWrapper } from '../../components/Global/variables';
import { useKadoApi } from '../../utils/apiServices';
import CheckoutForm from '../../components/Checkout/CheckoutForm';

import {
  CartLoader,
  CartContainerWrapper,
  CartContainer,
  CartContainerBanner,
  CheckoutDisabledBanner,
  DisabledBannerItem
} from './styles';

interface Props {
  price: number
  tax: number
  shippingCost: number
  subtotal: number
  handleClose: () => void
}

const CheckoutPage: React.FC<Props> = ({ price, tax, shippingCost, subtotal, handleClose }) => {
  const [loading, setLoading]                   = useState<boolean>(false);
  const [, setOrderId]                          = useState<string>('');
  const [taxTotal, setTaxTotal]                 = useState<number>(0);
  const [, setTaxRate]                          = useState<number>(0);
  const [checkoutDisabled]                      = useState<boolean>(false);
  const [exchangeRate]                          = useState<number>(0);
  const disabledBannerVisible                   = false;
  const { createOrder }                         = useKadoApi()

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
                taxTotal={taxTotal}
                price={price}
                subtotal={subtotal}
                tax={tax}
                shippingCost={shippingCost}
                setLoading={setLoading}
                setTaxTotal={setTaxTotal}
                setTaxRate={setTaxRate}
                setOrderId={setOrderId}
                createOrder={createOrder}
                handleClose={handleClose}
                checkoutDisabled={checkoutDisabled || disabledBannerVisible}
                exchangeRate={exchangeRate}
              />
            </CartContainer>
          }
        </ContainerWrapper>
      </CartContainerWrapper>
    </Layout>
  )
};

export default CheckoutPage;