import { useEffect, useState } from 'react';
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
import { Alert } from '../../components/Alert';

interface Props {
  widgetId: number
  price: number
  tax: number
  shippingCost: number
  subtotal: number
  handleClose: () => void
}

const CheckoutPage: React.FC<Props> = ({ widgetId, price, tax, shippingCost, subtotal, handleClose }) => {
  const [loading, setLoading]                   = useState<boolean>(true);
  const [, setOrderId]                          = useState<string>('');
  const [taxTotal, setTaxTotal]                 = useState<number>(0);
  const [, setTaxRate]                          = useState<number>(0);
  const [checkoutDisabled]                      = useState<boolean>(false);
  const [exchangeRate]                          = useState<number>(0);
  const disabledBannerVisible                   = false;
  const [widgetConfig, setWidgetConfig]         = useState<any>(null);
  const { createOrder, getWidgetConfig }        = useKadoApi()
  
  useEffect(() => {
    (async () => {
      if (widgetId) {
        try {
          const response = await getWidgetConfig(widgetId);
          if (response.success) {
            const { data } = response;
            const { widgetConfig } = data;
            setWidgetConfig(widgetConfig)
            setLoading(false)
          } else {
            // eslint-disable-next-line no-throw-literal
            throw 'failed response'              
          }
        } catch (e) {
          console.error('getWidgetConfig from api', e)
          setWidgetConfig(undefined)
          setLoading(false)
        }
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widgetId])

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
            <Fade delay={150}>
              <CartContainer>
                {widgetId && widgetConfig && (
                  <CheckoutForm
                    widgetConfig={widgetConfig}
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
                )}
                {widgetId && widgetConfig === undefined && (
                  <Alert />
                )}
              </CartContainer>
            </Fade>
          }
        </ContainerWrapper>
      </CartContainerWrapper>
    </Layout>
  )
};

export default CheckoutPage;