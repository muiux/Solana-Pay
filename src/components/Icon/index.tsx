import { FC } from 'react';
import { KadoIconContainer } from './styles';
import USDCIconPNG from '../../utils/assets/usdc_icon.png';

interface Props {
  name: string;
  size?: string;
}

const Icon: FC<Props> = ({ name, size }) => (
  <KadoIconContainer className={`${name} icon ${size && size}`}>
    {renderIcon(name)}
  </KadoIconContainer>
);

export const KadoPayLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="400.682" height="164.474" viewBox="0 0 400.682 164.474">
    <title>Kado Pay</title>
    <g transform="translate(-15960 -9880)">
      <path d="M17.94-81.535.69,0H16.56l6.555-30.935H37.49C55.89-31.05,69-41.515,69-59c0-13.225-9.89-22.54-24.495-22.54Zm22.885,13.8c8.165,0,11.845,4.025,11.845,9.89,0,8.74-6.555,13.225-15.3,13.225H25.99l5.06-23.115ZM94.3-44.275c6.785,0,10.81,4.6,10.81,12.075,0,12.535-6.9,20.01-14.72,20.01-6.785,0-11.04-4.715-11.04-12.535C79.35-33.925,84.525-44.275,94.3-44.275ZM110.86-56.58l-1.38,6.44c-1.495-2.99-5.98-7.82-16.445-7.82-16.33,0-28.865,14.6-28.865,33.81,0,13.915,8.165,25.185,22.08,25.185A17.881,17.881,0,0,0,101.43-6.9c-.115,1.38-.23,3.1-.23,4.255A21.255,21.255,0,0,0,101.315,0H115.46a18.129,18.129,0,0,1-.115-2.185A52.383,52.383,0,0,1,116.38-12.42l9.315-44.16Zm27.37,78.43,50.14-78.43H171.235l-19.09,31.74-7.59-31.74h-16.1l12.42,47.61-19.55,30.82Z" transform="translate(16172.312 9999.04)"/>
      <g transform="translate(15960 9880)">
        <path d="M221.548,157.376a85.62,85.62,0,0,0,4.686-41.2c-3.333-23.862-16.089-42.2-39.843-55.207-30.407-16.654-71.485-10.786-96.01,13.718-13.616,13.6-21.872,36.166-10.932,52,7.929,11.477,23.24,15.635,32.251,26.283,11.267,13.313,10.406,33.86,21.594,47.239,9.917,11.858,27.772,15.088,42.446,10.225C188,206.367,210.173,188.43,221.548,157.376Z" transform="translate(-74.389 -51.521)" fill="#5493f7" opacity="0.75"/>
        <path d="M178.99,213.42c12.26-4.063,34.434-22,45.809-53.054,4.821-13.158,7.45-25.826,4.686-41.2-9.132-50.793-71.33,14.529-82.056,21.159-21.167,13.081-27.011,41.769-11.93,61.561q.522.685,1.046,1.313C146.461,215.051,164.316,218.281,178.99,213.42Z" transform="translate(-77.64 -54.511)" fill="#2043b5" opacity="0.8"/>
        <path d="M196.055,69.616a85.619,85.619,0,0,0-41.2-4.686c-23.862,3.333-42.2,16.089-55.208,39.843-16.654,30.407-10.785,71.485,13.719,96.01,13.6,13.616,36.165,21.872,52,10.932,11.477-7.93,15.635-23.24,26.283-32.252,13.313-11.267,33.86-10.405,47.239-21.593,11.858-9.917,15.087-27.772,10.225-42.446C245.046,103.165,227.109,80.991,196.055,69.616Z" transform="translate(-75.365 -52.302)" fill="#3573ec" opacity="0.7"/>
        <path d="M33.033,0,22.484-21.329,15.4-14.861,12.243,0H.154L11.7-54.593H23.87L19.327-33.341,42.581-54.593H59.367L31.955-29.8,47.509,0Z" transform="translate(55.618 106.448)" fill="#fff" />
      </g>
    </g>
  </svg>
);

function renderIcon(name: string) {
  switch (name) {
    case 'KadoPayLogoBlack':
      return <KadoPayLogoBlack />;
    case 'KadoPayLogoWhite':
      return <KadoPayLogoWhite />;
    case 'LunaLogoCircle':
      return <LunaLogoCircle />;
    case 'TerraUsdLogo':
      return <TerraUsdLogo />;

    case 'WalletIcon':
      return <WalletIcon />;
    case 'WalletIconV2':
      return <WalletIconV2 />;
    case 'WalletIconV3':
      return <WalletIconV3 />;
    case 'VisaLogo':
      return <VisaLogoIcon />;
    case 'AmazonLogo':
      return <AmazonLogo />;
    case 'AmazonLogoBlack':
      return <AmazonLogoBlack />;
    case 'LightningIcon':
      return <LightningIcon />;
    case 'PlusIcon':
      return <PlusIcon />;
    case 'AnalyticsIcon':
      return <AnalyticsIcon />;

    // Figma Icon Assets
    case 'MailIcon':
      return <MailIcon />;
    case 'LockIcon':
      return <LockIcon />;
    case 'DollarIcon':
      return <DollarIcon />;
    case 'ClockIcon':
      return <ClockIcon />;
    case 'GlobeIcon':
      return <GlobeIcon />;
    case 'GlobeIconV2':
      return <GlobeIconV2 />;
    case 'PaperstackIcon':
      return <PaperstackIcon />;
    case 'CouponIcon':
      return <CouponIcon />;
    case 'CloudDownloadIcon':
      return <CloudDownloadIcon />;
    case 'PhoneIcon':
      return <PhoneIcon />;
    case 'MoneyCoinsIcon':
      return <MoneyCoinsIcon />;
    case 'ShieldIcon':
      return <ShieldIcon />;
    case 'CartIcon':
      return <CartIcon />;
    case 'ShoppingCartIcon':
      return <ShoppingCartIcon />;
    case 'ShoppingCartIconV2':
      return <ShoppingCartIconV2 />;
    case 'MobileMenuIcon':
      return <MobileMenuIcon />;

    // Carets, Arrows
    case 'ModalClose':
      return <ModalClose />;
    case 'NextArrowIcon':
      return <NextArrowIcon />;
    case 'PrevArrowIcon':
      return <PrevArrowIcon />;
    case 'CaretDownIcon':
      return <CaretDownIcon />;
    case 'CaretRightIcon':
      return <CaretRightIcon />;
    case 'OrderFilterIcon':
      return <OrderFilterIcon />;
    case 'RepurchaseActionIcon':
      return <RepurchaseActionIcon />;
    case 'SignInSuccessIcon':
      return <SignInSuccessIcon />;
    case 'AccessDeniedIcon':
      return <AccessDeniedIcon />;
    case 'ChangeEmailIcon':
      return <ChangeEmailIcon />;
    case 'ChangePasswordIcon':
      return <ChangePasswordIcon />;
    case 'CreateWalletIcon':
      return <CreateWalletIcon />;
    case 'DisconnectIcon':
      return <DisconnectIcon />;
    case 'InfoIcon':
      return <InfoIcon />;
    case 'LocationIcon':
      return <LocationIcon />;
    case 'IDIcon':
      return <IDIcon />;
    case 'GiftCardSuccessIcon':
      return <GiftCardSuccessIcon />;
    case 'CheckmarkIcon':
      return <CheckmarkIcon />;
    case 'MagnifierIcon':
      return <MagnifierIcon />;
    case 'OrderCloseIcon':
      return <OrderCloseIcon />;
    case 'QuantityPlusIcon':
      return <QuantityPlusIcon />;
    case 'QuantityMinusIcon':
      return <QuantityMinusIcon />;
    case 'StarIcon':
      return <StarIcon />;
    case 'MarketPlaceIcon':
      return <MarketPlaceIcon />;
    case 'PriceFilterIcon':
      return <PriceFilterIcon />;
    case 'StarFilterIcon':
      return <StarFilterIcon />;
    case 'DoubleCheckIcon':
      return <DoubleCheckIcon />;
    case 'OrderConfirmationIcon':
      return <OrderConfirmationIcon />;
    case 'OrderDetailIcon':
      return <OrderDetailIcon />;
    case 'ShipmentIcon':
      return <ShipmentIcon />;
    case 'FunnelIcon':
      return <FunnelIcon />;
    case 'SwapIcon':
      return <SwapIcon />;
    case 'DepositIcon':
      return <DepositIcon />;
    case 'WithdrawIcon':
      return <WithdrawIcon />;
    case 'LunaLogoIcon':
      return <LunaLogoIcon />;
    case 'WheelIndicator':
      return <WheelIndicator />;
    case 'SpinnerFeeIcon':
      return <SpinnerFeeIcon />;
    case 'SpinnerWaitlistIcon':
      return <SpinnerWaitlistIcon />;
    case 'SpinnerGetLunaIcon':
      return <SpinnerGetLunaIcon />;
    case 'SpinnerReferralIcon':
      return <SpinnerReferralIcon />;
    case 'TerraLogo':
      return <TerraLogo />;
    case 'SolanaLogo':
      return <SolanaLogo />;
    case 'StellarLogo':
      return <StellarLogo />;
    case 'USDCIcon':
      return <USDCIcon />;
    case 'HeaderShoppingCart':
      return <HeaderShoppingCart />;
    case 'ProductHeaderAll':
      return <ProductHeaderAll />;
    case 'CloudIcon':
      return <CloudIcon />;
    case 'PrizeTBDIcon':
      return <PrizeTBDIcon />;
    case 'TwitterIcon':
      return <TwitterIcon />;
    case 'NotificationClose':
      return <NotificationClose />;
    case 'LinkOutIcon':
      return <LinkOutIcon />;
    case 'USFlag':
      return <USFlag />;
    case 'CAFlag':
      return <CAFlag />;
    case 'UKFlag':
      return <UKFlag />;
    case 'DEFlag':
      return <DEFlag />;
    case 'MXFlag':
      return <MXFlag />;
    default:
      return 'foo';
  }
}

export const KadoPayLogoBlack = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={673.3}
    height={175.3}
    viewBox="0 0 673.3 175.3"
    overflow="visible"
  >
    <path
      d="M156.8 112.8c5.1-14 7.1-29.1 5-43.9-3.6-25.4-17.1-45-42.5-58.8C87-7.7 43.2-1.4 17 24.7 2.5 39.2-6.3 63.2 5.4 80.1c8.5 12.2 24.8 16.7 34.4 28 12 14.2 11.1 36.1 23 50.3 10.6 12.6 29.6 16.1 45.2 10.9 13.1-4.3 36.7-23.4 48.8-56.5z"
      fill="#5493f7"
      opacity={0.75}
    />
    <path
      d="M108 169.4c13.1-4.3 36.7-23.4 48.8-56.5 5.1-14 7.9-27.5 5-43.9-9.7-54.1-76 15.5-87.5 22.6-22.6 13.9-28.8 44.5-12.7 65.6.4.5.7 1 1.1 1.4 10.6 12.5 29.7 15.9 45.3 10.8z"
      fill="#2043b5"
      opacity={0.8}
    />
    <path
      d="M128.6 18.5c-14-5.1-29.1-7.1-43.9-5-25.4 3.6-45 17.1-58.8 42.5-17.8 32.3-11.5 76.1 14.6 102.3C55 172.8 79 181.6 95.9 169.9c12.2-8.5 16.7-24.8 28-34.4 14.2-12 36.1-11.1 50.3-23 12.6-10.6 16.1-29.6 10.9-45.2-4.3-13.1-23.4-36.7-56.5-48.8z"
      fill="#3573ec"
      opacity={0.7}
    />
    <path
      d="M99.6 125.4l-12.9-26-8.6 7.9-3.9 18.1H59.5l14.1-66.6h14.8l-5.5 25.9 28.4-25.9h20.5L98.3 89l19 36.4H99.6z"
      fill="#FFF"
    />
    <g>
      <path
        fill="#000"
        d="M310.9 57.6l-29.2 33.3 21.6 33.8h-17.5l-16.8-27-4.8 27h-13.5l11.8-67.1H276l-5 27.7 23.7-27.7h16.2zM347.7 79.2h12.8l-8 45.5h-12.8l1.1-6.4c-3.8 4.6-10.1 7.6-16.3 7.6-12.6 0-20.2-9.7-17.7-23.9 2.5-14.1 13.3-24 26.4-24 5.8 0 11.2 2.5 13.4 7.1l1.1-5.9zm-4.4 22.8c1.3-6.9-3.4-12.1-9.7-12.1-6.7 0-12.6 5.5-13.7 12.1-1.2 6.3 2.8 12 9.5 12 6.5 0 12.9-5.5 13.9-12zM411.9 54.5h12.8l-12.4 70.2h-12.8l1-5.6c-4.1 4.7-10.7 6.8-15.8 6.8-11.7 0-20.6-9.4-18.1-24 2.6-14.6 14.8-23.9 26.5-23.9 5.2 0 11 2 13.4 6.6l5.4-30.1zm-18.5 35.4c-6.3 0-12.6 5.3-13.8 12-1.1 6.6 3.2 12.1 9.6 12.1 6.2 0 12.8-5.2 13.9-12.1 1.3-7-3.7-12-9.7-12zM426.3 102c2.5-14.4 15.7-24 28.6-24s22.8 9.5 20.3 24c-2.5 14.3-15.7 23.9-28.6 23.9s-22.8-9.6-20.3-23.9zm35.9 0c1.3-7.1-3-12.1-9.3-12.1-6.3 0-12.4 5-13.6 12.1-1.2 7 3 12 9.3 12 6.3 0 12.4-5 13.6-12zM545.3 57.6c15.2 0 20 10.9 18 21.9-1.9 11-10.5 21.7-25.7 21.7h-13.7l-4.2 23.5h-13.5L518 57.6h27.3zm-2.5 12h-13.3L526 89.4h13.2c6.4 0 9.7-5.1 10.6-9.8.8-5-.7-10-7-10zM604.6 79.2h12.8l-8 45.5h-12.8l1.1-6.4c-3.8 4.6-10.1 7.6-16.3 7.6-12.6 0-20.2-9.7-17.7-23.9 2.5-14.1 13.3-24 26.4-24 5.8 0 11.2 2.5 13.4 7.1l1.1-5.9zm-4.4 22.8c1.3-6.9-3.4-12.1-9.7-12.1-6.7 0-12.6 5.5-13.7 12.1-1.2 6.3 2.8 12 9.5 12 6.5 0 12.9-5.5 13.9-12zM659.5 79.2h13.7l-40 67.8h-13.5l15.4-26.5-10.7-41.3h14l6 26.4 15.1-26.4z"
      />
    </g>
  </svg>
);

export const KadoPayLogoWhite = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={673.3}
    height={175.3}
    viewBox="0 0 673.3 175.3"
    overflow="visible"
  >
    <path
      d="M156.8 112.8c5.1-14 7.1-29.1 5-43.9-3.6-25.4-17.1-45-42.5-58.8C87-7.7 43.2-1.4 17 24.7 2.5 39.2-6.3 63.2 5.4 80.1c8.5 12.2 24.8 16.7 34.4 28 12 14.2 11.1 36.1 23 50.3 10.6 12.6 29.6 16.1 45.2 10.9 13.1-4.3 36.7-23.4 48.8-56.5z"
      fill="#5493f7"
      opacity={0.75}
    />
    <path
      d="M108 169.4c13.1-4.3 36.7-23.4 48.8-56.5 5.1-14 7.9-27.5 5-43.9-9.7-54.1-76 15.5-87.5 22.6-22.6 13.9-28.8 44.5-12.7 65.6.4.5.7 1 1.1 1.4 10.6 12.5 29.7 15.9 45.3 10.8z"
      fill="#2043b5"
      opacity={0.8}
    />
    <path
      d="M128.6 18.5c-14-5.1-29.1-7.1-43.9-5-25.4 3.6-45 17.1-58.8 42.5-17.8 32.3-11.5 76.1 14.6 102.3C55 172.8 79 181.6 95.9 169.9c12.2-8.5 16.7-24.8 28-34.4 14.2-12 36.1-11.1 50.3-23 12.6-10.6 16.1-29.6 10.9-45.2-4.3-13.1-23.4-36.7-56.5-48.8z"
      fill="#3573ec"
      opacity={0.7}
    />
    <path
      d="M99.6 125.4l-12.9-26-8.6 7.9-3.9 18.1H59.5l14.1-66.6h14.8l-5.5 25.9 28.4-25.9h20.5L98.3 89l19 36.4H99.6z"
      fill="#FFF"
    />
    <g>
      <path
        fill="#FFF"
        d="M310.9 57.6l-29.2 33.3 21.6 33.8h-17.5l-16.8-27-4.8 27h-13.5l11.8-67.1H276l-5 27.7 23.7-27.7h16.2zM347.7 79.2h12.8l-8 45.5h-12.8l1.1-6.4c-3.8 4.6-10.1 7.6-16.3 7.6-12.6 0-20.2-9.7-17.7-23.9 2.5-14.1 13.3-24 26.4-24 5.8 0 11.2 2.5 13.4 7.1l1.1-5.9zm-4.4 22.8c1.3-6.9-3.4-12.1-9.7-12.1-6.7 0-12.6 5.5-13.7 12.1-1.2 6.3 2.8 12 9.5 12 6.5 0 12.9-5.5 13.9-12zM411.9 54.5h12.8l-12.4 70.2h-12.8l1-5.6c-4.1 4.7-10.7 6.8-15.8 6.8-11.7 0-20.6-9.4-18.1-24 2.6-14.6 14.8-23.9 26.5-23.9 5.2 0 11 2 13.4 6.6l5.4-30.1zm-18.5 35.4c-6.3 0-12.6 5.3-13.8 12-1.1 6.6 3.2 12.1 9.6 12.1 6.2 0 12.8-5.2 13.9-12.1 1.3-7-3.7-12-9.7-12zM426.3 102c2.5-14.4 15.7-24 28.6-24s22.8 9.5 20.3 24c-2.5 14.3-15.7 23.9-28.6 23.9s-22.8-9.6-20.3-23.9zm35.9 0c1.3-7.1-3-12.1-9.3-12.1-6.3 0-12.4 5-13.6 12.1-1.2 7 3 12 9.3 12 6.3 0 12.4-5 13.6-12zM545.3 57.6c15.2 0 20 10.9 18 21.9-1.9 11-10.5 21.7-25.7 21.7h-13.7l-4.2 23.5h-13.5L518 57.6h27.3zm-2.5 12h-13.3L526 89.4h13.2c6.4 0 9.7-5.1 10.6-9.8.8-5-.7-10-7-10zM604.6 79.2h12.8l-8 45.5h-12.8l1.1-6.4c-3.8 4.6-10.1 7.6-16.3 7.6-12.6 0-20.2-9.7-17.7-23.9 2.5-14.1 13.3-24 26.4-24 5.8 0 11.2 2.5 13.4 7.1l1.1-5.9zm-4.4 22.8c1.3-6.9-3.4-12.1-9.7-12.1-6.7 0-12.6 5.5-13.7 12.1-1.2 6.3 2.8 12 9.5 12 6.5 0 12.9-5.5 13.9-12zM659.5 79.2h13.7l-40 67.8h-13.5l15.4-26.5-10.7-41.3h14l6 26.4 15.1-26.4z"
      />
    </g>
  </svg>
);

const LunaLogoCircle = () => (
  <svg
    width="52"
    height="51"
    viewBox="0 0 52 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26 51C11.6406 51 0 39.5833 0 25.5C0 11.4167 11.6406 0 26 0C40.3594 0 52 11.4167 52 25.5C52 39.5833 40.3594 51 26 51Z"
      fill="#172852"
    />
    <path
      d="M31.0534 11.3959C28.0088 10.279 24.582 10.2765 21.4802 11.1945C17.4424 12.4236 14.0338 15.4122 12.2528 19.1633C11.7614 20.2317 11.2908 21.3461 11.244 22.5344C13.5138 21.2441 16.002 20.4077 18.4954 19.6452C22.4838 18.2351 26.6594 17.2559 30.4346 15.3179C31.3134 14.8028 32.434 14.2749 32.6732 13.2014C32.7694 12.2731 31.7684 11.7555 31.0534 11.3959Z"
      fill="#FFD83D"
    />
    <path
      d="M40.2462 20.423C39.3648 18.077 37.9192 15.8993 35.9562 14.2852C35.457 18.3116 33.7098 22.2029 30.8238 25.1303C27.3632 28.657 22.4336 30.8219 17.4182 30.7403C15.4266 30.8015 13.4792 30.3502 11.537 29.9855C13.448 36.7583 21.0166 41.254 28.0288 40.1728C32.2616 39.6424 36.1694 37.1842 38.5276 33.7136C41.1874 29.8784 41.8582 24.7861 40.2462 20.423Z"
      fill="#FFD83D"
    />
    <path
      d="M18.5 19.6453C16.0066 20.4078 13.5184 21.2442 11.2486 22.5345L11.0952 22.6135C10.8846 24.1665 10.7312 25.75 11.012 27.3055C12.1534 26.8312 13.079 25.9974 14.0462 25.2604C15.9078 23.7406 17.8084 22.0015 18.5 19.6453Z"
      fill="#FF6F03"
    />
  </svg>
);

const TerraUsdLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    viewBox="0 0 60 60"
  >
    <title>{'UST Icon'}</title>
    <defs>
      <linearGradient
        x1="-.013%"
        y1="49.988%"
        x2="99.989%"
        y2="49.988%"
        id="prefix__a"
      >
        <stop stopOpacity={0} offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.014%"
        y1="49.987%"
        x2="99.996%"
        y2="49.987%"
        id="prefix__b"
      >
        <stop stopOpacity={0.063} offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.014%"
        y1="49.987%"
        x2="100.004%"
        y2="49.987%"
        id="prefix__c"
      >
        <stop stopOpacity={0.125} offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.014%"
        y1="50.003%"
        x2="99.989%"
        y2="50.003%"
        id="prefix__d"
      >
        <stop stopOpacity={0.188} offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.014%"
        y1="50.021%"
        x2="99.996%"
        y2="50.021%"
        id="prefix__e"
      >
        <stop stopOpacity={0.25} offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.014%"
        y1="50.013%"
        x2="100.004%"
        y2="50.013%"
        id="prefix__f"
      >
        <stop stopOpacity={0.313} offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.014%"
        y1="50.013%"
        x2="99.989%"
        y2="50.013%"
        id="prefix__g"
      >
        <stop stopOpacity={0.375} offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.014%"
        y1="50.022%"
        x2="99.997%"
        y2="50.022%"
        id="prefix__h"
      >
        <stop stopOpacity={0.438} offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.014%"
        y1="50.021%"
        x2="100.005%"
        y2="50.021%"
        id="prefix__i"
      >
        <stop stopOpacity={0.5} offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.014%"
        y1="50.022%"
        x2="99.989%"
        y2="50.022%"
        id="prefix__j"
      >
        <stop stopOpacity={0.563} offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.014%"
        y1="50.02%"
        x2="99.997%"
        y2="50.02%"
        id="prefix__k"
      >
        <stop stopOpacity={0.625} offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.015%"
        y1="49.985%"
        x2="100.005%"
        y2="49.985%"
        id="prefix__l"
      >
        <stop stopOpacity={0.688} offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.015%"
        y1="49.986%"
        x2="99.989%"
        y2="49.986%"
        id="prefix__m"
      >
        <stop stopOpacity={0.75} offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.015%"
        y1="49.984%"
        x2="99.997%"
        y2="49.984%"
        id="prefix__n"
      >
        <stop stopOpacity={0.813} offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.015%"
        y1="49.986%"
        x2="100.006%"
        y2="49.986%"
        id="prefix__o"
      >
        <stop stopOpacity={0.875} offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.015%"
        y1="49.984%"
        x2="99.989%"
        y2="49.984%"
        id="prefix__p"
      >
        <stop stopOpacity={0.938} offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.015%"
        y1="49.977%"
        x2="99.998%"
        y2="49.977%"
        id="prefix__q"
      >
        <stop offset="37.5%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1=".01%"
        y1="49.913%"
        x2="99.998%"
        y2="49.913%"
        id="prefix__r"
      >
        <stop stopColor="#600000" offset="0%" />
        <stop stopColor="#630000" offset="32.75%" />
        <stop stopColor="#6D0000" offset="59.05%" />
        <stop stopColor="#7E0000" offset="83.02%" />
        <stop stopColor="#8F0000" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="50.017%"
        y1="-.085%"
        x2="50.017%"
        y2="99.896%"
        id="prefix__s"
      >
        <stop stopColor="#BF1010" offset="35%" />
        <stop stopColor="#BD1010" offset="64.54%" />
        <stop stopColor="#B60F0F" offset="75.17%" />
        <stop stopColor="#AB0D0D" offset="82.76%" />
        <stop stopColor="#9A0A0A" offset="88.89%" />
        <stop stopColor="#840606" offset="94.14%" />
        <stop stopColor="#690202" offset="98.7%" />
        <stop stopColor="#600000" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.015%"
        y1="50.027%"
        x2="99.972%"
        y2="50.027%"
        id="prefix__t"
      >
        <stop stopColor="#BF1010" offset="0%" />
        <stop stopColor="#C11212" offset="2.1%" />
        <stop stopColor="#D22323" offset="24.35%" />
        <stop stopColor="#DC2D2D" offset="48.72%" />
        <stop stopColor="#DF3030" offset="79.11%" />
        <stop stopColor="#DC2E2E" offset="84.15%" />
        <stop stopColor="#D22626" offset="88.19%" />
        <stop stopColor="#C11919" offset="91.9%" />
        <stop stopColor="#A90808" offset="95.37%" />
        <stop stopColor="#9F0000" offset="96.6%" />
        <stop stopColor="#DF3030" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.041%"
        y1="50.05%"
        x2="99.972%"
        y2="50.05%"
        id="prefix__u"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.015%"
        y1="50.087%"
        x2="99.947%"
        y2="50.087%"
        id="prefix__v"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1=".036%"
        y1="49.886%"
        x2="100.023%"
        y2="49.886%"
        id="prefix__w"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-.084%"
        y1="50.004%"
        x2="206.375%"
        y2="50.004%"
        id="prefix__x"
      >
        <stop stopColor="#00209F" offset="0%" />
        <stop stopColor="#0222A1" offset="2.1%" />
        <stop stopColor="#1333B2" offset="24.35%" />
        <stop stopColor="#1D3DBC" offset="48.72%" />
        <stop stopColor="#2040BF" offset="79.11%" />
        <stop stopColor="#1E3DBC" offset="84.15%" />
        <stop stopColor="#1933B2" offset="88.19%" />
        <stop stopColor="#1122A1" offset="91.9%" />
        <stop stopColor="#050A89" offset="95.37%" />
        <stop stopColor="#00007F" offset="96.6%" />
        <stop stopColor="#2040BF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-247.072%"
        y1="50.361%"
        x2="2329.421%"
        y2="50.361%"
        id="prefix__y"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-356.914%"
        y1="50.304%"
        x2="2219.441%"
        y2="50.304%"
        id="prefix__z"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-356.914%"
        y1="50.534%"
        x2="2219.441%"
        y2="50.534%"
        id="prefix__A"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-247.072%"
        y1="50.177%"
        x2="2329.421%"
        y2="50.177%"
        id="prefix__B"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-247.072%"
        y1="50.381%"
        x2="2329.421%"
        y2="50.381%"
        id="prefix__C"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-247.072%"
        y1="49.932%"
        x2="2329.421%"
        y2="49.932%"
        id="prefix__D"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-576.816%"
        y1="49.933%"
        x2="2000.296%"
        y2="49.933%"
        id="prefix__E"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-356.914%"
        y1="49.772%"
        x2="2219.441%"
        y2="49.772%"
        id="prefix__F"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-466.776%"
        y1="50.007%"
        x2="2109.579%"
        y2="50.007%"
        id="prefix__G"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-466.776%"
        y1="49.604%"
        x2="2109.579%"
        y2="49.604%"
        id="prefix__H"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-356.914%"
        y1="49.872%"
        x2="2219.441%"
        y2="49.872%"
        id="prefix__I"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-466.789%"
        y1="49.819%"
        x2="2109.638%"
        y2="49.819%"
        id="prefix__J"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-247.072%"
        y1="49.973%"
        x2="2329.421%"
        y2="49.973%"
        id="prefix__K"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-27.362%"
        y1="50.144%"
        x2="2549.612%"
        y2="50.144%"
        id="prefix__L"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-27.362%"
        y1="49.911%"
        x2="2549.612%"
        y2="49.911%"
        id="prefix__M"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-27.355%"
        y1="49.918%"
        x2="2548.928%"
        y2="49.918%"
        id="prefix__N"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-466.776%"
        y1="50.262%"
        x2="2109.586%"
        y2="50.262%"
        id="prefix__O"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-467.434%"
        y1="49.655%"
        x2="2108.928%"
        y2="49.655%"
        id="prefix__P"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-27.355%"
        y1="49.664%"
        x2="2548.934%"
        y2="49.664%"
        id="prefix__Q"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-137.211%"
        y1="50.432%"
        x2="2439.145%"
        y2="50.432%"
        id="prefix__R"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-137.211%"
        y1="49.966%"
        x2="2439.145%"
        y2="49.966%"
        id="prefix__S"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-137.211%"
        y1="50.425%"
        x2="2439.145%"
        y2="50.425%"
        id="prefix__T"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-137.211%"
        y1="50.199%"
        x2="2439.145%"
        y2="50.199%"
        id="prefix__U"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-27.362%"
        y1="50.315%"
        x2="2549.546%"
        y2="50.315%"
        id="prefix__V"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-576.816%"
        y1="49.733%"
        x2="2000.296%"
        y2="49.733%"
        id="prefix__W"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-1016.033%"
        y1="49.987%"
        x2="1560.257%"
        y2="49.987%"
        id="prefix__X"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-1016.033%"
        y1="49.789%"
        x2="1560.25%"
        y2="49.789%"
        id="prefix__Y"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-1016.033%"
        y1="49.553%"
        x2="1560.25%"
        y2="49.553%"
        id="prefix__Z"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-906.658%"
        y1="49.908%"
        x2="1670.941%"
        y2="49.908%"
        id="prefix__aa"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-1016.007%"
        y1="49.572%"
        x2="1560.211%"
        y2="49.572%"
        id="prefix__ab"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-906.658%"
        y1="49.691%"
        x2="1670.941%"
        y2="49.691%"
        id="prefix__ac"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-1125.974%"
        y1="49.954%"
        x2="1450.526%"
        y2="49.954%"
        id="prefix__ad"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-1126.625%"
        y1="49.724%"
        x2="1449.868%"
        y2="49.724%"
        id="prefix__ae"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-1125.934%"
        y1="49.763%"
        x2="1450.487%"
        y2="49.763%"
        id="prefix__af"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-1126.632%"
        y1="50.112%"
        x2="1449.862%"
        y2="50.112%"
        id="prefix__ag"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-1125.967%"
        y1="50.151%"
        x2="1450.526%"
        y2="50.151%"
        id="prefix__ah"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-906.658%"
        y1="49.48%"
        x2="1670.934%"
        y2="49.48%"
        id="prefix__ai"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-576.816%"
        y1="49.953%"
        x2="2000.296%"
        y2="49.953%"
        id="prefix__aj"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-686.493%"
        y1="50.081%"
        x2="1889.862%"
        y2="50.081%"
        id="prefix__ak"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-906.658%"
        y1="49.678%"
        x2="1670.934%"
        y2="49.678%"
        id="prefix__al"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-686.493%"
        y1="50.322%"
        x2="1889.855%"
        y2="50.322%"
        id="prefix__am"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-686.493%"
        y1="50.356%"
        x2="1889.862%"
        y2="50.356%"
        id="prefix__an"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-576.816%"
        y1="49.493%"
        x2="2000.296%"
        y2="49.493%"
        id="prefix__ao"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-686.658%"
        y1="50.081%"
        x2="1890.316%"
        y2="50.081%"
        id="prefix__ap"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-686.493%"
        y1="50.557%"
        x2="1889.855%"
        y2="50.557%"
        id="prefix__aq"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-906.658%"
        y1="49.289%"
        x2="1670.934%"
        y2="49.289%"
        id="prefix__ar"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-796.368%"
        y1="49.775%"
        x2="1780.059%"
        y2="49.775%"
        id="prefix__as"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-796.368%"
        y1="50.127%"
        x2="1780.059%"
        y2="50.127%"
        id="prefix__at"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-796.368%"
        y1="50.221%"
        x2="1780.059%"
        y2="50.221%"
        id="prefix__au"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-796.368%"
        y1="50.333%"
        x2="1780.059%"
        y2="50.333%"
        id="prefix__av"
      >
        <stop stopColor="#DFDFDF" offset="0%" />
        <stop stopColor="#E1E1E1" offset="2.1%" />
        <stop stopColor="#F2F2F2" offset="24.35%" />
        <stop stopColor="#FCFCFC" offset="48.72%" />
        <stop stopColor="#FFF" offset="79.11%" />
        <stop stopColor="#FCFCFC" offset="84.15%" />
        <stop stopColor="#F2F2F2" offset="88.19%" />
        <stop stopColor="#E1E1E1" offset="91.9%" />
        <stop stopColor="#C9C9C9" offset="95.37%" />
        <stop stopColor="#BFBFBF" offset="96.6%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path opacity={0.2} d="M0 0h60v60H0z" />
      <g fillRule="nonzero">
        <g fill="#0E3CA5">
          <path d="M25.24 39.77c1.25 4.62 5.73 8.15 8 8.01.08-.01 8.59-1.59 13.25-9.38 3.63-6.06 2.39-11.91-2.54-12.03-1.77.13-21.09 4.59-18.71 13.4M43.49 10.07s0-.01 0 0A21.471 21.471 0 0029.47 4.9c-3.13 0-6.1.67-8.78 1.86-.48.2-.94.43-1.37.67-.3.16-.61.32-.9.5l.07.02c-.89.61-1.66 1.33-2.28 2.16C10 18.32 30.82 24.28 41.95 24.3c5.11 3.69 6.55-10.34 1.54-14.23z" />
        </g>
        <g fill="#5493F7">
          <path d="M21.94 10.23c-2.86 4.3-12.39 7.33-13.95 6.86 0-.01-.01-.01-.01-.02.06-.13.13-.26.2-.39.54-1.05 1.16-2.05 1.86-2.99.69-.94 1.45-1.83 2.28-2.66.83-.83 1.71-1.59 2.66-2.28.59-.43 1.19-.83 1.82-1.21 1.33-.77 2.7-.82 3.15-.84 4.23.09 2.01 3.5 1.99 3.53M19.59 40.62c.21 1.35-.01 6.69-.28 7.14-.24.01-.73.04-2.17-.76-.75-.43-1.48-.9-2.18-1.41-.94-.69-1.83-1.45-2.66-2.28-.83-.83-1.59-1.71-2.28-2.66-.69-.94-1.31-1.94-1.86-2.99-.54-1.05-1.01-2.14-1.38-3.27-.38-1.13-.67-2.31-.86-3.51-.2-1.2-.3-2.44-.3-3.7 0-1.26.1-2.5.3-3.7.2-1.2.49-2.38.86-3.51.08-.23.16-.46.24-.68 1.64 2.19 3.55 4.17 5.17 6.38 1.54 2.1 3.66 5.53 4.09 6.26 2.68 4.53 3.11 7.34 3.31 8.69M51.25 27.17c0 2.96-.56 5.78-1.59 8.38-2.69 2.89-20.8-4.22-20.98-4.3-2.48-1.09-10.02-4.39-10.7-9.58C17 14.2 32.15 9 38.8 8.8c.8.01 3.23.04 4.64 1.19a22.74 22.74 0 017.81 17.18M38.98 47.4c-1.97.92-4.15.25-3.58-1.67 1.08-3.69 10.55-7.48 12.65-7.68.26-.03.37.15.25.35-2.18 3.81-5.41 6.96-9.32 9" />
        </g>
        <g opacity={0.3}>
          <path
            d="M2.18.59C1.37.59.72 1.15.72 1.84v23.18c0 .94.66 1.69 1.46 1.7 21.4.13 42.16 6.12 42.15 3.11-.03-7.64-.03-18.15 0-25.79C44.34.96 23.58.61 2.18.59z"
            fill="url(#prefix__b)"
            opacity={0.063}
            transform="translate(15 26)"
          />
          <path
            d="M2.18.59C1.37.59.72 1.15.72 1.84v23.18c0 .94.66 1.69 1.46 1.7 21.25.12 41.86 5.82 41.85 2.91-.03-7.53-.03-17.93 0-25.46C44.04 1.18 23.43.62 2.18.59z"
            fill="url(#prefix__c)"
            opacity={0.125}
            transform="translate(15 26)"
          />
          <path
            d="M2.18.59C1.37.59.72 1.15.72 1.84v23.18c0 .94.66 1.69 1.46 1.69 21.1.12 41.57 5.52 41.56 2.71-.03-7.42-.03-17.72 0-25.14C43.75 1.4 23.28.63 2.18.59z"
            fill="url(#prefix__d)"
            opacity={0.188}
            transform="translate(15 26)"
          />
          <path
            d="M2.18.59C1.37.59.72 1.15.72 1.83v23.18c0 .94.66 1.69 1.46 1.69 20.95.11 41.27 5.22 41.26 2.51-.03-7.32-.03-17.5 0-24.82C43.45 1.62 23.13.64 2.18.59z"
            fill="url(#prefix__e)"
            opacity={0.25}
            transform="translate(15 26)"
          />
          <path
            d="M2.18.59C1.37.59.72 1.15.72 1.83v23.18c0 .94.66 1.69 1.46 1.69 20.8.11 40.97 4.93 40.96 2.31-.03-7.21-.03-17.29 0-24.5C43.15 1.84 22.98.65 2.18.59z"
            fill="url(#prefix__f)"
            opacity={0.313}
            transform="translate(15 26)"
          />
          <path
            d="M2.18.59C1.37.59.72 1.15.72 1.83v23.18c0 .94.66 1.69 1.46 1.69 20.65.1 40.68 4.63 40.67 2.11-.03-7.1-.03-17.07 0-24.17C42.86 2.06 22.83.66 2.18.59z"
            fill="url(#prefix__g)"
            opacity={0.375}
            transform="translate(15 26)"
          />
          <path
            d="M2.18.59C1.37.59.72 1.15.72 1.83v23.18c0 .94.66 1.69 1.46 1.69 20.5.09 40.38 4.33 40.37 1.9-.03-6.99-.03-16.86 0-23.85C42.56 2.28 22.69.62 2.18.59z"
            fill="url(#prefix__h)"
            opacity={0.438}
            transform="translate(15 26)"
          />
          <path
            d="M2.18.59C1.37.59.72 1.15.72 1.83v23.18c0 .93.66 1.69 1.46 1.69 20.35.09 40.08 4.03 40.07 1.7-.03-6.89-.03-16.64 0-23.53C42.26 2.5 22.54.63 2.18.59z"
            fill="url(#prefix__i)"
            opacity={0.5}
            transform="translate(15 26)"
          />
          <path
            d="M2.18.59C1.37.59.72 1.15.72 1.83v23.18c0 .93.66 1.69 1.46 1.69 20.2.08 39.79 3.73 39.78 1.5-.03-6.78-.03-16.43 0-23.2C41.96 2.72 22.39.63 2.18.59z"
            fill="url(#prefix__j)"
            opacity={0.563}
            transform="translate(15 26)"
          />
          <path
            d="M2.18.59C1.37.59.72 1.15.72 1.83v23.18c0 .93.66 1.69 1.46 1.69 20.05.08 39.49 3.43 39.48 1.3-.03-6.67-.03-16.21 0-22.88C41.67 2.94 22.24.64 2.18.59z"
            fill="url(#prefix__k)"
            opacity={0.625}
            transform="translate(15 26)"
          />
          <path
            d="M2.18.6C1.37.6.72 1.16.72 1.84v23.18c0 .93.66 1.69 1.46 1.69 19.9.07 39.19 3.13 39.18 1.1-.03-6.56-.03-16 0-22.56C41.37 3.16 22.09.64 2.18.6z"
            fill="url(#prefix__l)"
            opacity={0.688}
            transform="translate(15 26)"
          />
          <path
            d="M2.18.6C1.37.6.72 1.16.72 1.84v23.18c0 .93.66 1.69 1.46 1.69 19.75.06 38.9 2.83 38.89.9-.03-6.46-.03-15.78 0-22.24C41.07 3.38 21.94.65 2.18.6z"
            fill="url(#prefix__m)"
            opacity={0.75}
            transform="translate(15 26)"
          />
          <path
            d="M2.18.6C1.37.6.72 1.16.72 1.84v23.18c0 .93.66 1.69 1.46 1.69 19.6.06 38.6 2.53 38.59.7-.03-6.35-.03-15.56 0-21.91C40.78 3.6 21.79.65 2.18.6z"
            fill="url(#prefix__n)"
            opacity={0.813}
            transform="translate(15 26)"
          />
          <path
            d="M2.18.6C1.37.6.72 1.16.72 1.84v23.18c0 .93.66 1.69 1.46 1.69 19.45.05 38.3 2.23 38.29.5-.03-6.24-.03-15.35 0-21.59C40.48 3.82 21.64.66 2.18.6z"
            fill="url(#prefix__o)"
            opacity={0.875}
            transform="translate(15 26)"
          />
          <path
            d="M2.18.6C1.37.6.72 1.16.72 1.84v23.18c0 .93.66 1.69 1.46 1.69 19.3.05 38 1.93 38 .3-.03-6.13-.03-15.13 0-21.27 0-1.7-18.69-5.08-38-5.14z"
            fill="url(#prefix__p)"
            opacity={0.938}
            transform="translate(15 26)"
          />
          <path
            d="M2.18.6C1.37.6.72 1.16.72 1.84v23.18c0 .93.66 1.69 1.46 1.69 19.15.08 37.72 1.64 37.7.1V5.87C39.9 4.26 21.34.77 2.18.6z"
            fill="url(#prefix__q)"
            transform="translate(15 26)"
          />
        </g>
        <g>
          <path
            d="M.71 6.02c0 .93.65 1.69 1.46 1.7 19.19.13 37.71-.75 37.71-3.62C39.88-4.61.71 6.02.71 6.02z"
            fill="url(#prefix__r)"
            transform="translate(15 45)"
          />
          <path
            d="M.71 6.02c0 .94.65 1.69 1.46 1.7 19.18.15 37.68-.46 37.7-3.62C39.88-4.61.71 6.02.71 6.02zM2.18 7.6c-.05 0-.1 0-.15-.01-.59-.07-1.07-.51-1.24-1.1.18.64.73 1.1 1.39 1.11 19.17-.13 37.4-6.03 37.4-3.43 0 2.65-18.23 3.56-37.4 3.43z"
            fill="url(#prefix__s)"
            transform="translate(15 45)"
          />
          <path
            d="M2.18 4.37c-.81 0-1.46.66-1.46 1.46v23.18c0 .81.65 1.46 1.46 1.46 19.19-.14 37.73-6.49 37.71-3.39V.97c.01-3.09-18.53 3.26-37.71 3.4z"
            fill="url(#prefix__t)"
            transform="translate(15 22)"
          />
          <path
            d="M5.01 18.37l2.01-.09a103.984 103.984 0 003.8-.29c.61-.06 1.22-.11 1.81-.17.6-.06 1.18-.12 1.77-.19.58-.06 1.16-.13 1.73-.2.57-.07 1.14-.14 1.71-.22.57-.07 1.13-.15 1.69-.23.56-.08 1.12-.17 1.68-.26.56-.09 1.12-.17 1.69-.26.56-.09 1.13-.18 1.7-.28.57-.1 1.14-.2 1.72-.29.58-.1 1.17-.2 1.76-.3.59-.1 1.19-.21 1.8-.31.61-.11 1.23-.22 1.85-.32.63-.11 1.27-.21 1.92-.31.65-.1 1.25-.19 2.06-.29.82-.1 1.83-.2 2.67-.14.84.06 1.51.27 1.51.86v-2.01c0-.58-.64-.79-1.42-.85-.78-.07-1.72.02-2.5.11s-1.34.18-1.93.26c-.59.09-1.16.18-1.72.27-.56.09-1.12.19-1.67.28-.55.1-1.1.19-1.65.29-.55.1-1.11.19-1.67.29-.57.1-1.14.2-1.73.3-.59.1-1.19.2-1.82.31-.63.1-1.28.2-1.95.31-.68.1-1.38.22-2.11.32v-2.01c.73-.11 1.44-.22 2.11-.32.68-.1 1.33-.21 1.95-.31.63-.1 1.23-.2 1.81-.31.59-.1 1.16-.2 1.73-.3.57-.1 1.12-.19 1.67-.29.55-.1 1.1-.19 1.65-.29.55-.1 1.11-.19 1.67-.28.56-.09 1.14-.18 1.72-.27.59-.09 1.15-.17 1.93-.26s1.72-.17 2.5-.11c.78.07 1.42.27 1.42.85V9.05c0-.58-.64-.79-1.42-.85-.78-.06-1.72.02-2.5.11s-1.34.17-1.93.26c-.59.09-1.16.18-1.72.27-.56.09-1.12.19-1.67.28-.55.1-1.1.19-1.65.29-.55.1-1.11.19-1.67.29-.57.1-1.14.2-1.73.3-.59.1-1.19.2-1.81.3-.63.1-1.28.2-1.95.31-.68.11-1.38.22-2.11.32V8.92c.73-.11 1.43-.22 2.11-.32.68-.1 1.33-.21 1.95-.31.63-.1 1.22-.2 1.81-.3.59-.1 1.16-.2 1.73-.3.57-.1 1.12-.19 1.67-.29.55-.1 1.1-.19 1.65-.29.55-.1 1.11-.19 1.67-.28.56-.09 1.14-.18 1.72-.27.59-.09 1.15-.17 1.93-.26s1.72-.17 2.5-.11c.78.06 1.42.27 1.42.85V5.03c0-.58-.64-.79-1.42-.85-.78-.06-1.72.02-2.5.11s-1.34.17-1.93.26c-.59.09-1.16.18-1.72.27-.56.09-1.12.19-1.67.28-.55.1-1.1.19-1.65.29-.55.1-1.11.19-1.67.29-.57.1-1.14.19-1.73.3-.59.1-1.19.2-1.81.3-.63.1-1.28.2-1.96.31-.68.11-1.38.22-2.11.32V4.9c.73-.11 1.43-.22 2.11-.32.68-.11 1.33-.21 1.96-.31.63-.1 1.22-.2 1.81-.3.59-.1 1.16-.2 1.73-.3.57-.1 1.12-.19 1.67-.29.55-.1 1.1-.19 1.65-.29.55-.1 1.11-.19 1.67-.28.56-.09 1.14-.18 1.72-.27.59-.09 1.15-.17 1.93-.26s1.72-.17 2.5-.11c.78.06 1.42.27 1.42.85V1.01c0-.58-.64-.79-1.42-.85-.78-.06-1.72.02-2.5.11s-1.34.17-1.93.26c-.59.09-1.16.18-1.72.27-.56.09-1.12.19-1.67.28-.55.1-1.1.19-1.65.29-.55.1-1.11.19-1.67.29-.57.1-1.14.2-1.73.3-.59.1-1.18.2-1.81.3-.63.1-1.28.2-1.96.31-.68.11-1.38.22-2.11.32V.85c-5.39.8-11.42 1.47-17.52 1.51-.81 0-1.46.66-1.46 1.46v14.62c.75 0 1.48-.01 2.2-.03.69.01 1.39-.01 2.08-.04z"
            fill="url(#prefix__u)"
            transform="translate(15 24)"
          />
          <path
            d="M5.01 22.39l2.01-.09c.66-.04 1.3-.08 1.93-.13l1.87-.15c.61-.06 1.22-.11 1.81-.17.6-.06 1.18-.12 1.77-.19.58-.07 1.16-.13 1.73-.2.57-.07 1.14-.14 1.7-.22.57-.08 1.13-.15 1.69-.24.56-.08 1.12-.17 1.68-.26.56-.09 1.12-.17 1.69-.26.56-.09 1.13-.18 1.7-.28.57-.09 1.14-.2 1.72-.3.58-.1 1.17-.2 1.76-.3.59-.1 1.19-.21 1.8-.31.61-.11 1.23-.22 1.86-.32.63-.11 1.27-.21 1.92-.31.65-.1 1.25-.19 2.06-.29.82-.1 1.83-.2 2.68-.14.84.06 1.51.27 1.51.86v-2.01c0-.59-.67-.8-1.51-.86-.84-.06-1.86.04-2.68.14-.82.1-1.41.19-2.06.29-.65.1-1.29.2-1.92.31-.63.11-1.25.21-1.85.32-.61.11-1.21.21-1.8.31-.59.1-1.18.2-1.76.3-.58.1-1.15.2-1.72.3-.57.1-1.14.19-1.7.27-.56.09-1.13.18-1.69.26-.56.09-1.12.17-1.68.26-.56.08-1.12.16-1.69.23-.57.08-1.13.15-1.71.22-.58.07-1.15.14-1.73.2-.58.06-1.17.13-1.77.19-.6.06-1.2.12-1.81.17-.61.06-1.23.11-1.87.16-.63.05-1.28.09-1.93.13-.66.04-1.33.07-2.01.09-.68.03-1.38.05-2.1.06-.72.02-1.45.03-2.19.03v2.01c.75 0 1.48-.01 2.19-.03.71 0 1.41-.03 2.1-.05z"
            fill="url(#prefix__v)"
            transform="translate(15 24)"
          />
          <path
            d="M38.37 20.24c-.84-.06-1.86.04-2.67.14-.82.1-1.41.19-2.06.29-.65.1-1.29.2-1.92.31-.63.11-1.25.22-1.86.32-.61.11-1.21.21-1.8.31-.59.1-1.18.2-1.76.3-.58.1-1.15.2-1.72.3-.57.1-1.14.19-1.7.27-.56.09-1.13.18-1.69.26-.56.09-1.12.17-1.68.26l-1.69.24c-.57.07-1.13.15-1.7.22l-1.73.21c-.58.07-1.17.13-1.77.19-.6.06-1.2.12-1.81.17a105.148 105.148 0 01-3.81.29c-.66.04-1.33.07-2.01.09-.68.03-1.38.05-2.1.06-.72.02-1.45.03-2.19.03v2.01c.75 0 1.48-.01 2.19-.03l2.1-.06L7 26.33a103.984 103.984 0 003.8-.29c.61-.06 1.22-.11 1.81-.17.6-.06 1.18-.12 1.77-.19.58-.07 1.16-.13 1.73-.21.57-.07 1.14-.14 1.7-.22.57-.08 1.13-.15 1.69-.24.56-.08 1.12-.17 1.68-.26.56-.09 1.12-.17 1.69-.26.56-.09 1.13-.18 1.7-.28.57-.09 1.14-.2 1.72-.29.58-.1 1.17-.2 1.76-.3.59-.1 1.19-.21 1.8-.31.61-.11 1.23-.22 1.86-.32.63-.11 1.27-.21 1.92-.31.65-.1 1.25-.19 2.06-.29.82-.1 1.83-.2 2.67-.14.84.06 1.51.27 1.51.86V21.1c.01-.59-.66-.8-1.5-.86z"
            fill="url(#prefix__w)"
            transform="translate(15 24)"
          />
          <path
            d="M4.88 18.37a97.51 97.51 0 003.61-.19c.58-.04 1.15-.09 1.72-.13.57-.05 1.14-.1 1.72-.16.58-.06 1.16-.11 1.76-.18.6-.06 1.21-.13 1.85-.21.64-.08 1.3-.16 1.99-.25s1.41-.19 2.17-.3V2.86c-5.39.8-11.42 1.47-17.51 1.51-.81 0-1.46.66-1.46 1.46v12.62c.76 0 1.48-.01 2.17-.02l1.98-.06z"
            fill="url(#prefix__x)"
            transform="translate(15 22)"
          />
          <g>
            <path
              d="M4.23 1.96l-.18.56c-.23.01-.35.01-.58.02.19.13.28.2.47.33l-.18.56c.19-.14.28-.22.47-.36l.47.32c-.07-.22-.11-.33-.18-.55.19-.15.28-.22.47-.36-.23.01-.35.01-.58.02-.07-.21-.11-.32-.18-.54z"
              fill="url(#prefix__y)"
              transform="translate(16 25)"
            />
            <path
              d="M5.9 8.89c-.07.23-.11.34-.18.57-.23.01-.35.02-.58.03l.47.32c-.07.23-.11.34-.18.56L5.9 10l.47.32c-.07-.22-.11-.33-.18-.55l.47-.37c-.23.01-.35.02-.58.03-.07-.21-.11-.32-.18-.54z"
              fill="url(#prefix__z)"
              transform="translate(16 25)"
            />
            <path
              d="M6.08 12.24c-.07-.22-.11-.33-.18-.55-.07.23-.11.34-.18.57-.23.01-.35.02-.58.03l.47.32c-.07.23-.11.34-.18.56l.47-.37.47.32c-.07-.22-.11-.33-.18-.54l.47-.37c-.23.01-.35.02-.58.03z"
              fill="url(#prefix__A)"
              transform="translate(16 25)"
            />
            <path
              d="M4.23 7.57c-.07.23-.11.34-.18.56-.23.01-.35.01-.58.02.19.13.28.2.47.33l-.18.56c.19-.14.28-.22.47-.36.19.13.28.2.47.33-.07-.22-.11-.33-.18-.55.19-.15.28-.22.47-.36-.23.01-.35.02-.58.03-.07-.23-.11-.34-.18-.56z"
              fill="url(#prefix__B)"
              transform="translate(16 25)"
            />
            <path
              d="M4.23 10.37c-.07.23-.11.34-.18.56-.23.01-.35.01-.58.02.19.13.28.2.47.33-.07.23-.11.34-.18.56.19-.14.28-.22.47-.36l.47.32c-.07-.22-.11-.33-.18-.55.19-.14.28-.22.47-.36-.23.01-.35.02-.58.03-.07-.22-.11-.33-.18-.55z"
              fill="url(#prefix__C)"
              transform="translate(16 25)"
            />
            <path
              d="M4.23 4.77c-.07.23-.11.34-.18.56-.23.01-.35.01-.58.02.19.13.28.2.47.33-.07.23-.11.34-.18.56.19-.14.28-.22.47-.36.19.13.28.2.47.32-.07-.22-.11-.33-.18-.55.19-.15.28-.22.47-.36-.23.01-.35.02-.58.03-.07-.22-.11-.33-.18-.55z"
              fill="url(#prefix__D)"
              transform="translate(16 25)"
            />
            <path
              d="M9.24 11.46c-.07.23-.11.34-.18.57l-.58.05c.19.12.28.18.47.31-.07.23-.11.34-.18.57.19-.15.28-.23.47-.38.19.12.28.18.47.3-.07-.22-.11-.32-.18-.54.19-.15.28-.23.47-.39l-.58.05c-.07-.22-.11-.32-.18-.54z"
              fill="url(#prefix__E)"
              transform="translate(16 25)"
            />
            <path
              d="M5.9 6.09c-.07.23-.11.34-.18.57-.23.01-.35.02-.58.03l.47.32c-.07.23-.11.34-.18.57l.47-.37.47.32c-.07-.22-.11-.33-.18-.55l.47-.37c-.23.01-.35.02-.58.03-.07-.22-.11-.33-.18-.55z"
              fill="url(#prefix__F)"
              transform="translate(16 25)"
            />
            <path
              d="M7.57 10.19c-.07.23-.11.34-.18.57-.23.02-.35.02-.58.04.19.12.28.19.47.31-.07.23-.11.34-.18.57l.47-.37c.19.12.28.18.47.31-.07-.22-.11-.32-.18-.54.19-.15.28-.23.47-.38-.23.02-.35.03-.58.04-.07-.22-.11-.33-.18-.55z"
              fill="url(#prefix__G)"
              transform="translate(16 25)"
            />
            <path
              d="M7.75 13.54c-.07-.22-.11-.33-.18-.54-.07.23-.11.34-.18.57-.23.02-.35.02-.58.04.19.13.28.19.47.31-.07.23-.11.34-.18.57.19-.15.28-.23.47-.38.19.12.28.19.47.31-.07-.22-.11-.33-.18-.54.19-.15.28-.23.47-.38-.23.01-.35.02-.58.04z"
              fill="url(#prefix__H)"
              transform="translate(16 25)"
            />
            <path
              d="M5.9 3.29c-.07.23-.11.34-.18.56-.23.01-.35.02-.58.03l.47.32c-.07.23-.11.34-.18.57l.47-.37.47.32c-.07-.22-.11-.33-.18-.55l.47-.37c-.23.01-.35.02-.58.03-.07-.22-.11-.32-.18-.54z"
              fill="url(#prefix__I)"
              transform="translate(16 25)"
            />
            <path
              d="M7.57 7.39c-.07.23-.11.34-.18.57-.23.02-.35.02-.58.04.19.13.28.19.47.31-.07.23-.11.34-.18.57.19-.15.28-.23.47-.38.19.12.28.18.47.31-.07-.22-.11-.33-.18-.54.19-.15.28-.23.47-.38-.23.02-.35.03-.58.04-.07-.22-.11-.32-.18-.54z"
              fill="url(#prefix__J)"
              transform="translate(16 25)"
            />
            <path
              d="M4.41 13.73c-.07-.22-.11-.33-.18-.55-.07.23-.11.34-.18.56-.23.01-.35.01-.58.02.19.13.28.2.47.33-.07.23-.11.34-.18.56.19-.14.28-.22.47-.36.19.13.28.2.47.33-.07-.22-.11-.33-.18-.55.19-.15.28-.22.47-.36-.23 0-.35.01-.58.02z"
              fill="url(#prefix__K)"
              transform="translate(16 25)"
            />
            <path
              d="M.89 7.66c-.07.22-.11.33-.18.56H.13c.19.14.28.21.47.34-.07.22-.11.33-.18.56.19-.14.28-.21.47-.35.19.14.28.2.47.34-.07-.22-.11-.33-.18-.55.19-.14.28-.21.47-.35-.23 0-.35.01-.58.01C1 7.99.96 7.88.89 7.66z"
              fill="url(#prefix__L)"
              transform="translate(16 25)"
            />
            <path
              d="M.89 4.86c-.07.22-.11.33-.18.56H.13c.19.14.28.2.47.34l-.18.56c.19-.14.28-.21.47-.35.19.13.28.2.47.34-.07-.22-.11-.33-.18-.55.19-.14.28-.21.47-.35-.23 0-.35.01-.58.01C1 5.19.96 5.08.89 4.86z"
              fill="url(#prefix__M)"
              transform="translate(16 25)"
            />
            <path
              d="M1.07 13.82c-.07-.22-.11-.33-.18-.55-.07.22-.11.33-.18.56H.13c.19.14.28.2.47.34l-.18.56c.19-.14.28-.21.47-.35.19.14.28.2.47.34-.07-.22-.11-.33-.18-.55.19-.14.28-.21.47-.35h-.58z"
              fill="url(#prefix__N)"
              transform="translate(16 25)"
            />
            <path
              d="M7.1 6.07c.19-.15.28-.22.47-.38.19.12.28.19.47.31-.07-.22-.11-.33-.18-.54.19-.15.28-.23.47-.38-.23.02-.35.03-.58.04-.07-.22-.11-.33-.18-.54-.07.23-.11.34-.18.57-.23.02-.35.02-.58.04.19.13.28.19.47.31-.07.23-.1.35-.18.57z"
              fill="url(#prefix__O)"
              transform="translate(16 25)"
            />
            <path
              d="M7.11 3.27l.47-.37c.19.12.28.19.47.31-.07-.22-.11-.32-.18-.54.19-.15.28-.23.47-.38-.23.02-.35.03-.58.04-.07-.22-.11-.33-.18-.54-.07.23-.11.34-.18.57-.23.02-.35.02-.58.04.19.13.28.19.47.31-.08.22-.11.33-.18.56z"
              fill="url(#prefix__P)"
              transform="translate(16 25)"
            />
            <path
              d="M.89 10.47c-.07.22-.11.33-.18.56H.13c.19.14.28.21.47.34-.07.22-.11.33-.18.56.19-.14.28-.21.47-.35.19.14.28.2.47.34-.07-.22-.11-.33-.18-.55.19-.14.28-.21.47-.35-.23 0-.35.01-.58.01-.07-.23-.11-.34-.18-.56z"
              fill="url(#prefix__Q)"
              transform="translate(16 25)"
            />
            <path
              d="M2.56 3.42l-.18.56c-.23.01-.35.01-.58.01.19.13.28.2.47.33l-.18.56c.19-.14.28-.21.47-.36.19.13.28.2.47.33-.07-.22-.11-.33-.18-.55.19-.14.28-.22.47-.36-.23.01-.35.01-.58.02-.07-.21-.11-.32-.18-.54z"
              fill="url(#prefix__R)"
              transform="translate(16 25)"
            />
            <path
              d="M2.56 6.23l-.18.56c-.23.01-.35.01-.58.01.19.13.28.2.47.33l-.18.56c.19-.14.28-.21.47-.36.19.13.28.2.47.33-.07-.22-.11-.33-.18-.55.19-.14.28-.22.47-.36-.23.01-.35.01-.58.02-.07-.21-.11-.32-.18-.54z"
              fill="url(#prefix__S)"
              transform="translate(16 25)"
            />
            <path
              d="M2.74 12.38c-.07-.22-.11-.33-.18-.55l-.18.56c-.23.01-.35.01-.58.01.19.13.28.2.47.33l-.18.56c.19-.14.28-.21.47-.36.19.13.28.2.47.33-.07-.22-.11-.33-.18-.55.19-.14.28-.22.47-.36-.23.02-.35.03-.58.03z"
              fill="url(#prefix__T)"
              transform="translate(16 25)"
            />
            <path
              d="M2.56 9.03l-.18.56c-.23.01-.35.01-.58.01.19.13.28.2.47.33l-.18.56c.19-.14.28-.21.47-.36.19.13.28.2.47.33-.07-.22-.11-.33-.18-.55.19-.14.28-.22.47-.36-.23.01-.35.01-.58.02-.07-.21-.11-.32-.18-.54z"
              fill="url(#prefix__U)"
              transform="translate(16 25)"
            />
            <path
              d="M.89 2.05c-.07.22-.11.33-.18.56H.13c.19.14.28.2.47.34-.07.22-.11.33-.18.56.19-.14.28-.21.47-.35.19.14.28.2.47.34-.07-.22-.11-.33-.18-.55.19-.14.28-.21.47-.35-.23 0-.35.01-.58.01C1 2.39.96 2.28.89 2.05z"
              fill="url(#prefix__V)"
              transform="translate(16 25)"
            />
            <path
              d="M9.24 8.66c-.07.23-.11.34-.18.57l-.58.05c.19.12.28.18.47.31-.07.23-.11.34-.18.57.19-.15.28-.23.47-.38.19.12.28.18.47.3-.07-.22-.11-.32-.18-.54.19-.15.28-.23.47-.39l-.58.05c-.07-.22-.11-.32-.18-.54z"
              fill="url(#prefix__W)"
              transform="translate(16 25)"
            />
            <path
              d="M15.92 7.94c-.07.23-.11.35-.18.58-.23.03-.35.04-.58.07.19.11.28.17.47.29-.07.23-.11.35-.18.58.19-.16.28-.24.47-.4.19.11.28.17.47.28-.07-.21-.11-.32-.18-.53.19-.16.28-.24.47-.41-.23.03-.35.05-.58.08-.07-.22-.11-.32-.18-.54z"
              fill="url(#prefix__X)"
              transform="translate(16 25)"
            />
            <path
              d="M15.92 5.14c-.07.23-.11.35-.18.58-.23.03-.35.04-.58.07.19.12.28.17.47.29-.07.23-.11.35-.18.58.19-.16.28-.24.47-.4.19.11.28.17.47.28-.07-.21-.11-.32-.18-.53.19-.16.28-.24.47-.41-.23.03-.35.05-.58.08-.07-.22-.11-.33-.18-.54z"
              fill="url(#prefix__Y)"
              transform="translate(16 25)"
            />
            <path
              d="M16.1 11.28c-.07-.21-.11-.32-.18-.53-.07.23-.11.35-.18.58-.23.03-.35.04-.58.07.19.11.28.17.47.29-.07.23-.11.35-.18.58.19-.16.28-.24.47-.4.19.11.28.17.47.28-.07-.21-.11-.32-.18-.53.19-.16.28-.24.47-.41-.23.02-.35.04-.58.07z"
              fill="url(#prefix__Z)"
              transform="translate(16 25)"
            />
            <path
              d="M14.25 3.94c-.07.23-.11.35-.18.58-.23.03-.35.04-.58.07.19.12.28.17.47.29-.07.23-.11.35-.18.58.19-.16.28-.24.47-.4.19.12.28.17.47.29-.07-.21-.11-.32-.18-.53.19-.16.28-.24.47-.4-.23.03-.35.04-.58.07-.07-.23-.11-.33-.18-.55z"
              fill="url(#prefix__aa)"
              transform="translate(16 25)"
            />
            <path
              d="M15.92 2.34c-.07.23-.11.35-.18.58-.23.03-.35.04-.58.07.19.11.28.17.47.29-.07.23-.11.35-.18.58.19-.16.28-.24.47-.4.19.11.28.17.47.28-.07-.21-.11-.32-.18-.53.19-.16.28-.24.47-.41-.23.03-.35.05-.58.08-.07-.22-.11-.33-.18-.54z"
              fill="url(#prefix__ab)"
              transform="translate(16 25)"
            />
            <path
              d="M14.25 1.14c-.07.23-.11.35-.18.58-.23.03-.35.04-.58.07.19.12.28.17.47.29-.07.23-.11.35-.18.58.19-.16.28-.24.47-.4.19.12.28.17.47.29-.07-.21-.11-.32-.18-.53.19-.16.28-.24.47-.4-.23.03-.35.04-.58.07-.07-.23-.11-.34-.18-.55z"
              fill="url(#prefix__ac)"
              transform="translate(16 25)"
            />
            <path
              d="M17.59 6.32c-.07.23-.11.35-.18.58-.23.03-.35.05-.58.08.19.11.28.17.47.28-.07.23-.11.35-.18.58.19-.16.28-.24.47-.41.19.11.28.17.47.28-.07-.21-.11-.32-.18-.53.19-.16.28-.25.47-.41-.23.03-.35.05-.58.08-.07-.21-.1-.32-.18-.53z"
              fill="url(#prefix__ad)"
              transform="translate(16 25)"
            />
            <path
              d="M17.6 3.52c-.07.23-.11.35-.18.58-.23.03-.35.05-.58.08.19.11.28.17.47.28-.07.23-.11.35-.18.58.19-.16.28-.24.47-.41.19.11.28.17.47.28-.07-.21-.11-.32-.18-.53.19-.16.28-.24.47-.41-.24.03-.36.04-.59.08-.07-.22-.1-.32-.17-.53z"
              fill="url(#prefix__ae)"
              transform="translate(16 25)"
            />
            <path
              d="M17.77 12.46c-.07-.21-.11-.32-.18-.53-.07.23-.11.35-.18.58-.23.03-.35.05-.58.08.19.11.28.17.47.28-.07.23-.11.35-.18.58.19-.16.28-.25.47-.41.19.11.28.17.47.28-.07-.21-.11-.32-.18-.53.19-.16.28-.25.47-.41-.23.03-.35.05-.58.08z"
              fill="url(#prefix__af)"
              transform="translate(16 25)"
            />
            <path
              d="M17.6.71c-.07.23-.11.35-.18.58-.23.03-.35.05-.58.08.19.11.28.17.47.28-.07.23-.11.35-.18.58.19-.16.28-.24.47-.41.19.11.28.17.47.28-.07-.21-.11-.32-.18-.53.19-.16.28-.25.47-.41-.23.03-.34.05-.58.08-.08-.21-.11-.31-.18-.53z"
              fill="url(#prefix__ag)"
              transform="translate(16 25)"
            />
            <path
              d="M17.59 9.12c-.07.23-.11.35-.18.58-.23.03-.35.05-.58.08.19.11.28.17.47.28-.07.23-.11.35-.18.58.19-.16.28-.24.47-.41.19.11.28.17.47.28-.07-.21-.11-.32-.18-.53.19-.16.28-.25.47-.41-.23.03-.35.05-.58.08-.07-.21-.11-.31-.18-.53z"
              fill="url(#prefix__ah)"
              transform="translate(16 25)"
            />
            <path
              d="M14.25 6.75c-.07.23-.11.35-.18.58-.23.03-.35.04-.58.07.19.12.28.17.47.29-.07.23-.11.35-.18.58.19-.16.28-.24.47-.4.19.12.28.17.47.29-.07-.21-.11-.32-.18-.53.19-.16.28-.24.47-.4-.23.03-.35.04-.58.07-.07-.23-.11-.34-.18-.55z"
              fill="url(#prefix__ai)"
              transform="translate(16 25)"
            />
            <path
              d="M9.24 3.05c-.07.23-.11.34-.18.57l-.58.05c.19.12.28.18.47.31-.07.23-.11.34-.18.57.19-.15.28-.23.47-.38.19.12.28.18.47.3-.07-.22-.11-.32-.18-.54.19-.15.28-.23.47-.39l-.58.05c-.07-.22-.11-.32-.18-.54z"
              fill="url(#prefix__aj)"
              transform="translate(16 25)"
            />
            <path
              d="M10.91 9.91c-.07.23-.11.34-.18.57l-.58.05c.19.12.28.18.47.3-.07.23-.11.34-.18.57.19-.16.28-.23.47-.39.19.12.28.18.47.3-.07-.21-.11-.32-.18-.54.19-.16.28-.23.47-.39-.23.02-.35.03-.58.06-.07-.21-.11-.32-.18-.53z"
              fill="url(#prefix__ak)"
              transform="translate(16 25)"
            />
            <path
              d="M14.25 9.55c-.07.23-.11.35-.18.58-.23.03-.35.04-.58.07.19.12.28.17.47.29-.07.23-.11.35-.18.58.19-.16.28-.24.47-.4.19.11.28.17.47.29-.07-.21-.11-.32-.18-.53.19-.16.28-.24.47-.4-.23.03-.35.04-.58.07-.07-.23-.11-.34-.18-.55z"
              fill="url(#prefix__al)"
              transform="translate(16 25)"
            />
            <path
              d="M10.91 4.3c-.07.23-.11.34-.18.57l-.58.05c.19.12.28.18.47.3-.07.23-.11.34-.18.57.19-.16.28-.23.47-.39.19.12.28.18.47.3-.07-.22-.11-.32-.18-.54.19-.16.28-.23.47-.39-.23.02-.35.03-.58.06-.07-.21-.11-.32-.18-.53z"
              fill="url(#prefix__am)"
              transform="translate(16 25)"
            />
            <path
              d="M10.91 12.71c-.07.23-.11.34-.18.57l-.58.05c.19.12.28.18.47.3-.07.23-.11.34-.18.57.19-.16.28-.23.47-.39.19.12.28.18.47.3-.07-.22-.11-.32-.18-.54.19-.15.28-.23.47-.39-.23.02-.35.03-.58.06-.07-.21-.11-.31-.18-.53z"
              fill="url(#prefix__an)"
              transform="translate(16 25)"
            />
            <path
              d="M9.24 5.86c-.07.23-.11.34-.18.57l-.58.05c.19.12.28.18.47.31-.07.23-.11.34-.18.57.19-.15.28-.23.47-.38.19.12.28.18.47.3-.07-.22-.11-.32-.18-.54.19-.15.28-.23.47-.39l-.58.05c-.07-.22-.11-.33-.18-.54z"
              fill="url(#prefix__ao)"
              transform="translate(16 25)"
            />
            <path
              d="M10.91 1.5c-.07.23-.11.34-.18.57l-.58.05c.19.12.28.18.47.3-.07.23-.11.34-.18.57.19-.15.28-.23.47-.39.19.12.28.18.47.3-.07-.22-.11-.32-.18-.54.19-.16.28-.23.47-.39-.23.02-.35.04-.58.06-.07-.21-.1-.32-.18-.53z"
              fill="url(#prefix__ap)"
              transform="translate(16 25)"
            />
            <path
              d="M10.91 7.1c-.07.23-.11.34-.18.57l-.58.05c.19.12.28.18.47.3-.07.23-.11.34-.18.57.19-.15.28-.23.47-.39.19.12.28.18.47.3-.07-.22-.11-.32-.18-.54.19-.16.28-.23.47-.39-.23.02-.35.03-.58.06-.07-.2-.11-.31-.18-.53z"
              fill="url(#prefix__aq)"
              transform="translate(16 25)"
            />
            <path
              d="M14.43 12.89c-.07-.21-.11-.32-.18-.53-.07.23-.11.35-.18.58-.23.03-.35.04-.58.07.19.12.28.17.47.29-.07.23-.11.35-.18.58.19-.16.28-.24.47-.4.19.12.28.17.47.29-.07-.21-.11-.32-.18-.53.19-.16.28-.24.47-.4-.23.01-.35.02-.58.05z"
              fill="url(#prefix__ar)"
              transform="translate(16 25)"
            />
            <path
              d="M12.76 11.68c-.07-.21-.11-.32-.18-.54-.07.23-.11.35-.18.58-.23.02-.35.04-.58.06.19.12.28.18.47.3-.07.23-.11.34-.18.57.19-.16.28-.24.47-.39.19.12.28.18.47.29-.07-.21-.11-.32-.18-.54.19-.16.28-.24.47-.4-.23.03-.35.04-.58.07z"
              fill="url(#prefix__as)"
              transform="translate(16 25)"
            />
            <path
              d="M12.58 2.73c-.07.23-.11.35-.18.57-.23.02-.35.04-.58.06.19.12.28.18.47.3-.07.23-.11.34-.18.57.19-.16.28-.24.47-.39.19.12.28.18.47.29-.07-.21-.11-.32-.18-.54.19-.16.28-.24.47-.4-.23.03-.35.04-.58.06-.07-.2-.1-.31-.18-.52z"
              fill="url(#prefix__at)"
              transform="translate(16 25)"
            />
            <path
              d="M12.58 8.34c-.07.23-.11.35-.18.57-.23.02-.35.04-.58.06.19.12.28.18.47.29-.07.23-.11.35-.18.57.19-.16.28-.23.47-.39.19.12.28.18.47.29-.07-.21-.11-.32-.18-.54.19-.16.28-.24.47-.4-.23.03-.35.04-.58.06-.07-.19-.1-.3-.18-.51z"
              fill="url(#prefix__au)"
              transform="translate(16 25)"
            />
            <path
              d="M12.58 5.53c-.07.23-.11.34-.18.57-.23.02-.35.04-.58.06.19.12.28.18.47.3-.07.23-.11.35-.18.57.19-.16.28-.23.47-.39.19.12.28.18.47.29-.07-.21-.11-.32-.18-.54.19-.16.28-.24.47-.4-.23.03-.35.04-.58.06-.07-.19-.1-.3-.18-.52z"
              fill="url(#prefix__av)"
              transform="translate(16 25)"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const LinkOutIcon = () => (
  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 2.81829e-06 10 2.81829e-06C11.5527 -0.00116364 13.0842 0.359775 14.4729 1.05414C15.8617 1.74851 17.0693 2.75718 18 4H15.29C14.1352 2.98176 12.7112 2.31836 11.1887 2.0894C9.66625 1.86044 8.11007 2.07566 6.70689 2.70922C5.30371 3.34277 4.11315 4.36776 3.27807 5.66119C2.44299 6.95462 1.99887 8.46153 1.999 10.0011C1.99913 11.5407 2.4435 13.0475 3.27879 14.3408C4.11409 15.6341 5.30482 16.6589 6.7081 17.2922C8.11139 17.9255 9.66761 18.1405 11.19 17.9113C12.7125 17.6821 14.1364 17.0184 15.291 16H18.001C17.0702 17.243 15.8624 18.2517 14.4735 18.9461C13.0846 19.6405 11.5528 20.0013 10 20ZM17 14V11H9V9H17V6L22 10L17 14Z" fill="#B0BAC5"/>
  </svg>
)

const WalletIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 17 14.999"
  >
    <title>Wallet Icon</title>
    <path
      fill="#FFF"
      d="M22 10.5H10a2.006 2.006 0 00-2 2v8a2.006 2.006 0 002 2h4.507a5.363 5.363 0 01-.413-1.333H10a.669.669 0 01-.667-.667v-8a.669.669 0 01.667-.667h12a.669.669 0 01.667.667v2.86A5.672 5.672 0 0124 16.513V12.5a2.006 2.006 0 00-2-2z"
      transform="translate(-8 -10.5)"
    ></path>
    <path
      fill="#FFF"
      d="M12.833 13.833h-4a.5.5 0 00-.5.5v4.333a.5.5 0 00.5.5h4a1.835 1.835 0 001.833-1.833v-1.667a1.835 1.835 0 00-1.833-1.833zm-.833 4a1.333 1.333 0 111.333-1.333A1.333 1.333 0 0112 17.833z"
      transform="translate(-8 -10.5)"
    ></path>
    <path
      fill="#1eb2ff"
      d="M19.667 15.833A4.333 4.333 0 1024 20.167a4.338 4.338 0 00-4.333-4.334zm-.084 3.834h.167a1.247 1.247 0 01.417 2.423v.243a.5.5 0 01-1 0v-.167h-.333a.5.5 0 010-1h.917a.25.25 0 000-.5h-.167a1.247 1.247 0 01-.417-2.423V18a.5.5 0 011 0v.167h.333a.5.5 0 010 1h-.917a.25.25 0 000 .5z"
      transform="translate(-7 -9.5)"
    ></path>
  </svg>
);

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    display="block"
    viewBox="0 0 16 16"
    style={{ height: 16, width: 16 }}
  >
    <title>Globe Icon</title>
    <path
      fill="#3066DB"
      d="M8.002.25a7.77 7.77 0 017.748 7.776 7.75 7.75 0 01-7.521 7.72l-.246.004a7.75 7.75 0 01-7.73-7.513L.25 7.992A7.75 7.75 0 018.002.25zm1.949 8.5H6.048c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 003.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 003.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576l-.115.046a6.257 6.257 0 00-3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904C9.796 4.347 8.774 1.907 8.06 1.756l-.065-.007zm2.28.432l.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 00-3.929-5.068z"
    ></path>
  </svg>
);

const GlobeIconV2 = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.19616 4.3788C3.13369 5.48154 2.48324 6.91643 2.35413 8.44227C2.22503 9.96812 2.62514 11.4919 3.48721 12.7575C4.34928 14.0231 5.62075 14.9533 7.08792 15.3918C8.55508 15.8303 10.1285 15.7504 11.5437 15.1655C11.6395 14.5405 11.4295 13.9405 11.3437 13.7305C11.152 13.2638 10.5203 12.4663 9.46616 11.3605C9.18449 11.0646 9.20283 10.8371 9.30366 10.163L9.31449 10.0871C9.38283 9.62547 9.49783 9.35214 11.052 9.10547C11.842 8.98047 12.0495 9.29547 12.337 9.73297L12.4337 9.8763C12.707 10.2763 12.9095 10.368 13.2153 10.5063C13.3528 10.5688 13.5237 10.648 13.7528 10.7771C14.2962 11.088 14.2962 11.4388 14.2962 12.2071V12.2946C14.2962 12.6205 14.2645 12.9071 14.2145 13.1563C14.854 12.3537 15.2996 11.4144 15.5166 10.4115C15.7337 9.40851 15.7164 8.36899 15.466 7.37383C15.2156 6.37867 14.7389 5.45472 14.0731 4.67392C13.4072 3.89311 12.5701 3.27652 11.627 2.87214C11.1662 3.18297 10.5337 3.6238 10.3128 3.9263C10.2003 4.08047 10.0403 4.86964 9.52116 4.93464C9.38616 4.9513 9.20366 4.93964 9.01033 4.92714C8.49199 4.8938 7.78366 4.84797 7.55699 5.4638C7.41283 5.8538 7.38783 6.9138 7.85366 7.4638C7.92866 7.5513 7.94283 7.7138 7.89199 7.8963C7.82533 8.13547 7.69116 8.2813 7.64866 8.3113C7.56866 8.26464 7.40866 8.0788 7.29949 7.95297C7.03866 7.6488 6.71199 7.26964 6.29033 7.15297C6.13699 7.11047 5.96866 7.07547 5.80449 7.04047C5.34699 6.94464 4.82949 6.83547 4.70866 6.5788C4.62033 6.39047 4.62116 6.1313 4.62116 5.85797C4.62116 5.51047 4.62116 5.11797 4.45116 4.73714C4.39206 4.60123 4.3052 4.47917 4.19616 4.3788ZM9.00033 17.3346C4.39783 17.3346 0.666992 13.6038 0.666992 9.0013C0.666992 4.3988 4.39783 0.667969 9.00033 0.667969C13.6028 0.667969 17.3337 4.3988 17.3337 9.0013C17.3337 13.6038 13.6028 17.3346 9.00033 17.3346Z"
      fill="#61677A"
    />
  </svg>
);

const PaperstackIcon = () => (
  <svg
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#3066DB"
      d="M4 4V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V15C18 15.2652 17.8946 15.5196 17.7071 15.7071C17.5196 15.8946 17.2652 16 17 16H14V19C14 19.552 13.55 20 12.993 20H1.007C0.875127 20.0008 0.744397 19.9755 0.622322 19.9256C0.500247 19.8757 0.389233 19.8022 0.295659 19.7093C0.202084 19.6164 0.127793 19.5059 0.0770543 19.3841C0.0263156 19.2624 0.000129374 19.1319 0 19L0.00300002 5C0.00300002 4.448 0.453 4 1.01 4H4ZM2.003 6L2 18H12V6H2.003ZM6 4H14V14H16V2H6V4Z"
    />
  </svg>
);

const CouponIcon = () => (
  <svg
    width="22"
    height="21"
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.89997 0.0999756L19.799 1.51498L21.213 11.415L12.021 20.607C11.8334 20.7944 11.5791 20.8998 11.314 20.8998C11.0488 20.8998 10.7945 20.7944 10.607 20.607L0.706971 10.707C0.5195 10.5194 0.414185 10.2651 0.414185 9.99998C0.414185 9.73481 0.5195 9.4805 0.706971 9.29298L9.89997 0.0999756ZM10.607 2.22198L2.82797 9.99998L11.314 18.485L19.092 10.707L18.032 3.28198L10.607 2.22198ZM12.727 8.58598C12.3518 8.21069 12.1411 7.70176 12.1412 7.17112C12.1413 6.90838 12.1931 6.64822 12.2936 6.40549C12.3942 6.16277 12.5417 5.94223 12.7275 5.75648C12.9133 5.57072 13.1339 5.42338 13.3766 5.32288C13.6194 5.22238 13.8796 5.17067 14.1423 5.17072C14.673 5.17081 15.1818 5.38169 15.557 5.75698C15.9321 6.13226 16.1428 6.6412 16.1427 7.17183C16.1426 7.70246 15.9318 8.21133 15.5565 8.58648C15.1812 8.96162 14.6723 9.17233 14.1416 9.17223C13.611 9.17214 13.1021 8.96126 12.727 8.58598Z"
      fill="#3066DB"
    />
  </svg>
);

const VisaLogoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    viewBox="0 0 141.732 141.732"
  >
    <path
      d="M62.935 89.571h-9.733l6.083-37.384h9.734zM45.014 52.187L35.735 77.9l-1.098-5.537.001.002-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s4.691.976 10.181 4.273l8.456 32.479h10.141l15.485-37.385H45.014zm76.555 37.384h8.937l-7.792-37.385h-7.824c-3.613 0-4.493 2.786-4.493 2.786L95.881 89.571h10.146l2.029-5.553h12.373l1.14 5.553zm-10.71-13.224l5.114-13.99 2.877 13.99h-7.991zm-14.217-15.17l1.389-8.028s-4.286-1.63-8.754-1.63c-4.83 0-16.3 2.111-16.3 12.376 0 9.658 13.462 9.778 13.462 14.851s-12.075 4.164-16.06.965l-1.447 8.394s4.346 2.111 10.986 2.111c6.642 0 16.662-3.439 16.662-12.799 0-9.72-13.583-10.625-13.583-14.851.001-4.227 9.48-3.684 13.645-1.389z"
      fill="#ffffff"
    />
    <path
      d="M34.638 72.364l-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s7.373 1.528 14.445 7.253c6.762 5.472 8.967 12.292 8.967 12.292z"
      fill="#e6a540"
    />
    <path fill="none" d="M0 0h141.732v141.732H0z" />
  </svg>
);

const AmazonLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    viewBox="-150 -75.338 1300 452.031"
  >
    <path
      d="M620.38 235.668c-58.111 42.833-142.34 65.686-214.86 65.686-101.685 0-193.227-37.61-262.483-100.161-5.44-4.92-.565-11.623 5.964-7.792 74.74 43.486 167.153 69.647 262.613 69.647 64.38 0 135.202-13.32 200.322-40.961 9.837-4.179 18.064 6.442 8.444 13.581"
      fill="#f90"
      fillRule="evenodd"
    />
    <path
      d="M644.54 208.027c-7.4-9.49-49.102-4.484-67.82-2.264-5.702.697-6.572-4.266-1.436-7.835 33.213-23.375 87.712-16.628 94.067-8.793 6.355 7.879-1.654 62.508-32.865 88.582-4.788 4.005-9.359 1.872-7.226-3.439 7.009-17.498 22.723-56.718 15.28-66.251"
      fill="#f90"
      fillRule="evenodd"
    />
    <path
      d="M578.026 32.908V10.186c0-3.439 2.612-5.746 5.746-5.746H685.5c3.265 0 5.877 2.35 5.877 5.746v19.457c-.044 3.265-2.786 7.531-7.661 14.278l-52.714 75.262c19.588-.478 40.264 2.438 58.024 12.45 4.005 2.263 5.093 5.572 5.398 8.836v24.246c0 3.308-3.657 7.182-7.487 5.18-31.298-16.41-72.868-18.195-107.474.174-3.526 1.916-7.226-1.915-7.226-5.223v-23.027c0-3.7.043-10.012 3.743-15.627l61.072-87.581h-53.15c-3.264 0-5.876-2.307-5.876-5.703M206.939 174.683h-30.95c-2.96-.217-5.31-2.437-5.528-5.267V10.578c0-3.178 2.655-5.703 5.963-5.703h28.86c3.004.13 5.398 2.438 5.616 5.31V30.95h.566c7.53-20.067 21.677-29.425 40.743-29.425 19.37 0 31.472 9.358 40.178 29.425 7.487-20.067 24.507-29.425 42.746-29.425 12.971 0 27.162 5.354 35.824 17.368 9.794 13.363 7.792 32.777 7.792 49.797l-.044 100.248c0 3.178-2.655 5.746-5.963 5.746h-30.906c-3.09-.217-5.572-2.698-5.572-5.746V84.752c0-6.704.61-23.42-.87-29.774-2.307-10.665-9.228-13.669-18.196-13.669-7.487 0-15.322 5.006-18.5 13.016-3.177 8.01-2.872 21.416-2.872 30.427v84.185c0 3.178-2.656 5.746-5.964 5.746h-30.906c-3.134-.217-5.572-2.698-5.572-5.746l-.043-84.185c0-17.717 2.916-43.79-19.066-43.79-22.243 0-21.373 25.42-21.373 43.79v84.185c0 3.178-2.655 5.746-5.963 5.746M778.958 1.524c45.923 0 70.779 39.437 70.779 89.583 0 48.448-27.467 86.885-70.78 86.885-45.096 0-69.646-39.438-69.646-88.583 0-49.449 24.855-87.885 69.647-87.885m.261 32.429c-22.81 0-24.246 31.08-24.246 50.45 0 19.415-.304 60.854 23.985 60.854 23.985 0 25.116-33.43 25.116-53.802 0-13.407-.566-29.426-4.614-42.136-3.482-11.057-10.403-15.366-20.24-15.366m130.065 140.73h-30.819c-3.09-.217-5.572-2.698-5.572-5.746l-.043-158.882c.26-2.916 2.83-5.18 5.963-5.18H907.5c2.699.13 4.919 1.96 5.528 4.44v24.29h.566c8.663-21.721 20.807-32.081 42.18-32.081 13.886 0 27.424 5.005 36.13 18.717C1000 32.951 1000 54.325 1000 69.691v99.986c-.348 2.786-2.916 5.006-5.963 5.006H963c-2.83-.217-5.18-2.307-5.485-5.006V83.402c0-17.368 2.003-42.79-19.37-42.79-7.53 0-14.452 5.05-17.89 12.711-4.354 9.708-4.92 19.371-4.92 30.08v85.534c-.043 3.178-2.742 5.746-6.05 5.746M496.931 98.812c0 12.057.305 22.113-5.79 32.82-4.918 8.707-12.753 14.06-21.416 14.06-11.883 0-18.848-9.053-18.848-22.417 0-26.379 23.637-31.167 46.054-31.167v6.704m31.21 75.436c-2.045 1.828-5.005 1.959-7.312.74-10.273-8.532-12.145-12.493-17.76-20.633-16.977 17.325-29.034 22.505-51.017 22.505-26.074 0-46.315-16.063-46.315-48.23 0-25.117 13.581-42.224 32.995-50.582 16.803-7.4 40.265-8.706 58.2-10.752v-4.004c0-7.357.565-16.063-3.788-22.418-3.743-5.702-10.97-8.053-17.368-8.053-11.797 0-22.287 6.05-24.855 18.587-.523 2.786-2.569 5.528-5.398 5.659l-29.992-3.221c-2.524-.566-5.354-2.612-4.614-6.486C417.795 10.97 450.703 0 480.13 0c15.061 0 34.736 4.005 46.62 15.41 15.06 14.06 13.624 32.82 13.624 53.236v48.23c0 14.496 6.008 20.85 11.666 28.686 1.96 2.786 2.394 6.138-.13 8.227-6.312 5.267-17.543 15.061-23.724 20.546l-.043-.087M91.194 98.812c0 12.057.305 22.113-5.79 32.82-4.918 8.707-12.71 14.06-21.416 14.06-11.883 0-18.805-9.053-18.805-22.417 0-26.379 23.637-31.167 46.011-31.167v6.704m31.21 75.436c-2.045 1.828-5.005 1.959-7.312.74-10.273-8.532-12.102-12.493-17.76-20.633-16.977 17.325-28.99 22.505-51.017 22.505C20.285 176.86 0 160.797 0 128.63c0-25.117 13.625-42.224 32.995-50.582 16.803-7.4 40.265-8.706 58.199-10.752v-4.004c0-7.357.566-16.063-3.744-22.418-3.787-5.702-11.012-8.053-17.368-8.053-11.796 0-22.33 6.05-24.899 18.587-.522 2.786-2.568 5.528-5.354 5.659L9.794 53.846c-2.525-.566-5.31-2.612-4.614-6.486C12.101 10.97 44.966 0 74.392 0c15.06 0 34.736 4.005 46.62 15.41 15.06 14.06 13.624 32.82 13.624 53.236v48.23c0 14.496 6.007 20.85 11.666 28.686 2.003 2.786 2.438 6.138-.087 8.227-6.312 5.267-17.542 15.061-23.723 20.546l-.087-.087"
      fillRule="evenodd"
      fill="#fff"
    />
  </svg>
);

const AmazonLogoBlack = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    viewBox="-150 -75.338 1300 452.031"
  >
    <path
      d="M620.38 235.668c-58.111 42.833-142.34 65.686-214.86 65.686-101.685 0-193.227-37.61-262.483-100.161-5.44-4.92-.565-11.623 5.964-7.792 74.74 43.486 167.153 69.647 262.613 69.647 64.38 0 135.202-13.32 200.322-40.961 9.837-4.179 18.064 6.442 8.444 13.581"
      fill="#f90"
      fillRule="evenodd"
    />
    <path
      d="M644.54 208.027c-7.4-9.49-49.102-4.484-67.82-2.264-5.702.697-6.572-4.266-1.436-7.835 33.213-23.375 87.712-16.628 94.067-8.793 6.355 7.879-1.654 62.508-32.865 88.582-4.788 4.005-9.359 1.872-7.226-3.439 7.009-17.498 22.723-56.718 15.28-66.251"
      fill="#f90"
      fillRule="evenodd"
    />
    <path
      d="M578.026 32.908V10.186c0-3.439 2.612-5.746 5.746-5.746H685.5c3.265 0 5.877 2.35 5.877 5.746v19.457c-.044 3.265-2.786 7.531-7.661 14.278l-52.714 75.262c19.588-.478 40.264 2.438 58.024 12.45 4.005 2.263 5.093 5.572 5.398 8.836v24.246c0 3.308-3.657 7.182-7.487 5.18-31.298-16.41-72.868-18.195-107.474.174-3.526 1.916-7.226-1.915-7.226-5.223v-23.027c0-3.7.043-10.012 3.743-15.627l61.072-87.581h-53.15c-3.264 0-5.876-2.307-5.876-5.703M206.939 174.683h-30.95c-2.96-.217-5.31-2.437-5.528-5.267V10.578c0-3.178 2.655-5.703 5.963-5.703h28.86c3.004.13 5.398 2.438 5.616 5.31V30.95h.566c7.53-20.067 21.677-29.425 40.743-29.425 19.37 0 31.472 9.358 40.178 29.425 7.487-20.067 24.507-29.425 42.746-29.425 12.971 0 27.162 5.354 35.824 17.368 9.794 13.363 7.792 32.777 7.792 49.797l-.044 100.248c0 3.178-2.655 5.746-5.963 5.746h-30.906c-3.09-.217-5.572-2.698-5.572-5.746V84.752c0-6.704.61-23.42-.87-29.774-2.307-10.665-9.228-13.669-18.196-13.669-7.487 0-15.322 5.006-18.5 13.016-3.177 8.01-2.872 21.416-2.872 30.427v84.185c0 3.178-2.656 5.746-5.964 5.746h-30.906c-3.134-.217-5.572-2.698-5.572-5.746l-.043-84.185c0-17.717 2.916-43.79-19.066-43.79-22.243 0-21.373 25.42-21.373 43.79v84.185c0 3.178-2.655 5.746-5.963 5.746M778.958 1.524c45.923 0 70.779 39.437 70.779 89.583 0 48.448-27.467 86.885-70.78 86.885-45.096 0-69.646-39.438-69.646-88.583 0-49.449 24.855-87.885 69.647-87.885m.261 32.429c-22.81 0-24.246 31.08-24.246 50.45 0 19.415-.304 60.854 23.985 60.854 23.985 0 25.116-33.43 25.116-53.802 0-13.407-.566-29.426-4.614-42.136-3.482-11.057-10.403-15.366-20.24-15.366m130.065 140.73h-30.819c-3.09-.217-5.572-2.698-5.572-5.746l-.043-158.882c.26-2.916 2.83-5.18 5.963-5.18H907.5c2.699.13 4.919 1.96 5.528 4.44v24.29h.566c8.663-21.721 20.807-32.081 42.18-32.081 13.886 0 27.424 5.005 36.13 18.717C1000 32.951 1000 54.325 1000 69.691v99.986c-.348 2.786-2.916 5.006-5.963 5.006H963c-2.83-.217-5.18-2.307-5.485-5.006V83.402c0-17.368 2.003-42.79-19.37-42.79-7.53 0-14.452 5.05-17.89 12.711-4.354 9.708-4.92 19.371-4.92 30.08v85.534c-.043 3.178-2.742 5.746-6.05 5.746M496.931 98.812c0 12.057.305 22.113-5.79 32.82-4.918 8.707-12.753 14.06-21.416 14.06-11.883 0-18.848-9.053-18.848-22.417 0-26.379 23.637-31.167 46.054-31.167v6.704m31.21 75.436c-2.045 1.828-5.005 1.959-7.312.74-10.273-8.532-12.145-12.493-17.76-20.633-16.977 17.325-29.034 22.505-51.017 22.505-26.074 0-46.315-16.063-46.315-48.23 0-25.117 13.581-42.224 32.995-50.582 16.803-7.4 40.265-8.706 58.2-10.752v-4.004c0-7.357.565-16.063-3.788-22.418-3.743-5.702-10.97-8.053-17.368-8.053-11.797 0-22.287 6.05-24.855 18.587-.523 2.786-2.569 5.528-5.398 5.659l-29.992-3.221c-2.524-.566-5.354-2.612-4.614-6.486C417.795 10.97 450.703 0 480.13 0c15.061 0 34.736 4.005 46.62 15.41 15.06 14.06 13.624 32.82 13.624 53.236v48.23c0 14.496 6.008 20.85 11.666 28.686 1.96 2.786 2.394 6.138-.13 8.227-6.312 5.267-17.543 15.061-23.724 20.546l-.043-.087M91.194 98.812c0 12.057.305 22.113-5.79 32.82-4.918 8.707-12.71 14.06-21.416 14.06-11.883 0-18.805-9.053-18.805-22.417 0-26.379 23.637-31.167 46.011-31.167v6.704m31.21 75.436c-2.045 1.828-5.005 1.959-7.312.74-10.273-8.532-12.102-12.493-17.76-20.633-16.977 17.325-28.99 22.505-51.017 22.505C20.285 176.86 0 160.797 0 128.63c0-25.117 13.625-42.224 32.995-50.582 16.803-7.4 40.265-8.706 58.199-10.752v-4.004c0-7.357.566-16.063-3.744-22.418-3.787-5.702-11.012-8.053-17.368-8.053-11.796 0-22.33 6.05-24.899 18.587-.522 2.786-2.568 5.528-5.354 5.659L9.794 53.846c-2.525-.566-5.31-2.612-4.614-6.486C12.101 10.97 44.966 0 74.392 0c15.06 0 34.736 4.005 46.62 15.41 15.06 14.06 13.624 32.82 13.624 53.236v48.23c0 14.496 6.007 20.85 11.666 28.686 2.003 2.786 2.438 6.138-.087 8.227-6.312 5.267-17.542 15.061-23.723 20.546l-.087-.087"
      fillRule="evenodd"
      fill="#000"
    />
  </svg>
);

const LightningIcon = () => (
  <svg
    width={45}
    height={70}
    viewBox="0 0 45 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.362 70l-1.113-.2a3.272 3.272 0 01-2.104-3.513l3.526-26.91H4.045a3.245 3.245 0 01-2.898-1.799 3.3 3.3 0 01.276-3.42l23.834-32.81A3.216 3.216 0 0129.14.262a3.285 3.285 0 011.945 3.56l-3.7 22.431h13.493c1.187 0 2.278.651 2.852 1.706a3.315 3.315 0 01-.11 3.342L20.102 68.485A3.248 3.248 0 0117.362 70z"
      fill="url(#lightning_icon_gradient)"
    />
    <defs>
      <linearGradient
        id="lightning_icon_gradient"
        x1={2.047}
        y1={2.979}
        x2={44.315}
        y2={3.907}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#b9c0ff" />
        <stop offset={1} stopColor="#d7d6ff" />
      </linearGradient>
    </defs>
  </svg>
);

const PlusIcon = () => (
  <svg
    width={69}
    height={69}
    viewBox="0 0 69 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M68.096 34.048c0 18.804-15.244 34.047-34.048 34.047C15.244 68.096 0 52.852 0 34.049 0 15.244 15.244 0 34.048 0c18.804 0 34.047 15.244 34.047 34.048z"
      fill="url(#plus_icon_gradient)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.707 14.981a3.745 3.745 0 00-3.745 3.745v11.236H18.726a3.745 3.745 0 100 7.49h11.236v11.236a3.745 3.745 0 107.49 0V37.452h11.236a3.745 3.745 0 000-7.49H37.452V18.726a3.745 3.745 0 00-3.745-3.745z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="plus_icon_gradient"
        x1={1.968}
        y1={2.898}
        x2={68.337}
        y2={5.253}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#b9c0ff" />
        <stop offset={1} stopColor="#d7d6ff" />
      </linearGradient>
    </defs>
  </svg>
);

const AnalyticsIcon = () => (
  <svg
    width={104}
    height={69}
    viewBox="0 0 104 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M103.29 32.078c-1.333-3.066-4.621-4.813-7.873-4.131-.516.106-.783-.036-1.091-.384l-.416-.464a684.254 684.254 0 00-6.604-7.293c-.41-.445-.318-.712-.035-1.157 1.58-2.5 2.302-5.186 1.944-8.181C88.422 3.882 81.731-1.016 75.236.18c-9.126 1.681-12.944 12.383-7.409 19.276.293.364.273.576-.03.914A5873.401 5873.401 0 0051.95 38.22c-.349.399-.54.358-.94.065-5.716-4.267-12.736-4.605-18.897-.899-.52.314-.758.202-1.116-.192a800.798 800.798 0 00-7.172-7.752c-.373-.398-.384-.61-.035-1.04 2.303-2.823 3.293-6.05 2.98-9.696-.647-7.535-7.737-13.181-15.247-11.994-5.651.888-9.393 4.196-10.939 9.655C-.92 21.7.488 26.442 4.731 30.023c4.358 3.677 9.327 4.273 14.57 1.934.53-.237.823-.237 1.227.207a538.653 538.653 0 007.292 7.884c.45.475.358.737.005 1.197-2.313 3-3.495 6.403-3.56 10.196-.142 9.1 7.383 16.67 16.67 16.656 6.576-.01 11.535-3.036 14.65-8.747 3.081-5.641 2.657-11.338-.63-16.817-.339-.566-.364-.864.085-1.364a3825.936 3825.936 0 0015.97-17.984c.433-.49.741-.5 1.302-.257 3.636 1.58 7.242 1.535 10.757-.364.57-.308.828-.177 1.202.248l.407.457c1.9 2.136 3.798 4.271 5.76 6.345.625.662.67 1.086.216 1.889-1.666 2.944-1 6.54 1.485 8.666 2.495 2.131 6.217 2.338 8.757.485 2.677-1.965 3.692-5.586 2.394-8.575z"
      fill="url(#analytics_icon_gradient)"
    />
    <defs>
      <linearGradient
        id="analytics_icon_gradient"
        x1={3.001}
        y1={2.898}
        x2={104.051}
        y2={8.367}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#b9c0ff" />
        <stop offset={1} stopColor="#d7d6ff" />
      </linearGradient>
    </defs>
  </svg>
);

const ModalClose = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 1L1 11" stroke="#080E17" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 11L1 1" stroke="#080E17" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MailIcon = () => (
  <svg
    width={20}
    height={18}
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 0h18a1 1 0 011 1v16a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1zm9.06 8.683L3.648 3.238 2.353 4.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439h-.001z"
      fill="#ABBACE"
    />
  </svg>
);

const LockIcon = () => (
  <svg
    width={18}
    height={20}
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 8h1a1 1 0 011 1v10a1 1 0 01-1 1H1a1 1 0 01-1-1V9a1 1 0 011-1h1V7a7 7 0 0114 0v1zm-2 0V7A5 5 0 004 7v1h10zm-6 4v4h2v-4H8z"
      fill="#ABBACE"
    />
  </svg>
);

const DollarIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#222A3A"
      d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM8.5 14H14C14.1326 14 14.2598 13.9473 14.3536 13.8536C14.4473 13.7598 14.5 13.6326 14.5 13.5C14.5 13.3674 14.4473 13.2402 14.3536 13.1464C14.2598 13.0527 14.1326 13 14 13H10C9.33696 13 8.70107 12.7366 8.23223 12.2678C7.76339 11.7989 7.5 11.163 7.5 10.5C7.5 9.83696 7.76339 9.20107 8.23223 8.73223C8.70107 8.26339 9.33696 8 10 8H11V6H13V8H15.5V10H10C9.86739 10 9.74021 10.0527 9.64645 10.1464C9.55268 10.2402 9.5 10.3674 9.5 10.5C9.5 10.6326 9.55268 10.7598 9.64645 10.8536C9.74021 10.9473 9.86739 11 10 11H14C14.663 11 15.2989 11.2634 15.7678 11.7322C16.2366 12.2011 16.5 12.837 16.5 13.5C16.5 14.163 16.2366 14.7989 15.7678 15.2678C15.2989 15.7366 14.663 16 14 16H13V18H11V16H8.5V14Z"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#222A3A"
      d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM13 12H17V14H11V7H13V12Z"
    />
  </svg>
);

const PrevArrowIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.78003 6.66658L0.665363 6.66657L0.665363 5.33324L8.78003 5.33324L5.20403 1.75724L6.1467 0.814576L11.332 5.99991L6.1467 11.1852L5.20403 10.2426L8.78003 6.66658Z"
      fill="#687485"
    />
  </svg>
);

const NextArrowIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.21802 5.33342L11.3327 5.33342V6.66676L3.21802 6.66676L6.79402 10.2428L5.85135 11.1854L0.666016 6.00009L5.85135 0.814758L6.79402 1.75742L3.21802 5.33342Z"
      fill="#687485"
    />
  </svg>
);

const CaretDownIcon = () => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.00044 3.87913L8.71294 0.166626L9.77344 1.22713L5.00044 6.00013L0.227436 1.22713L1.28794 0.166626L5.00044 3.87913Z"
      fill="white"
    />
  </svg>
);

const CaretRightIcon = () => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.17266 7.00023L0.222656 2.05023L1.63666 0.63623L8.00066 7.00023L1.63666 13.3642L0.222656 11.9502L5.17266 7.00023Z"
        fill="black"
        className="caret-fill"
      />
    </svg>
  );
};

const OrderFilterIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.168 2.50004H17.5013C17.7223 2.50004 17.9343 2.58784 18.0906 2.74412C18.2468 2.9004 18.3346 3.11236 18.3346 3.33337V16.6667C18.3346 16.8877 18.2468 17.0997 18.0906 17.256C17.9343 17.4122 17.7223 17.5 17.5013 17.5H2.5013C2.28029 17.5 2.06833 17.4122 1.91205 17.256C1.75577 17.0997 1.66797 16.8877 1.66797 16.6667V3.33337C1.66797 3.11236 1.75577 2.9004 1.91205 2.74412C2.06833 2.58784 2.28029 2.50004 2.5013 2.50004H5.83464V0.833374H7.5013V2.50004H12.5013V0.833374H14.168V2.50004ZM16.668 7.50004V4.16671H14.168V5.83337H12.5013V4.16671H7.5013V5.83337H5.83464V4.16671H3.33464V7.50004H16.668ZM16.668 9.16671H3.33464V15.8334H16.668V9.16671ZM5.0013 10.8334H9.16797V14.1667H5.0013V10.8334Z"
      fill="white"
    />
  </svg>
);

const RepurchaseActionIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M4.9987 3.33398H17.4987C17.7197 3.33398 17.9317 3.42178 18.088 3.57806C18.2442 3.73434 18.332 3.9463 18.332 4.16732V10.0007H16.6654V5.00065H4.9987V7.50065L0.832031 4.16732L4.9987 0.833984V3.33398ZM14.9987 16.6673H2.4987C2.27768 16.6673 2.06572 16.5795 1.90944 16.4232C1.75316 16.267 1.66536 16.055 1.66536 15.834V10.0007H3.33203V15.0006H14.9987V12.5007L19.1654 15.834L14.9987 19.1673V16.6673Z"
        fill="#3066DB"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const SignInSuccessIcon = () => (
  <svg
    width="66"
    height="66"
    viewBox="0 0 66 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle opacity="0.1" cx="33" cy="33" r="33" fill="#4AC77C" />
    <path
      d="M32.5025 35.1999L34.2675 36.9649L44.85 26.3824L46.6175 28.1499L34.2675 40.4999L26.3125 32.5449L28.08 30.7774L30.7362 33.4336L32.5025 35.1986V35.1999ZM32.505 31.6649L38.695 25.4736L40.4575 27.2361L34.2675 33.4274L32.505 31.6649ZM28.9713 38.7336L27.205 40.4999L19.25 32.5449L21.0175 30.7774L22.7837 32.5436L22.7825 32.5449L28.9713 38.7336Z"
      fill="#4AC77C"
    />
  </svg>
);

const AccessDeniedIcon = () => (
  <svg
    width="66"
    height="66"
    viewBox="0 0 66 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle opacity="0.1" cx="33" cy="33" r="33" fill="#FF4D35" />
    <path
      d="M33 45.5C26.0963 45.5 20.5 39.9037 20.5 33C20.5 26.0963 26.0963 20.5 33 20.5C39.9037 20.5 45.5 26.0963 45.5 33C45.5 39.9037 39.9037 45.5 33 45.5ZM33 43C35.6522 43 38.1957 41.9464 40.0711 40.0711C41.9464 38.1957 43 35.6522 43 33C43 30.3478 41.9464 27.8043 40.0711 25.9289C38.1957 24.0536 35.6522 23 33 23C30.3478 23 27.8043 24.0536 25.9289 25.9289C24.0536 27.8043 23 30.3478 23 33C23 35.6522 24.0536 38.1957 25.9289 40.0711C27.8043 41.9464 30.3478 43 33 43ZM31.75 36.75H34.25V39.25H31.75V36.75ZM31.75 26.75H34.25V34.25H31.75V26.75Z"
      fill="#FF4D35"
    />
  </svg>
);

const ChangeEmailIcon = () => (
  <svg
    width="66"
    height="66"
    viewBox="0 0 66 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="33" cy="33" r="33" fill="#F3F6FA" />
    <path
      d="M38.125 21.75C37.9574 22.5749 37.9574 23.4251 38.125 24.25H23.6388L33.0763 32.5775L39.3875 26.9275C39.92 27.5863 40.585 28.135 41.3413 28.5338L33.09 35.9225L23 27.02V41.75H43V29.125C43.8249 29.2926 44.6751 29.2926 45.5 29.125V43C45.5 43.3315 45.3683 43.6495 45.1339 43.8839C44.8995 44.1183 44.5815 44.25 44.25 44.25H21.75C21.4185 44.25 21.1005 44.1183 20.8661 43.8839C20.6317 43.6495 20.5 43.3315 20.5 43V23C20.5 22.6685 20.6317 22.3505 20.8661 22.1161C21.1005 21.8817 21.4185 21.75 21.75 21.75H38.125ZM44.25 26.75C43.7575 26.75 43.2699 26.653 42.8149 26.4645C42.36 26.2761 41.9466 25.9999 41.5983 25.6517C41.2501 25.3034 40.9739 24.89 40.7855 24.4351C40.597 23.9801 40.5 23.4925 40.5 23C40.5 22.5075 40.597 22.0199 40.7855 21.5649C40.9739 21.11 41.2501 20.6966 41.5983 20.3483C41.9466 20.0001 42.36 19.7239 42.8149 19.5355C43.2699 19.347 43.7575 19.25 44.25 19.25C45.2446 19.25 46.1984 19.6451 46.9017 20.3483C47.6049 21.0516 48 22.0054 48 23C48 23.9946 47.6049 24.9484 46.9017 25.6517C46.1984 26.3549 45.2446 26.75 44.25 26.75Z"
      fill="#3066DB"
    />
  </svg>
);

const ChangePasswordIcon = () => (
  <svg
    width="66"
    height="66"
    viewBox="0 0 66 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="33" cy="33" r="33" fill="#F3F6FA" />
    <path
      d="M26.75 30.5H43C43.3315 30.5 43.6495 30.6317 43.8839 30.8661C44.1183 31.1005 44.25 31.4185 44.25 31.75V44.25C44.25 44.5815 44.1183 44.8995 43.8839 45.1339C43.6495 45.3683 43.3315 45.5 43 45.5H23C22.6685 45.5 22.3505 45.3683 22.1161 45.1339C21.8817 44.8995 21.75 44.5815 21.75 44.25V31.75C21.75 31.4185 21.8817 31.1005 22.1161 30.8661C22.3505 30.6317 22.6685 30.5 23 30.5H24.25V29.25C24.2493 27.2784 24.9145 25.3643 26.1377 23.818C27.361 22.2718 29.0706 21.184 30.9895 20.7309C32.9084 20.2779 34.924 20.4862 36.7097 21.3221C38.4953 22.158 39.9463 23.5725 40.8275 25.3362L38.5912 26.4537C37.9619 25.1938 36.9254 24.1833 35.6498 23.5862C34.3742 22.989 32.9343 22.8403 31.5636 23.164C30.1929 23.4877 28.9717 24.2648 28.0979 25.3695C27.2242 26.4742 26.7492 27.8416 26.75 29.25V30.5ZM24.25 33V43H41.75V33H24.25ZM30.5 36.75H35.5V39.25H30.5V36.75Z"
      fill="#3066DB"
    />
  </svg>
);

const CreateWalletIcon = () => (
  <svg
    width="66"
    height="66"
    viewBox="0 0 66 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="33" cy="33" r="33" fill="#F3F6FA" />
    <path
      d="M40.5 26.75H44.25C44.5815 26.75 44.8995 26.8817 45.1339 27.1161C45.3683 27.3505 45.5 27.6685 45.5 28V43C45.5 43.3315 45.3683 43.6495 45.1339 43.8839C44.8995 44.1183 44.5815 44.25 44.25 44.25H21.75C21.4185 44.25 21.1005 44.1183 20.8661 43.8839C20.6317 43.6495 20.5 43.3315 20.5 43V23C20.5 22.6685 20.6317 22.3505 20.8661 22.1161C21.1005 21.8817 21.4185 21.75 21.75 21.75H40.5V26.75ZM23 29.25V41.75H43V29.25H23ZM23 24.25V26.75H38V24.25H23ZM36.75 34.25H40.5V36.75H36.75V34.25Z"
      fill="#3066DB"
    />
  </svg>
);

const DisconnectIcon = () => (
  <svg
    width="66"
    height="66"
    viewBox="0 0 66 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle opacity="0.1" cx="33" cy="33" r="33" fill="#FF4D35" />
    <path
      d="M39.25 39.25H45.5V41.75H41.75V45.5H39.25V39.25ZM26.75 26.75H20.5V24.25H24.25V20.5H26.75V26.75ZM40.955 37.42L39.1875 35.65L40.955 33.8825C41.5395 33.3031 42.0039 32.6139 42.3213 31.8545C42.6388 31.0951 42.8032 30.2805 42.805 29.4575C42.8068 28.6344 42.646 27.8191 42.3318 27.0583C42.0177 26.2976 41.5564 25.6063 40.9744 25.0244C40.3924 24.4424 39.7012 23.981 38.9404 23.6669C38.1797 23.3528 37.3644 23.192 36.5413 23.1938C35.7182 23.1956 34.9036 23.3599 34.1443 23.6774C33.3849 23.9949 32.6957 24.4592 32.1163 25.0438L30.3487 26.8125L28.58 25.045L30.35 23.2775C31.991 21.6365 34.2167 20.7146 36.5375 20.7146C38.8583 20.7146 41.084 21.6365 42.725 23.2775C44.366 24.9185 45.2879 27.1442 45.2879 29.465C45.2879 31.7858 44.366 34.0115 42.725 35.6525L40.9562 37.42H40.955ZM37.42 40.955L35.6513 42.7225C34.0102 44.3635 31.7845 45.2854 29.4638 45.2854C27.143 45.2854 24.9173 44.3635 23.2763 42.7225C21.6352 41.0815 20.7133 38.8558 20.7133 36.535C20.7133 34.2142 21.6352 31.9885 23.2763 30.3475L25.045 28.58L26.8125 30.35L25.045 32.1175C24.4605 32.6969 23.9961 33.3861 23.6787 34.1455C23.3612 34.9049 23.1968 35.7195 23.195 36.5425C23.1932 37.3656 23.354 38.1809 23.6682 38.9417C23.9823 39.7024 24.4436 40.3937 25.0256 40.9756C25.6076 41.5576 26.2988 42.019 27.0596 42.3331C27.8203 42.6472 28.6356 42.808 29.4587 42.8062C30.2818 42.8044 31.0964 42.6401 31.8557 42.3226C32.6151 42.0051 33.3043 41.5408 33.8837 40.9562L35.6513 39.1888L37.42 40.9562V40.955ZM36.535 27.6962L38.3037 29.465L29.465 38.3025L27.6962 36.535L36.535 27.6975V27.6962Z"
      fill="#FF4D35"
    />
  </svg>
);

const WalletIconV2 = () => (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.5 4.75H14.75C14.9489 4.75 15.1397 4.82902 15.2803 4.96967C15.421 5.11032 15.5 5.30109 15.5 5.5V13C15.5 13.1989 15.421 13.3897 15.2803 13.5303C15.1397 13.671 14.9489 13.75 14.75 13.75H1.25C1.05109 13.75 0.860322 13.671 0.71967 13.5303C0.579018 13.3897 0.5 13.1989 0.5 13V4.75ZM1.25 0.25H12.5V3.25H0.5V1C0.5 0.801088 0.579018 0.610322 0.71967 0.46967C0.860322 0.329018 1.05109 0.25 1.25 0.25ZM10.25 8.5V10H12.5V8.5H10.25Z"
      fill="#3E6CFB"
    />
  </svg>
);

const WalletIconV3 = () => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H16V4ZM2 6V16H18V6H2ZM2 2V4H14V2H2ZM13 10H16V12H13V10Z"
      fill="#3066DB"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9 5H11V7H9V5ZM9 9H11V15H9V9Z"
      fill="#687485"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    width="18"
    height="22"
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18.9L13.95 13.95C14.9289 12.971 15.5955 11.7238 15.8656 10.3659C16.1356 9.00807 15.9969 7.60064 15.4671 6.3216C14.9373 5.04256 14.04 3.94935 12.8889 3.18021C11.7378 2.41107 10.3844 2.00055 9 2.00055C7.61557 2.00055 6.26222 2.41107 5.11109 3.18021C3.95996 3.94935 3.06275 5.04256 2.53292 6.3216C2.00308 7.60064 1.86442 9.00807 2.13445 10.3659C2.40449 11.7238 3.07111 12.971 4.05 13.95L9 18.9ZM9 21.728L2.636 15.364C1.37734 14.1054 0.520187 12.5017 0.172928 10.7559C-0.17433 9.01007 0.00390685 7.20047 0.685099 5.55595C1.36629 3.91142 2.51984 2.50582 3.99988 1.51689C5.47992 0.52796 7.21998 0.00012207 9 0.00012207C10.78 0.00012207 12.5201 0.52796 14.0001 1.51689C15.4802 2.50582 16.6337 3.91142 17.3149 5.55595C17.9961 7.20047 18.1743 9.01007 17.8271 10.7559C17.4798 12.5017 16.6227 14.1054 15.364 15.364L9 21.728ZM9 11C9.53044 11 10.0391 10.7893 10.4142 10.4143C10.7893 10.0392 11 9.53048 11 9.00004C11 8.46961 10.7893 7.9609 10.4142 7.58583C10.0391 7.21076 9.53044 7.00004 9 7.00004C8.46957 7.00004 7.96086 7.21076 7.58579 7.58583C7.21072 7.9609 7 8.46961 7 9.00004C7 9.53048 7.21072 10.0392 7.58579 10.4143C7.96086 10.7893 8.46957 11 9 11ZM9 13C7.93914 13 6.92172 12.5786 6.17158 11.8285C5.42143 11.0783 5 10.0609 5 9.00004C5 7.93918 5.42143 6.92176 6.17158 6.17162C6.92172 5.42147 7.93914 5.00004 9 5.00004C10.0609 5.00004 11.0783 5.42147 11.8284 6.17162C12.5786 6.92176 13 7.93918 13 9.00004C13 10.0609 12.5786 11.0783 11.8284 11.8285C11.0783 12.5786 10.0609 13 9 13Z"
      fill="#687485"
    />
  </svg>
);

const IDIcon = () => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0.993C0.00183004 0.730378 0.1069 0.479017 0.292513 0.293218C0.478126 0.107418 0.72938 0.00209465 0.992 0H19.008C19.556 0 20 0.445 20 0.993V17.007C19.9982 17.2696 19.8931 17.521 19.7075 17.7068C19.5219 17.8926 19.2706 17.9979 19.008 18H0.992C0.728813 17.9997 0.476497 17.895 0.290489 17.7088C0.104482 17.5226 -1.33455e-07 17.2702 0 17.007V0.993ZM2 2V16H18V2H2ZM4 4H10V10H4V4ZM6 6V8H8V6H6ZM4 12H16V14H4V12ZM12 4H16V6H12V4ZM12 8H16V10H12V8Z"
      fill="#687485"
    />
  </svg>
);

const CloudDownloadIcon = () => (
  <svg
    width="24"
    height="21"
    viewBox="0 0 24 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9999 11V16.585L14.8279 14.757L16.2429 16.172L11.9999 20.414L7.7569 16.172L9.1719 14.757L10.9999 16.585V11H12.9999ZM11.9999 2.2216e-08C13.7169 8.17699e-05 15.374 0.631114 16.6561 1.77312C17.9382 2.91512 18.756 4.48846 18.9539 6.194C20.1982 6.53332 21.2836 7.29911 22.0206 8.35753C22.7575 9.41595 23.099 10.6997 22.9855 11.9844C22.872 13.2691 22.3106 14.473 21.3995 15.3858C20.4883 16.2986 19.2854 16.8622 18.0009 16.978V14.964C18.4611 14.8983 18.9035 14.7416 19.3025 14.503C19.7014 14.2644 20.0488 13.9487 20.3245 13.5744C20.6001 13.2001 20.7984 12.7746 20.9078 12.3228C21.0172 11.8711 21.0355 11.402 20.9616 10.9431C20.8878 10.4841 20.7232 10.0445 20.4776 9.64985C20.232 9.2552 19.9102 8.91342 19.5311 8.64447C19.152 8.37552 18.7231 8.18479 18.2694 8.08341C17.8158 7.98203 17.3465 7.97203 16.8889 8.054C17.0455 7.32489 17.037 6.56997 16.8641 5.84455C16.6912 5.11913 16.3582 4.44158 15.8895 3.86153C15.4208 3.28147 14.8283 2.81361 14.1554 2.49219C13.4824 2.17078 12.7461 2.00397 12.0004 2.00397C11.2547 2.00397 10.5183 2.17078 9.84542 2.49219C9.1725 2.81361 8.57999 3.28147 8.1113 3.86153C7.64261 4.44158 7.3096 5.11913 7.13668 5.84455C6.96375 6.56997 6.95528 7.32489 7.1119 8.054C6.19955 7.88267 5.25651 8.08079 4.49024 8.60476C3.72396 9.12874 3.19722 9.93566 3.02589 10.848C2.85456 11.7603 3.05268 12.7034 3.57666 13.4697C4.10063 14.2359 4.90755 14.7627 5.8199 14.934L5.9999 14.964V16.978C4.71534 16.8623 3.5123 16.2989 2.60103 15.3862C1.68976 14.4735 1.12822 13.2696 1.01457 11.9848C0.900915 10.7001 1.24237 9.41628 1.97926 8.35777C2.71615 7.29926 3.8016 6.53339 5.0459 6.194C5.2436 4.48838 6.0613 2.91491 7.34347 1.77287C8.62565 0.63082 10.2829 -0.000136703 11.9999 2.2216e-08Z"
      fill="#3066DB"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="14"
    height="20"
    viewBox="0 0 14 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 2V18H12V2H2ZM1 0H13C13.2652 0 13.5196 0.105357 13.7071 0.292893C13.8946 0.48043 14 0.734784 14 1V19C14 19.2652 13.8946 19.5196 13.7071 19.7071C13.5196 19.8946 13.2652 20 13 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM7 15C7.26522 15 7.51957 15.1054 7.70711 15.2929C7.89464 15.4804 8 15.7348 8 16C8 16.2652 7.89464 16.5196 7.70711 16.7071C7.51957 16.8946 7.26522 17 7 17C6.73478 17 6.48043 16.8946 6.29289 16.7071C6.10536 16.5196 6 16.2652 6 16C6 15.7348 6.10536 15.4804 6.29289 15.2929C6.48043 15.1054 6.73478 15 7 15Z"
      fill="#3066DB"
    />
  </svg>
);

const MoneyCoinsIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5002 0.500001C17.7877 0.498909 20.0064 1.28208 21.7863 2.71891C23.5662 4.15573 24.7997 6.15935 25.281 8.39559C25.7624 10.6318 25.4626 12.9655 24.4315 15.0074C23.4005 17.0493 21.7005 18.6761 19.6152 19.6163C18.9486 21.0899 17.9346 22.3799 16.66 23.3755C15.3855 24.3712 13.8884 25.0429 12.2972 25.3329C10.7061 25.623 9.06832 25.5228 7.52441 25.0409C5.98049 24.559 4.5765 23.7098 3.43284 22.5661C2.28918 21.4225 1.43999 20.0185 0.958093 18.4745C0.476196 16.9306 0.375974 15.2929 0.666024 13.7017C0.956073 12.1106 1.62774 10.6135 2.62341 9.33892C3.61909 8.06435 4.90906 7.05031 6.3827 6.38375C7.17538 4.62986 8.45718 3.14188 10.0744 2.09826C11.6916 1.05464 13.5755 0.499704 15.5002 0.500001ZM10.5002 8C9.51529 8 8.54002 8.194 7.63007 8.57091C6.72013 8.94782 5.89334 9.50026 5.1969 10.1967C4.50046 10.8931 3.94801 11.7199 3.5711 12.6299C3.19419 13.5398 3.0002 14.5151 3.0002 15.5C3.0002 16.4849 3.19419 17.4602 3.5711 18.3701C3.94801 19.2801 4.50046 20.1069 5.1969 20.8033C5.89334 21.4997 6.72013 22.0522 7.63007 22.4291C8.54002 22.806 9.51529 23 10.5002 23C12.4893 23 14.397 22.2098 15.8035 20.8033C17.21 19.3968 18.0002 17.4891 18.0002 15.5C18.0002 13.5109 17.21 11.6032 15.8035 10.1967C14.397 8.79018 12.4893 8 10.5002 8ZM11.7502 9.25V10.5H14.2502V13H9.2502C9.09402 12.9997 8.94339 13.0579 8.82797 13.1631C8.71256 13.2684 8.64072 13.413 8.62661 13.5685C8.61249 13.7241 8.65713 13.8793 8.75173 14.0035C8.84632 14.1278 8.98402 14.2122 9.1377 14.24L9.2502 14.25H11.7502C12.579 14.25 13.3739 14.5792 13.9599 15.1653C14.546 15.7513 14.8752 16.5462 14.8752 17.375C14.8752 18.2038 14.546 18.9987 13.9599 19.5847C13.3739 20.1708 12.579 20.5 11.7502 20.5V21.75H9.2502V20.5H6.7502V18H11.7502C11.9064 18.0003 12.057 17.9421 12.1724 17.8369C12.2878 17.7316 12.3597 17.587 12.3738 17.4315C12.3879 17.2759 12.3433 17.1207 12.2487 16.9965C12.1541 16.8722 12.0164 16.7878 11.8627 16.76L11.7502 16.75H9.2502C8.4214 16.75 7.62654 16.4208 7.04049 15.8347C6.45444 15.2487 6.1252 14.4538 6.1252 13.625C6.1252 12.7962 6.45444 12.0013 7.04049 11.4153C7.62654 10.8292 8.4214 10.5 9.2502 10.5V9.25H11.7502ZM15.5002 3C14.4411 2.99876 13.3937 3.22243 12.4275 3.6562C11.4612 4.08998 10.5981 4.72397 9.8952 5.51625C11.308 5.43048 12.723 5.64562 14.0465 6.14743C15.3699 6.64925 16.5718 7.42631 17.5726 8.42723C18.5734 9.42815 19.3503 10.6301 19.852 11.9537C20.3537 13.2772 20.5686 14.6922 20.4827 16.105C21.6192 15.0945 22.4217 13.7624 22.7837 12.2854C23.1457 10.8083 23.0502 9.25614 22.5097 7.83465C21.9693 6.41316 21.0095 5.18955 19.7576 4.3261C18.5057 3.46266 17.021 3.00018 15.5002 3Z"
      fill="#3066DB"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="24"
    height="28"
    viewBox="0 0 24 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0.25L22.2712 2.5325C22.8425 2.66 23.25 3.16625 23.25 3.7525V16.2362C23.25 18.7437 21.9962 21.0863 19.91 22.4762L12 27.75L4.09 22.4762C2.0025 21.085 0.75 18.7437 0.75 16.2375V3.7525C0.75 3.16625 1.1575 2.66 1.72875 2.5325L12 0.25ZM12 2.81125L3.25 4.755V16.2362C3.25 17.9075 4.085 19.4688 5.47625 20.3963L12 24.7463L18.5238 20.3963C19.915 19.4688 20.75 17.9088 20.75 16.2375V4.755L12 2.8125V2.81125ZM17.565 9.2775L19.3338 11.045L11.3787 19L6.075 13.6962L7.8425 11.9288L11.3775 15.4637L17.565 9.27625V9.2775Z"
      fill="#3066DB"
    />
  </svg>
);

const CartIcon = () => (
  <svg
    width="26"
    height="23"
    viewBox="0 0 26 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.2075 0.297485L21.2212 7.24999H25.5V9.74999H24.0413L23.095 21.1037C23.069 21.4161 22.9266 21.7073 22.696 21.9196C22.4654 22.1319 22.1634 22.2498 21.85 22.25H4.15C3.83656 22.2498 3.53462 22.1319 3.30403 21.9196C3.07343 21.7073 2.93102 21.4161 2.905 21.1037L1.9575 9.74999H0.5V7.24999H4.7775L8.7925 0.297485L10.9575 1.54749L7.665 7.24999H18.3337L15.0425 1.54749L17.2075 0.297485ZM21.5325 9.74999H4.46625L5.3 19.75H20.6987L21.5325 9.74999ZM14.25 12.25V17.25H11.75V12.25H14.25ZM9.25 12.25V17.25H6.75V12.25H9.25ZM19.25 12.25V17.25H16.75V12.25H19.25Z"
      fill="#3066DB"
    />
  </svg>
);

const GiftCardSuccessIcon = () => (
  <svg
    width="92"
    height="92"
    viewBox="0 0 92 92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="46" cy="46" r="46" fill="#eaf0fb" />
    <path
      d="M38.5 40.5V34.5C38.5 34.1022 38.658 33.7206 38.9393 33.4393C39.2206 33.158 39.6022 33 40 33H59.5C59.8978 33 60.2794 33.158 60.5607 33.4393C60.842 33.7206 61 34.1022 61 34.5V54C61 54.3978 60.842 54.7794 60.5607 55.0607C60.2794 55.342 59.8978 55.5 59.5 55.5H53.5V61.4895C53.5 62.3235 52.8265 63 51.9895 63H32.5105C32.3121 63.0002 32.1156 62.9613 31.9322 62.8854C31.7489 62.8096 31.5823 62.6983 31.442 62.558C31.3017 62.4177 31.1904 62.2511 31.1146 62.0678C31.0387 61.8844 30.9998 61.6879 31 61.4895L31.0045 42.0105C31.0045 41.1765 31.678 40.5 32.515 40.5H38.5ZM41.5 40.5H51.9895C52.8235 40.5 53.5 41.1735 53.5 42.0105V52.5H58V36H41.5V40.5ZM50.5 43.5H34.0045L34 60H50.5V43.5ZM40.7545 57L35.4505 51.696L37.5715 49.575L40.7545 52.758L47.1175 46.3935L49.2385 48.5145L40.7545 57Z"
      fill="#3066DB"
    />
  </svg>
);

const MobileMenuIcon = () => (
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 14V16H3V14H15ZM18 7V9H0V7H18ZM15 0V2H3V0H15Z" fill="#FFFFFF" />
  </svg>
);

const CheckmarkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#05AB6F"/>
    <path d="M7.54224 12.2581L10.3421 15.058L16.4578 8.94238" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MagnifierIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="#929DAC"
      d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
    />
  </svg>
);

const ShoppingCartIcon = () => (
  <svg
    enableBackground="new 0 0 511.728 511.728"
    height="512"
    viewBox="0 0 511.728 511.728"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m147.925 379.116c-22.357-1.142-21.936-32.588-.001-33.68 62.135.216 226.021.058 290.132.103 17.535 0 32.537-11.933 36.481-29.017l36.404-157.641c2.085-9.026-.019-18.368-5.771-25.629s-14.363-11.484-23.626-11.484c-25.791 0-244.716-.991-356.849-1.438l-17.775-65.953c-4.267-15.761-18.65-26.768-34.978-26.768h-56.942c-8.284 0-15 6.716-15 15s6.716 15 15 15h56.942c2.811 0 5.286 1.895 6.017 4.592l68.265 253.276c-12.003.436-23.183 5.318-31.661 13.92-8.908 9.04-13.692 21.006-13.471 33.695.442 25.377 21.451 46.023 46.833 46.023h21.872c-3.251 6.824-5.076 14.453-5.076 22.501 0 28.95 23.552 52.502 52.502 52.502s52.502-23.552 52.502-52.502c0-8.049-1.826-15.677-5.077-22.501h94.716c-3.248 6.822-5.073 14.447-5.073 22.493 0 28.95 23.553 52.502 52.502 52.502 28.95 0 52.503-23.553 52.503-52.502 0-8.359-1.974-16.263-5.464-23.285 5.936-1.999 10.216-7.598 10.216-14.207 0-8.284-6.716-15-15-15zm91.799 52.501c0 12.408-10.094 22.502-22.502 22.502s-22.502-10.094-22.502-22.502c0-12.401 10.084-22.491 22.483-22.501h.038c12.399.01 22.483 10.1 22.483 22.501zm167.07 22.494c-12.407 0-22.502-10.095-22.502-22.502 0-12.285 9.898-22.296 22.137-22.493h.731c12.24.197 22.138 10.208 22.138 22.493-.001 12.407-10.096 22.502-22.504 22.502zm74.86-302.233c.089.112.076.165.057.251l-15.339 66.425h-51.942l8.845-67.023 58.149.234c.089.002.142.002.23.113zm-154.645 163.66v-66.984h53.202l-8.84 66.984zm-74.382 0-8.912-66.984h53.294v66.984zm-69.053 0h-.047c-3.656-.001-6.877-2.467-7.828-5.98l-16.442-61.004h54.193l8.912 66.984zm56.149-96.983-9.021-67.799 66.306.267v67.532zm87.286 0v-67.411l66.022.266-8.861 67.145zm-126.588-67.922 9.037 67.921h-58.287l-18.38-68.194zm237.635 164.905h-36.426l8.84-66.984h48.973l-14.137 61.217c-.784 3.396-3.765 5.767-7.25 5.767z" />
  </svg>
);

const ShoppingCartIconV2 = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33141 4.34507L0.628906 1.6434L1.80807 0.464233L4.50974 3.16673H17.2114C17.3413 3.16672 17.4694 3.19708 17.5855 3.25537C17.7015 3.31367 17.8024 3.39829 17.8799 3.50248C17.9575 3.60667 18.0096 3.72755 18.0322 3.85547C18.0547 3.98339 18.047 4.11481 18.0097 4.23923L16.0097 10.9059C15.9583 11.0776 15.8528 11.2282 15.709 11.3352C15.5652 11.4423 15.3907 11.5001 15.2114 11.5001H4.99807V13.1667H14.1647V14.8334H4.16474C3.94373 14.8334 3.73176 14.7456 3.57548 14.5893C3.4192 14.433 3.33141 14.2211 3.33141 14.0001V4.34507ZM4.58141 18.1667C4.24989 18.1667 3.93194 18.035 3.69752 17.8006C3.4631 17.5662 3.33141 17.2483 3.33141 16.9167C3.33141 16.5852 3.4631 16.2673 3.69752 16.0329C3.93194 15.7984 4.24989 15.6667 4.58141 15.6667C4.91293 15.6667 5.23087 15.7984 5.46529 16.0329C5.69971 16.2673 5.83141 16.5852 5.83141 16.9167C5.83141 17.2483 5.69971 17.5662 5.46529 17.8006C5.23087 18.035 4.91293 18.1667 4.58141 18.1667ZM14.5814 18.1667C14.2499 18.1667 13.9319 18.035 13.6975 17.8006C13.4631 17.5662 13.3314 17.2483 13.3314 16.9167C13.3314 16.5852 13.4631 16.2673 13.6975 16.0329C13.9319 15.7984 14.2499 15.6667 14.5814 15.6667C14.9129 15.6667 15.2309 15.7984 15.4653 16.0329C15.6997 16.2673 15.8314 16.5852 15.8314 16.9167C15.8314 17.2483 15.6997 17.5662 15.4653 17.8006C15.2309 18.035 14.9129 18.1667 14.5814 18.1667Z"
      fill="white"
    />
  </svg>
);

const OrderCloseIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.00072 5.58599L11.9507 0.635986L13.3647 2.04999L8.41472 6.99999L13.3647 11.95L11.9507 13.364L7.00072 8.41399L2.05072 13.364L0.636719 11.95L5.58672 6.99999L0.636719 2.04999L2.05072 0.635986L7.00072 5.58599Z"
      fill="#929DAC"
    />
  </svg>
);

const QuantityPlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle opacity="0.1" cx="12" cy="12" r="11" fill="#3066DB" />
    <path
      d="M11.2 11.2V8H12.8V11.2H16V12.8H12.8V16H11.2V12.8H8V11.2H11.2Z"
      fill="#3066DB"
    />
  </svg>
);

const QuantityMinusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle opacity="0.1" cx="12" cy="12" r="11" fill="#3066DB" />
    <path d="M9 11H15V13H9V11Z" fill="#3066DB" />
  </svg>
);

const StarIcon = () => (
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0Z"
      fill="#FED43D"
    />
  </svg>
);

const MarketPlaceIcon = () => (
  <svg
    width="18"
    height="21"
    viewBox="0 0 18 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 7V5C4 3.67392 4.52678 2.40215 5.46447 1.46447C6.40215 0.526784 7.67392 0 9 0C10.3261 0 11.5979 0.526784 12.5355 1.46447C13.4732 2.40215 14 3.67392 14 5V7H17C17.2652 7 17.5196 7.10536 17.7071 7.29289C17.8946 7.48043 18 7.73478 18 8V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H1C0.734784 21 0.48043 20.8946 0.292893 20.7071C0.105357 20.5196 0 20.2652 0 20V8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7H4ZM4 9H2V19H16V9H14V11H12V9H6V11H4V9ZM6 7H12V5C12 4.20435 11.6839 3.44129 11.1213 2.87868C10.5587 2.31607 9.79565 2 9 2C8.20435 2 7.44129 2.31607 6.87868 2.87868C6.31607 3.44129 6 4.20435 6 5V7Z"
      fill="#3066DB"
    />
  </svg>
);

const PriceFilterIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.8998 2.09998L20.7988 3.51498L22.2128 13.415L13.0208 22.607C12.8333 22.7944 12.579 22.8998 12.3138 22.8998C12.0487 22.8998 11.7944 22.7944 11.6068 22.607L1.70685 12.707C1.51938 12.5194 1.41406 12.2651 1.41406 12C1.41406 11.7348 1.51938 11.4805 1.70685 11.293L10.8998 2.09998ZM11.6068 4.22198L3.82785 12L12.3138 20.485L20.0918 12.707L19.0318 5.28198L11.6068 4.22198ZM13.7268 10.586C13.3517 10.2107 13.141 9.70176 13.1411 9.17112C13.1411 8.90838 13.1929 8.64822 13.2935 8.40549C13.3941 8.16277 13.5415 7.94223 13.7273 7.75648C13.9132 7.57072 14.1338 7.42338 14.3765 7.32288C14.6193 7.22238 14.8795 7.17067 15.1422 7.17072C15.6728 7.17081 16.1817 7.38169 16.5568 7.75698C16.932 8.13226 17.1427 8.6412 17.1426 9.17183C17.1425 9.70246 16.9316 10.2113 16.5563 10.5865C16.1811 10.9616 15.6721 11.1723 15.1415 11.1722C14.6109 11.1721 14.102 10.9613 13.7268 10.586Z"
      fill="#3066DB"
    />
  </svg>
);

const StarFilterIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9989 18.26L4.94594 22.208L6.52094 14.28L0.585938 8.792L8.61294 7.84L11.9989 0.5L15.3849 7.84L23.4119 8.792L17.4769 14.28L19.0519 22.208L11.9989 18.26ZM11.9989 15.968L16.2459 18.345L15.2969 13.572L18.8699 10.267L14.0369 9.694L11.9989 5.275L9.96094 9.695L5.12794 10.267L8.70094 13.572L7.75194 18.345L11.9989 15.968Z"
      fill="#3066DB"
    />
  </svg>
);

const DoubleCheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.66703 11.4666L10.8437 12.6433L17.8987 5.58832L19.077 6.76665L10.8437 15L5.54036 9.69665L6.7187 8.51832L8.48953 10.2891L9.66703 11.4658V11.4666ZM9.6687 9.10998L13.7954 4.98248L14.9704 6.15748L10.8437 10.285L9.6687 9.10998ZM7.31286 13.8225L6.13536 15L0.832031 9.69665L2.01036 8.51832L3.18786 9.69582L3.18703 9.69665L7.31286 13.8225Z"
      fill="#4AC77C"
    />
  </svg>
);

const OrderConfirmationIcon = () => (
  <svg
    width="28"
    height="32"
    viewBox="0 0 28 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.61612 11.0909V8.13636C6.61612 6.17738 7.39433 4.29863 8.77954 2.91342C10.1647 1.5282 12.0435 0.75 14.0025 0.75C15.9615 0.75 17.8402 1.5282 19.2254 2.91342C20.6106 4.29863 21.3888 6.17738 21.3888 8.13636V11.0909H25.8207C26.2125 11.0909 26.5882 11.2465 26.8653 11.5236C27.1423 11.8006 27.2979 12.1764 27.2979 12.5682V30.2955C27.2979 30.6873 27.1423 31.063 26.8653 31.34C26.5882 31.6171 26.2125 31.7727 25.8207 31.7727H2.1843C1.79251 31.7727 1.41676 31.6171 1.13971 31.34C0.862672 31.063 0.707031 30.6873 0.707031 30.2955V12.5682C0.707031 12.1764 0.862672 11.8006 1.13971 11.5236C1.41676 11.2465 1.79251 11.0909 2.1843 11.0909H6.61612ZM6.61612 14.0455H3.66158V28.8182H24.3434V14.0455H21.3888V17H18.4343V14.0455H9.57067V17H6.61612V14.0455ZM9.57067 11.0909H18.4343V8.13636C18.4343 6.96097 17.9674 5.83372 17.1363 5.00259C16.3051 4.17147 15.1779 3.70455 14.0025 3.70455C12.8271 3.70455 11.6998 4.17147 10.8687 5.00259C10.0376 5.83372 9.57067 6.96097 9.57067 8.13636V11.0909Z"
      fill="#3066DB"
    />
  </svg>
);

const OrderDetailIcon = () => (
  <svg
    width="18"
    height="21"
    viewBox="0 0 18 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 7V5C4 3.67392 4.52678 2.40215 5.46447 1.46447C6.40215 0.526784 7.67392 0 9 0C10.3261 0 11.5979 0.526784 12.5355 1.46447C13.4732 2.40215 14 3.67392 14 5V7H17C17.2652 7 17.5196 7.10536 17.7071 7.29289C17.8946 7.48043 18 7.73478 18 8V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H1C0.734784 21 0.48043 20.8946 0.292893 20.7071C0.105357 20.5196 0 20.2652 0 20V8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7H4ZM4 9H2V19H16V9H14V11H12V9H6V11H4V9ZM6 7H12V5C12 4.20435 11.6839 3.44129 11.1213 2.87868C10.5587 2.31607 9.79565 2 9 2C8.20435 2 7.44129 2.31607 6.87868 2.87868C6.31607 3.44129 6 4.20435 6 5V7Z"
      fill="#687485"
    />
  </svg>
);

const ShipmentIcon = () => (
  <svg
    width="22"
    height="17"
    viewBox="0 0 22 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.965 13C7.84612 13.8343 7.43021 14.5977 6.79368 15.1499C6.15714 15.7022 5.34272 16.0063 4.5 16.0063C3.65728 16.0063 2.84286 15.7022 2.20632 15.1499C1.56979 14.5977 1.15388 13.8343 1.035 13H0V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V3H19L22 7.056V13H19.965C19.8461 13.8343 19.4302 14.5977 18.7937 15.1499C18.1571 15.7022 17.3427 16.0063 16.5 16.0063C15.6573 16.0063 14.8429 15.7022 14.2063 15.1499C13.5698 14.5977 13.1539 13.8343 13.035 13H7.965ZM14 2H2V10.05C2.39456 9.6472 2.8806 9.34568 3.41675 9.17112C3.9529 8.99655 4.52329 8.95411 5.07938 9.04739C5.63546 9.14068 6.16077 9.36693 6.61061 9.7069C7.06044 10.0469 7.42148 10.4905 7.663 11H13.337C13.505 10.647 13.73 10.326 14 10.05V2ZM16 8H20V7.715L17.992 5H16V8ZM16.5 14C16.898 14 17.2796 13.8419 17.561 13.5605C17.8424 13.2791 18.0005 12.8975 18.0005 12.4995C18.0005 12.1015 17.8424 11.7199 17.561 11.4385C17.2796 11.1571 16.898 10.999 16.5 10.999C16.102 10.999 15.7204 11.1571 15.439 11.4385C15.1576 11.7199 14.9995 12.1015 14.9995 12.4995C14.9995 12.8975 15.1576 13.2791 15.439 13.5605C15.7204 13.8419 16.102 14 16.5 14ZM6 12.5C6 12.303 5.9612 12.108 5.88582 11.926C5.81044 11.744 5.69995 11.5786 5.56066 11.4393C5.42137 11.3001 5.25601 11.1896 5.07403 11.1142C4.89204 11.0388 4.69698 11 4.5 11C4.30302 11 4.10796 11.0388 3.92597 11.1142C3.74399 11.1896 3.57863 11.3001 3.43934 11.4393C3.30005 11.5786 3.18956 11.744 3.11418 11.926C3.0388 12.108 3 12.303 3 12.5C3 12.8978 3.15804 13.2794 3.43934 13.5607C3.72064 13.842 4.10218 14 4.5 14C4.89782 14 5.27936 13.842 5.56066 13.5607C5.84196 13.2794 6 12.8978 6 12.5Z"
      fill="#687485"
    />
  </svg>
);

const FunnelIcon = () => (
  <svg
    width="193"
    height="204"
    viewBox="0 0 193 204"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M132.768 40.5593H132.747C139.627 39.2825 144.836 33.2498 144.836 26C144.836 33.2485 150.045 39.2804 156.923 40.5586H156.944C150.064 41.8354 144.855 47.8681 144.855 55.1179C144.855 47.8694 139.647 41.8375 132.768 40.5593Z"
        fill="url(#paint0_linear)"
      />
    </g>
    <g filter="url(#filter1_d)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.0147 148.56H36C40.4617 147.733 43.8397 143.82 43.8397 139.119C43.8397 143.819 47.2168 147.731 51.6769 148.56H51.6916C47.2299 149.388 43.8519 153.3 43.8519 158.001C43.8519 153.301 40.4748 149.39 36.0147 148.56Z"
        fill="url(#paint1_linear)"
      />
    </g>
    <g filter="url(#filter2_d)">
      <path
        d="M44.9997 85.8038C44.9997 105.512 60.9763 121.488 80.6844 121.488C100.393 121.488 116.369 105.512 116.369 85.8038C116.369 66.0956 100.393 50.119 80.6844 50.119C60.9763 50.119 44.9997 66.0956 44.9997 85.8038Z"
        fill="url(#paint2_linear)"
      />
    </g>
    <g filter="url(#filter3_bii)">
      <mask id="path-4-inside-1" fill="white">
        <path d="M145.369 107.804C145.369 127.512 129.393 143.488 109.685 143.488C89.9766 143.488 74 127.512 74 107.804C74 88.0956 89.9766 72.119 109.685 72.119C129.393 72.119 145.369 88.0956 145.369 107.804Z" />
      </mask>
      <path
        d="M145.369 107.804C145.369 127.512 129.393 143.488 109.685 143.488C89.9766 143.488 74 127.512 74 107.804C74 88.0956 89.9766 72.119 109.685 72.119C129.393 72.119 145.369 88.0956 145.369 107.804Z"
        fill="white"
        fillOpacity="0.2"
      />
      <path
        d="M142.821 107.804C142.821 126.104 127.985 140.94 109.685 140.94V146.037C130.801 146.037 147.918 128.92 147.918 107.804H142.821ZM109.685 140.94C91.3843 140.94 76.5489 126.104 76.5489 107.804H71.4511C71.4511 128.92 88.5689 146.037 109.685 146.037V140.94ZM76.5489 107.804C76.5489 89.5033 91.3843 74.6679 109.685 74.6679V69.5701C88.5689 69.5701 71.4511 86.6879 71.4511 107.804H76.5489ZM109.685 74.6679C127.985 74.6679 142.821 89.5033 142.821 107.804H147.918C147.918 86.6879 130.801 69.5701 109.685 69.5701V74.6679Z"
        fill="white"
        fillOpacity="0.12"
        mask="url(#path-4-inside-1)"
      />
    </g>
    <g opacity="0.3" filter="url(#filter4_bii)">
      <path
        d="M122 123H98V120.048C98 118.09 98.7902 116.213 100.197 114.828C101.603 113.444 103.511 112.667 105.5 112.667H114.5C116.489 112.667 118.397 113.444 119.803 114.828C121.21 116.213 122 118.09 122 120.048V123ZM110 109.714C108.818 109.714 107.648 109.485 106.556 109.04C105.464 108.595 104.472 107.943 103.636 107.12C102.8 106.298 102.137 105.321 101.685 104.247C101.233 103.172 101 102.02 101 100.857C101 99.694 101.233 98.5423 101.685 97.4677C102.137 96.3931 102.8 95.4167 103.636 94.5942C104.472 93.7717 105.464 93.1193 106.556 92.6742C107.648 92.2291 108.818 92 110 92C112.387 92 114.676 92.9332 116.364 94.5942C118.052 96.2552 119 98.5081 119 100.857C119 103.206 118.052 105.459 116.364 107.12C114.676 108.781 112.387 109.714 110 109.714Z"
        fill="url(#paint3_linear)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="97.0623"
        y="0.510904"
        width="95.5666"
        height="100.487"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="10.1956" />
        <feGaussianBlur stdDeviation="17.8424" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.32549 0 0 0 0 0.345098 0 0 0 0 0.901961 0 0 0 0.69 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d"
        x="0.315266"
        y="113.63"
        width="87.061"
        height="90.2518"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="10.1956" />
        <feGaussianBlur stdDeviation="17.8424" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.32549 0 0 0 0 0.345098 0 0 0 0 0.901961 0 0 0 0.69 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d"
        x="9.31527"
        y="24.6299"
        width="142.739"
        height="142.739"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="10.1956" />
        <feGaussianBlur stdDeviation="17.8424" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.32549 0 0 0 0 0.345098 0 0 0 0 0.901961 0 0 0 0.69 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_bii"
        x="23.0987"
        y="21.2177"
        width="173.172"
        height="173.172"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation="25.4507" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2.3675" />
        <feGaussianBlur stdDeviation="1.18375" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
        />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="20.1238" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_innerShadow"
          result="effect3_innerShadow"
        />
      </filter>
      <filter
        id="filter4_bii"
        x="51.8206"
        y="45.8206"
        width="116.359"
        height="123.359"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation="23.0897" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2.14788" />
        <feGaussianBlur stdDeviation="1.07394" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
        />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="18.257" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_innerShadow"
          result="effect3_innerShadow"
        />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="122.461"
        y1="73.5593"
        x2="158.283"
        y2="72.5282"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8887FD" />
        <stop offset="1" stopColor="#4B51E2" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="29.3298"
        y1="169.96"
        x2="52.5601"
        y2="169.292"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8887FD" />
        <stop offset="1" stopColor="#4B51E2" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="146.707"
        y1="166.689"
        x2="41.0887"
        y2="163.031"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8887FD" />
        <stop offset="1" stopColor="#4B51E2" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1="122.49"
        y1="114.174"
        x2="95.0051"
        y2="108.917"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8D9196" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
);

const SwapIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.23731 6.0142C9.3921 4.14705 12.1488 3.12103 15 3.12501C21.5586 3.12501 26.875 8.44145 26.875 15C26.875 17.5365 26.0794 19.8878 24.7256 21.8163L20.9375 15H24.5C24.5002 13.1376 23.9529 11.3162 22.9262 9.76225C21.8995 8.20835 20.4387 6.99051 18.7254 6.26016C17.0121 5.5298 15.122 5.31916 13.2899 5.65441C11.4579 5.98966 9.76485 6.85602 8.42125 8.14576L7.23731 6.0142ZM22.7627 23.9858C20.6079 25.853 17.8512 26.879 15 26.875C8.44144 26.875 3.125 21.5586 3.125 15C3.125 12.4635 3.92062 10.1123 5.27437 8.18376L9.0625 15H5.5C5.49985 16.8625 6.04714 18.6839 7.07384 20.2378C8.10053 21.7917 9.56133 23.0095 11.2746 23.7399C12.9879 24.4702 14.878 24.6809 16.7101 24.3456C18.5421 24.0104 20.2351 23.144 21.5788 21.8543L22.7627 23.9858Z"
      fill="#FFF"
    />
  </svg>
);

const DepositIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.0035 3.40804L1.41153 12L1.234e-07 10.5885L8.59197 1.99651L1.01922 1.99651L1.01922 -9.59971e-07L12 0L12 10.9808L10.0035 10.9808L10.0035 3.40903L10.0035 3.40804Z"
      fill="#3066DB"
    />
  </svg>
);

const WithdrawIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.99651 8.59196L10.5885 0L12 1.41153L3.40804 10.0035H10.9808V12H0V1.01922H1.99651V8.59097V8.59196Z"
      fill="#3066DB"
    />
  </svg>
);

const LunaLogoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="prefix__Layer_1"
    x={0}
    y={0}
    viewBox="0 0 3102.2 2291.6"
    xmlSpace="preserve"
  >
    <circle cx={1551.1} cy={1145.8} r={1000} fill="#172852" />
    <path
      fill="#ffd83d"
      d="M1356.6 592.7c117.1-43.8 248.9-43.9 368.2-7.9 155.3 48.2 286.4 165.4 354.9 312.5 18.9 41.9 37 85.6 38.8 132.2-87.3-50.6-183-83.4-278.9-113.3-153.4-55.3-314-93.7-459.2-169.7-33.8-20.2-76.9-40.9-86.1-83-3.7-36.4 34.8-56.7 62.3-70.8M1003.1 946.7c33.9-92 89.5-177.4 165-240.7 19.2 157.9 86.4 310.5 197.4 425.3 133.1 138.3 322.7 223.2 515.6 220 76.6 2.4 151.5-15.3 226.2-29.6-73.5 265.6-364.6 441.9-634.3 399.5-162.8-20.8-313.1-117.2-403.8-253.3-102.3-150.4-128.1-350.1-66.1-521.2z"
    />
    <path
      d="M1839.6 916.2c95.9 29.9 191.6 62.7 278.9 113.3l5.9 3.1c8.1 60.9 14 123 3.2 184-43.9-18.6-79.5-51.3-116.7-80.2-71.6-59.6-144.7-127.8-171.3-220.2"
      fill="#ff6f03"
    />
  </svg>
);

const WheelIndicator = () => (
  <svg
    width="82"
    height="96"
    viewBox="0 0 82 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <path
        d="M41.4734 67.7314C41.3213 68.0682 40.831 68.0947 40.6439 67.7744L26.0411 42.7751C24.1096 39.6084 23.5096 35.6148 24.4097 31.7435C27.9265 16.6182 53.8151 15.7467 57.5575 31.2102C58.4926 35.0739 57.9287 39.0723 56.0259 42.2548C51.2354 50.6252 45.4276 58.9757 41.4734 67.7314Z"
        fill="#14192A"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="82"
        height="96"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="12" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0784314 0 0 0 0 0.0980392 0 0 0 0 0.164706 0 0 0 0.49 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const SpinnerFeeIcon = () => (
  <svg
    width="59"
    height="59"
    viewBox="0 0 59 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      y="46.3644"
      width="48"
      height="48"
      rx="24"
      transform="rotate(-75 0 46.3644)"
      fill="url(#paint0_linear)"
    />
    <circle
      cx="29.8894"
      cy="29.3442"
      r="9.5"
      transform="rotate(-105 29.8894 29.3442)"
      stroke="white"
      strokeWidth="3"
    />
    <path
      opacity="0.5"
      d="M40.3672 39.4802L20.6326 19.9215"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="-20.404"
        y1="124.764"
        x2="50.6303"
        y2="122.304"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8887FD" />
        <stop offset="1" stopColor="#4B51E2" />
      </linearGradient>
    </defs>
  </svg>
);

const SpinnerWaitlistIcon = () => (
  <svg
    width="63"
    height="63"
    viewBox="0 0 63 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="13.6738"
      y="0.700073"
      width="50.1227"
      height="50.1227"
      rx="25.0614"
      transform="rotate(15 13.6738 0.700073)"
      fill="url(#paint0_linear)"
    />
    <path
      d="M18.1478 38.4211L20.8196 35.7492M24.1594 37.7531L18.8253 43.2028M23.4914 43.7647L26.1633 41.0929"
      stroke="white"
      strokeOpacity="0.5"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      opacity="0.5"
      d="M26.8361 15.365C30.193 13.4269 38.4852 11.1012 44.7985 17.3031C51.1118 23.505 48.9012 31.957 47.0068 35.4078"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle
      cx="33.9325"
      cy="28.4043"
      r="8.8759"
      transform="rotate(15 33.9325 28.4043)"
      stroke="white"
      strokeWidth="3"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="-7.63247"
        y1="82.5672"
        x2="66.5432"
        y2="79.998"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8887FD" />
        <stop offset="1" stopColor="#4B51E2" />
      </linearGradient>
    </defs>
  </svg>
);

const SpinnerReferralIcon = () => (
  <svg
    width="62"
    height="62"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      y="12.9731"
      width="50.1243"
      height="50.1243"
      rx="25.0622"
      transform="rotate(-15 0 12.9731)"
      fill="url(#paint0_linear)"
    />
    <circle
      cx="30.9931"
      cy="31.098"
      r="7.23466"
      transform="rotate(-45 30.9931 31.098)"
      fill="white"
      stroke="white"
      strokeWidth="3"
    />
    <circle
      cx="35.2503"
      cy="16.9958"
      r="2"
      transform="rotate(-45 35.2503 16.9958)"
      fill="white"
    />
    <circle
      cx="27.4905"
      cy="45.9922"
      r="2"
      transform="rotate(-45 27.4905 45.9922)"
      fill="white"
    />
    <path
      opacity="0.5"
      d="M23.1161 43.3747C19.9014 41.5187 14.002 35.7552 16.1226 27.5496C18.2432 19.344 26.3114 17.1304 30.0804 17.0492"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      opacity="0.5"
      d="M31.8222 45.6675C35.5343 45.6674 43.5251 43.6258 45.7913 35.4593C48.0576 27.2927 42.1772 21.3416 38.9538 19.3868"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="-21.307"
        y1="94.8429"
        x2="52.8711"
        y2="92.2736"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8887FD" />
        <stop offset="1" stopColor="#4B51E2" />
      </linearGradient>
    </defs>
  </svg>
);

const SpinnerGetLunaIcon = () => (
  <svg
    width="66"
    height="66"
    viewBox="0 0 66 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="41.5684"
      width="48"
      height="48"
      rx="24"
      transform="rotate(60 41.5684 0)"
      fill="url(#paint0_linear)"
    />
    <path
      d="M43.49 30.9563C43.091 28.6597 41.8611 26.5258 40.175 24.925C37.9588 22.8533 34.8736 21.8056 31.8987 22.0451C31.057 22.1232 30.1943 22.2307 29.4378 22.6286C31.0566 23.5778 32.4715 24.826 33.8421 26.104C36.1532 28.0799 38.2633 30.3271 40.8264 31.9805C41.4628 32.3424 42.1941 32.8503 42.9483 32.6133C43.5606 32.3396 43.5231 31.5305 43.49 30.9563Z"
      fill="white"
    />
    <path
      d="M41.1725 39.9191C42.316 38.5274 43.1521 36.8449 43.4513 35.043C40.7657 36.1792 37.7156 36.4901 34.8563 35.7457C31.4174 34.8591 28.2982 32.5686 26.5466 29.4174C25.7928 28.1998 25.3739 26.8254 24.9029 25.4854C21.3739 29.1089 21.2955 35.4356 24.4885 39.4119C26.3398 41.856 29.2743 43.405 32.2821 43.6257C35.6252 43.903 39.036 42.4905 41.1725 39.9191Z"
      fill="white"
    />
    <path
      opacity="0.5"
      d="M33.8438 26.106C32.4731 24.828 31.0583 23.5798 29.4394 22.6306L29.3351 22.5636C28.2927 22.9906 27.2519 23.4642 26.3846 24.198C27.09 24.738 27.9417 25.0145 28.748 25.3517C30.363 25.9642 32.1286 26.5223 33.8438 26.106Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="21.1644"
        y1="78.4"
        x2="92.1987"
        y2="75.9396"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8887FD" />
        <stop offset="1" stopColor="#4B51E2" />
      </linearGradient>
    </defs>
  </svg>
);

const TerraLogo = () => (
  <svg
    width={24}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd">
      <path
        d="M10.473 18.548c.627 2.4 2.887 4.226 4.02 4.153.04 0 4.32-.827 6.667-4.86 1.826-3.14 1.2-6.173-1.28-6.24-.894.067-10.607 2.38-9.414 6.954l.007-.007ZM12.626.495c-1.613 0-3.146.347-4.533.967-.24.1-.48.22-.707.346-.16.087-.313.167-.466.26l.033.014c-.46.32-.853.686-1.18 1.12-3.206 4.246 7.547 7.333 13.293 7.346 2.647 1.9 3.387-5.36.807-7.373A11.06 11.06 0 0 0 12.626.502V.495Z"
        fill="#0E3BA5"
      />
      <path
        d="M8.58 2.981c-1.453 2.134-6.3 3.64-7.093 3.407l-.007-.007.1-.193a11.478 11.478 0 0 1 4.38-4.54c.673-.386 1.373-.406 1.6-.413 2.153.04 1.033 1.733 1.02 1.753v-.007ZM7.36 18.988c.106.7 0 3.473-.147 3.707-.127.006-.387.026-1.14-.394a12.025 12.025 0 0 1-3.746-3.3A11.768 11.768 0 0 1 .62 15.748a11.736 11.736 0 0 1 .127-7.846c.866 1.14 1.866 2.166 2.72 3.313.813 1.093 1.926 2.873 2.153 3.253 1.413 2.367 1.633 3.82 1.74 4.527v-.007ZM23.686 12.128c0 1.513-.287 2.967-.813 4.293-1.373 1.48-10.633-2.166-10.72-2.206-1.267-.554-5.12-2.254-5.467-4.914-.5-3.826 7.24-6.493 10.64-6.593.407.007 1.647.02 2.373.607a11.667 11.667 0 0 1 3.987 8.806v.007Zm-8.093 9.466c.553-1.96 5.393-3.966 6.46-4.073.133-.013.186.08.133.187-1.113 2.027-2.767 3.693-4.76 4.78-1.006.486-2.12.133-1.833-.887v-.006Z"
        fill="#5493F6"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .5)" d="M0 0h24v22H0z" />
      </clipPath>
    </defs>
  </svg>

);

const SolanaLogo = () => (
  <svg
    width={25}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#a)">
      <path
        d="M4.06 15.008a.818.818 0 0 1 .58-.24H24.59c.365 0 .547.44.29.699l-3.942 3.941a.818.818 0 0 1-.578.239H.409a.409.409 0 0 1-.29-.698l3.942-3.941Z"
        fill="url(#b)"
      />
      <path
        d="M4.06.292a.84.84 0 0 1 .58-.239H24.59c.365 0 .547.44.29.698l-3.942 3.941a.818.818 0 0 1-.578.239H.409a.409.409 0 0 1-.29-.698L4.061.292Z"
        fill="url(#c)"
      />
      <path
        d="M20.94 7.603a.818.818 0 0 0-.58-.24H.41a.409.409 0 0 0-.29.699l3.942 3.94c.15.152.358.24.578.24h19.952c.365 0 .547-.44.29-.698l-3.942-3.941Z"
        fill="url(#d)"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={22.685}
        y1={-2.302}
        x2={8.877}
        y2={24.147}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset={1} stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={16.648}
        y1={-5.454}
        x2={2.839}
        y2={20.995}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset={1} stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={19.647}
        y1={-3.888}
        x2={5.839}
        y2={22.561}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset={1} stopColor="#DC1FFF" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .053)" d="M0 0h25v19.594H0z" />
      </clipPath>
    </defs>
  </svg>
);

const StellarLogo = () => (
  <svg width={72} height={18} viewBox="0 0 72 18">
    <path
      d="M16.2382 2.10302L13.9631 3.26821L2.97178 8.85258C2.92913 8.56838 2.91491 8.28419 2.91491 8C2.91491 4.41918 5.87247 1.46359 9.4699 1.46359C10.5932 1.46359 11.6881 1.74778 12.6692 2.28775L13.9773 1.61989L14.1764 1.52043C12.8114 0.525755 11.162 0 9.48411 0C5.09042 0 1.47878 3.60924 1.47878 8C1.47878 8.19894 1.493 8.41208 1.50722 8.61101C1.54988 9.19361 1.23706 9.74778 0.710953 10.0178L0.0284382 10.373V12.0071L2.04755 10.9698L2.70162 10.643L3.34148 10.3162L14.93 4.41918L16.2382 3.75133L18.9256 2.38721V0.753109L16.2382 2.10302ZM18.9114 4.0071L3.98134 11.595L2.67318 12.2629L0 13.627V15.2611L2.65896 13.9112L4.93401 12.746L15.9396 7.14743C15.9822 7.43162 15.9964 7.71581 15.9964 8.01421C15.9964 11.6092 13.0389 14.5506 9.44146 14.5506C8.31815 14.5506 7.22328 14.2664 6.24217 13.7123L6.15685 13.7549L4.74917 14.4796C6.1142 15.4742 7.76361 16 9.45568 16C13.8494 16 17.4468 12.3908 17.461 8.01421C17.461 7.81528 17.4468 7.60213 17.4326 7.4032C17.3899 6.82061 17.7027 6.26643 18.2146 5.99645L18.8971 5.64121L18.9114 4.0071ZM41.3917 5.14387C39.1024 5.14387 37.3393 6.8206 37.3393 9.4778C37.3393 11.9503 38.8038 13.8401 41.4343 13.8401C43.4677 13.8401 44.8043 12.6465 45.174 11.2114H43.7094C43.3539 12.0355 42.6714 12.5897 41.4201 12.5897C40.1973 12.5897 38.8891 11.7229 38.8465 9.9183H45.2735C45.4583 7.2611 43.9511 5.14387 41.3917 5.14387ZM38.8749 8.71048C39.0029 7.03375 40.1546 6.35169 41.3917 6.35169C42.8989 6.35169 43.7521 7.53108 43.7947 8.71048H38.8749ZM28.7367 7.17584L27.4428 6.87744C26.3764 6.65009 25.6085 6.15275 25.6085 5.15808C25.6085 3.89343 27.13 3.50977 27.9973 3.50977C29.1206 3.50977 30.4146 3.96448 30.7985 5.24334H32.3341C31.8791 3.08348 30.0875 2.17407 28.0684 2.17407C26.2484 2.17407 24.0018 3.08348 24.0018 5.24334C24.0018 7.1048 25.5374 7.97158 27.0873 8.31261L28.495 8.61101C29.9027 8.93783 30.9122 9.40675 30.9122 10.6004C30.9122 11.7229 29.9596 12.4902 28.2817 12.4902C26.5328 12.4902 25.4663 11.6803 25.182 10.1314H23.6321C23.9307 12.3766 25.6085 13.8259 28.2533 13.8259C30.4999 13.8259 32.5332 12.6465 32.5332 10.4583C32.5332 8.19894 30.4572 7.54529 28.7367 7.17584ZM35.5619 3.18295H34.1542V5.27176H32.8318V6.40853H34.1542V11.524C34.1542 13.2576 34.5239 13.6128 36.1306 13.6128H37.1544V12.4334H36.4435C35.633 12.4334 35.5761 12.2203 35.5761 11.3535V6.40853H37.1544V5.27176H35.5761V3.18295H35.5619ZM63.5734 5.22913C62.4643 5.27176 61.6254 5.78331 61.2131 6.73535V5.27176H59.8338V13.627H61.2415V9.25045C61.2415 7.38899 61.8956 6.69272 63.2037 6.69272C63.4739 6.69272 63.7298 6.70693 64 6.74956V5.24334C63.8436 5.22913 63.7014 5.22913 63.5734 5.22913ZM58.4688 10.4725L58.483 8.55417C58.4972 6.18117 57.5019 5.11545 55.1557 5.11545C53.5348 5.11545 51.928 6.12433 51.8 7.92895H53.2646C53.3215 6.89165 53.9898 6.26643 55.17 6.26643C56.2222 6.26643 57.0611 6.76377 57.0611 8.2984V8.49734C53.6485 8.86679 51.4019 9.46359 51.4019 11.4245C51.4019 12.9591 52.7101 13.8259 54.2742 13.8259C55.7672 13.8259 56.6203 13.3428 57.1322 12.476C57.1464 12.8597 57.1749 13.2433 57.2459 13.627H58.6679C58.5114 12.8313 58.4403 11.8934 58.4688 10.4725ZM57.1749 10.1456C57.1749 12.1208 55.9236 12.7176 54.6012 12.7176C53.5916 12.7176 52.9802 12.1918 52.9802 11.3961C52.9802 10.2451 54.6154 9.86146 57.1749 9.60569V10.1456ZM46.2404 2.373H47.6481V13.627H46.2404V2.373ZM49.0558 2.373H50.4635V13.627H49.0558V2.373Z"
      fill="black"
    />
  </svg>
);

const USDCIcon = () => <img src={USDCIconPNG} alt="USDCIcon" />;

const HeaderShoppingCart = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 0.833374C10.5472 0.833374 11.089 0.941148 11.5945 1.15054C12.1 1.35994 12.5594 1.66685 12.9463 2.05376C13.3332 2.44067 13.6401 2.9 13.8495 3.40553C14.0589 3.91105 14.1667 4.45287 14.1667 5.00004V6.66671H16.6667C16.8877 6.66671 17.0996 6.7545 17.2559 6.91079C17.4122 7.06707 17.5 7.27903 17.5 7.50004V17.5C17.5 17.7211 17.4122 17.933 17.2559 18.0893C17.0996 18.2456 16.8877 18.3334 16.6667 18.3334H3.33333C3.11232 18.3334 2.90036 18.2456 2.74408 18.0893C2.5878 17.933 2.5 17.7211 2.5 17.5V7.50004C2.5 7.27903 2.5878 7.06707 2.74408 6.91079C2.90036 6.7545 3.11232 6.66671 3.33333 6.66671H5.83333V5.00004C5.83333 3.89497 6.27232 2.83516 7.05372 2.05376C7.83512 1.27236 8.89493 0.833374 10 0.833374ZM14.1667 9.16671H12.5V10C12.5002 10.2124 12.5816 10.4167 12.7274 10.5712C12.8732 10.7256 13.0725 10.8186 13.2845 10.831C13.4965 10.8435 13.7053 10.7745 13.8682 10.6382C14.0311 10.5018 14.1357 10.3085 14.1608 10.0975L14.1667 10V9.16671ZM7.5 9.16671H5.83333V10C5.83357 10.2124 5.9149 10.4167 6.06071 10.5712C6.20651 10.7256 6.40579 10.8186 6.61783 10.831C6.82986 10.8435 7.03865 10.7745 7.20153 10.6382C7.3644 10.5018 7.46908 10.3085 7.49417 10.0975L7.5 10V9.16671ZM10 2.50004C9.36232 2.50001 8.74874 2.74364 8.28478 3.18111C7.82083 3.61858 7.54158 4.2168 7.50417 4.85337L7.5 5.00004V6.66671H12.5V5.00004C12.5 4.36237 12.2564 3.74878 11.8189 3.28482C11.3815 2.82087 10.7832 2.54162 10.1467 2.50421L10 2.50004Z"
      fill="#101523"
    />
  </svg>
);

const ProductHeaderAll = () => (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.3333 12V13.6667H2.16667V12H11.3333ZM15.5 6.16671V7.83337H0.5V6.16671H15.5ZM13.8333 0.333374V2.00004H4.66667V0.333374H13.8333Z"
      fill="#111524"
    />
  </svg>
);

const CloudIcon = () => (
  <svg
    width="66"
    height="66"
    viewBox="0 0 66 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle opacity="0.1" cx="33" cy="33" r="33" fill="#3066DB" />
    <path
      d="M34.2504 34.25V41.2313L36.5354 38.9463L38.3041 40.715L33.0004 46.0175L27.6966 40.715L29.4654 38.9463L31.7504 41.2313V34.25H34.2504ZM33.0004 20.5C35.1466 20.5001 37.2179 21.2889 38.8206 22.7164C40.4233 24.1439 41.4455 26.1106 41.6929 28.2425C43.2482 28.6666 44.605 29.6239 45.5262 30.9469C46.4474 32.2699 46.8743 33.8746 46.7324 35.4805C46.5905 37.0864 45.8887 38.5913 44.7498 39.7323C43.6109 40.8732 42.1072 41.5777 40.5016 41.7225V39.205C41.0768 39.1229 41.6299 38.9269 42.1286 38.6287C42.6273 38.3305 43.0615 37.9359 43.4061 37.468C43.7506 37.0001 43.9984 36.4683 44.1352 35.9036C44.2719 35.3388 44.2948 34.7525 44.2025 34.1788C44.1102 33.6052 43.9045 33.0556 43.5975 32.5623C43.2905 32.069 42.8883 31.6418 42.4144 31.3056C41.9404 30.9694 41.4043 30.731 40.8372 30.6043C40.2702 30.4775 39.6836 30.465 39.1116 30.5675C39.3074 29.6561 39.2968 28.7125 39.0806 27.8057C38.8645 26.8989 38.4482 26.052 37.8624 25.3269C37.2765 24.6018 36.5359 24.017 35.6947 23.6152C34.8535 23.2135 33.9332 23.005 33.001 23.005C32.0688 23.005 31.1484 23.2135 30.3073 23.6152C29.4661 24.017 28.7255 24.6018 28.1396 25.3269C27.5537 26.052 27.1375 26.8989 26.9213 27.8057C26.7052 28.7125 26.6946 29.6561 26.8904 30.5675C25.7499 30.3533 24.5711 30.601 23.6133 31.256C22.6554 31.9109 21.997 32.9196 21.7829 34.06C21.5687 35.2004 21.8163 36.3792 22.4713 37.3371C23.1263 38.2949 24.1349 38.9533 25.2754 39.1675L25.5004 39.205V41.7225C23.8947 41.5779 22.3909 40.8736 21.2518 39.7327C20.1127 38.5919 19.4108 37.0869 19.2687 35.481C19.1266 33.8751 19.5535 32.2704 20.4746 30.9472C21.3957 29.6241 22.7525 28.6667 24.3079 28.2425C24.555 26.1105 25.5771 24.1436 27.1798 22.7161C28.7825 21.2885 30.8541 20.4998 33.0004 20.5Z"
      fill="#3066DB"
    />
  </svg>
);

const PrizeTBDIcon = () => (
  <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 10.0837C4.483 10.0837 4.875 10.4757 4.875 10.9587C4.875 11.4417 4.483 11.8337 4 11.8337C3.517 11.8337 3.125 11.4417 3.125 10.9587C3.125 10.4757 3.517 10.0837 4 10.0837ZM4 0.166992C5.93317 0.166992 7.5 1.73383 7.5 3.66699C7.5 4.92991 7.06075 5.58616 5.94017 6.53874C4.81608 7.49366 4.58333 7.92358 4.58333 8.91699H3.41667C3.41667 7.47383 3.87575 6.76158 5.18475 5.64974C6.06967 4.89783 6.33333 4.50349 6.33333 3.66699C6.33333 2.37783 5.28917 1.33366 4 1.33366C2.71083 1.33366 1.66667 2.37783 1.66667 3.66699V4.25033H0.5V3.66699C0.5 1.73383 2.06683 0.166992 4 0.166992Z"
      fill="#6467ED"
    />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.197 112.197">
    <circle cx={56.099} cy={56.098} r={56.098} fill="#3573ec" />
    <path
      d="M90.461 40.316a26.753 26.753 0 01-7.702 2.109 13.445 13.445 0 005.897-7.417 26.843 26.843 0 01-8.515 3.253 13.396 13.396 0 00-9.79-4.233c-7.404 0-13.409 6.005-13.409 13.409 0 1.051.119 2.074.349 3.056-11.144-.559-21.025-5.897-27.639-14.012a13.351 13.351 0 00-1.816 6.742c0 4.651 2.369 8.757 5.965 11.161a13.314 13.314 0 01-6.073-1.679l-.001.17c0 6.497 4.624 11.916 10.757 13.147a13.362 13.362 0 01-3.532.471c-.866 0-1.705-.083-2.523-.239 1.706 5.326 6.657 9.203 12.526 9.312a26.904 26.904 0 01-16.655 5.74c-1.08 0-2.15-.063-3.197-.188a37.929 37.929 0 0020.553 6.025c24.664 0 38.152-20.432 38.152-38.153 0-.581-.013-1.16-.039-1.734a27.192 27.192 0 006.692-6.94z"
      fill="#f1f2f2"
    />
  </svg>
);

const NotificationClose = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.00072 5.58599L11.9507 0.635986L13.3647 2.04999L8.41472 6.99999L13.3647 11.95L11.9507 13.364L7.00072 8.41399L2.05072 13.364L0.636719 11.95L5.58672 6.99999L0.636719 2.04999L2.05072 0.635986L7.00072 5.58599Z"
      fill="#ffffff"
    />
  </svg>
);

const USFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icons-us"
    viewBox="0 0 640 480"
  >
    <g fillRule="evenodd">
      <g strokeWidth="1pt">
        <path
          fill="#bd3d44"
          d="M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z"
          transform="scale(.9375)"
        />
        <path
          fill="#fff"
          d="M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z"
          transform="scale(.9375)"
        />
      </g>
      <path fill="#192f5d" d="M0 0h389.1v275.7H0z" transform="scale(.9375)" />
      <path
        fill="#fff"
        d="M32.4 11.8 36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0 3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0 3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0 3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0 3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9 36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0 3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0 3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0 3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0 3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0 3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1 36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0 3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0 3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0 3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0 3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0 3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0 3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0 3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0 3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0 3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0 3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z"
        transform="scale(.9375)"
      />
    </g>
  </svg>
);
const UKFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icons-gb"
    viewBox="0 0 640 480"
  >
    <path fill="#012169" d="M0 0h640v480H0z" />
    <path
      fill="#FFF"
      d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
    />
    <path
      fill="#C8102E"
      d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
    />
    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
  </svg>
);
const CAFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icons-ca"
    viewBox="0 0 640 480"
  >
    <path
      fill="#fff"
      d="M81.1 0h362.3v512H81.1z"
      transform="translate(74.1) scale(.9375)"
    />
    <path
      fill="#d52b1e"
      d="M-100 0H81.1v512H-100zm543.4 0h181.1v512h-181zm-308 247.4-14.2 4.8 65.5 57.5c5 14.7-1.7 19-6 26.8l71-9L250 399l14.8-.4-3.3-71 71.2 8.5c-4.4-9.3-8.3-14.2-4.3-29l65.4-54.5-11.4-4.2c-9.4-7.2 4-34.7 6-52.1 0 0-38.1 13.1-40.6 6.2l-9.8-18.7-34.7 38.2c-3.8.9-5.4-.6-6.3-3.8l16-79.8-25.4 14.3c-2.1 1-4.2.2-5.6-2.3l-24.5-49-25.2 50.9c-1.9 1.8-3.8 2-5.4.8l-24.2-13.6 14.6 79.1c-1.2 3.2-4 4-7.2 2.3l-33.3-37.7c-4.3 7-7.2 18.3-13 20.9-5.7 2.4-25-4.8-37.9-7.6 4.4 15.9 18.2 42.3 9.5 51z"
      transform="translate(74.1) scale(.9375)"
    />
  </svg>
);
const DEFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icons-de"
    viewBox="0 0 640 480"
  >
    <path fill="#ffce00" d="M0 320h640v160H0z" />
    <path d="M0 0h640v160H0z" />
    <path fill="#d00" d="M0 160h640v160H0z" />
  </svg>
);
const MXFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icons-mx"
    viewBox="0 0 640 480"
  >
    <defs>
      <radialGradient
        xlinkHref="#a"
        id="b"
        cx="842.3"
        cy="103.7"
        r="25.9"
        gradientTransform="matrix(.14152 .03595 -.03453 .14198 213.1 162.4)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#a"
        id="c"
        cx="651.5"
        cy="550.5"
        r="25.9"
        gradientTransform="matrix(-.13441 -.05384 .04964 -.12489 397.9 -24.3)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#a"
        id="d"
        cx="380.8"
        cy="740.4"
        r="25.9"
        gradientTransform="matrix(.07536 .00282 -.00343 .14804 412.4 -203.6)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="a">
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#f15770" />
      </linearGradient>
    </defs>
    <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
    <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
    <path fill="#006847" d="M0 0h213.3v480H0z" />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".3"
      d="m355.8 289.4.2 4.5 1.7-1.1-1.3-3.7z"
    />
    <circle
      cx="355.6"
      cy="288.2"
      r="1.4"
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".3"
      d="m361.1 296.4-3.2-3.1-1.5 1.2 4.5 2.6z"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
      d="M360.9 298.2c-.5-.6-.3-1.5.3-2 .7-.5 1.6-.4 2 .2.5.6.3 1.5-.3 2-.7.5-1.6.4-2-.2z"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".3"
      d="m386.3 249.6 3.4 3.3.4-1.7-3.1-2z"
    />
    <circle
      cx="385.9"
      cy="248.7"
      r="1.4"
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".3"
      d="M395.2 251.6 390 253l.5-1.7 4.4-.4z"
    />
    <circle
      cx="396"
      cy="250.8"
      r="1.4"
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".3"
      d="m378 276.8-3.2-4.8.5-.3 3.5 4.2z"
    />
    <circle
      cx="374.5"
      cy="270.8"
      r="1.4"
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".3"
      d="m378.1 277 4 .7.1-.5-3.3-1.4z"
    />
    <circle
      cx="383.3"
      cy="277.7"
      r="1.4"
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
      d="M284.6 288c0 .8-.5 1.2-1 1.2s-1-.5-1-1.2.5-1.3 1-1.3 1 .7 1 1.4z"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".3"
      d="m284.6 290.3 1 5-1.3-.5-.4-4.3z"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
      d="M285.7 288.6c.6.7-.4 1.9-1.4 2.2-1 .3-2.4-.2-2.4-1.2s1.6-.5 2-.6c.6-.2 1.2-1.2 1.8-.4z"
    />
    <ellipse
      cx="277"
      cy="296.3"
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
      rx="1.6"
      ry="1.1"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".3"
      d="m279.6 296 4.8-.2-.8-1-4 .4z"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
      d="M280 295.4c.5 1.3.5 3-.9 2.7-1.4-.1-1-1.4-1.2-1.8-.2-.9-1-1.7-.2-2.5s2 .4 2.3 1.6z"
    />
    <ellipse
      cx="264.4"
      cy="269.2"
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
      rx=".9"
      ry="1.4"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".3"
      d="m264.4 272.4.1 4.6-1.2-1v-3.8z"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
      d="M266.2 271c.3 1-1.3 1.6-2.4 1.4-1-.2-1.9-.7-1.7-1.7.1-1 1.5-.8 2-.5.4.3 1.8-.8 2.1.7z"
    />
    <ellipse
      cx="256.2"
      cy="276.5"
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
      rx="1.6"
      ry=".7"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".3"
      d="m259.1 276.5 3.6-.3 1.6 1.2-5.3-.2z"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
      d="M257.8 274.5c1 0 1.6 1.1 1.5 2.3-.2 1.1-1 2-2 2-.9-.2-.8-1-.8-1.2 0-.3.5-.7.6-1 0-.4-.3-1.3-.1-1.6 0-.4.3-.5.8-.5zm-3-28.3c-.4.6-1.2 1.1-1.6.9-.4-.3-.2-1.2.2-1.8.4-.7 1-1 1.4-.8.4.3.4 1 0 1.7z"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".3"
      d="m250.7 253.5 2-4.8-.2-.3-2.4 3.4z"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
      d="M252.4 248.7c-1-.7-1.2-1.5-1-2.3.4-.7 1.2-.2 1.2-.2l.8.7c.4.2 1 0 1.4.6.5.6.2 1.2-.1 1.4-.4.1-1.5.4-2.3-.2zm-8.5-.6c.7.4 1.1 1 .9 1.5-.3.5-1 .5-1.8 0-.7-.3-1-1-.8-1.5.2-.4 1-.5 1.7 0z"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".3"
      d="m246 250.2 3.8 2.2-.1 1.8-4.1-3.5z"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
      d="M246 250.6c-.8 1-1.6 1-2.3.7-.7-.5-.1-1.2-.1-1.2l.8-.7c.2-.4 0-1 .7-1.4.7-.4 1.2 0 1.3.3.1.4.3 1.5-.4 2.3z"
    />
    <path
      fill="#aa8c30"
      d="m356.6 289.8-.4.4-.3 1v-1.5l.5-.3.2.4zm.2-.9s-.3.5-1.1.5-1.2-.4-1.3-.8c-.1-.4-.1-.7.2-1.2.2-.5-.4.4-.4.4v1l.6.6.5.2h.4l.7-.2.4-.3v-.2zm4.2 7.3s-.4.2-.7.1c-1.9-.6-3.5-1.8-3.5-1.8l3.8 2.4.4-.7zm2.4 1.1s0 .7-.8 1c-.7.3-1.2.2-1.5-.1s-.4-.6-.4-1.2l-.1.6.4.8.8.4.5-.1.5-.2.4-.5.3-.5-.1-.2zm24.3-47.6-.1.4v.7l-.9-1 .4-.5.6.4zm-.5-1.2c0 .7-.9 1.6-1.6 1.3-.7-.3-1.2-1-.9-1.8l-.2.3.1 1.1.7.6h.9l.6-.3.4-.7v-.5zm10 1.8s-.1-.4 0 0-.6 1.7-1.4 1.6c-.7-.1-1-.8-1-1.4 0-.6-.1.2-.1.2v.8l.5.4.6.4.6-.2.7-.3.2-.6v-.9z"
    />
    <path
      fill="#aa8c30"
      d="M393.8 251s0 .4-.4.7l-1.3.7 2.8-.8-.2-.7-.9.2zm-17.1 22.5-.1.5v.8l-1.6-2.5.5-.3 1.2 1.5zm-.9-2.4c-.2.7-1.4 1-2 .8-.5-.4-1-1.6-.3-2l-.4.2-.1.7.2.7.6.7.5.1.8-.2.6-.4s.4-1.3.1-.6zm5.6 5.7s0 .3-.5.3h-1.6l2.6.6.2-.6-.7-.3z"
    />
    <path
      fill="#aa8c30"
      d="M384.6 277.5c.3.8-.5 1.7-1.5 1.4-1-.3-1.3-1.3-1-1.8l-.2.6.2.8.6.6h1.3l.6-.7.2-.7-.1-.2zm-99 11.1c.3.3-.1 1.5-1.2 2-1.2.4-1.7 0-2-.4-.3-.4-.3-.8-.3-.8l-.2.2.2.6.5.5 1 .2.8-.1.7-.5.4-.3.3-.5v-.6l-.1-.3z"
    />
    <path
      fill="#aa8c30"
      d="m284.6 291.1-.3.4-.3.8v-1.4l.5-.3.1.5zm-3.8 4s0 .3.2.5l1 .3h-1.8l-.2-.7h.8zm-.6 1.2v.2a1.4 1.4 0 0 1-.1.5c-.2.5-.3 1-1 .9a1.2 1.2 0 0 1-1-1.1c0-.4-.2-.6-.2-.6v.6l.4 1 .7.3h.5l.5-.2.2-.6.1-.5v-.5zm-4.7-.1s.2.8 1.2.8 1.2-.2 1.2-.2v.3l-.2.2H276l-.3-.3-.3-.5v-.3zm-9.4-25.4v.4c-.1.3-.7 1-1.8 1-1 0-1.5-.3-1.8-.7-.3-.3-.4-.8-.4-.8v.5l.4.7 1.1.5h1l1-.3.5-.5.1-.6-.1-.2zm-1.7 2.3s-.4 0-.6.2a4 4 0 0 0-.4.4v-1.3h1v.7zm-4.7 3.4.5.3c.5.3 3.1.5 3.1.5h-4.1l.1-.8h.4zm-.5 0-.2.6c-.2.5-.7 1.6-1.6 1.4-.9-.1-.7-.8-.7-.8v-.4l-.2.7.2.4.4.2.7.1.4-.2.6-.5.2-.5.2-.6v-.3zm-2.2.2s0 .2-.7.2-1.7-.3-1.7-.3l.4.4.5.2h1.3l.2-.5zm-2-29s0 .5-.3.8c-.4.3-1.3.5-1.8.2s-1.5-1.3-1.5-1.3l.4.8.7.6 1 .3 1-.2.4-.4.2-.3-.2-.4z"
    />
    <path
      fill="#aa8c30"
      d="M252 249.1v.6l-.2 1.1.9-2-.4-.2-.3.5zm-5.4 1.5.2.5c.2.5 2.3 2.6 2.3 2.6l-3.3-2.9.4-.5.4.3zm-1 .3s-.5.3-1 .3c-.3 0-1 0-1-.4-.1-.5.1-.7.1-.7l-.3.6.1.4.5.3h.7l.6-.3.2-.2zm-1.5-1.4h-.5c-.7 0-1.4-.8-1.4-.8l.5.8 1 .5.4-.5z"
    />
    <path
      fill="#9ca168"
      d="M399.9 240.2c-.3 3.8-4.1 5.8-6.1 7.2-2 1.4-3 3.2-3 3.2l-.6 2.2-.3 1.5-.1.5c.1.4.3 1 .3 2l-.1 4.3 2.7-1.9 1.9-.7.6-.1s-2.2 2.1-3 4.4c-.8 2.3-2.4 7.2-5.3 8.8-3 1.6-4.8 1-5.7 1.8-1 .8-1 1-1 1l-1.3 1.8-1 1.2-.9.7-.6.4a7.5 7.5 0 0 1-.2 1.7l-.7 2.4s.6-.4 1.3-.5h1.3s-.5.6-.7 1.3c-.2.6.1 4.6-3.6 7-3.8 2.3-13.4 2-13.4 2l-1.8.7-1.7 1.3-1.6 1.7v.4s-1.3 1.5-2.1 2l-2.8 1.9 2.2.1 3.5 1.5s-2.2 0-3.6.5c-1.5.6-8.2 4.4-11.4 4.3-3.3-.1-8-4.9-8-4.9l-2-1.4-3.5-.7-4.3-.2v-.6l.1-.7s1.5-.2 3.8.1c2 .2 2.7 1 4.4 1.1 1.7.2 3 0 3.5-.3.7-.3 5.9-4.7 5.9-4.7l5.8-2 2.3.3 1 .2.9.3-1 1a7.3 7.3 0 0 1-1.4 1.1l.7.6 3.7-.6 1.2.3.3.2c0-.3.2-.8.6-1.3.4-.6 2.5-2.3 3.4-2.9l1.4-1c.3-.3 1.5-3.3 1.5-3.3l.1-1.6 4.1-4 2.8-2.9 1.2-3.3-.2-.7s1 1 .9 3c-.2 2.2-.7 2.9-.7 2.9s2.8-2 4.3-2.6c1.2-.5 2-.5 2.4-.5.4-.2 1.5-.9 2.1-1.8.8-1.2 1-1.5 1-2l.2-2.8-.3-7 2.4-5.4 3.5-3.1.7-.4-.4 1.2v1.5s1.8-2.5 2.7-2.9l.5-.3a7 7 0 0 0 .8-2l.3-3v-3l-.5-2.3-1.7-4.3v-5.8l-1.2-1.6s1.1 0 2.5 2a13.5 13.5 0 0 1 1.9 5l3.3-10.3s.9 1.2 1.5 3.3l.8 3.3 1.4-2.8.1 1c.2 1 2.3 2.1 2 6zm-67.3 65s-.7-1.6-3.9-3.2c-3.1-1.5-5.5-1.8-5.5-1.8v1.1l5 2.2 2.4 2 2-.3z"
    />
    <path
      fill="#717732"
      d="M355.4 295.6c.3-.4 3-2.8 4.4-3.5s3.2-.8 3.2-.8c1.9-.4 2.2-.1 6.6-2.5 4.3-2.4 5.3-5.2 6.2-5.9.8-.7 2.3-.8 2.3-.8l-3.4 3.9a28.5 28.5 0 0 1-5.8 4.5 17.8 17.8 0 0 1-7.6 1.8 7.7 7.7 0 0 0-4 2c-1.3 1-2 2.2-2 2.2s-.2-.5 0-.9zm12-12.7c-4 3.7-5.3 7.2-5.3 7.2l5.4-4.9c1.9-1.8 4.5-2.6 5.6-3.7 1.2-1.1 1.3-2 2-2.7l1.3-1s-1.8-1.4-9 5.1zm-8.5 8.6s1.7-.8 2.4-2.3c.5-1.2.2-1.5 1-2.8 0 0 4.2-4 5.7-5.8 2.6-3.1 1.4-5.7 1.4-5.7s.3 1.3-.8 2.7c-1 1.4-6.5 5-7.2 7.2-.6 2.2-.3 2.3-.6 3.4-.6 2.6-1.9 3.3-1.9 3.3zm-2.8 10.5s-2.1-1.4-4.5-1.3c-4.9.4-9 3.4-12.2 3.4-3.1.1-4.4-1.5-6.9-3.2-2.6-1.8-9.2-1.5-9.2-1.5v.3s4.4 0 6.4.6c3.6 1 5.6 4.8 9.7 4.6 5.5-.3 9.9-3.6 12-3.6 3.8 0 4.7.7 4.7.7zm-24-2.4s3.7.6 6.6-1.5c3-2.1 6.4-5 8.3-5.2 2 0 4 .4 4 .4s-2.5-1-4.4-1c-2 0-4 .2-5.8 1.3-1.8 1.1-2.7 3-4.6 4.3a12.8 12.8 0 0 1-4.1 1.7zm-.7 5c-.5 0-1.1.3-1.3.3-.2 0-1.3-1.2-3-2-1.6-1-4-1.4-4-1.4s-.3 0 .3.2l3.8 1.5a8.6 8.6 0 0 1 2.6 2.1c.1.3.6.9 1.5.8 1 0 1.3-.5 1.2-1 0-.3-.6-.5-1.1-.5zm2.6-3.6s1.5.8 4 .8c5.2-.2 8.6-3.8 12-5 3.4-1.4 5.2-.3 5.2-.3s.1-.2 0-.2a7 7 0 0 0-3.9-1.2c-5.7 0-11.2 3.7-13.5 4.7-2.3 1-3.8 1.2-3.8 1.2zm56-39.9c-1.8 1.9-4.5 7.7-5.6 9.3-1.2 1.6-2.7 2-3.3 2.7-.6.6-2.7 3.5-3.2 4.1-.5.7-.6.5-1 .8-.3.3-.5.3.1.2.6-.1.8-.5 1.6-1.5 1-1 .9-1.4 2.3-2.7 1.4-1.2 3.9-2.6 5.1-4.2 1.3-1.5 3.8-7.5 5.2-9 1.4-1.5 4-2.4 4-2.4s-2-.6-5.3 2.7zm-9 11.1s-.1-1 1.2-2.6 1.7-1.3 2.8-3.6c1-2.3 1.5-4.5 2.3-6.9.9-2.4 2.3-4.8 2.3-4.8s-1.3.2-2.7 2a34.5 34.5 0 0 0-4.8 8.7c-1.1 3.4-1.1 7.2-1.1 7.2zm-1.7 2.2s.5-.2.5-3.2c.1-2.9-.1-7 .7-9 .9-2 5.4-7 5.4-7s-1.9.5-4.5 2.5-3.7 4.7-3.6 6.7c.2 2 1.3 4.2 1.4 6.1l.1 4zm10.5-20.1s1.1-4 1.6-5 .5-1.5 2.7-4c1.3-1.5 2.6-2.4 3.1-4.4.6-2 .6-7.7.6-7.7s-.6.5-1.1 1.5c-.5 1-.1 4.7-1 6.4-.8 1.7-2.7 5.6-3.7 6.5 0 0-.2-2.9.2-5.7.3-3 1.3-3.8 1.7-5.7.4-1.9.2-6.7.2-6.7s-1.5 1.5-2.3 3.4c-.8 1.8-1.2 5-1.2 7.5s.5 4.5.6 5.9c.1 1.4.2 2-.4 3.6l-.6 2a34.8 34.8 0 0 1-.7 2.6l.3-.2zm-3.5-21.6s1.4 1.7 1.2 3.6c-.3 2-1 4.5-.2 6.5.7 2 1.9 2.2 2.2 3.4.3 1.2.3 3.4.3 3.4s.6-4.3.2-5.5c-.5-1.1-.7-.6-1.3-1.8s0-4.7-.4-6.7c-.5-2-2-2.9-2-2.9z"
    />
    <path
      fill="#9ca168"
      d="M306.7 304.8s.4-1 3.1-2.4a34 34 0 0 1 7.3-3c.3.3-.3 1.8-.3 1.8l-2.6.8-2.1 1.2-2.5 1.6h-2.9z"
    />
    <path
      fill="#9ca168"
      d="M313.6 297.7c-3.4.1-5.3 1-6 1-.2.1-.7.5-1.2.3a4.9 4.9 0 0 1-1.5-1.5l-.7-.7-.2 2.5-5-4.4-.6 3-.7 1.3-5-4.8.2 3.7-1.4.1-3.6-2.5-1 .4 1.2 2.2-4.6.3-1 .8a6.3 6.3 0 0 0-1 1v.4h1.9c.4-.2.6-.7.7-.5.2.2.3 1.2.9 1.1.6 0 2.7-1.7 4.2-1 1.7.8-2.2 2-1.8 3.1.4 1.2 3.2.7 4 .3.6-.3 2.7-3 3.6-2 1.2 1.4-2.5 2.5-1.8 3.9.6 1.3 2.7 1 3.7.4 1-.5 3.4-4.1 3.9-3.4.9 1.4-2 2.7-1.3 3.7.8 1 2.3 0 3.4-.8s1.5-2.5 3-3.3c1.4-.8 1.3-.5 1.7-.5.4 0 1.5-1.1 1.5-1.1l3.5-1.5 1.6.2.9.4 1.7.2.2-1.4s-2-1-3.3-1zm-27.4 0 .7-1.3-.4-.6s-1.2-.7-2.3-1.8a6.9 6.9 0 0 0-2-1.6L280 291l-.8-2.8-.5-.9-1.3.6-1.7-6.1-.3-1.1h-.7l-1.5 3.6-1.5-2.3-.4-5-1 1-1.3 1.4-2.3-4.6s-.1-.1-.3.3c0 .3-.3 1.8-.1 2.6a26.2 26.2 0 0 1-6-5.2l-1-2.5 1-2 .5-2.6-2.2.9-.4-5.7-.3-1.8-2.7 3.8-1-1.7v-3.6l-.7-.2-1 2s-1.1-2-1.6-2.5c.1-.8.2-2.9-.3-4.5-.6-2-1.3-3.1-1-4.8.2-1.6.9-1.8.8-2.5 0-.8-1.2.5-.8-.5.4-1 3.8-3.2 3.1-4.4-.7-1.1-4 1.9-3.3-.1.8-2 4-2 4.2-4.9.1-1.7-3 1.1-3.3.2-.3-.8 2-2.6 1.9-3.8 0-1 .4-1.2-.2-1.8-.6-.6-2.6 2.3-2.6 2.3l-2-.7-.8 3-.6 2.5-2.6-1.5.7 3.1.6 3-2.7-.7 1.4 2.6 1.9 2 1.1 1.5.9.4 1 1.1.5 1.7.6 1.9.1 1.8v2.4l-.1.4v1.1c-.5 0-1.4-.8-1.7-.3-.3.6 1.6 2 1.2 2.4-.3.4-3-.5-3.2.3-.2 1 .2 2.2 1.8 2.6s5.3 1.2 4.7 2c-.6.7-4.7-2.3-4.5-.1a3.8 3.8 0 0 0 2.6 3.4c1 .4 5.1 0 4.9 1-.3.9-3.3-.4-3.6 1-.3 1.4 2.1 1.6 2.6 1.6s2.2-.1 2.9.4l4.3 4.1a75.7 75.7 0 0 0 4.6 3.4c-.8 0-2.4-.3-2.6.3-.3.7 6 3 4.2 3.8-1.8.7-3.8-2-4.3-.4-.6 1.7 1.2 3 2.2 3.6 1 .6 6.7.1 5.6 1.4-1.1 1.3-5.3-.8-5.3.7s2.7 4 4.2 3.9c1.4 0 3-2.4 3.6-1.1.7 1.2-1 1.7.3 2 1.4.4 2.3-1.4 4-1 1.5.3 4 1.3 5.4 2.5a79 79 0 0 1 2.9 2.8z"
    />
    <path
      fill="#717732"
      d="M308.4 304.1c1 0 1 .6 1.2.6.1 0 1.8-1.5 3.3-2.3a17.5 17.5 0 0 1 4-1.4l.1.2s-2.8.7-4.2 1.7l-3 2.1c-.2.2-.8.7-1.7.7-1 0-1.4-.6-1.4-.9 0-.2.7-.7 1.7-.7zm8.5-4.3s-.9.1-1.3-.3a4.3 4.3 0 0 0-2.6-.8 7 7 0 0 0-4 1.8c0 .1-.3.6-1.4 1.3.4.1 1.1-.4 2-1a7.4 7.4 0 0 1 3.6-1.4c1-.2 1.7.4 2.2.7.5.4 1.4.3 1.4.3v-.6zm-50.5-20.6v-.7a16.1 16.1 0 0 1-2.2-1.1c-1.6-1-5-3.8-5-3.8l2.8 2.7c1.4 1.3 4 2.9 4 2.9h.4zm35.6 25.2 1.5-2.1c.9-1.5 1.7-2 1.9-2.2.1-.2-.4-.9-.7-1.4l-.2-1.2s.4.8 1 1.3a9.5 9.5 0 0 1 1.1 1s1.4-.2 1.4-.5c0-.2 0-.4-.2-.5-.3-.1-.5.2-1.1 0-1.3-.6-1.8-2.6-2.6-2.6-.8-.1-.2 2-.6 2-1.1.2-2-4.3-5-4.5-2 0-2.3.3-2.4.7 0 .5 2.5 3.1 1.6 3.5-.8.4-3.5-4.2-5.5-4.2-1.9 0-2 .7-2 1.1.2.4 2.2.8 1.8 2.2-.5 1.4-2.5-2-4.3-1.9-1.8.2-2 .3-2 .9-.1.5.6 1.2.3 1.4-.2.2-1.4.1-2.3.7-.9.7-2.1 2.4-2.1 2.4s1.2-1.7 2.7-1.9a50 50 0 0 1 5.6 0l-1.1-.8c-.6-.5-1.1-1.6-1.1-1.6l1.7 1.5c.8.7 1.9 1.2 1.9 1.2s1.7.2 1.8.4c.1.2 0 .6-.8 1.3l-1.7 1.7 2-1.6 1.5-1.2 1.4.2c.1 0 0-.5-.8-1.7l-1.6-2.5s1 .9 2 2.3c1.1 1.3 1 2 1.4 2 .4 0 1 .2 1.4.1.4 0 .3.6-.4 1.7s-1.2 2.5-1.2 2.5.8-1.2 1.6-2c.7-.8 1.1-1.7 1.5-1.8h1.5l-.8-1.6c-.6-1-.8-2.6-.8-2.6s.6 1.4 1.4 2.5l1.3 1.9 1.4-.1.3.1c0 .5-.2.7-.7 1.8a17.7 17.7 0 0 0-1 2.1zM280.5 292c1.2.5 1.7.5 1.7.5s-1.7-1-2.1-2.4c-.5-1.4 0-4.4-.8-4.3-.7 0-1.1 2.1-1.8 1.7-.8-.4.2-4.4-.6-6-.8-1.7-2.6-2.9-3-2.3-.4.6-.3 4.2-1.5 3.5-1.1-.8.1-4-.2-5.3-.4-1.5-1.2-2.5-1.9-2.1-.6.3.3 3-.7 3s-.9-1.9-1.3-2c-.5-.2-.6.3-.9 0-.2-.4 0-1.7-.6-1.6-.6.1-.5 1.2-.3 1.7.1.6.5 1.4.7 1.8.2.4 1 .9 1 1.2-.1.3-.5.6-1 .6h-1.9s1.4.4 1.9.4 1.4-.2 1.7.2c.2.5 1.4 2 1.4 2s.3-.8.4-2.2c.2-1.5 0-2.7 0-2.7s.5 1.6.4 2.7c0 1-.4 3-.4 3s1.1.8.8 1c-.3.3-1.5.3-2.8.3-1.4 0-3.3-.5-3.3-.5a13.7 13.7 0 0 0 6.7 1.3l1.8 2s.9-1.5 1-3v-3l.4 2.8c0 1.3-.4 3.6-.6 3.8a5 5 0 0 1-1.9 1l-3.5.5s2.2.3 3.8 0c1.5-.4 1.7-.9 2.2-.6l.8.7 1.3 1c.1.1-.7.4-1 .7l-1.5.7 2.2-.7a22.3 22.3 0 0 0 1.1-.4l.5.2-.1-1.2-.3-1.8s.5.8.7 1.6l.1 1.6s.2.2 1.4.6zm-31.1-35.6s.3-1.7.3-3.6a14.3 14.3 0 0 0-1.9-5.8l1-1.4-1.2 1-1.2-.5a3 3 0 0 1-.9-1l1.2.8c.6.2.7.1.7.1l-.5-2-1.9-1c-1.3-.6-2.5-1.8-2.5-1.8l2.8 1.5c1 .4 1.6.4 1.6.4l1.6-.6 1.7-1.1s-1 .6-1.8.7l-1.6.3-.3-2.4-1.1-1.1c-.9-1.2-1.6-2.9-1.6-2.9s1 1.2 1.7 1.7c.7.6 1.4 1.5 1.4 1.5l1.6-1 2.8-2-2.7 1.3-1.6.7s-.2-1 0-1.5c.3-.4.8-1.2.7-1.6 0-.5-.4-.3-.5-.7-.2-.3.4-2.6.4-2.6l.1 1.2c0 .5-.2 1 .4 1 .6 0 3.2-2.7 3.6-3.2.3-.5.8-1.8-.6-1.3-1.4.6-1 1.8-2.2 1.7-.4 0-.8-1.5-1.2-1.2-.4.4-1.4 1.3-1.6 2.4-.2 1 .2 2.6-.4 3.1-.6.5-1-1.8-2.2-1.5-1.2.3-1.5 2-1.3 2.6.2.6 2.7 3.5 2 4-.9.3-2.9-2.6-4-.6-1 1.9 3.4 4 4 4.4.5.5 0 .6.8 1.6s1.8 1.2 2.4 1.8a13 13 0 0 1 2.1 5.9l-.1 2.7zm11.7 17.1s-1-1.2-.7-3.3c.3-2 1.8-5.7 1.3-6.2s-2 2.2-2.4 1.6c-.4-.6.9-4.3.2-5.8-.6-1.5-.7-2.5-2-2.3-1.3.1-1.8 4.4-2.5 3.6-.6-.7.4-2.6 0-3.7-.5-1-.7-1.3-1.3-1.2-.7.2-1 2.2-1.4 2.1-.5 0-1.2-2.3-2.2-2-.9.3 2.3 4.5 2.3 4.5s.5-.5.8-1.2l.6-1.5s.3 1.3 0 1.9c-.2.5-.3 1.7-.3 1.7s-.8.3-2.1 0a8.8 8.8 0 0 1-2.3-.7s.8.6 2.1 1l2.7.7a44.9 44.9 0 0 0 2 2.7l.8-2.1 1.3-3.5-.6 3.9-.7 3s-1 0-2.6-.3l-3.6-.8 3.6 1.2 2.8.7 1.4 1.9 1-1.5 1-1.8s-.3 1.4-.7 2.3a27.4 27.4 0 0 1-.7 1.4l-1.8.2h-2.5a19.6 19.6 0 0 0 4.5.9s0 .5.7 1.3a4.6 4.6 0 0 0 1.3 1.3z"
    />
    <path
      fill="#fff"
      d="M314.4 310.8s-.6-.6-1.4-1c-.9-.5-1.2-.4-1.2-.4l-.4-.1.8-2 5.5-5.3.9-5.3h3.4v7.2l1 .5 6.2 3.7v1.6l-1 .4-.7.4-2.3.2-4-3-1.8-1.7-3 4-2 .8z"
    />
    <path
      fill="#016848"
      d="m318.8 296.7-.1 1c0 .9 0 5.2-.2 5.8-.2.6-3.2 1.8-4.9 3.3-1.7 1.5-1.8 2.6-1.8 2.6s-.5 0-1.6.4c-1 .4-1.5 1-1.5 1s.6-2.6 3.4-5c2.7-2.6 4-2.8 4.4-3.2.3-.4 0-5 0-5.5.1-.4.5-.4.7-.4h1.6zm7 15.7.8-1.1 1-.8-1.5-.8c-1.5-.6-2.3-.4-3.3-1.2a13.6 13.6 0 0 1-2.2-2l-1.5 1.2 1.7 2c.9.8 2.7 1.1 3.5 1.6a8.8 8.8 0 0 1 1.6 1.1z"
    />
    <path
      fill="#cd202a"
      d="M321.5 296.6s1.7 0 1.9.2l.2.6c0 .1 0 4-.2 5.3a8 8 0 0 1-1.4 3l-4 3.7c-1.2 1.2-2.4 2.8-2.4 2.8l-.8-1c-.3-.4-.7-.6-.6-.9a10 10 0 0 1 3.3-3.4c2-1.3 3.6-2.8 4-4.9.3-2 0-5.4 0-5.4z"
    />
    <path
      fill="#cd202a"
      d="M332.5 310s-.4-.4-1.8-.4l-1.5.1s-.8-1-2-1.7c-1.2-.8-2.1-.7-3.5-1.6-1.3-.8-2-2.1-2-2.1l1-2s1.2 1.5 2.4 2.4c1.1.9 3.7 1.7 4.6 2.4l2.8 2.9z"
    />
    <path
      fill="#30c2dc"
      stroke="#0872a7"
      strokeWidth=".5"
      d="M345 286.4s-3.6-1.4-3.4-2.7c.3-1.2 8.3-3.3 8.3-3.3l.1-2.1s-1.2-.1-3.2.5c-2 .7-5.2 1.6-8.6 1.6a1735.4 1735.4 0 0 0-34.4-2.2c-3.7-.3-6-6-6-6l-1.8.4s.5 2.7-.4 3a65 65 0 0 1-13.9-6l-.6 2.6s7.3 4 7.1 5.5c-.2 1.4-2.4 1.3-2.4 1.3l1 1.8c.3 0 12 .6 12.3 4.1 0 1.5-3 2.3-3 2.3l1 1.2v.6s6.7 0 8.5 1c1.8 1 2.7 2.6 5 3.8 2.2 1.3 17.3 1 19.6.3 2.7-.7 4.3-3.7 8.7-5 4.3-1.4 5.7-1.4 5.7-1.4z"
    />
    <circle cx="284.5" cy="280.7" r="2.1" fill="#fff" stroke="#0872a7" />
    <circle cx="296.4" cy="270.9" r="2.1" fill="#fff" stroke="#0872a7" />
    <circle cx="346.5" cy="286.6" r="2.1" fill="#fff" stroke="#0872a7" />
    <path
      fill="#f8c83c"
      d="M275.1 267.8c-.7 1.6 2 4.6 4 5 1.8.2 2.8-.2 3.2-1.1a2.8 2.8 0 0 0-.4-2.5c-1.2-1.7-6-3-6.8-1.4z"
    />
    <path
      fill="#fff"
      d="M281 270.2c0-1-1.6-1.9-2.6-1.9s-2 0-1.8.5c.1.6 2.7 1.3 2.8 1.6 0 .3-.8.6-.4 1 .5.4 1 .1 1.4-.2.4-.3.7-.4.7-1z"
    />
    <path
      fill="#f8c83c"
      d="M297.7 288.3c.4 1.4-.7 2-2 2.7-1.5.6-4.3.2-5-.9-.6-1.1 1-3 2.8-3.4 1.7-.4 3.8.3 4.2 1.6z"
    />
    <path
      fill="#fff"
      d="M294.8 289c.5 0 .6 1 1 .8.5 0 1-.8.8-1.3-.1-.6-1-1.3-1.8-1.2-.8 0-3 2-2.8 2.5.2.5.8.5 1.2.3.4-.2 1-1 1.6-1z"
    />
    <path
      fill="#f8c83c"
      d="M349.2 281c1.3 1.7 3.6.2 4.2-.5.6-.6 2.4-1.7 1.7-2.8-.8-1.1-2-1-3-1-.8 0-2.6 1.4-2.9 2-.3.5-.6 1.6 0 2.4z"
    />
    <path
      fill="#fff"
      d="M349.6 280s.1-1.9 1.8-2c1 0 1 .3 1.8.7.7.4 1-.5 1-.5s0 1.3-1.1 1.3c-1.2 0-.8-.5-2-.7-1-.2-1.5 1.1-1.5 1.1z"
    />
    <path
      fill="#f9aa51"
      stroke="#953220"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth=".5"
      d="m321.9 276.4-.9-.6h-2.8l-3.4.1 3.4 9.9 4 5.8 1.6.6 3.1-.2.6-1.6-1.2-9.5-4.4-4.5z"
    />
    <path
      fill="#f9aa51"
      stroke="#953220"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth=".5"
      d="m310.6 277 .2-1.1 1.8-.1a7.2 7.2 0 0 1 2.2.1s2.3 2.9 3.1 4.7c.8 1.8 1.7 4.8 2.7 6.6 1 1.9 3.2 5 3.2 5h-4l-2-.6-5.6-9-1.6-5.6z"
    />
    <path
      fill="#f9aa51"
      stroke="#953220"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth=".5"
      d="M308.2 275.8h2.6a14 14 0 0 1 3.9 5.4c1 2.8.5 3.2 1.8 6.2 1.4 2.9 3.2 4.9 3.2 4.9s-3.9.2-6-.2c-2.3-.4-3-.3-3.6-1a9.2 9.2 0 0 0-1.7-1.3h-2.2l.5-3.1-.6-6.9.1-3.5 2-.5zm23.4 1.8-3.7-1.5-7-.4.6 3.6a30.2 30.2 0 0 0 2.6 7.7c1.1 2 2.2 4.4 2.8 5 .6.5 4.6-1.1 4.6-1.1l2.6-.4-.3-2.8-.4-1 .6-8-.6-1.2-1.8.1z"
    />
    <path
      fill="#f9aa51"
      stroke="#953220"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth=".5"
      d="M307.1 277.7c0 .8 1 .9 1.2.8.2 0 1-.3 1-1.5s-.7-2.1-2.2-2.2c-1.4 0-2.5 1.7-2.5 3 0 1.2 1.2 1.8 1.2 2.3 0 0-1.2 1.1-1.1 3.1 0 2 1.6 3.6 1.6 3.6s-1.7 1.3-1.7 2.7c0 1.4 1.3 2.3 2.6 2.3 1.2 0 2.8-.8 2.8-1.8s-1-1.7-1.7-1.7c-.8 0-1.1.5-1.1.8m25.6-10.9c0 .9-.6 1-1 1s-1.2-.4-1.2-1.5c0-1 1.4-1.6 2.4-1.6.9 0 2.4 1.2 2.4 2.7 0 1.5-1 2.6-1 2.6s.6.3.6 2.2c0 2-1.2 3.3-1.2 3.3s1.6.6 1.6 2.6-1.4 2.6-2.3 2.6c-1 0-2.6-.5-2.6-1.9 0-1.3.8-1.8 1.5-1.8.6 0 1.3.7 1.3 1.5"
    />
    <path
      fill="#953220"
      d="m309.5 288.6.4.6c.2.4.3 1 .8 1.4.8.7 7.2 1 9.2 1 2 0 7.8.2 8.9-.4 1-.7 1.2-1.8 1.9-2.3l.9-.4-.9.7v1.4l.5.8s-.1.4-.8.8c-.7.4-1.3.5-2.3.6-1 .1-13.2.1-15.2-.2-2-.4-1.8-.3-2.4-.7a4.3 4.3 0 0 1-1-1l.3-.8-.3-1.4zm20-11.8 1 .5s-.9.3-1.6 2.3c-.7 2-.1 2.5-.6 2.7-.5.2-5.8 0-5.8 0l-1-2.1 8-3.3z"
    />
    <path
      fill="#231f20"
      d="M346.4 276s-.9-.3-1.3-1c-.4-.8-.8-1.7-.5-2 .4-.1 1 .5 1 1.1 0 .6.8 2 .8 2zm10.4-2.8s.7 1.2 1 1.3l1.2.6s-1.5 0-2-.4a8.3 8.3 0 0 1-1-1.5h.8z"
    />
    <path
      fill="#231f20"
      d="M360 274.2s-1 .5-1.6.2c-.8-.3-1.4-.7-1-1 .2-.4.4-.3.8.2.4.4 1.8.6 1.8.6zm5.3-4.5s-.8.6-1.3.6-1.5-.2-1.5-.4 1.3-.4 1.6-.3h1.2zm-8-10.5s-1.1.4-1.5 1c-.4.5-.3 1.2.2 1.2s.6-.7.6-1l.7-1.2zm-5.2 2.9s-.9.5-1 1c-.3.5-.5 1.6 0 1.6s.7-.8.7-1.2c0-.5.3-1.4.3-1.4z"
    />
    <path
      fill="#8cbebf"
      stroke="#04534e"
      strokeWidth=".5"
      d="m342.8 268.4-2.9 3s6.6 3.7 11.7 3.5c5-.1 10.8-4 11.2-5 .4-.7 0-4.3-.6-5.4-.7-1.1-4.2-3.8-5.5-3.7-1.3.1-3.7 1.9-5.8 4-2.2 2.1-2 3.9-5 3.7l-3.1-.1z"
    />
    <path
      fill="#0c8489"
      d="M342 269.6s7 1 9.1-.8c2-1.8 4.3-5.3 5.7-6 1.4-.9 2-.9 2-.9l1.6 1.1 1.8 1.5.6 3.4v1.8l-2.2 1.8-4 1.9-4 1.2-3.2-.1-6.7-2-1.7-1.1-.4-.4 1.4-1.4z"
    />
    <path
      fill="#04534e"
      d="M352.8 265.5c0-.6.4-.6 1-.6s1 .2 1 .8-.5 1.4-1 1.4c-.6 0-1-1-1-1.6zm2.8 1.8c0-.6.4-.8 1-.8.7 0 1.3.7 1.3 1.2s-.5 1-1.1 1c-.7 0-1.2-.9-1.2-1.4zm-1 4.2c0-.7.5-.8 1.1-.8.6 0 1 .3 1 1a1.2 1.2 0 0 1-1.1 1.2c-.7 0-1-.7-1-1.4zm-3.7-1.3c0-.7.7-1 1.3-1 .6 0 1 .7 1 1.4s-.4 1.3-1 1.3-1.3-1-1.3-1.7zm-5.9.7a1.4 1.4 0 1 1 3 0 1.4 1.4 0 0 1-3 0z"
    />
    <path
      fill="#8cbebf"
      d="M355.6 267.3c0-.5.7-.8 1-.8.5 0 .8.4.8.8s-.3 1-.7 1c-.4 0-1-.5-1-1zm-1 4c0-.5.6-.8 1.2-.8s1 .3 1 .8-.5 1-1 1c-.6 0-1.1-.4-1.1-1zm-3.7-1.2c0-.6 1-.9 1.5-.9.4 0 .3.4.3 1 0 .7-.3 1.2-.7 1.2s-1-.7-1-1.3zm1.8-4.7c0-.5.4-.5.8-.5s.6.1.6.7-.3 1-.6 1c-.4 0-.8-.6-.8-1.2zm-7.7 5.1c0-.6.6-1.3 1.4-1.3s1.7.3 1.7 1c0 .6-1 1.8-1.8 1.8-.9 0-1.3-.8-1.3-1.5z"
    />
    <path
      fill="#231f20"
      d="M347.7 269.4s-1 .1-1.5.6-.5 1-.3 1.2c.3.2.7-.3.8-.6 0-.2 1-1.2 1-1.2zm4.7-1s-1 .6-1 1.3c-.1.6 0 1 .2 1 .3 0 .5-.9.4-1.2-.1-.3.4-1.2.4-1.2z"
    />
    <path
      fill="#231f20"
      d="M353.2 269.3s-.6 0-1 .4c-.5.5-.9 1-.6 1 .3 0 .8-.2.8-.5 0-.2.8-.9.8-.9zm1-5.4-.8.6c-.2.2-.5 1-.2 1 .3.2.5 0 .8-.5.2-.5.2-1.1.2-1.1zm3.5 2.3s-.9 0-1.2.5c-.3.4-.5.8 0 .8.3 0 .4-.2.6-.5.1-.4.6-.8.6-.8zm-.5 4.1s-.2.7-.8 1c-.5.3-.7.5-1 .1-.1-.4.2-.6.4-.7l1.4-.4z"
    />
    <path
      fill="#04534e"
      d="M362.8 267.5s.4 2-1.3 3c-1.7.9-6.4 4.2-10.9 3.8-4.5-.4-9.6-3-9.6-3l-.7.4 1.2.5 3.4 1.4 4 1.2 2.5.1 2.1-.2 4-1.3 3.3-1.7 1.8-1.4.4-.6v-1.9l-.2-.3z"
    />
    <path
      fill="#231f20"
      d="M274.9 242.2s1 .9 1 1.6c-.2.8-.4 1.1-.7 1-.3-.2-.3-1-.3-1.3v-1.3zm7.7 7.1s-.3 1.4-.9 1.5c-.5.1-.9-.4-.8-.7.1-.2.6 0 .8-.2l.9-.6zm-16.8 1s.4.8 1 1c.8 0 1-.4 1-.6-.1-.2-.4-.2-.8-.2l-1.2-.1zm3 6s.7.6 1.5.7a1.3 1.3 0 0 0 1.3-.7c0-.2-1-.2-1.3 0-.3.3-1.5 0-1.5 0zm5.3 4.4s1.4-.2 1.6-.6c.2-.4.6-1 .3-1.3-.3-.4-.5.5-.7.9-.1.3-1.2 1-1.2 1z"
    />
    <path
      fill="#8cbebf"
      stroke="#04534e"
      strokeWidth=".5"
      d="M282.6 257.1s1-6-4-10.4c-5-4.3-8.1-3.2-9.8-1.6-1.7 1.6-3.2 6.7 2 11.3 5.3 4.5 11.7 3 11.7 3l.1-2.3z"
    />
    <path
      fill="#0c8489"
      d="M267.6 250.7s-.1-3.4 1.5-4.4c1.5-1 6.8-1.8 9.3 3.1 2.6 5 2.7 7.4 2 10h-2.7l-4.3-1.8-3.5-2.6-2.3-4.3z"
    />
    <path
      fill="#04534e"
      d="M282 258s-.9 1-2.7 1c-1.7-.2-10-2.3-12-9.8v1.7l.1.5.6 1.5 1.7 2.5 2.2 1.9 2.8 1.4 2 .6 2.5.4h1.5l1.3-1.7z"
    />
    <path
      fill="#04534e"
      d="M277.7 255.9c0-.7.3-.7.8-.7s1-.2 1 .4c0 .7-.4 1.6-1 1.6-.4 0-.8-.7-.8-1.3zm.3-4c0-.4.4-.8 1-.8.5 0 .9.4.9.9 0 .4-.4.8-1 .8-.5 0-.9-.4-.9-.8zm-3.7 4.4c0-.4.4-.7 1-.7s1 .3 1 .7c0 .3-1 .8-1.5.8-.6 0-.5-.5-.5-.8zm-.4-4.6c0-.6.3-.4.8-.4s1.2.1 1.2.7-.7 1.4-1.2 1.4-.8-1.2-.8-1.7zm-3.4.7c0-.5.3-1.1.9-1.1s1.3.6 1.3 1.1c0 .5-.5 1-1.1 1-.6 0-1.1-.5-1.1-1zm.6-4c0-.6.3-.5 1-.5.6 0 1.1.2 1.1.7 0 .5-.7 1.2-1.4 1.2-.6 0-.7-1-.7-1.5zm3.7-.5c0-.4.5-.3 1-.3.7 0 1.1.4 1.1 1s-.7 1-1.3 1c-.6 0-.8-1.2-.8-1.6z"
    />
    <path
      fill="#8cbebf"
      d="M271 248.3c.2-.4.4-.7.8-.7.5 0 .9.1.9.7 0 .4-.4.9-.8.9-.5 0-1-.5-.8-1zm-.6 4c0-.5.2-1 .7-1s1 0 1 .5-.5 1.1-1 1.1-.7-.1-.7-.6zm4.4-4.3c0-.4.3-.4.8-.4s.8 0 .8.5c0 .4-.4.7-.8.7s-.8-.4-.8-.8zm-.9 3.9c0 .5.5 1 1 1s1-.5 1-1c0-.6-.6-1-1-1s-1 .4-1 1zm4.3-.6c0 .5.4.9 1 .9.5 0 .9-.4.9-.9s-.5-.9-1-.9-1 .4-1 1zm-4.1 5c0-.5.5-.9.9-.9s.9.3.9.7c0 .4-.8 1-1.2 1-.5 0-.6-.4-.6-.9zm3.6-.7c0-.5.4-.6 1-.6.5 0 .8.1.8.6 0 .6-.5 1-1 1s-.8-.5-.8-1z"
    />
    <path
      fill="#231f20"
      d="M278.7 249.4s.5.7.6 1.3v1.2c-.3 0-.6-.4-.7-.9-.1-.5 0-1.6 0-1.6zm-3.2-3.3s.4.5.4 1 0 1-.3 1-.3-.4-.3-.8l.2-1.2zm-3.7.5s.4.5.4 1 0 1-.3 1-.3-.4-.3-.8l.2-1.2z"
    />
    <path
      fill="#231f20"
      d="m270.5 247.3 1 .4c.3.4.5.8.3 1-.1.2-.5-.1-.6-.4l-.7-1zm2.8 3.8s.7 0 1.1.5c.4.3.8.6.5.9-.2.2-.7-.2-1-.5l-.6-.9zm-3.4 0 1 .3c.3.2.4.7.2.8-.1.1-.4 0-.6-.4l-.6-.8zm8.3 2.5.2 1.4c0 .5.1 1-.2 1s-.3-.7-.3-1c0-.5.3-1.4.3-1.4z"
    />
    <path
      fill="#231f20"
      d="m277.3 254.9.8.5c.3.2.3.6.1.6l-.4-.5a9.2 9.2 0 0 1-.5-.6zm-3.7.2.9.3c.2.2.3 1 .2 1.1 0 .1-.4 0-.6-.3l-.5-1z"
    />
    <path
      fill="#04534e"
      d="M272.1 243.8s-3.2.7-3.8 2.9c-.6 2-.7 4.4-.7 4.4l-.4-2.7.6-1.7 1-1.6 1.4-1 1.3-.4.6.1zm10.2 12.5s.4-.8-.6-3.4c-1-2.5-3-6-3-6l1.6 1.8 1.2 2 .6 1.8.5 1.7v1.6l-.3.6z"
    />
    <path
      fill="#231f20"
      d="M285.6 252.2s1.2.7 1.3 1.1c.1.4.2.6-.1.7-.3.1-.8-.4-1-.7a6.5 6.5 0 0 1-.2-1.1zm-4.8 12.8s.6-1 1.3-1.3c.7-.4 1.2-.4 1.4-.1.2.2-.4.7-1 .9l-1.7.6zm8.1 3.1s.8-.4 1.3-1c.5-.5.6-.9.4-1-.2-.3-.8 0-1.1.5-.3.4-.6 1.5-.6 1.5zm-.9-.7s.3-1 .6-1.4c.3-.3.6-.5 1-.3.2.2 0 .6-.2.9a7.8 7.8 0 0 1-1.4.8z"
    />
    <path
      fill="#8cbebf"
      stroke="#04534e"
      strokeWidth=".5"
      d="M301.5 261.2s-5-7.2-12.8-7.6a7.4 7.4 0 0 0-8 7c.2 1.6 2.6 5.2 10.9 5.8 8.3.6 9.6-3.9 10-4.1.3-.2-.1-1-.1-1z"
    />
    <path
      fill="#0c8489"
      d="M295.6 256.3s2 1.5 3 2.8c.8 1.2 1 2.2.5 2.3-.5.2-5-4-8.8-4.9-3.7-.9-6.9 0-7.6 1.7s-.4 4.5 1.2 5.6c1.8 1 9.7 2.3 9.7 2.3l3.7-.5 2.3-1.3.5-1.3.6-1.6.2-.7-1.9-2-3.4-2.5z"
    />
    <path
      fill="#04534e"
      d="M289.2 257.3c0 .4-.5.7-1 .7s-.9-.3-.9-.7c0-.5.4-.9 1-.9s1 .4 1 .9zm-4.6 1.6c0-.5.6-.4 1-.4.6 0 1 .3 1 .8s-.8 1.1-1.3.9c-.6-.3-.7-.8-.7-1.3zm5 2.7c0-.6.4-1 1-1 .7 0 1.2.4 1.2 1s-.8 1.2-1.5 1.2-.7-.6-.7-1.2z"
    />
    <path
      fill="#8cbebf"
      d="M285.8 262.7c0-.5.6-.6 1-.6.5 0 1 .5 1 1s-.5.9-1 .9c-.4 0-1-.8-1-1.3z"
    />
    <path
      fill="#04534e"
      d="M292.5 264.5c0-.4.2-.8.7-.8.4 0 1 .3 1 .7 0 .4-.5.9-1 .9a.8.8 0 0 1-.7-.8zm3-2.3c0-.5.3-.4.8-.4s1 .2 1 .8-.6.8-1.1.8c-.5 0-.7-.6-.7-1.2z"
    />
    <path
      fill="#8cbebf"
      d="M289 256.9c0 .4-.2.6-.7.6s-.9-.2-.9-.6c0-.5.2-.6.6-.6s1 .1 1 .6zm-2.5 1.9c0 .5-.7.7-1 .7-.5 0-.8-.2-.8-.7 0-.5.3-.6.8-.6s1 .1 1 .6zm1 3.8c0 .4 0 .7-.5.7s-1-.3-1-.7c0-.4 0-.7.5-.7s1.1.3 1.1.7zm4-1.3c0 .4-.7 1-1.2 1-.4 0-.6-.9-.6-1.3s.4-.7.8-.7 1 .6 1 1zm5.8 1.3c0 .4-.7.4-1 .4-.5 0-.8-.5-.8-1 0-.4.1-.8 1-.7.5 0 .8.8.8 1.3zm-3.4 1.7c0 .5-.3.8-.7.8a.8.8 0 0 1-.8-.8c0-.4.4-.6.8-.6s.7.2.7.6z"
    />
    <path
      fill="#231f20"
      d="M294.4 262s.8-.3 1.5-.3c.6 0 .6.3.6.4 0 .1-.5.3-.7.2a86.2 86.2 0 0 1-1.4-.4zm-3.3 2.8s.6-.4 1.1-.5c.5-.1.9 0 .8.4 0 .3-.2.3-.6.3l-1.3-.2zm-2.2-5s1.4.6 1.7 1.1c.3.6.4.7.1.9-.3.2-.6-.2-.8-.5l-1-1.5z"
    />
    <path
      fill="#231f20"
      d="m288.5 261.6 1.6-.3c.5 0 .6 0 .7.2 0 .2-.1.3-.5.3l-1.8-.2zm-3.4 0s1.2.2 1.5.5c.3.3.3.6.1.7 0 .2-.6.1-.8 0l-.8-1.2z"
    />
    <path
      fill="#231f20"
      d="M285 263.3s.4-.7.8-.8 1-.1 1 .1c.1.2-.4.5-.7.6l-1.2.1zm-1-5.1 1.2.3c.4.3.5.6.4.7 0 .1-.5.2-.8 0-.5-.4-.7-1-.7-1zm2.6-3s1.2.4 1.6 1c.4.5.3.8.1.9l-.9-.4c-.3-.3-.8-1.4-.8-1.4z"
    />
    <path
      fill="#04534e"
      d="M300 263.7s-2.3 2-7.7 1.9c-5.5-.2-10.4-2.5-11.6-5l.5 1.2 1.2 1.6 3.8 2 4.3.9 3.3.2 3.2-.6 2.5-1.1.4-.7.2-.4zm.8-2.5s-.9-1.2-2.2-2.3c-1.2-1.2-6.2-4.4-6.2-4.4l4 1.8 2.7 2.2 1.8 2-.1.7z"
    />
    <path
      fill="#231f20"
      d="M301 256.4s1.4.5 1.6.8l.5.6s-.3 1-.6.6l-.8-.9-.7-1.1zm4-2.2s1.3.5 1.8 1.1c.5.7.4 1.2.2 1.3-.2 0-1-.7-1.2-1a47.3 47.3 0 0 0-.7-1.4z"
    />
    <path
      fill="#231f20"
      d="M306.4 254s1.2.8 1.4 1.2c.1.4.5 1 .1 1-.3.2-.9-.4-1-.8l-.6-1.5zm6.8 1.5s1 .4 1 1.2v1.3l-.7-.7v-.7l-.3-1zm1.8.7s.8.7.9 1.2c0 .5.2.8-.3 1-.4 0-.6-.5-.6-1v-1.2zm-12.3 15s.6.2 1.2 0c.5-.2 1-.7.9-1-.1-.4-.4-.7-.8-.2-.4.4-.2.6-.5.8l-.7.3zm6.8 1.8s.9-.2 1.5-.9c.6-.6.9-1 .5-1.2-.4-.2-1 0-1 .5l-1 1.6zm5.5.1 1.3-.9c.5-.4.7-.7.4-1-.3-.5-.6-.2-.8 0l-.2.7-.6 1.2z"
    />
    <path
      fill="#231f20"
      d="M316.7 273.1s.8-.9 1-1.4c.1-.5.2-1-.1-1-.4 0-.8.5-.8.9v1.5z"
    />
    <path
      fill="#8cbebf"
      stroke="#04534e"
      strokeWidth=".5"
      d="M299.9 264.1c0-2.4 3.5-8 7.5-8 1.6 0 4.9 1 7.5 2.1 2.2 1 3 2 4.4 2.4 1.5.4 3.7.1 3.7.1l5-.5-4 5.7-1.4 1.2s-1.2 2.4-4.7 3.8c-3.6 1.4-9.5.4-12.2-.3-2.7-.7-6-3.2-5.8-6.5z"
    />
    <path
      fill="#04534e"
      d="M299.9 264.1h.2c0-.5.2-1.3.6-2.1a12.2 12.2 0 0 1 2.7-3.8c1.1-1 2.5-1.8 3.9-1.8.8 0 2 .2 3.4.6a29.4 29.4 0 0 1 4.1 1.4c1 .5 1.8 1 2.4 1.5.7.4 1.3.8 2 1a9 9 0 0 0 2 .2l1.8-.1 4.4-.5-3.6 5.2-1.4 1.2v.1a9 9 0 0 1-4.6 3.7c-1.3.4-2.8.6-4.5.6-2.8 0-5.9-.5-7.6-1a8.4 8.4 0 0 1-3.8-2.1 5.7 5.7 0 0 1-1.8-4h-.5c0 1.7.8 3.2 2 4.4a9 9 0 0 0 4 2.3c1.7.4 4.8 1 7.7 1a14 14 0 0 0 4.7-.7 9.4 9.4 0 0 0 4.9-4h-.3l.2.1 1.4-1.3 4.3-6.2-5.6.7h-.1a14.8 14.8 0 0 1-3.4-.1 5.5 5.5 0 0 1-1.9-1c-.6-.4-1.4-1-2.5-1.4a29 29 0 0 0-4.2-1.5c-1.3-.4-2.6-.6-3.4-.6h-.1c-1 0-2 .3-3 1a11.2 11.2 0 0 0-3.3 3.5 8.3 8.3 0 0 0-1.4 3.7h.3z"
    />
    <path
      fill="#0c8489"
      d="M324 264.9c-.4.3-1 .3-1.4.3-.5 0-11.6-6.7-15-6.4-3.5.3-6.8 1.7-6.9 5.3 0 3.5.8 3.5 1.5 4.5s7.5 2.5 7.5 2.5h4.1l3.3-.4 3-1.6 1.5-1.3 1.1-1.3 1.3-1.6z"
    />
    <path
      fill="#04534e"
      d="M306.5 263c0 .8-.3 1.3-1 1.3-.6 0-1.1-.3-1.1-1s.4-1 1-1c.7 0 1 .1 1 .8zm1.1-3c0-.6.6-.8 1.2-.8.7 0 1.2.2 1.2.8 0 .6-.5 1-1.2 1-.6 0-1.2-.4-1.2-1zm6.7 1.8c0-.5.4-.9 1-.9.5 0 .9.4.9 1s-.4.8-1 .8a1 1 0 0 1-1-.9zm1.3 4c0-.6.5-1 1-1 .6 0 1.2.2 1.2.8s-.2 1.3-.8 1.3c-.6 0-1.4-.4-1.4-1zm-3.2 2.7c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1 0 .5-.5.9-1 .9-.7 0-1.2-.4-1.2-1zm-6-1c0-.6.3-1 .9-1a1 1 0 1 1 0 1.9 1 1 0 0 1-1-1z"
    />
    <path
      fill="#8cbebf"
      d="M306.4 263c0 .5-.4 1-1 1a1 1 0 0 1-1-1c0-.6.4-.8 1-.8s1 .2 1 .7zm3.3-3.2c0 .5-.2.9-.8.9-.5 0-1.3-.4-1.3-.9s.5-1 1-1c.6 0 1 .5 1 1zm6.4 1.7c0 .5-.4.9-1 .9s-.9-.4-.9-.9c0-.4.4-.8 1-.8s.9.4.9.8z"
    />
    <path
      fill="#04534e"
      d="M312.7 264.2c0 .7-.3 1.2-1 1.2-.6 0-1.1-.3-1.1-1s.3-1 1-1 1 .2 1 .8z"
    />
    <path
      fill="#8cbebf"
      d="M308 267.2c0 .5-.4 1-1 1s-1-.5-1-1 .6-.8 1.2-.8.8.3.8.8zm4.5-3a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1zm5.2 1.3c0 .6-.3 1-1 1-.6 0-1.1-.4-1.1-1s.2-.8.8-.8c.6 0 1.3.2 1.3.8zm-3.3 2.7c0 .6-.4 1-1 1s-1.1-.4-1.1-1c0-.5.5-.8 1-.8.6 0 1 .3 1 .8z"
    />
    <path
      fill="#231f20"
      d="M314.8 265s1.6-.2 1.9 0c.3.4.3.8.1 1-.1 0-.8.1-1-.1 0-.3-1-1-1-1zm-1.7-5.4s1.3.3 1.8.9c.5.5.4 1 .4 1.1-.2.1-.6.2-1-.2l-1.2-1.8zm-3.7 2.6s1.5.8 1.8 1.3c.3.4.4.8.2 1-.1.2-.8 0-1-.3 0-.3-1-2-1-2z"
    />
    <path
      fill="#231f20"
      d="M308.7 263.3s1.7.2 2 .5c.5.4.8.4.8.6 0 .3-.3.4-.5.4a3.6 3.6 0 0 1-1.2-.5l-1-1zm-1.9-4.8s1.7.2 2 .5c.4.3.5 1 .1 1.2-.4.2-.8-.2-1-.5a8.2 8.2 0 0 0-1-1.2zm-3.6 2.5s1.5.8 2 1.4c.3.4.5.7 0 1-.4 0-.9-.7-.9-1a9 9 0 0 0-1.1-1.4z"
    />
    <path
      fill="#231f20"
      d="m302.8 263 1.5-.2c.5 0 1.2-.1 1.2.2 0 .4-.6.5-1 .4l-1.7-.4zm8.6 5.6s1.1-.7 1.7-.6c.5.1.7.1.7.4 0 .4-.7.3-.9.3l-1.5-.1zm-6-.9s.4-.6.9-.7c.4 0 .6 0 .7.2 0 .2-.4.6-.6.6h-1z"
    />
    <path
      fill="#04534e"
      d="M322.6 266.6s-1.6 2-4 3a14 14 0 0 1-7.2 1.1 15.2 15.2 0 0 1-11.2-5.2l.4 1.1 2 2.6 2.3 1 3.5 1 3.3.3h2.5l3-.5 1.9-.7 1.3-.8 1-.8 1.2-2zm-3-5.9s-1 .3-3-.9-4.3-2.8-8.8-2.8c-4.5 0-5.9 3-6.2 3.2l2-2.6 2-1.1 1.7-.3h1.5l2 .6 1.7.6 2.1.7 1.8 1 2.2 1.1 1 .5zm6 1.4h-3.4c-.8 0-.8.2-1 .4a4 4 0 0 1-.2.4l-.8-1.7 3.5-.5 2 .7-.2.6z"
    />
    <path
      fill="#0c8489"
      stroke="#04534e"
      strokeWidth=".5"
      d="M320.7 280.4c.2.5.6 1 1.1 1h1.6l3.6-.3 1.2-1.4.8-3.2 1-1.2 3.3-1.9 2.8-.8 1.9-.2 2.5-.8 1.9-1 .8-1.2.8-1.8-.8-2.5-2-2.7-3.4-1.3H335l-3 1.1-5.5 1.3s-3 1.3-4.3 3.7c-1.3 2.3-1.2 3-1.5 6-.2 3.2 0 7.2 0 7.2z"
    />
    <path
      fill="#8cbebf"
      d="M322.2 279.2c1 0 .2-1.7 1.4-3.8 1.2-2 2.6-4.6 3-4.6s.4.4.9.3c.4-.2 1.2-.8 1.2-1 0-.2 0-1.3 1-2 .8-.8 2.1-1.9 2.7-2 .6-.1 1-.3 1 0 .1.3-.3.7.1.8.4.2 1.4.1 1.6-.5l.2-1s.6-.5 1.8-.3c1.2.3 1.3.2 1.4.7.1.4-.5.5-.4.8v.6c.2.2.4 1 1.2 1 .8-.1 1.1-.6 1.1-.6l.3-.4s.2-.5-.1-.7c-.3-.2-.2-.4 0-.3.4.1 1.6 1.8 2 1.1.4-.7.5-1.7.2-2a91.2 91.2 0 0 1-1.9-2.7l-3-1-4 .3-4 2.2-3.6 2s-.2 2.9-.8 2.3c-.7-.5-1.6-2-1.9-1.5-.3.5-.9 2.7-1.3 3.8-.3 1-1.4 4.4-1.3 5.6.1 1.2.8 2.9 1.2 2.9z"
    />
    <path
      fill="#8cbebf"
      d="M325.8 274.4c-.3 0-.7.3-.8.5-.2.2-.3.5-.2 1 0 .3.7.7.7.7h.5l1-.3.3-.8c0-.5-.3-.6-.4-.6a29 29 0 0 1-1.1-.5zm6.2-5c-.6-.3-.8.1-1 .3v.5s.2.8.4 1c.3 0 1.1.3 1.3 0 .3-.2.5-.4.5-.9s-.7-.7-.7-.7l-.5-.3zm5 1.1c0-.2-.5-.3-.9-.2-.3 0-.7.4-.6 1 .2.7.8.7 1.2.6.5-.1.4-.8.4-.9l-.1-.5zm-14.4 1c0 .3.5 1 1.2.9a1.3 1.3 0 0 0 1.2-1c0-.4-.4.3-1 .5s-.7.2-1 0c-.2-.4-.4-.4-.4-.4z"
    />
    <path
      fill="#04534e"
      d="M327.3 275.5s0 .6-.4 1c-.5.3-.8.3-1 .3-.3 0-.6 0-.8-.3l-.3-.7s.5.8 1.3.6a2 2 0 0 0 1.2-.9zm13.3-8.3s0 .6-.5.9c-.5.3-.7.3-1 .3-.2 0-.6-.1-.7-.4-.6-1-.3-1.5-.3-1.5s.4 1.6 1.3 1.5a2 2 0 0 0 1.2-.8zm-11.9 2.9s-.4 1.2-1.2 1.2c-.9 0-.8-.2-.7-.4 0-.1.3.2.7 0 .4 0 1.2-.8 1.2-.8zm2.3-.3s0 1 .2 1.2c.3.4.7.5 1 .5s.6 0 .9-.4.1-.8.1-.8l-.2.5c-.3.3-.5.3-.8.3s-.7 0-.8-.3l-.4-1zm4.3-4.3s.2.7-.3 1.2c-.5.6-1.5.2-1.5.2s.8.3 1.2-.2c.4-.4.6-1.2.6-1.2z"
    />
    <path
      fill="#04534e"
      d="M321.7 281.1s5.3 0 5.7-.8c.4-.7-.4-3.6 2.7-5.8 3.2-2.2 5.7-2.2 7.4-2.3 1.7-.2 5.3-1.3 6-4.5.3-2-2.3-2.2-3.3-4-1-2-3.6-1.2-3.8-1.2-.1 0-3 0-4.3 1.3-.9.8-.8 1.8-1.1 2.2-.4.5-4 0-4.3.6-.4.6.1 1.7-.2 2-.2.3-1-.8-1-.8l.2-2.8 4.5-2.6 5-2.8 3.5.1 3.5 1.8 1.7 2s.3.8.5 2.3a5.3 5.3 0 0 1-.2 2c-.8 2.8-3.7 4.8-6.7 5a14 14 0 0 0-7 2.5c-1.4 1-2.1 5.3-2.1 5.9 0 .5-6.6.1-6.6.1v-.2z"
    />
    <path
      fill="#231f20"
      d="M324 270.8c-.3.3-.7.2-.8 0-.2-1 .3-2.2.3-2.2v1.6c.1.2.4.1.5.3v.3zm3.2-.6c-.2-.1-.1-1 0-1.3.2-.3 1.7-1.4 1.7-1.4l-.6 1.5c-.2.4-.7 1.3-1 1.2zm-1.2 5.3c-.3 0-.3-.4-.3-1s1-1.6 1-1.6l-.4 1.2.2 1c0 .3-.3.4-.5.4z"
    />
    <path
      fill="#231f20"
      d="M328.4 274s-.5.6-1 .9c-.5.3-1.1.7-1.4.6-.4 0 .1-.8.3-.9l2.1-.6zm4.5-6.4s-.6.5-.9 1.2c-.3.7-.4 1.3-.1 1.4.3.2.7-.8.8-1.1l.2-1.5z"
    />
    <path
      fill="#231f20"
      d="M334.6 269.9s-.5-.4-1.2-.6c-.8-.2-1 0-1.2.2 0 .2-.6.5-.3.7.2.2.6-.3.8-.3.2-.1.5-.3.9-.2l1 .2zm-1-4.5c.3.3.7-.2 1-.6.4-.4.7-1.2.7-1.2l-1 .7c-.4.3-.9 1-.7 1.1zm6.9-.1s-1 .4-1.2.8c-.3.4-.7.8-.4 1 .3.3.6-.2.8-.5l.8-1.3zm-2 4.6s-.3.6-.9 1c-.5.4-1.2.5-1.3.3-.1-.2.1-.6.3-.7l.8-.2a7.3 7.3 0 0 0 1.1-.4z"
    />
    <ellipse
      cx="328.8"
      cy="207.4"
      fill="url(#b)"
      rx="2.9"
      ry="4.3"
      transform="rotate(8.7)"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".3"
      d="m295.4 247-1.7 4.2 1.4-.2.7-3.8z"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
      d="M296.1 245.1c-.6 0-1.1.4-1.2 1 0 .7.4 1.3 1 1.4.6 0 1.1-.4 1.2-1 0-.7-.3-1.3-1-1.4z"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".3"
      d="m369.7 255.8-4.2 4 1.7.4 2.9-3.8z"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
      d="M371.6 254.1a1.5 1.5 0 0 0-2 .6c-.5.7-.3 1.5.4 2 .7.3 1.6 0 2-.7.4-.6.2-1.5-.4-1.9z"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".3"
      d="m262.8 233 2.2 4.9 1-1.4-2.6-3.7z"
    />
    <path
      fill="#fcca3e"
      stroke="#aa8c30"
      strokeWidth=".2"
      d="M261.9 230.9c-.6.4-.6 1.3-.1 1.9.4.6 1.3.7 1.8.2.6-.5.6-1.3.1-2a1.3 1.3 0 0 0-1.8-.1z"
    />
    <path
      fill="#aa8c30"
      d="M296.6 245.3s.3.1 0 0c-.5 0-1.4.4-1.4 1a1 1 0 0 0 1 1c.5 0-.2.2-.2.2l-.7-.2-.2-.4-.2-.5.1-.6.4-.5.5-.2h.3l.4.2z"
    />
    <path
      fill="#aa8c30"
      d="M295.6 248.1s-.3 0-.5.3a49.4 49.4 0 0 1-.7 1.1l1-2.3.4.2-.2.7zm76.4 6.4s.3.4-.1 0c-.4-.3-1.8-.2-2.1.5-.4.8 0 1.4.6 1.7.6.2-.2 0-.2 0l-.7-.5-.1-.6v-.7l.5-.6.7-.3h.7l.3.2.4.3z"
    />
    <path
      fill="#aa8c30"
      d="M369.4 257.3s-.3-.2-.8 0l-1.4.9 2.3-2.2.5.6-.6.7zm-107-26.7s.4-.1 0 .1c-.5.3-.8 1.4-.3 2 .6.5 1.3.4 1.7 0 .4-.5 0 .2 0 .2l-.7.4h-.6l-.6-.3-.4-.6v-.8l.2-.5.3-.3.3-.2z"
    />
    <path fill="#aa8c30" d="M264 233.8s-.3.1-.2.6l.3 1.5-1.2-2.7.7-.2.4.8z" />
    <ellipse
      cx="337.6"
      cy="-128.1"
      fill="url(#c)"
      rx="4.6"
      ry="3.1"
      transform="rotate(62.9)"
    />
    <path
      fill="#e92736"
      d="M262.6 241.2s1 .2 1.5 0 .6-.7.7-.8.3-.6.2-1a3.8 3.8 0 0 0-1-1.4l-1-.1c-.1-.1 0-.4-.2-.5-.3 0-1.7 1.6-1.5 1.8.3.3.4 0 .5.1v1.1c0 .3.8.8.8.8z"
    />
    <path
      fill="#e92736"
      d="M264 238.1c.1.3.7 1 .9 1 .2.2.8.2 1 0 .3 0 1-.7 1-1a1.5 1.5 0 0 0-.1-.7c-.2-.3-.1-1-.4-1.1-.2 0-.3-.1-.5-.3v-.7c-.3-.3-2.6 1.1-2.4 1.4.2.2.4 0 .5.1v1.3z"
    />
    <path
      fill="#e92736"
      d="M269.2 237.6c.2-.4.1-1.5-.1-1.8s-.6-.3-.7-.4c0-.1.3-.2.3-.5s-2.6.1-2.4.4c.2.3.6.1.6.3 0 .2-.4.4-.5.6l.3 1.1c0 .2 0 .4.2.5l.6.2h1.4c.1-.1.2-.1.3-.5zm22 12.8s.3.7.8 1h1l.6-.5c.2-.2.4-1.2.3-1.4 0-.2-.5-.6-.5-.8 0-.2.3-.2.2-.4-.1-.2-2-.2-2 .2 0 .3.3.2.2.3 0 .2-.5.5-.6.7-.2.1 0 1 0 1z"
    />
    <path
      fill="#e92736"
      d="M293.8 249.5c0 .2-.2 1 0 1.1 0 .2.3.7.5.8h1.2a1.2 1.2 0 0 0 .4-.6c.1-.3.6-.7.5-.9-.1-.2-.2-.2-.1-.4 0-.2.3-.2.3-.5s-2.1-1-2.2-.7c0 .3.3.2.2.4 0 .2-.7.6-.8.8z"
    />
    <path
      fill="#e92736"
      d="M297.3 252.5c.3-.2 1-.9 1-1.1 0-.4-.3-.6-.2-.7l.5-.1c.1-.2-1.6-1.6-1.7-1.3 0 .3.3.4.2.5l-.7.1c-.1.1-.5.6-.5.8 0 .2-.3.2-.2.5l.2.4c.1.2.8.9 1 .9h.4zm66 5.5s0 .8.4 1.2c.3.3.6.3.8.4h.7a3 3 0 0 0 1-1c0-.3-.3-.8-.2-1s.3 0 .3-.2c0-.3-1.6-1.1-1.7-.8-.1.2.2.3 0 .4l-.8.2c-.2 0-.5.8-.5.8z"
    />
    <path
      fill="#e92736"
      d="m366 258.5-.8.8c0 .2 0 .7.2.8 0 .2.7.6 1 .5.1 0 .3 0 .5-.2.2-.1.8-.2.8-.4l.1-.4c.1-.1.4 0 .6-.2.2-.2-1.2-1.7-1.4-1.5-.2.2 0 .3 0 .4-.2 0-.9 0-1 .2z"
    />
    <path
      fill="#e92736"
      d="M366.4 262.2h1.4l.4-.5c.1 0 .1.2.4.2.2 0 0-2-.3-1.8-.2.1-.1.5-.2.4-.2 0-.3-.3-.5-.3a2.4 2.4 0 0 0-1 .1s-.2 0-.3.2l-.2.4v1c.1.2 0 .2.3.3z"
    />
    <path
      fill="#f7e204"
      d="M264.2 239c.2.4-.1 1.2-.3 1.4-.1.2-1.3-.1-1.3-.3 0-.2-.1-.6 0-.8.2-.2.6-.7.9-.6.3 0 .6.3.7.4zm.3-1.3c-.2.3 0 .6.2.7.1.2 1 .4 1.2.3.2-.2.6-1.5.4-1.7-.2-.2-.6-.2-.7-.2-.2 0-1 .6-1.1.9zm2.7-1.3v.7c.2.1.7.5 1 .5.3 0 .5-1 .5-1.1 0-.2-.1-.3-.3-.4l-1.2.2zm26.1 13.7c0 .4-.7.7-.9.7-.2 0-.7-1-.6-1 .1-.2.3-.5.5-.5s.7 0 .9.2l.2.7zm1.1-.6c-.2.1-.3.4-.3.6 0 .2.3.8.5.9.2 0 1.2-.5 1.3-.7 0-.2-.2-.5-.4-.6l-1-.2zm2.4 1c-.2 0-.4.3-.4.5 0 0 0 .6.3.8.2.2.8-.2.9-.3v-.4c0-.2-.8-.6-.8-.6zm68.6 8.2c-.2.2-.9.2-1 0-.3 0-.3-1-.1-1 .1-.1.4-.3.6-.2.2 0 .6.3.6.6l-.1.6zm1 .1c-.3 0-.5.1-.6.3-.1.1-.2.7 0 .9.1.1 1.2.2 1.3 0v-.5l-.7-.7zm1 2h-.5c-.1 0-.4.4-.4.7 0 .2.7.3.8.3l.3-.2-.1-.8z"
    />
    <ellipse
      cx="438.6"
      cy="-93"
      fill="url(#d)"
      rx="2.2"
      ry="4.5"
      transform="rotate(47.9)"
    />
    <path
      fill="#a8ac71"
      d="M285.8 199.3s-3.8.3-6.5-.1-2-7.3-2.1-7.5c0-.2-1.6-1.8-1.4-3.3.3-1.5 5.2-5.5 5.8-5.8.5-.1 1.5.3 1.5.3s1.2-1.2 1.6-1.2c.4 0 .9.7.8 1-.2.3-1.9 1.3-2 2-.2.8 0 1.5-.5 2.3-.5.7-1.4 1.7-1.5 2.4-.1.6-.4 1.1 0 1.4.5.2 2.1 0 3.5-.6 1.4-.7 2-1.5 2.1-1.4.2 0-.8 1.7-2.3 2.4-1.5.6-2.5 1.3-3.3 1.2 0 0-.8 2 1.8 2.2 2.6 0 4-.6 4-.6l-1.5 5.3zm-15 16s2 .8 2 3-2.1 4.1-2 8c0 4 .6 4 5.8 8.3a5.7 5.7 0 0 1 1.6 2.5c.3 1.3 1.2 8.9 6.2 8.9s5.8-3.3 5.8-3.3l-2.2-3.1s-1.7.5-2.7.3a3.4 3.4 0 0 1-2.3-2.1c-.6-1.2-.7-4.1-1.6-5.4-2-3.2-5.8-3.7-5.9-7 0-3.4 2.3-3.7 1.7-7.7-.7-4-5.4-5.8-5.4-5.8l-1.9-.8-.7 4 1.6.2z"
    />
    <path
      fill="#f1a720"
      d="M284.7 187.6c1.7-.4.7-4.8.7-4.8l-1.2 1s.8 1 .8 2-.3 1.8-.3 1.8z"
    />
    <path
      fill="#a8ac71"
      d="m287.8 231.5-.9-.7c-.6-.4-3.2-2.6-2.8-8.9.5-7.2 11-11 11.6-13.8.8-3.2 3.1-4.5-5.2-11l-2 2.2 3.5 2.6s.7-.4.8.6c0 1-1 1.7-1.2 2.5-.2.7-5.4 4.3-5.8 4.6l-3 2.4s-1.3 1.3-2.5 4.1c-1.3 2.8-.7 6.4-.7 6.4s0 7.6 8.2 9z"
    />
    <path
      fill="#78732e"
      d="m282.7 235.5.6 2.7-1.7.6h-.7l-.5.2-1.3 1.2h-.3s-.2 0-.3-.8c0-.8-.2-1.5-.2-1.5l1.6.7h.6l.3-.1.7-1.5 1.2-1.5zm-4.8.5-.8-1-1-.9 1.2-.6h1.2l-.2 1.5-.4 1zm2.7-4.3s.8.3 1 1l.6 1.2-2-.2-1.4-.4 1-1.4.8-.2zm-.7 11.9s-.4-.3-.7-.9l-.4-1.6 1.3-.3 1.5.7h.4l-.3.8-1.5 1.3h-.3zm5-4.1s-1-.4-1.2-1c-.2-.5-.4-.4-.4-.4l-.3 1.5-.5 1.5.2.2 1.1-.3.9-.9.3-.6zm-4.7 4.8 1.4.7c.8.5 1.2.5 1.2.5l.6-.6.7-1.3v-.1l-3 .3-.9.5zm4.4-1.2 2.7-1.6.1-1.4-.5-.4h-1.5l-.5 1.8-.3 1.6zm-1.8 2.5s1.8.8 5-.4c1.4-.5 1.7-1.2 1.7-1.2l-1.3-.5-1.2 1-4.2 1zm-2.5-20.3-.4-1.4c-.2-.8-.1-1.1-.1-1.1l.9.5 1.3 1-1 .7-.7.3zm2.2 3.7-.9-1a12.4 12.4 0 0 1-.6-1.2l1 .2 1.1.6-.5 1.4h-.1z"
    />
    <path
      fill="#c6c7a6"
      d="M276.6 187c-.2.7-.4 1.9.5 2 .4.2 2.3 0 4.5-2.4 1-1.2 1-2.4 1-2.4l.5-1.3s-.9-.6-2.2.2c-1.3.8-4.3 4-4.3 4z"
    />
    <circle cx="282.5" cy="183.6" r=".4" fill="#1c242f" />
    <path
      fill="#a8ac71"
      d="M279.7 184a17.7 17.7 0 0 0-1.7 1.7s1.4-.4 2.6-1.5c.6-.6 2-.8 2.6-.7.4.1.2-.4 0-.5-.3-.3-1.4-.4-1.6-.3l-1.9 1.3z"
    />
    <path
      fill="#78732e"
      d="M284.1 224.5v-2.2l-.9.8-.8 1.1 1.3.5.4-.2zm-4.5-2.6v-2.3c0-1 .5-3.1.5-3.1l.6 1.4 1.5 2.4.5.4-1.3 1-1.4.4-.4-.2zm4.5-.6.3-1c.1-.6.5-1.4.5-1.4v.1a25 25 0 0 0-2 1.7l.8.7h.5m-3.7-6s.2-.6 1-1.5l1.3-1.8.6 2.4.4 2v.4l-.7.2c-.2 0-1.6 0-1.8-.3l-.8-1.3zm4.8 2.9.8-.9 1-1-3.2.6.5 1 .8.3zm-2-6.7s.3 0 1.2-1c.8-.8 1.3-.7 1.3-.7l.3 3.4-1.6-.5-1.2-1.2z"
    />
    <path
      fill="#78732e"
      d="m287.3 216.2 2-2-3.3-1 .6 2.3zm1.4-5.2.2-3.3s-.7.3-1.5 1l-1.2.9.4.6 1 .7h1zm2.8-3.2V205s-.5.8-1 1.2l-.9.8.9.6h1zm1.2 3.5 1.6-1.3a6.5 6.5 0 0 0 1.5-1.7l-4.2-.3.2 1.7 1 1.6zm-9.6-13.8-.2 1.8h3.5l-.9-1.2-1-.6-1-1zm6.6 16.2c.2 0 1.1-.8 1.6-1.2.4-.5 1.2-1 1.2-1l-3.3-.3v2.2l.5.3zm6.3-5.9s.4-1.3.3-2.6c0-1.2-.2-1.8-.2-1.8l-2.5 1.7.4 1.2 1 1 1 .5z"
    />
    <path
      fill="#78732e"
      d="M291.8 204.8s.7-1 .8-1.4v-.4h2l1.1.2h.2l-.9 1.1-1.2.7-1.5.2-.5-.4zm4-2-1.3-2c-.4-.7-.8-1-.8-1l-1 2.7v.3h3z"
    />
    <path
      fill="#fff"
      d="m271.6 222.2-.3.8s1.3-.7 2.3-.7c1 0 2.1 1.3 2.1 1.3l.2-.9s-1.3-1.3-2.2-1.3c-.8-.1-2 .8-2 .8zm.7-5.8.3.4c0 .1.1-1 1.4-1.5 1.4-.6 2-.1 2-.1s-.2-.8-.8-1c-.6-.1-1.1 0-1.8.5a3.7 3.7 0 0 0-1.1 1.7zm4.4 4.4s-.6-1.4-1.6-1.6c-1.1-.3-2.5.5-2.5.5l-.2.7s1.5-.8 2.5-.4c1.1.5 1.5 1.7 1.5 1.7l.3-1zm-5-5.1.4.5s-.2-1.4.5-2.1a4.9 4.9 0 0 1 1.1-1l-.6-.3s-.9.5-1.2 1.1a3.2 3.2 0 0 0-.2 1.8zm-.5-2.3c.3-.8 1.2-1 1.2-1l-.3-.3h-.5s-.5.3-.9 1c-.3.9-.3 2-.3 2l.6.3s-.1-1.4.2-2zm7.8-19.2c.9-.4 1.5-.3 1.5-.3s-1.3 1.3-.7 2.9c-.7 1.3-.9 2.3-.9 2.3h.7l.4-1.8c.8 1.3 2 2 2 2h1s0-1.3.4-2.4h.1a5 5 0 0 0 2 1.5v-.4s-1.1-.6-1.7-1.5l-.1-.1a4.2 4.2 0 0 1 1.8-1.7l.7.6.2-.2-.5-.7h-.6l-1.8 1.7a9.2 9.2 0 0 1-.8-1.5l-.4-.2s-1.1.1-2 1.7c-.2-1.2 1.1-2.4 1.1-2.4v-.5l-2.4.6c-1 .3-1.7 1.2-1.7 1.2v.8s1-1.1 1.7-1.6zm1.5 2.2c.6-1 2-1.5 2-1.5s0 .7.7 1.7c-.5.9-.8 2.2-.8 2.2s-1-.6-1.9-2a1.6 1.6 0 0 1-.2-.3l.2-.1zm-7.6 21.1v.8s.8-.9 2-1c1.2 0 2.3 1 2.3 1s0-1-.2-1.2c-.1 0-1.1-.6-2-.6s-2.1 1-2.1 1zm21.4-11.2-.5-1 .6-.3a12.5 12.5 0 0 0 1.7-1.6l-.4-.6h-1.6l-1.4-.1.5-1.7.6-1.4-.6-.5s.2.5-.8.6c-1 .1-2.8-.8-2.8-.8v.4l2.5.7c.6 0 1-.1 1.2-.3l-.5 1.3-.3 1 .2.2v.8l1.4.1 1.6.1s-.8 1-1.7 1.5a2.3 2.3 0 0 1-.3 0l-1-1.5-.1.5.7 1.2a5 5 0 0 1-1.5-.1l-.4.4v2.5l-1.8-.6-.3.3v-.1l-.4.4s-.4 1.4-.3 3.1v.1a4.9 4.9 0 0 1-2.4-1.3l-.4.3s-.3 1.4 0 3.2c-1.3-.3-2.5-1.5-2.5-1.5l-.5.5a60 60 0 0 0 .7 4.7 4.9 4.9 0 0 1-.7 0c-1.4 0-2.3-1.3-2.3-1.3l-.4 1s.6 2.7 2 4l.4.2c-1.3 1-2.8 1.2-2.8 1.2v.9a44.7 44.7 0 0 0 2.2 1.5 4.8 4.8 0 0 1-1.6 1l.2.5 1.8-1.3 1.8.5v-.5l-1.5-.3.1-.1c.5-.4 1.4-1.8 1.4-1.8v-1s-.5 0-1.1-.6c1.8-1.2 1.9-1.8 1.9-1.8l.4-.6s-.7-.3-1.1-1.2l2.9-.7.2-.2s-.7-1.2-1-2.6l3 .6.4-.4-.5-2.4c1.8 0 3.2.2 3.2.2l.3-.3s-1-1.9-1-3a4.8 4.8 0 0 0 1 0h3l.3-.5s-1.4-1-1.7-1.5zm-10.5 15.5s-.5 1-1.4 2l-.2.2a4.6 4.6 0 0 1-.5-.2c-1.1-.6-1.4-1.3-1.4-1.3l2.5-1.6 1 .9zm.9-3.2-2 2a4.1 4.1 0 0 1-.4-.5c-.8-1.2-2-2.1-1.8-3.8 0 0 .7 1.2 2.2 1a14 14 0 0 0 1-.1c.4 1 1 1.4 1 1.4zm2-2.5-2.7.7a5.3 5.3 0 0 1-.1-.5c-.5-1.6-.5-4-.5-4s1 .8 2.6 1.2l.7 2.6zm-.5-3c-.2-1.4.1-2.9.1-2.9s.8.8 2.3 1c.1 1.5.3 2.1.3 2.1l-2.7-.1zm5.8-2.2s-1 .4-2.8.1a15.3 15.3 0 0 1 0-.5 23 23 0 0 1 0-3l2.3.7a10 10 0 0 0 .5 2.7zm0-3.1h-.2V205s1 .3 1.7.2c.2.4 0 .5.5 1.2.4.7 1.1 1.3 1.1 1.3s-2.3.2-3.2 0zm-7.6 18.6-.1-.5s-1 .7-1.2 1.4a1.6 1.6 0 0 1-.3-.1l-2-.8.2.4 1.8.8h.2l-.5 1.4.2.3.5-1.7 1.2.1-.2.8-.4 1.5.5.3h2l-.3-.4-.7-.1h-1.1l.3-1.2.3-.8-.3-.7-1 .2a3 3 0 0 1 .9-.9zm-11.3-1.3c1.3 0 2.3.9 2.3.9v-.6s-1-1.4-2.1-1.4c-1.2 0-2.5 1.2-2.5 1.2v1.2s1-1.3 2.3-1.3zm13.3 19.4c-1.3.6-2.7.6-2.7.6l.8-1.5c2.5-.8 3-2.4 3-2.4l-.2-.7s-.6 1.6-2.6 2.4c.4-1.2.7-3.2.7-3.2l-.7-.2s-1 1.3-2 1.6a7.7 7.7 0 0 0 .8-2.7l-.3-.5s-.7.6-1.7.8a1.8 1.8 0 0 1-.6 0c.6-.8 1.7-3.2 1.7-3.2l-.2-.5s-.8 2.1-1.7 3.2a10.6 10.6 0 0 1-.3.4c-1-.3-2.2-1-2.2-1l.1.3s.8.6 1.8 1a27.3 27.3 0 0 1-1.3 1.2v1l3 .4c-1 1.6-2 2.1-2 2.1l.5.7s1.3 0 3.7-.6c-.6 1.2-1.2 1.8-1.2 1.8s2.2.2 3.7-.6 2-1.6 2-1.6l-.4-.4s-.4 1-1.7 1.6zm-6.9-4 1.2-1.5c1.6.3 2-.1 2-.1s.3.8-.6 2.3c-1.1 0-2.6-.8-2.6-.8zm1.4 3 1.3-1.6.3-.3c1.5 0 2.3-1.3 2.3-1.3s.2 1.2-.5 2.7c-1.9.7-3.4.5-3.4.5zm-1.9-9.8c1.5 0 3.3.7 3.3.7l-.2-.7-2.9-.6a3.6 3.6 0 0 1 1.6-1.6l-.5-.3s-.6.1-1.4 1.5a4.1 4.1 0 0 0-.2.4 4 4 0 0 0-.3 0 5 5 0 0 0-2.4.7l.2.4s1.1-.5 2.3-.5a25.7 25.7 0 0 0-.7 2.4l.3.6 1-3zm-3-6.2-.3-.7s-1.5-.6-2.7 0c-1.1.5-2 1.9-2 1.9l.5.9s.8-1.5 1.9-1.9c1-.3 2.6-.2 2.6-.2zm3 2.4-1-.6s-1.7.5-2.2 1.1c-.6.6-1.1 2.1-1 2.5.2.5.7.7.7.7s.3-1.5 1.1-2.3c.8-.8 2.4-1.4 2.4-1.4zm-3.9-.5a4.5 4.5 0 0 1 2-1l-.7-.5s-1.5.2-2.2.9c-.8.7-1.8 2.1-1.8 2.1l.9.9s1.2-1.8 1.8-2.4zm5.2-44.7v-.1c.8-1 1.6-1 1.9-1h.6a9.3 9.3 0 0 0-.8 2.5c-.2 1-.7 1.2-1 1.9-.4.7-1.1 1.8-1.2 2.8 0 1 .3 1.6.5 1.7.3.1.8-.4.7-.7 0-.3-.3 0-.4 0-.2 0-.2-.3-.3-.9-.1-.6.7-2.2 1-2.8.3-.5 1-1.1 1-2l.7-2.5c0-.1-.4-.2-1.3-.3-.6 0-1.5.5-1.9 1.2-.4.6-1.7 1.1-1.7 1.1s1.4 0 2.2-1z"
    />
    <path
      fill="#78732e"
      d="M285.2 194.5h-2.5l.7 2zm-3-.1-.5-.4a1.5 1.5 0 0 0-.3-.3l-.9.5-.5 1.9.3.3 2-2zm-.3 5-1.8-2.7-1 2.2.5.2 1.2.2h1.1zm7.4 44.7a9 9 0 0 1-4.8 1.5 6.7 6.7 0 0 1-3.4-1 4 4 0 0 1-1.5-1.7c-.6-1.1-.8-2.5-1-4-.3-1.3-.5-2.6-1.1-3.6-.8-1.3-2.4-2.1-3.8-3.3a7.3 7.3 0 0 1-2.8-5.2 8.1 8.1 0 0 1 0-.8c0-1.7.5-3.2 1-4.5s1.2-2.5 1.2-3.5v-.5c-.3-.7-1-1.4-1.5-1.9s-1.2-.8-1.2-.8l-1-.2-.1.3 1 .2v-.1.1l1.3 1c.5.4 1 1 1.1 1.5a1.9 1.9 0 0 1 0 .4c0 1-.5 2-1 3.3a11.7 11.7 0 0 0-1.2 4.7v.8a7.7 7.7 0 0 0 3 5.5c1.5 1.1 3 2 3.7 3.2.8 1.2 1 3 1.3 5 .2.8.4 1.7.8 2.5s.9 1.5 1.6 2a7 7 0 0 0 3.7 1c2.7 0 4.9-1.6 4.9-1.6l-.2-.3z"
    />
    <path
      fill="#78732e"
      d="M287.2 239.2a2.6 2.6 0 0 1-1.3.4c-.5 0-1.1-.2-1.7-.8a4 4 0 0 1-1.2-2.3c-.2-.9-.3-2-1-3.3-.5-1.5-2-2.6-3.5-3.7-1.3-1.1-2.6-2.2-2.9-3.4a3.3 3.3 0 0 1 0-.7c0-1 .4-2 .8-3.1a10.8 10.8 0 0 0 .9-4.8c-.2-2-1.7-3.5-3.2-4.5a14.1 14.1 0 0 0-2.8-1.4l-.1.3h.2c.5.3 1.8.9 3 1.8 1.3 1 2.4 2.2 2.6 3.8v.8c0 1.5-.4 2.7-.9 3.9s-.9 2.2-.9 3.2l.1.8c.3 1.3 1.6 2.4 3 3.6 1.5 1 3 2.2 3.5 3.5.6 1.3.7 2.4.9 3.2.2 1 .4 1.7 1.2 2.5.7.7 1.4.9 2 .9a2.8 2.8 0 0 0 1.4-.4l-.1-.3z"
    />
    <path
      fill="#a8ac71"
      d="M296.4 231.6s1.7.4 1.6 1.8a13.3 13.3 0 0 1-.8 3.4l-2.4-2.2 1.3-1.2.5-.7-.2-1.1z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M266.4 214.5s-1.7.6-2.1-.1c-.4-.8-.2-1.4-.2-1.5 0-.2-1-.3-1-1.3.1-1 1.4-.9 1.6-.9.3 0 .4-1.5 1.3-1.4.8 0 1.2 1 1.2 1l-.8 4.2z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M268.3 215s-1.5.8-2 0c-.4-.7 0-1.6-.1-1.8-.2-.1-1-.4-.9-1.3.2-.9 1.1-.6 1.4-.8.3-.1.6-1.4 1.5-1.2.9.3 1 1 1 1l-1 4.1z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M270.8 215.3s-.5 1-1.5.8c-1-.2-.7-1.7-.9-2-.1-.3-.9-.5-.8-1.4.2-1 1.1-.9 1.5-1 .3-.1.7-1.6 1.4-1.4.7.3 1.3 1.1 1.2 1.5 0 0-1.5.5-1.7 1.5-.2 1 .8 2 .8 2z"
    />
    <path
      fill="#af7029"
      d="m293.7 231.2-2.2-2.6c-.9-1.3-2.3-2.7-2.3-2.7l-2.2-1.1-1.4-2.4-.2-2.8.6-1.6.8-1.2s-4.6 1.7-2.2 10.5c1 3.8 3.5 4.3 3.5 4.3l4.3-.3h1.3z"
    />
    <path
      fill="#816c2a"
      d="M291.6 201.7c.4 0 .6.2.8.4l.2.6v.4c-1.6 3.4-4.8 5-7.8 7a13.8 13.8 0 0 0-3.8 4 12 12 0 0 0-1.6 6.8c.1 5 2 7.8 4.2 9.3a9.7 9.7 0 0 0 5.2 1.5h.4l1.4-.1a35.8 35.8 0 0 1 3-.2l1.8.1.9.4a.8.8 0 0 1 .2.5c0 .4-.3.8-.6 1.2l-1 .7.2.3a4 4 0 0 0 1-.8c.4-.4.7-.9.7-1.4 0-.2 0-.5-.3-.7-.2-.3-.6-.4-1.1-.5l-1.8-.1c-2 0-4.5.3-4.5.3v.2-.2a6.8 6.8 0 0 1-.3 0 9.4 9.4 0 0 1-5-1.5c-2.1-1.4-4-4-4-9v-.4c0-2.7.5-4.7 1.5-6.3 1.4-2.4 3.7-3.8 6-5.3a14 14 0 0 0 5.5-5.7v-.5c0-.2 0-.6-.2-.8-.2-.3-.5-.5-1-.5v.3z"
    />
    <path
      fill="#fff"
      d="M297.8 232.7s-1 2-1.4 2c-.2 0 1 .3 1.3.8l-.3.5s-1.2-.9-2-1v-.6l1.1-.7a4 4 0 0 0 .9-1.7l.4.7z"
    />
    <path
      fill="#fcca3d"
      d="m302 234-2.7.8-1.3-1s0-1-.5-1.5l-1.6-1c-.6-.2-2.5-.2-2.5-.2l-5-5.3 2 .2 2.8-.4 2.7-.2 1.4.2 1.6.4.8.7.8.8.8 1.3.6 1.6.2 1.7v1.9z"
    />
    <path
      fill="#af7029"
      d="M302.2 233.8s-1 .3-2.2.3c-1.3 0-2-.2-2-.2l-.2.9c-.2.9-.5 1.3-.5 1.3v3.2l2.6.5 1.4-.5.7-3.5.2-2z"
    />
    <path
      fill="#fcca3d"
      d="M301.5 232.5v1.2l.6.2v-1.2zm-2.5-30-.3-2.1-.8-1.5-1.1-1.5-1.2-1.3-.6-.5-.3-.5-2.9.2-1.4 1.7s3.8 2.8 5.3 5.8a7 7 0 0 1 2.8 1.7l.1-.2.4-1.8z"
    />
    <path
      fill="#af7029"
      d="M296.3 205c0 2.2-.5 3.2-.8 3.7l1.8-2 1.2-2.2a7 7 0 0 0-2.8-1.7c.4.7.6 1.4.6 2.1z"
    />
    <path
      fill="#816c2a"
      d="m300.3 237.9-1.4-1.6c-.6-.6-1.3-1-1.3-1l-.2.4h.1l1.2.8a17.6 17.6 0 0 1 1.3 1.6l.3-.2z"
    />
    <path
      fill="#6f5b24"
      d="M302 235.5s-.3 1-1.3 1.8c-1 1-2.2 1.5-2.2 1.5l2.8 1 1.9-1.7-1.2-2.6z"
    />
    <path fill="#404118" d="m302.4 237.8-.2.3-.5.5-.4.5.6-3 .6 1v.4z" />
    <path
      fill="none"
      stroke="#78732e"
      strokeWidth=".2"
      d="M285.8 199.3s-3.8.3-6.5-.1-2-7.3-2.1-7.5c0-.2-1.6-1.8-1.4-3.3.3-1.5 5.2-5.5 5.8-5.8.5-.1 1.5.3 1.5.3s1.2-1.2 1.6-1.2c.4 0 .9.7.8 1-.2.3-1.9 1.3-2 2-.2.8 0 1.5-.5 2.3-.5.7-1.4 1.7-1.5 2.4-.1.6-.4 1.1 0 1.4.5.2 2.1 0 3.5-.6 1.4-.7 2-1.5 2.1-1.4.2 0-.8 1.7-2.3 2.4-1.5.6-2.5 1.3-3.3 1.2 0 0-.8 2 1.8 2.2 2.6 0 4-.6 4-.6l-1.5 5.3z"
    />
    <path
      fill="#ab6d29"
      stroke="#4d2a15"
      strokeWidth=".4"
      d="M318.7 170.6s-7-1.3-7 4.5c.1 1.9.5 2.5 2 3 1.5.3 4.4.5 7 2.7 2.5 2.3 2.7 4 2.7 5.3 0 1.4-.7 2.6-.7 2.6l1.6 7.7 1.6 5.7 4.8-2.7 2.8-8.5-3.6-15.2-11.2-5.1z"
    />
    <path
      fill="#4d2a15"
      d="M325.6 200s2.5-1 3-3c.3-.5-2.4-2.9-2.4-2.9-.1 0 1.3.7 2 1.3.6.6 1.1.9 1.3.8.2-.1 1.3-2.7.9-3.3-.4-.6-1.1-2-2.1-2.6-1-.7-2.4-.6-2.4-.6s1.9-.6 2.8 0c1 .5 1 1 1.1.9.1-.3-.2-2.9-.6-3.7-.4-1-.8-1.3-2-1.6-1.1-.2-2.3-.1-2.3-.1s1.6-.9 2.8-.6c1.3.3 1.3 1 1.4.8 0-.1-.6-2.4-1-3a6.7 6.7 0 0 0-2.1-1.8l-1.8-.2h-.6s1-.6 2.1-.5c1.2.1 1.3.5 1.4.4.2 0-.1-.2-.8-.7s-4.2-2-4.2-2h-3.3s0-.8 1-1c.9-.1 1.1.1 1-.1 0-.3-2.6-.8-2.6-.8H316l-3 .3s.2-.5.7-.9c.3-.3.9-.5 1.3-.6 1-.3-.6-1.1-.6-1.1l.9-1.3 3.9.3 8.2 4.8 3.9 3.3 2.4 6.2-.7 10.8-5.5 4.5-2.4.3.5-2.3z"
    />
    <path
      fill="#d2a567"
      d="M318.4 173.3s-.2-.7-.2-1.7.2-.9.2-.9-2.7-.3-4.6 1.2c-1.9 1.5-.8 4.1-.8 4.1s.8-.8 1.9-1.2c1-.4 3-.3 3-.3.2-.2-.4-1-1.1-1.1-.8-.2-2.1-.2-2.1-.2s.8-.5 2.2-.4c1.4.1 1.6.5 1.6.5z"
    />
    <path
      fill="#8f4620"
      d="m326.7 200.9-1.8.6 1 7.5 7.2 12.1 3.7-.6 1.3-2.3 1 .5c.4.4 1.8 2.8 3 3.3 1.1.4 1.7.2 2.7 1 1 1 4.9 6.6 5 6.8.3.2-.1-2.4-.1-2.4l-1.2-3.4-1.4-2.4-.3-.6h2l1.2.8 2 1.5.9 1.2.5 1.2.2 1 .5 1.6 1 2.3 1.3 2.1.4-.9-.6-2.5-2-6-1-2 1.9 1.2c.4.1 1.8 2.2 1.8 2.2l.9 2.2.6 2 .4 1.7.7 1.9 1-.7-.1-1.3-1-4.2-.4-4.5s.6 0 1.2.7a9 9 0 0 1 1.2 2.3l.5 4.1.7 3.8 1.2 3.8 1.2 2.4.9 1.3v-2l-1.6-16 .2-.6s.2-.1.8.7c.5.7 1 1.9 1 1.9l.5 2.5.2 1.7.3 3.3.5 3.5 1.6 3.8.9 2 .5-2.4-.8-17.1.4-.5s.9.7 1.2 1.3l.8 1 .6 3.8.4 10.7.4 2.8 3.2-28.2 2-.4.2-.6-1.5-1-3.2-5-2.1-4.9-3.8-7-6.6-8-5.2-4.3a20 20 0 0 0-1.9-1.3l.4-1 1-1.7-.1-.1h-.9l-2.2.4-2.2-.7-4.4-3-4.6-2.3-2.8-1-6.6-1.6-6.6-1h-3l-2.6.5s-1.4.6-1.8 1.5c-.5.8-.5 1.4-.4 2.6.2 1.3 1 1.9 2.8 2.7 1.8.7 6.2 3.6 6.2 3.6l2 2.1.8 1 .2.8 1.4 11.1-2.8 6-2 1z"
    />
    <path
      fill="#ab6d29"
      d="M333.8 218.2s1.2 2 2.9.5c1.7-1.6-.8-6-.7-6.3 0-.3.7-.3.7-.3l1.3 2.2s.7 1.3.4 3.2c-.2 2-2.1 3.7-2.1 3.7l-2.2-.5-.3-2.5z"
    />
    <path
      fill="#4d2a15"
      d="m375.3 244.2-1.6-4.5-.4-3.5c0-.6-.3-7.9-.5-9.3 0-1.4 0-3-.2-3.1l-1.6-2.2-.7-.7.5-.3s.6.6.7.3c.2-.4 0-2-.6-4.5-.7-2.5-3.9-8.3-3.9-8.3l.4.2.9 1 1.8 1.5 4.1 1.5 2.2.3 1.4 2.9s1 4.9 1 7.4c0 2.4-.2 4.5-1.2 7-1 2.4-1.2 10.3-1.3 11.5-.1 1.3-.6 2.5-.6 2.5l-.5.3z"
    />
    <path
      fill="#8f4620"
      d="M375.3 231.2s.8-1 1.2-2.4c.4-1.4.5-12.4-.8-13.7a10 10 0 0 0-4-2.3c-.2 0 1 3.5 1 3.5l.8 1.4.6 1.8c.1 1 .9 3.1 1 6l.2 5.7z"
    />
    <path
      fill="#4d2a15"
      d="M369.3 238s.5-5.1.3-9c-.3-3.7-.6-4.2-1-4.9a32.3 32.3 0 0 1-2.5-6.3c-.9-3.2-1.5-5.6-2-6.2-.6-.6-1.7-2-2-1.6-.3.3-.3 1.1-.3 1.1l-1.5-.4-.4-1 .5-1.6v-.7l-.3-1.1 2 1.6 4.2 2.8 2 8.6 2 5.3.2 9-.2 8-1-3.5zm2.4-24.7s1 1 1.7 1.4c.7.4 1.8 1.1 1.6 1.2a8 8 0 0 1-2-.8l-1.2-.8v-1z"
    />
    <path
      fill="#4d2a15"
      d="M363.7 236s.8-1.8.7-4.1a49 49 0 0 0-1.6-8.6c-.4-.7-2-1.7-3.5-4.8s-1.3-3.8-2.3-5c-1-1-2-2.4-2-2.4l.3-3.3 3.6 1.8 1.6.8 1.8 8.7 1.6 2.5.7 3.5.9 8 .4 6.6-.2.5-2-4.2zm-4.2-3.7s.1-2.5-.5-4.8c-.7-2.3-1.1-4-1.9-4.8-.7-.7-2.5-2.6-4.1-5-1.6-2.5-3.9-5-3.9-5v-3.3l2 1.5a57.1 57.1 0 0 1 2.4 1.2l1 3.7 1.2 2.7 1.8 2.4 1.2 1.1.7 4 .4 2.3 1 3.2-.4 1.7-.9-.9zm-3 0-1-.9s.6-.6.3-2c-.3-1.2-.6-2.4-1.2-3.7-.6-1.2-.7-2-1-2.3a121 121 0 0 0-4.5-4c-1-1-2.7-2.6-3.7-3.3-1-.6-1.8-.8-1.8-.8l-.5-4s1.3 1.8 2.1 2a54.7 54.7 0 0 0 2.1.8l2.8 5 1 1.3 2.6 2 1 2.2.9 2.5 1 3.4.1 2-.2-.1zm-5.5-1s-1.7-2-2-3.2c-.2-1.2.2-1.2-.3-2.6-.5-1.4-2.3-3.5-3.7-4.6-1.4-1.2-3.4-2.8-3.3-3.8.1-.9.4-1 .4-1l.8.8 4.5 4.7 1.4 2.5 1 3.1.7 1.5.7 1.8-.2.7zm16-23.3s3.1 3.8 4 .3c.3-1.6-1.2-4.6-1.2-4.6s-2.8-5-3.8-6.2l-5.7-7.3-3.5-1.6 1.2 2s2.6 2.6 5.9 8.4c3.3 5.7 2.7 8.9 2.7 8.9h.5zm-17.8-23s6.1 5.2 10 10.8c4 5.7 5.5 9.4 4.7 10.2-1 .7-3.4-.4-4.4-2-1-1.6-1.8-4.4-5.5-8.6-3.7-4.2-5.5-4.8-5.5-4.8l-2.7-4.3 3.4-1.3zm-3.2 12.5s3.6 3 6 5.4a37.4 37.4 0 0 1 3.4 4.2l1.4 1.4s-.9-1.5-.4-2c.5-.6 1.1-.3 1.1-.3l-11.5-12v3.3zm-.7.3s1.2 2.3 3 4.1a464.6 464.6 0 0 0 4.1 4l.8 2.9s-5.2-4-5.2-3 1.2 3 1.2 3l-1.6-1-2.2-3.1-1.3-2.8-1.5-3.8 2.7-.3z"
    />
    <path
      fill="#4d2a15"
      d="M329.5 210.2s2.7 2.4 4.2 0c1.5-2.3.3-5 .3-5s3.9 5.6 5 .3c.2-1-2.4-4.6-2.4-4.6l1-.9 1.9 3.3s1.8-.8 1.8-3-1.9-5.3-1.9-5.3l1.8 2s3.6 0 3.7-2c0-2.2-3-4.5-3-4.5s2.4.1 2.4-1.3c0-1.4-3.4-2.4-3.4-3.3 0-.9 1-2.4 2.5-1.5 1.5.8 3.5 1.4 4.4-.2.8-1.6-.1-2-.1-2l-2.1-.4-3.4-1.8-2.7-1-2.8-.4 1 2 .8 5.8v2.6l.5 5.8-1.4 4.7-.7.9-.5.6-1.2 2.6-1.6 1.8-2.2 2.7-2 2.1z"
    />
    <path
      fill="#ab6d29"
      d="M348.8 220.9s-.7-1.7-2.2-2.9a7.8 7.8 0 0 0-3.8-1.2l4 4.2 2-.1zm5.6 1s-1.3-2.6-2.8-4.2c-1.5-1.6-2.5-3.6-3-3.6h-.6l.4 3.3 2.7 2.7s2.6 2 3.3 1.8zm4.6-.2s-.6-3-2.2-6c-1.5-2.8-3.1-4-3.1-4l.4 3 1.2 3 2 3 1.7 1zm3.8-1.7s1-6.2 0-8c-.9-1.6-2.7-2-2.7-2l-.6 1 .6 4.3 1.5 3.4 1.2 1.3zm3.7-10.3s.9.4 2 2.5a40 40 0 0 1 2.6 8.6c0 .3-.5.2-.7.2-.2-.1-3.9-6-3.9-6l-.6-5.4h.6z"
    />
    <path
      fill="#d2a567"
      d="M340.4 216.8s2-.4 2-1c0-.8-2.4-2.2-2.2-3.3 0-.5 2 .1 2.1-.3.1-.4-2-3.6-1.3-4.4.6-.8 2.4 3.5 2.4 3.5s1 2 .7 3.2c-1.2 3.6-3.7 2.3-3.7 2.3zm4.6-4.4c.1-.3 3.1.4 3.1.2.2-.7-2.7-3-2.7-3s-.6-1.2-.4-1.4c.2-.2 2 .2 2 0 .2-.3-2-3.2-2-3.7s.6 0 .6 0 1.7 1.7 2.6 3.2c1 1.4 1.8 2.6 1.5 4.9-.4 2.5-5 .6-4.7-.2zm13.6-4.6s-.5-2-.2-2.3l1.1-.5s-1.6-1-2.4-1c-.7 0-.8-.2-1 0-.2.4 1.3 2.4 1.3 2.4l1.2 1.4z"
    />
    <path
      fill="#d2a567"
      d="M349.4 209.4s4.7 1.2 4.9.8c.2-.3-3.7-4-3.7-4s-.3-.6-.2-.8c0-.2 1.7-.3 2.2.1s0 1.2.1 1.5c.2.3 1.7 2.5 2 2.1.2-.3-.4-3-.3-3.3.2-.2 1.8 1.6 2.3 1.9.4.3 3 2.3 3.3 1.4.3-1 .4-1.1.3-1.7 0-.6.9 2.6-.3 3-1.2.4-2.6-.4-2.6-.4l-1.1-.8-.6-.7s.7 2.5-.2 2.7c-.8.3-1.7.2-1.7.2l-2-.2-2.4-1.8zm10.7-3.2s5 3 5.4 2.5c.5-.5-1.2-7.5-1-8.2.3-.6 4 7.9 2.2 9-1.4 1-2 .3-2 .3l-2.5-1.3-2-2.3zm13.8 12.6 1 .5.7.2-1.4.2-.3-1zm-4.8-16.4.7.3.7.3s-.4.3-.6.2h-.4l-.4-.8zm-1.4-2.5s.5.3 1.1-.2c.7-.4.7-.8.6-1 0-.2-1-.2-1.4-.5-.3-.2-.3-.6-.3-.6h-1.1l-.4.1 1.5 2.2zm4.3 14.4s1.5 1 2 1c.4 0 1.1.5 1 .6 0 .1-1.2.2-1.8-.1-.6-.3-.7-.1-.7-.1l-.5-1.4zm-8.1-22.5h.6c.3 0 .5-.2.6 0 .2.2 0 1.2-.3 1.5l-1 .5a48.4 48.4 0 0 1-1.6-2.2l1.7.2zm-7.1-6.4h1.5c.5 0 1 .3 1.5.6.4.3.9 3.3.6 3.8-.2.6-3.6-2-3.7-2.1 0-.3-1.5-2.5-1.5-2.5l1.6.2zm-3.2-1.4s2.5.2 2.2-1.3a3.2 3.2 0 0 0-1.3-2.3l-2.9 2.1 2 1.5zm-6.5-2.8s.7.4 1.4 0c.7-.2 2.6-2.7 4-3 1.4-.3 1.7-.3 2 0 .2.4 0 1.8-.2 2.2-.3.4-4.4 2-4.4 2l-1.5-.1a9.6 9.6 0 0 1-1.3-.5v-.6zm-.7-4.5c-.7-1.4-1.7-2-2.2-1.9-.4.1 1.4 1.5 1.7 3.5.3 2 .2 3.3.2 3.4l.8.1.2-.7.1-.5v-.5l-.1-1-.2-.9-.2-.6-.3-.9zm-5.8-2a15.4 15.4 0 0 0-5.5-3.7c-.2 0 4 2.5 5 4 .9 1.7.9 3.9 1.3 4.2.4.3.8-.2.9-.2 0 0 .3-.5.2-.7l-.2-1-.7-1-.4-.8-.6-.8zm-5.5-2.3c-2.4-2-6.6-3-10-3-3.5-.2-5.3.2-4.8 2s2 2.8 5 2.8c2.9 0 3.6-.3 5.2.2a9.7 9.7 0 0 1 3.6 2c.5.5-1.1-1.5-2.6-2.6-1.5-1.2-2.5-1.7-2.5-1.7s-.3-.7 1.7-.4c2 .3 4.7 1.6 5.5 3.3.7 1.7.6 2.6.6 3 0 .3.7-.2.7-.2l.3-.9s0-.6-.3-1.4c-.4-.7-.5-1-1.4-2-.9-1.1-1-1-1-1zm-9.6 28.5c1.5 0 4.8-2.8 5.2-6.7.5-4-1.9-11.9-2.5-12.7-.5-.9 1-.4 1.7.4a25 25 0 0 1 2.5 10.6c0 4.2-.8 5.3-3 7.5-2.2 2-4 1.8-4 1.8l.1-.9zm5.1 11.6s.7 1 1.6.6c1.5-.5 3.8-1.7 3.8-3.8 0-1.4-1.8-2.7-1.9-3.2v-1l1.6.4.5 2.2s.6.7 1.3.4c.6-.2 2.5-1.6 2.2-3-.3-1.2-2-2.9-2.2-3.5-.2-.7 0-1.2 0-1.2l1.6.2.4 2s.4.6 1.3.4c.8-.1 2.4-1.7 2-2.5l-1.5-2.6v-.9l.5.4s.6.2 1.8-.1c1.1-.4 2.3-1.2 2.3-2s-1-1.6-1-2v-.6h.8l1 1.2.1 1.4-.3 1.2-1.4 1.6-1.4.6h-.4l.8 1.4-.2 2-1.3 1.2-1.7 1-.1 1.9-1 2-2 1.2h-.7l-.2 1.2-1.4 2-2.3 1.5-1.7.3-1-1.4.1-.5z"
    />
    <path
      fill="#d2a567"
      d="M343.4 191.4s4 1.1 3.8-1.4c0-1.3-3.8-4.5-4-5-.3-.6-.2-1.3-.2-1.3l1.9 1.8s2.5.6 3.2-.9c.7-1.4.1-2.3 0-2.3l.6-.1 1.1.2-.1 2.2-1.3 5.5s.3 2.2-1.4 2.3c-1.7.2-3.6-1-3.6-1zm3.7 29.5s0-1.1-.8-2c-.9-.7-2.5-1.4-2.8-1.6a63 63 0 0 0 2.8 3.5h.8zm5.6.2s-2-2.4-2.3-3.3c-.5-.8-1.5-2.6-2.3-2.7-.8 0 .8 3 .8 3l3.2 2.9h.6zm5.4 0-2.1-4.2c-.4-.9-1.3-3.4-2.3-4.1-1-.7.1 1.1.1 1.1l1.1 3.3 1.9 2.9 1.3 1zm3.9-2.4s-.1-2.7-.5-4.6c-.3-1.8-1.7-3.4-1.8-3.3v3.3l2.3 4.6zm8.1 2-2-4.7c-.5-1.6-1.8-4.1-2-4.2l.4 3 1.7 4.7 2 1.2zm7-8.5s-1.2-1.2-3.9-2.3c-2.7-1-5.4-1.2-5.4-1.2l.3.4 1.3 1 2.8 1.5 3.7.9 1.3-.3z"
    />
    <path
      fill="#202020"
      d="M348.2 213.8s0 2.4 1.3 3.8c1.2 1.5 4 4 4.6 4.6.6.5 1 3.4 1.9 5.8.8 2.4 1 4.4 1.4 5.1.4.7 1.1 1.8.5 1.7-.5-.1-1-.8-1.4-1.7-.3-.9-.2-.9-.2-2 0-1.3-1.8-7.5-2.7-8.1-.9-.7-4.8-4-6.4-6.3-1.5-2.3-1.2-2.8-1.2-2.8h2.2z"
    />
    <path
      fill="#202020"
      d="M354.6 229.3c-.8-1.7-1-3.3-1.2-4.3a16 16 0 0 0-4.4-4.2c-.6-.3-1.9 0-2.4-.3l-3.7-4s-.5.5-.3.6c.1.1 3.4 3.7 4.6 4.8 1.2 1.2 1.9 3.7 2.7 5.7.9 2 .5 1.6.6 2.5.1 1 .7 1.5 1.3 1.5.6 0 .8-.2.6-.4a10.3 10.3 0 0 1-2.2-3.5c-.7-1.7-1.5-4.9-2.5-6l-.3-.3 1.3-.2c.8 0 4.1 3 4.4 4 .3.8 0 1.2 1.4 4.2s2 3.7 2 3.7h.2s-1.2-2-2-3.8zm-5.2-19.9s2.5 1.5 3.2 1.7a9.8 9.8 0 0 0 1.2.3s.4 4.4 2.1 6.8c1.8 2.5 3.2 3.4 3.2 3.4s0 4.8 1.4 8c1.3 3.3 1.5 7.3 1.2 8-.3.6-1.4-2-2-4.3l-2-6.2a13 13 0 0 0-2.5-4.4c-.8-.7-.2-.6.3-.2.4.4 1.7 2 2.5 4.5s1.1 5 1.5 5c.5 0 .8-.3.8-.9 0-.4-.6-1.8-1-4.1a17 17 0 0 0-1.2-4.7c-.4-.6-1-.7-2.4-3.4a20.3 20.3 0 0 1-2.5-5.3c-.2-1.2 0-1-.2-1.3-.2-.1-.4 0-1.6-.6-1.1-.6-2-2.3-2-2.3z"
    />
    <path
      fill="#202020"
      d="M355.7 208.5s1.4 1.2 2.3 1.5c.8.4 2 .4 2 .4s-.3 4.2 1.3 6.9 3.3 4.2 3.3 4.2.3 1 .8 6.8l.7 8.3c.1 2.3.2 10.6-.1 10.3-1.3-1-.2-5.4-.9-7.3-.6-1.8-1.6-2.1-2.8-7.4-1.2-5.2-.4-6.4-1.3-8.3-.9-2-2-2.2-2-2.2s1.6.4 2.3 2c.6 1.6.7 6 1.3 8.2 1.2 4.9 2.9 7.4 2.9 7.4s-.4-6.2-.8-9.7c-.5-3.5-.5-6.4-1.1-7.7-.7-1.4-2.1-2.4-3-4.2-.8-1.8-1.1-5.3-1.5-6.2-.4-.9-.6-.6-1.2-.8-2-.8-2.2-2.2-2.2-2.2z"
    />
    <path
      fill="#202020"
      d="M360.1 206.2s1.3 1.5 3.1 2.6c1.8 1 2.8.7 3 1 .3.2-.3 3.8 1.6 7.2 1.9 3.4 2.6 3.5 2.6 4l.6 13.9c.3 3.4.5 14.8-.9 14.8s-.1-8.5-.8-10.4c-.7-2-.7-1.4-1.3-3-.7-1.6-.7-7.8-1.8-11.5-.8-2.8-1.6-3.2-1.6-3.2s1.4.7 2 3c.6 2.2.8 10 1.5 11.1.8 1.3 1.8 2.8 2 4a157 157 0 0 0-.4-15.6c-.3-1-3.5-6.6-3.7-9.7-.3-3.2-.4-3.5-.7-3.7-.2-.3-1.1 0-2.6-1.5-1.5-1.4-2.6-3-2.6-3z"
    />
    <path
      fill="#202020"
      d="M367.3 208c0-.3 1 1.7 3.7 2.8 2.9 1.2 5.6 1 6 1.3.3.3 2 4.5 2.1 10.2.1 5.6-1 5.1-1.8 10-.9 4.9-1 14.8-1.5 16.3-.2.5-.5.8-.8 1.7-.3 1 .2 2.8-.7 2.8-.8 0-1-1.4-1-2.1 0-.8 1-3.5 1-6.2s-.6-3-1-6.2c-.4-3.3-.4-13.5-.8-14.5-.3-1-2.1-3.1-2.1-3.1s1.9 1.2 2.4 2.6c.4 1.3.5 12.7 1 15 .5 2.4.3-.5.5-1.8s.9-7 .8-10c-.1-3-1.4-9.4-2.4-10.5 0 0 .5.6 1.1 2 0 .1.4.5.8.7l1 .5s-.6 0-1-.3c-.4-.1-.6-.4-.6-.4a23.9 23.9 0 0 1 1.3 8c.1 5.2-.7 16.4.1 16.5.8.2.7-6 1.5-11.2.8-5 2-5.8 1.6-9.9-.3-4.1-1.4-8.6-2.3-9.2-.9-.5-3.4-.3-5.6-1.8-2.2-1.4-3.4-2.9-3.3-3.2zm-35.8 5.7s.8.4 1.7 0c1-.5 3.5-2.5 3.5-3.3v-1.6s0 .3.7.4c.8.1 2.8-1.4 3-2.4a8 8 0 0 0-.1-3.1c-.2-.4.6.3 1 0 .4-.4 2.4-1.7 2.4-3 0-1.4-1.1-2.6-1.1-2.6s1 .2 1.6 0c.5-.1 2.5-1.3 2.4-2.4 0-1.2-.7-3-2.3-3.2 0 0 1.2.3 2.3-.1 1-.4 1.5-1 1.5-2.3 0-1.2-2.3-4-2.6-4.2-.4-.2 2.4.8 3-.3.8-1.1.9-1.9.7-2.5-.2-.7-.8-.8-.8-.8s1.2.3 2.8-.5 3-2 3.8-1.9c.8 0-2.3 1.7-2.5 2.6 0 .4.9 1 2.3 2 0 .1 0 .2.2.3.7.3 3 .4 3.3.5.2.2-2.4.1-2.2.3a34.1 34.1 0 0 1 5.7 5.4c.1 0 .5.4 1 .5l1.3.3h-1.6a65.3 65.3 0 0 1 3.3 4.7c0 .1.4.6.9.8.5.2 1 .1 1.1.2.1.2-1.4 0-1.3.2a82 82 0 0 1 3.3 6s-3-5.3-6.7-9.5c-3.8-4.2-4.7-4.7-4.8-4.4-.2.4 2.7 4.1 4.3 6.7 1.6 2.6 3 5.9 3 5.9s-3.7-7.8-9-12.6c-5.2-4.8-5.8-5.5-6.3-5.4-.6.2-1 3.8-.7 4.5.3.7 4.2 3.6 7.4 7.5 3.3 3.8 7.5 10.4 7.5 10.4s-3-4.7-8-10-6.9-6.6-7.3-6.5c-.4 0-.4 1-1 1.8-.6.7-1.8.6-1.8 1s4.2 4.3 5 4.7c.9.5 1.4.3 2 .6l1.4 1-1.6-.5c-.6-.2-1.3-.3-1.3 0s3.5 4.3 4 4.6c.6.3 1 .1 1.7.4.8.3 2 1.1 2 1.1s-1.3-.7-2.1-.8c-.9-.2-1.2 0-1.2.2s2.6 3.6 2.5 3.6c-.1 0-4-4.6-7.3-7.5-3.3-3-4.8-3.6-5-3.5-.2.1 0 1-.9 1.3-.8.3-1.5.4-1.5.7 0 .3 3 3 5 5.4a149.4 149.4 0 0 1 4 4.5l-4.5-4.3c-2.3-2.2-3.5-3-3.8-3-.2.2-.2 1.3 0 1.6.2.3 4.6 5.4 4.4 5.5-.1.2-5-6-5.4-6-.3 0-.5.7-.8 1-.4.4-1.8.4-1.8 1 0 .4 7 7.3 6.9 7.5 0 0-5.8-5-6-4.7-.2.3 2.4 5 2.2 5.2-.1 0-3.4-5-3.7-5-.3 0-.2.6-1 1.3-1 .8-2 .4-2 .8 0 .3 4.8 5.7 4.7 5.8-.2.1-5-5.1-5-4.8-.1 0-.4.3-.2.7.3 1.3 1.4 3.6 1.3 3.8 0 0-1.6-3.2-2-3-.4 0-.4.7-1.2 1.1-.7.5-1.3.4-1.3.7 0 .3.8 1 1.2 1.7.4.7.7 2.4.7 2.4s-.5-1.4-1.1-2.3c-.7-.9-1.3-1.5-1.9-1.5s-.8.5-.8.5l-.5-1.2z"
    />
    <path
      fill="#202020"
      d="M377 212s1.5 0 1.7-.4c.2-.3-.6 0-2-1.6s-5-12.1-9-17.4c-6.6-8.7-12.7-12.7-12.7-12.7s7.3 4.2 13 12.4c5.6 8.4 7 14.9 8.6 16.6 1.6 1.7 3.2 2 3 2.5 0 .5-.3.8-.9 1l-2 .1.2-.4zm-48-2.2.3.1c.3 0 2.3-1.9 2.2-2.5 0 0-1-.3-1.6-1-.7-.8-.9-1.9-.9-1.9s.7 1.3 1.2 1.6c.6.4 1.4.6 1.8.3.3-.2 3.2-2.4 3-3.2 0 0-.9 0-1.8-.6-.8-.6-1-2-1-2s.6 1.1 1.5 1.5c.8.4 1.7.3 2 0 .2-.3 2-3 1.8-3.7 0 0-1 0-1.8-.5-.9-.6-1.3-2.2-1.3-2.2s.6 1.3 1.7 1.5c1.1.3 2-.4 2.2-1.2.2-.8.8-3.7-.2-4.5 0 0-1.4.5-2.4 0-1-.6-1.4-1.9-1.4-1.9s.9 1.2 2 1.4c1.2.1 1.7-.5 1.9-1a5.9 5.9 0 0 0-.1-3c-.4-1-1.1-.8-1.3-2.2 0 0-.3.5-1.8.5s-2.3-1.6-2.3-1.6 1.2 1 2.4 1a1.9 1.9 0 0 0 1.6-1.9c0-.7-.6-1.4-1-2.1-.2-.8-.3-1.7-.5-1.6-.2 0-.5.8-2 .6-1.5-.3-1.8-1.3-1.8-1.3s1 .7 2 .7c.8 0 1.3-.5 1.3-1 0-.6-.3-1.7-2.2-3.3a58.1 58.1 0 0 0-3.5-2.7 21.8 21.8 0 0 0 6.6 5.3s1.7.6 2 0c.1-.6.1-1.4-.5-2.4-.5-1-2-2.6-2-2.6s1.6 1.3 2.3 2.7c.8 1.3.4 2.2.5 2.6 0 .3 3.3 1.6 4 1.1.8-.4.5-1.4-.2-2.3l-1-1.8s.7.8 1.2 1.8c.6 1 1 1.7.8 2.1-.2.5-.6.7-.6.9l2.3 1.3c1 .6 2.3 1 2.5.8.2-.4.3-1.1.2-2.2-.1-1-.7-2.7-.7-2.7s.7 1.6.8 2.7-.1 2 .1 2.4c.3.4 1.1.5 1.1.5s-.6.4-2 0c-1.5-.4-7.7-3.6-8-3.3-.3.4 2.9 2.3 4.3 3.7 1.5 1.3 2.2 2.8 2.2 2.8s-1.1-1-2.2-1.6c-1.1-.6-4.4-2.3-4.7-2-.2.2 1.3.5 1.4.7.1.3-1 1.3-1 1.8 0 .4 4.7 3.7 4.5 4-.1.4-1.2 1.3-1.4 1.2-.1 0-2.5-1.8-2.5-1.6s1.4 1.5 1.4 1.7c0 .3-1 .8-.8 1.4.2.6 2.6 2.6 2.6 3.3 0 .7-1.4 1.3-1.1 1.7l1.5 2s-1.4-.9-1.8-1.4c-.4-.4-1.3-1.5-1.5-1.3-.1.1-1 2-1 2.5.2.4 1.3 1 1.5 2.3.2 1.1-.2 2.4-.3 2.4 0 0-1.6-2-2-2.1-.2 0-.6.1-.9.6s-1.2 2.1-1 2.4c0 .3 1.6.7 1.6 1.9a3.4 3.4 0 0 1-1 2.3l-2.1-2.4c-.2 0-2.2 2.3-2.3 2.6 0 .2 1.4 1.3 1.2 1.7-.3.4-1.3-.2-1.8.1l-1.7.7c-.2 0-.5-.6-.5-.6z"
    />
    <path
      fill="#202020"
      d="m355 180 .5-1c.3-.3 1.5-1.7 1-2-.4-.2-2 .3-3 .2-1 0-1.7.2-4.6-2.3 0 0-9.3-6.4-23.6-7.3-4.6-.2-6.6 1.4-6.8 2.2 0 .2 1.2-1.8 5.7-1.7 2 0 16.5 1.1 24 7 .4.3 2.9 2.7 5.2 2.4 2.3-.2 2.8-.5 2.7-.2 0 .4-.7 1.2-.9 1.6a9.2 9.2 0 0 0-.3 1.1zm-25 2v-.2c-.2-.4-1.1-1.7-2.7-3.1a37.4 37.4 0 0 0-8-4.3c-.3-.1 6 2.9 7.7 4.5l3 3z"
    />
    <path
      fill="#d2a567"
      d="M330 192.2s-.4-.6-1.7-1.4a9.9 9.9 0 0 0-2.5-1.1l3 .7a4.8 4.8 0 0 1 1.1 1.8zm-.8-5.3s-.4-.6-2.1-1.2-2.2-.5-2.2-.5 1.6-.7 2.8 0a2.7 2.7 0 0 1 1.5 1.6zm-1-4.5s-.4-.8-2-1.3c-1.5-.6-2.6-.7-2.6-.7s1.6-.4 3.2.2c1.5.6 1.4 1.8 1.4 1.8zm-2-2.8s-.4-.6-3.3-1.3c-3-.7-4-.7-4-.7s4.1-.4 5.2.1c1.1.5 2.2 1.9 2.2 1.9zm-5.3-3s-1.8-.6-3.5-.7-4.4.1-4.4.1 5-.8 6.3-.5c1.4.3 1.6 1 1.6 1z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M304.5 238.4s.9 1.6 2.6 1.6c1.8.1 3.1 2.6 3.1 2.6l-1.9 1.9-4.6.2-1.5-2.4 2.3-3.9zm0-1.6c.2-.3-1.3-3.3-2.4-3.8-1-.5.4 1 .2 1.6-.3.6-.4 1.4-.3 1.5 0 0 .9 1.4.4 2-.4.5 2.2-1.3 2.2-1.3z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M303.8 241.4s.8.4 1.4.2c.7-.2 1.3-.9 1.3-.9m-3.6-.5s2.6-1.9 2.4-2.9c-.2-1-.7-1-1-.9a7 7 0 0 0-2.1 1.7c-.1.3.7 2.1.7 2.1z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M301 241.5s.6 1.3 1.4 1.3c.8 0 2-.7 2-1.2.1-.5-.8-1.5-1.3-1.7-.6-.3-1.9.4-1.9.4l-.1 1.2z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M303.4 239.8c0 .4-1.7 1.2-2.3 1.2-.5 0-1.6-1.3-1.2-1.5l1.5-.4c.4-.2.5-.8.7-.8.3 0 1 .1 1.1.5.2.5.4.6.2 1z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M301.8 240.9s-2.6 3.4-3.7 3.3c-1-.2.5-5 .5-5l1.2.6c.9.2 1.7.6 2 1z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M297.2 238.4s3.3.6 3.4 1.1c.2.6-1.5 1.3-2.5 1.3-.9 0-.9-2.4-.9-2.4z"
    />
    <path
      fill="#202220"
      d="M289 243.4s.5 1.6 1.9 1.7c1.4 0 2.8-1.5 2.8-1.5l-3.4-1.3-1.3 1.1z"
    />
    <path
      fill="#4b4139"
      d="m289 243.4.4.9c.3.4.7.8 1.5.9h.1c1.4 0 2.7-1.6 2.7-1.6l-3.4-1.4-1.4 1.2h.1l1.3-1 3.3 1.3v-.1l-.2.2c-.4.4-1.4 1.2-2.4 1.2h-.1a1.8 1.8 0 0 1-1.4-.8 2.8 2.8 0 0 1-.3-.6v-.1l-.1-.1z"
    />
    <path
      fill="#202220"
      d="M290 243s.5 1.2 2.4 1.2 3.3-1.5 3.3-1.5l-3-2.3-2.7 2.6z"
    />
    <path
      fill="#4b4139"
      d="M290 243s.5 1.2 2.4 1.3c2 0 3.4-1.5 3.4-1.5l-3-2.5-3 2.7h.2l2.8-2.5 2.9 2.3v-.1a5 5 0 0 1-3.2 1.4 3 3 0 0 1-2-.6 2.2 2.2 0 0 1-.3-.4 1.1 1.1 0 0 1-.1-.1h-.1z"
    />
    <path
      fill="#4b4139"
      d="M290.2 243.3s.9.6 1.8.7c1 0 2.2-.3 2.2-.3l-1.1.4-.8.1-.8-.1-.6-.3-.6-.4v-.2z"
    />
    <path
      fill="#202220"
      d="M292.4 241.6s.8 2 2.6 1.8c1.7-.2 1.7-1.2 1.7-1.2l-2-2.8-2.3 2.2z"
    />
    <path
      fill="#4b4139"
      d="m292.4 241.6.5 1c.4.4 1 1 1.8 1l.3-.1c.8-.1 1.3-.4 1.5-.7.3-.3.3-.6.3-.6l-2-3-2.5 2.4h.1l2.4-2.1 1.9 2.7c0 .2-.3 1-1.8 1.1h-.2a2.2 2.2 0 0 1-1.7-.8 4 4 0 0 1-.4-.6v-.2a1.5 1.5 0 0 1-.1-.1h-.1z"
    />
    <path
      fill="#4b4139"
      d="M292.6 242s1 1.3 2 1.3a3 3 0 0 0 1.5-.4v.1l-.5.3-.8.1h-.8l-.7-.5-.6-.9zm-3.2 2s.8.9 1.5.9a4.7 4.7 0 0 0 1.9-.6h.1l-.2.1-.8.4-.9.3-.7-.1-.6-.4-.3-.4v-.2z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M297 238.3c.8-.2 2.4 2 2.4 3.2s-.5 2.7-1.3 2.7-2.6-1.7-3-2.5c-.4-.9-.8-1.4-.5-1.9.3-.4 2.4-1.5 2.4-1.5zm-8 .2s-1.4-1-1.9-.5-.3 2.3 0 2.6c.4.4 2-.8 2-.8l-.2-1.3z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M288.8 239.7s-1.8.2-1.8 1 .9 1.6 1 1.8c.2.1 1.8-.7 1.8-.7l-1-2.1z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M289.5 241.1s-1.8.6-1.8 1.2.8 1.7 1.3 1.7 1-1 1.2-1.3c.3-.2-.7-1.6-.7-1.6zm.8-5.1s-.3-.5-1-.2c-.8.3-1.6 1-1.5 2.3.1 1.1.6 2 .6 2l2.7-1-.8-3.1z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M290.5 238s-2.2.8-2.3 1.7c-.1.9.5 1.7 1 2 .7 0 2.6-1.8 2.6-1.8l-1.3-1.8z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M292.5 241.7s-2.2 1.5-2.5 1.5c-.3 0-1.2-1.2-1-2 .2-.8 1.7-1.3 2.3-1.6.6-.2 1.2 2.1 1.2 2.1zm2-8.2s-.7-.6-2-.5c-1.4.1-2.4 2-2.6 2.8-.2.9 0 2.6.5 2.8.5.3 3.3-2 3.3-2l.8-3z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M291.8 240.3c-1-.1-1.8-1.5-1.7-2.3.2-.8 2-2.2 3-2 1 .1.8 2.5.8 2.5s-1.2 1.9-2.1 1.8z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M294.7 240s-.4 1.2-1.4 1.7c-1 .4-1.5 0-2-.7-.6-.8.2-1.2.6-1.6.5-.4 1.7-.7 1.7-.7l1.1 1.4z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M293.2 237.2s-1 .8-.4 1.8 1 1.4 1.8 1.5c.8.1 1.3-.2 1.9-.9.6-.7 1.5-1 1.4-2-.1-.9-.4-1.6-1-1.8-.5-.3-2.2 0-3.7 1.4z"
    />
    <path
      fill="#202220"
      d="M296.2 233s-1-.5-1.9 0c-.8.5-1.4 1.5-1.5 2.4l.2 2.3s1.2-.4 2-1c.7-.6 1-.8.8-1.1 0-.2-.4-.4-.4-1.2 0-1.4.8-1.5.8-1.5z"
    />
    <path
      fill="#4b4139"
      d="M296.2 233s-1.2-.3-1.9.1a3.2 3.2 0 0 0-1.3 1.9c-.3.8-.1 1-.1 1v-1.4c.4-.8 1-1.5 1.6-1.7.8-.3 1.7 0 1.7 0z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="m328.8 257 1.6-.8 2-1.2.4 2.2-1.8 1.4h-1.5l-.9-.7.2-1z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M326.4 257.2h1c1.1 0 1.2-.3 1.4-.3.2.1.5 1.3.5 1.3l-.4.7-1.5.9-1.3-.8-.1-1.8h.4zm12.1-.8s-.3-.5-.9-1l-2.2-1.9v5l2.3-.1 1.1-1.5-.3-.5z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M326.4 257.2s-.4-.5-1.3-.4c-1 0-2 .9-2.1 1.5-.1.7 0 2.6.5 3 .5.4 1.2.5 2.2.3 1-.3 6.4-3.6 6.4-3.6l-1.4.3c-.7.2-1.4-.1-1.4-.1s-.7.8-1.6 1c-.8 0-1-.5-1.2-.9l-.1-1.1z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="m330 258.9-1.2.5-1.3.6.4 1.6 2.3.5 1.4-1.1v-1.6l-1.7-.5zm10.4-1.2-.8-.8c-.4-.4-1-.5-1-.5l-1.3 1.5v1l1.2.7.9.2 1.1-.8-.1-1.3z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M332.6 257s-1 .4-1.5.8l-1.2 1c0 .2 1.1 1.4 1.1 1.4l1.2.1 2.5-1.7-.2-1.6h-1.9zm9.5 2-.5-.7c-.4-.4-1-.6-1.2-.6-.3 0-1.3 1.5-1.3 1.5v.4l.8 1 1.6.5 1.1-1.2-.5-.9z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth=".3"
      d="m338 260.8 1.2.2s0 .3.3.5c.3.3.3 0 .3 0s.2 1.2 1.4 2c0 0 1.4.6 2 .2.8-.4.7 0 .7 0l2-2.4s0-.5-.5-.5c0 0 .4-1.6-1-2-1.2-.2-2.2.2-2.2.2s-1 1.8-1.6 1.6a2.4 2.4 0 0 1-.8-.5l-.7-.9s-.4.1-.9-.2c-.5-.3-.9-1.1-.9-1.1s-.7-.1-1-.4l-.5-.8-1.9 1.4s0 .5-1.1 1.3-1.7.8-1.7.8-.4 1.7-1.6 1.4c-1.2-.3-2-1.6-2-1.6s-.9-.2-1.4.6c-.6.7-.9 1-.9 1.7 0 .8.5 1.8 1 2.2.3.3 1.5 1.3 3 .6 1.4-.8.9-2 .9-2l.8-.5c.9-.6 1.8-1.5 2.5-1.7"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeWidth=".3"
      d="M335.8 250.8v3.2s.4 2.9-.2 3.7c-.6 1-2.9.7-3.2 0-.3-.8-.2-3.2-.2-3.2l3.6-3.7z"
    />
    <path
      fill="#f8c83c"
      stroke="#977c2e"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth=".3"
      d="M333.3 260.5s-.5.8 1 1c.4 0 .7-.2.9-.4.4-.4.3-.8.3-.8s-.2 1.2 1.2 1.2c1.4.1 1.3-1.3 1.3-1.3"
    />
    <path
      fill="#202220"
      d="M321.2 263.1s-.8-1.4.1-1.9c1-.5 1.5 0 2.1 0 .6 0 .4-1.4.3-1.7a3.7 3.7 0 0 0-.7-1.2c-.2-.2-3.5.2-3.4 2.3 0 2.1 1.6 2.5 1.6 2.5zm5 5.2s-1-1.5-.4-2.4c.5-.9 1-.3 1.2-.4.3 0 .4-.6 0-1.6-.5-1-1.1-1.4-1.4-1.5-.4 0-2.3 1.4-2 3.2a3.5 3.5 0 0 0 2.6 2.7zm18.2-1.8s3.5 1.5 3.7-2c.2-2-1.5-3.3-2-3.3-.4 0-.7.3-1.3 1-.7.8-1.1 1.3-.9 1.6.3.3 1.3-.3 1.8.8.7 2-1.3 1.9-1.3 1.9z"
    />
    <path
      fill="#4b4139"
      d="M326.2 268.3s-2.7-.6-2.7-3.3c0-1.8 2-2.6 2-2.6s-1.8 1-1.8 2.6c-.1 2.7 2.5 3.3 2.5 3.3zm-5-5.2s-1.6-.3-1.7-2.6c-.2-2.3 3.5-2.2 3.5-2.2s-3.5.2-3.4 2.4c.2 2.2 1.6 2.4 1.6 2.4zm23.2 3.4s.7.3 1.5.3 1.8-.3 2-1.6c.4-1.3.3-2-.6-3.1-.6-.9-1.2-.8-1.2-.8s.6 0 1 .8c.6.8 1.3 1.6.8 3.1s-2 1.5-2.5 1.5a5.5 5.5 0 0 1-1-.2z"
    />
    <path
      fill="#904720"
      d="m302.6 192.4-.6-.2.4-1 1.9-.7 1.8-.1 2-.1.8.6 1 2.3-3.6 2.2-.6.2-.2-1-.6-1.4z"
    />
    <path fill="#202020" d="m337 245.5-.3-5.5-14.8 4.6 5.8 5.5z" />
    <path
      fill="#d2a567"
      d="m309.4 235.9-1.2-1-1.4-.8h-1.1l-.2.3.2.5 1.3 1.6 2.3 1.2.8.7.5.2-1.1-2.7zm-.3 2.3.8.2.9 1 .5 1 .7 1.3.2.8-1.6-.3-4.8-1.5.4-1.2.8-.7.7-.3 1-.2z"
    />
    <path
      fill="#d2a567"
      d="M312.2 242.2h.8l.6-.5-.3-1.8.3-5.8-3.9-4.6-.8 2.6 1.1 4.7.9 2.8z"
    />
    <path
      fill="#ab6d29"
      d="M309.4 231.7s-.2.4.1 2c.3 1.5.9 4.9 2.2 7.2l-1.3-1.9s-2-4.6-1.7-8.2c.3-3.5.7.8.7.8zm2.9 2.9s-.9 1-1 1.9v2.2s0-1 .8-1.3c.9-.3.7 2.3.8 2.6l.5-4.7-1.1-.7zm.4 9.6-4.4-1c-2.3-1-3.5-1.8-3.4-2.3 0-.6 4 .1 4.6.2l2.4 1h1l1.9-.8.2 2-2.3 1zm-7.3-.8s1 .8.5 1a4.4 4.4 0 0 1-2.3.3l4.2 1 .9-.7-3.3-1.6z"
    />
    <path
      fill="#d2a567"
      d="M304.2 242.2c.2-.2.3.7 1.8.8 1.5.2 2.2-.2 2.2-.2l.7.4.8.2-.7 1.1-2.8-.8-1.5-.8-.5-.7z"
    />
    <path fill="#ab6d29" d="m314 240.3.8 1 .5-2.4v-2.5l-1.6-1z" />
    <path
      fill="#4d2a15"
      d="m309.7 236.1-1.3-2.1-1.7-3.1 1-1.8 1.3 1.8s-.4 1.3-.1 2.5c.2 1.2.8 2.7.8 2.7z"
    />
    <path
      fill="#d2a567"
      d="M300.8 244s.6-.9 1.9-1a7.6 7.6 0 0 1 2.4.2l2.6 1.4.6.9-5-.7-2.5-.8z"
    />
    <path
      fill="#8f4620"
      d="m314 235 .2 4c0 1 .7 2 .6 2.3-.2.4-.4.6-1 .9-.6.2-2 0-2 0s1.3-.2 1.4-.5c0-.2-.4-1.4-.5-2.4 0-1 .1-2.2-.3-2.2-.3 0-.7.4-.8.6 0 0 .4-3.8.8-4.2.4-.4 1.6 1.6 1.6 1.6z"
    />
    <path
      fill="#ab6d29"
      d="M304.7 243s-.5-.4-.5-.8c0-.3.6 1.6 3.4 1.5 2.8 0 2.6-.2 2.6-.2h1.3s-.3 1.3-.5 1.4a61 61 0 0 0-2.2 1.4l-.7.4v-.2l-.3-2.1-2.4-1-.7-.4z"
    />
    <path
      fill="#8f4620"
      d="M309.7 236.1s-3.2-3.3-4.3-5.5c-1-2.2-.4-5.2-.4-5.2l3 4s-.4.7-.3 2c.2 1.2 2 4.7 2 4.7z"
    />
    <path
      fill="#ab6d29"
      d="M307.6 248.3c0-.3-.2-1 .4-1.8 2-2.4 6.8-4 6.8-4v2.8l-6.2 3h-1z"
    />
    <path
      fill="#8f4620"
      d="M308 246c.3-.1 1.4-1 1.4-1.3 0-.4-.7-.4-2.1-.7-1.5-.3-2.6-1-2.6-1s1.7 1.4 2.4 1.7c.7.2.6.5.5.7l.4.6zm8.3.7s-.9-1.3-1.2-2.1c-.3-.8-.3-2.1-.3-2.2l-1 .7-2 .7s2 0 2 .6c0 .7-3 1-3 1 0 .1 2.4-.4 2.3.1-.2.6-1.2.7-2.5 1.2l-2.3 1-.7.5s.6.4 1.5.3c.9 0 2.9-.5 2.9-.5l3.8-1.5.5.2z"
    />
    <path
      fill="#ab6d29"
      d="M316.3 246.7s-1-.3-1.8-4.8-.6-5.7-.6-5.7l1.8 1.3 1.7 3-1.1 6.2z"
    />
    <path
      fill="#8f4620"
      d="M316.9 239.3s-.9 2.5-.9 4c0 1.4-.1 2.4.3 3.4s1.8 2.3 1.8 2.3l.7-.6.3-2 .1-3.4-2.3-3.7z"
    />
    <path
      fill="#202020"
      d="M319.4 242.7s.4 6.3-1.2 6.5c-.7 0-1.9-2.4-1.9-2.5 0 0 1.4 2.3 2 2.1 1-.4.6-6.6.6-6.6l.5.5zm-3.1 4s-.3 0-.7-.8c-.4-.7 0 .6-3.4 1.8-3.4 1.2-4.6.5-4.6.5s1.1 1 4.5 0 3.1-1.3 3.6-1.4h.6z"
    />
    <path
      fill="#ab6d29"
      d="M310 238.7s.6.5 1.2 1.7a363.3 363.3 0 0 0 1 2h.2s-.4-1.3-1-2.2l-2.2-3.1.8 1.6z"
    />
    <path
      fill="#8f4620"
      d="M308 246.5s.3-1.1 0-1.4c-.3-.2-.7 0-3-.2a34 34 0 0 1-4.2-.9s1.6 1 3 1.4l3.5.8.5.1.2.2z"
    />
    <path
      fill="#202020"
      d="m308 246.5-.2-.5c-.3-.3-.7.1-3.5-.7-2.8-.7-3.5-1.3-3.5-1.3s1 1 3.4 1.5l3.8 1z"
    />
    <path
      fill="#ab6d29"
      d="M309.3 238.2s-2.1.1-2.8.7c-.7.5-1.6 2-1.6 2l1.3.1s-.1-1.2.5-1.9c.7-.6 1.7-.7 2.6-.9z"
    />
    <path
      fill="#8f4620"
      d="M305.3 234.2s.8 1.2 1.7 1.5c.9.4 1.8.8 2.2 1.2.4.4.9 1.8.9 1.8s-3-1.3-3.7-2a9.6 9.6 0 0 1-1.1-2.5z"
    />
    <path
      fill="#8f4620"
      d="M308.2 235s-.3-.5-1.1-.9-1.4-.3-1.7-.1-.1.2-.1.2l1 1.7.7-.2s-1.6-1-1.3-1.3c.8-.7 2.5.5 2.5.5z"
    />
    <path fill="#202020" d="m316.3 231.1 17-8.7 8 11.1-14.7 4-7.7.6-3.8-2.7z" />
    <path
      fill="#4d2a15"
      d="m339 235.9 21 18.2-2.3 1.6-5-1.4-10.2-10.1-3.8-3.8z"
    />
    <path
      fill="#4d2a15"
      d="m366 250.5-12-9.1-15.3-11.5.4 5.5 17.4 16 5.7 2.7 3-.8 1.4-1.6-.6-1.2z"
    />
    <path
      fill="#803f1d"
      d="M339 237.6s6 6.9 10.6 10.4 9 7.3 10 6.7c.8-.5.5-1 .5-1l-21.3-17.5.1 1.4z"
    />
    <path fill="#4d2a15" d="m353.8 255.1-2.1 1.7-2.5-1-13-13.2.7-2.5 1.8.3z" />
    <path
      fill="#202020"
      d="M366 250.5s-1.6 3.8-5 2.9c-3.4-.9-22-18.5-22-18.5v1.8s18.8 17.3 22.5 18c3.6.7 6.6-2.5 6.2-2.8a43.7 43.7 0 0 0-1.7-1.4z"
    />
    <path
      fill="#803f1d"
      d="M336.9 240.4s6 7.7 9.1 10.5c3.2 2.9 6 5 7.2 4.8 1.3-.2-.7-1.7-.7-1.7l-9.1-9-4.7-4.6s-1.8-.7-1.8 0z"
    />
    <path
      fill="#202020"
      d="M338.4 240.4s15.2 15.5 16.4 15.9c2.5.7 6.2-2 6.2-2l-1.3-.7-.2.5s-.7 1.6-4 .9c-3.2-.7-16.6-15.1-16.6-15.1l-.5.5z"
    />
    <path
      fill="#4d2a15"
      d="m344 255.3-5.5-6.4-1.2-2.1-.3-2.7 11 11.1-1.5 1-1.4-.4z"
    />
    <path
      fill="#202020"
      d="M354.1 255.5s-1.3 2-3.2 1.6a5.4 5.4 0 0 1-2.8-1.7L337.5 245l-.3-1.6s11.7 12.3 13.7 12.8c1.6.4 2.7-1.4 2.7-1.4l.5.7z"
    />
    <path
      fill="#202020"
      d="M348.2 255.1s-.5 1.6-2 1.4c-1.6-.3-2-.9-2-.9l-6.6-7.7-.1-2s6.8 9.3 8.3 9.8c1.6.5 2-1 2-1l.4.4z"
    />
    <path
      fill="#b07229"
      d="M341.3 234.9s6.3 5.4 6.8 5.6c.5.3 2.7.4 2.8.7.2.3-1.4 0-1.5.3-.1.4 3.2 3 3.7 3.1.5 0 3.2 0 3.1.4 0 .3-1.8 0-1.9.4 0 .4 2.9 2.7 3.4 2.8.5 0 3.9 0 3.9.4 0 .3-2.7 0-2.7.5.1.6 4.6 3.4 4.4 3.8-.2.4-5.4-3.5-5.5-3.3-.2.2-.4 1.4-.7 1.6-.3.2 0-1.6-.2-2.4-.3-.8-3.4-3.1-3.7-2.9-.3.3 0 1.7-.4 1.7s.1-1.7-.2-2.3a16 16 0 0 0-3.6-3c-.4 0-.1 1.3-.4 1.5-.3.2-.2-1.5-.6-2-.4-.5-7-6.5-6.7-7z"
    />
    <path
      fill="#4d2a15"
      d="M330.5 252.3s0 2.4-1 2.8c-1.1.3-3.1-4.4-3.1-4.4l-.5-4.4 3.1 3 1.5 3zm8.4-1.2V250c0-.6-.3-1.5-.3-1.5l-.2-2.4-.6-1.7-.4-1h-.7l-1.7 1.2-.5 1.6.8 3 .8 2.7 1.3.4 1.5-1z"
    />
    <path
      fill="#4d2a15"
      d="M336.8 255.3c.3-.1-.4-3.4-.4-3.4l-2-4.8-.5-1.7-1.5-.6-1 1.2.2 1.9s1.5 3.2 2.2 4.3c.8 1.1 2.3 3.3 3 3.1z"
    />
    <path
      fill="#202020"
      d="M335 245a6 6 0 0 1 1.4 2.6s1.3 3.6 1.1 4c-.2.3-1 .3-1 .3s1.8 1.8 2.3 1.6c.5-.2.3-2 .1-2.4-.1-.4-.7 0-1-.5-.1-.4-.8-2.7-.8-4.2v-2.7c.2-.3 1.5 3 1.5 4.7l.6.7-.6-3.2-.7-2.3c0-.2.3-.8.3-1.5v-1s.6.5.9.5c.3 0 .7-.4.8-2 .2-1.5-.1-6-.1-6l-6.8 9 2 2.5z"
    />
    <path
      fill="#202020"
      d="M335 244.3s-.3 2.4.6 4.8l1.3 3c.2.3.2 2.9-.1 3.2 0 0-1.8-4.4-2.4-6.6-.5-2.1-.7-3-1-3.2l-.8-.2 2.4-1z"
    />
    <path
      fill="#4d2a15"
      d="M334.4 257c.2 0 0-1 0-1l-.2-2.3-2.4-4.9-2.6-2.3-1.4-2-.2 4s2 4 3.1 5c1.3 1.2 3.3 3.6 3.7 3.5z"
    />
    <path
      fill="#202020"
      d="M324.7 246s.4 1.1.4 1.8v1.4l1.8 3.5c.9 1.5 1.7 3.1 2.4 2.8.7-.4 1-1.5 1-1.7.1-.1-.8 1.3-1.2 1.1a40 40 0 0 1-2.3-6.6l-1-.8a18.4 18.4 0 0 1-1.1-1.4zm7 5.5-1.7-3.1c-.5-1-1.2-1.7-1.4-1.7-.2 0-.5-2-.5-2s.7 1.3 1.6 1.7c1 .5 1.5.8 2 .7l.2 2-.2 2.4z"
    />
    <path
      fill="#5c3a1d"
      d="M327.4 248.3s.5 1.4 1.4 2.7c.8 1.3 2.3 2.9 2.3 2.9s-1.6-1.6-2.5-2.8a14 14 0 0 1-1.4-2.8h.2z"
    />
    <path
      fill="#202020"
      d="M332 246.7s.5-1.2.8-1.3l1.2-.3s-.7-.1-1.2-.8l-1.3-1.3.4 2 .1 1.7zm-.4.4s2 4 2.4 5.5c.5 1.3.4 3.4.4 3.4s-.2-1.5-.6-2.7l-2.4-5c-.1-.3.2-1.2.2-1.2z"
    />
    <path
      fill="#4d2a15"
      d="m334.2 244.4.5-6-.5-2.2-2.7-6s-.1.8-.8.8a6.2 6.2 0 0 1-3.1-1.8 9.2 9.2 0 0 0-.2 4.8l5.3 9.9 1.5.5z"
    />
    <path
      fill="#8b441f"
      d="M323.8 248.3s.8 1 1.3 1c.4-.2.3-2.1-.3-3.2-.6-1-7-9.6-8-10.1s7 12.3 7 12.3z"
    />
    <path
      fill="#8b441f"
      stroke="#5c3a1d"
      strokeWidth=".1"
      d="M328.1 244.8c.2.4.6 3.1-.5 3.4-1.5.3-8.5-9.4-9.6-10.7 0 0-4.4-2.8-4.5-3.5-.1-.7 4.7 1 4.7 1l9.5 9 .5.8z"
    />
    <path
      fill="#202020"
      d="M323.8 248.3s-.8-1.3-.9-2.3c0-1-.4-1.5-.4-1.9 0-.3-5.2-7.7-5.7-8.2-.6-.5-2.3-1.4-2.3-1.4a15.5 15.5 0 0 0 .3 2.4s1.6 3 4 5.7a458.4 458.4 0 0 0 5 5.8z"
    />
    <path
      fill="#4d2a15"
      d="M331.6 247c.7-.3.4-2.7.1-3.5a458.4 458.4 0 0 0-4.4-9.4l-1.3.4-2.3-1.8-1.4-1.5s.5 2.1.4 3.1v1.6l3.3 5.9 5.6 5.3zm4.7-5.2 1-1.3-.5-4.4-2.8-9.4s-.7.1-1.4-.3c-.6-.4-1.4-1.3-1.4-1.3l.7 5.7 2.9 8 .2 2.3 1.3.7z"
    />
    <path
      fill="#202020"
      d="M327.7 244s-2.8-3-3.7-4.5l-1.7-3s-.8.3-1.8 0c-1-.5-2.2-1.8-2.2-1.8s-.8 1.5 3.2 5.6c4.6 4.6 6.2 3.7 6.2 3.7z"
    />
    <path
      fill="#8b441f"
      d="M334.4 245c1.2-.4 1.1-5.4 0-8.7-1-3.3-2.9-6.2-2.9-6.2s2.3 5.4 2.8 7.5c.4 2.2 0 3.7-.4 3.6-.4-.1-.4-1.3-1.3-3.4-1-2-1.6-2.6-1.6-2.6s3.3 8.8 2.3 8.6c-.9-.2-5.3-9.9-5.5-10.2-.2-.2-.4.4-.4.4s4 12.2 7 11z"
    />
    <path
      fill="#4d2a15"
      d="m337 221.3 2 4.2.6 4.4.2 3.7s0 7.4-.8 7.6c-1 .1-1.4-.7-1.4-.9a2729 2729 0 0 1-1.7-8.3l-1.7-8.5.6-.6.2-1.2 1.3-.1.7-.3z"
    />
    <path
      fill="#8b441f"
      d="M331.6 247c.8 0 0-2 0-2s-.6 1-1.2.3c-.5-.7-1.3-3.1-1.3-3.1l-.5-1.5s-.6 1.6-1.3 1.6-4.6-6.4-4.6-6.4l-.4.6s5.4 11.1 9.3 10.6z"
    />
    <path
      fill="#202020"
      d="M329.1 242.2s.7-1.6.4-3c-.3-1.5-2.2-5.1-2.2-5.1s-.6.1-1.4-.2a9.6 9.6 0 0 1-2.2-1.2 38.3 38.3 0 0 0 5.4 9.5zm3.1-2.3s-.5-3.4-2-6.6c-1.6-3.1-2.6-4.1-2.6-4.1v3.5s1.5.5 2.6 2.4c1 2 2 4.8 2 4.8zm4.3-5.8s-.3-3.7-.8-5.8l-1.2-5s0-.2.3-.4h.6c.8.3 1.1 2.2 1.1 2.2l-.1-3.1-.3-.5h-1.4s.3 1-.1 1.3c-.3.3-.6-.2-.7-.3l-.2.4.4 2-.1 1.7s.5 2.2 1.2 3.5c.6 1.4 1.3 4 1.3 4zm3.3-.5s.6-5.3-.6-8.7c-1.2-3.4-2.2-4.2-2.2-4.2l-.6.6s1.8 3 2.4 5.6l1 6.7zm-5.4 2.7s-.6-4.1-1.3-6.8a82.8 82.8 0 0 1-1-3.6l-1.1-1s.7 2.7.6 3.6l-.1 1.4s.5 1.4 1.3 2.6a25.5 25.5 0 0 1 1.6 3.8z"
    />
    <path
      fill="#904720"
      d="M337.2 242.9c1 0 .1-6-.3-7.5-.4-1.6-3-8.8-3-8.8s3 10.3 2.8 10.8c-.3.8-1.5-3.1-1.7-3-.2 0 2.2 6.9 1.3 7-.8 0-1.3-1.5-1.3-1.5l.1 1.5s.6 1.4 2.1 1.5z"
    />
    <path
      fill="#904720"
      d="M338.5 239.9c.7 0-.2-5.7-.7-8.2l-2-7.5s1.5 3.5 2.3 7.5c.8 4 1.4 9 .6 9.2-.8 0-1.2-.8-1.2-.8v-.9s.3.7 1 .7z"
    />
    <path
      fill="#312317"
      d="M328.8 246.5c0 .4 0 2.4-1 2.2-1-.1-2.9-1.9-3.3-3 0 0 2.2 2.5 3 2.4.8 0 .8-2.5.6-3.2 0-.6.6 1.6.6 1.6z"
    />
    <path
      fill="#d2a567"
      d="M334.1 219.5s1.4.9 2.4.3a4 4 0 0 0 1.8-3c0-.8 0-1.5-.7-2.4-.7-.9 1 .7 1 2.3 0 1.6 0 4.3-2.5 5-2.5.5-1.4-.2-1.4-.2l-.6-2z"
    />
    <path
      fill="#8f4620"
      d="M332.1 214.7s1.6 2.6 2.2 5c.7 2.3.5 3.2.2 3.3-.4 0-.6-.3-.7-.9 0-.6-1.7-7.4-1.7-7.4z"
    />
    <path fill="#1e2121" d="m304.1 218 10.6 15.3 13.2-15-8.3-8.6z" />
    <path
      fill="#4d2a15"
      d="m317.5 208.5-.6 2.4 1.3 4.1 2.2 2.3 2.5 1.7.6-2 .6-2.2.7-.2 1.6.6 1-1.5 1.8-3.1-.4-1.2-.4-.9-2.7-4.6-.9 1.7-.8.5-1.6-.8-1.8 2.4-2.3-1z"
    />
    <path
      fill="#5c3818"
      d="M323 219s.4-.3.6-1.6c.2-1.2.2-4.9-.1-6.4-.3-1.5-1.3-4.4-1.5-4.2-.2.3 1.5 3.3 1.3 7-.3 3.6-.2 4.6-1 5-.7.3.6.2.6.2z"
    />
    <path
      fill="#5c3818"
      d="M323.6 212.8s1.7 2.5 2.5 1.6c.9-.9.5-4 0-5.3l-1.2-3 .5-.6.9 3.4c.3 1.4 1.3 5.2.1 6-1.1.6-2.8-1.5-2.8-1.5v-.6z"
    />
    <path
      fill="#8f4620"
      d="M317.9 214.6s.6-1 1.4-1c.8 0 1 .3 1 .3l.6 2 1.2 2.2 1 1-.5.6-.9.2-2.5-1.4-.7-1-.6-3z"
    />
    <path
      fill="#d2a567"
      d="M322 236.3c-.8.5-2.7-.5-3.7-1.4l-6.8-6.7-.8-3.2 2.2.6 3.9-1.7.7-1.3 4.6-2.4 2.6-1.4 5.5-.1 1.4-2.7s1.8 3.2 2.1 4.5c.4 1.4.3 5.4-.2 5.7-.5.3-2.3-1.2-2.6-1.3-.2-.1 1.4 5.7 0 6-1.3.2-3.6-2.2-3.6-2.2s1 5.2-.2 5.2a10 10 0 0 1-5-2.6s1.3 4.3 0 5z"
    />
    <path
      fill="#8f4620"
      d="m321 229.6 1.1 1.7c.3.4 0 2.9-.2 3.4-.3.9-1.6-1.2-2.3-3l-2.2-3.8c0-.4 3.5 1.7 3.5 1.7zm10.8-12.9s2 8.1 1 8.4c-1 .3-3.6-2.6-4-3l-4-6.4-.8-.8.2-.4 1.7.6 6 1.6z"
    />
    <path
      fill="#8f4620"
      d="M317.9 232.3c-.4.3-1.3-1-1.7-1.4l-3-3.3a11.5 11.5 0 0 1-2.2-2.5c0-.3-.8-1.1-.8-1.1l.7-1h.9s5.4 4.2 5.7 5c.4.6.6 4.1.4 4.3zm8 0c-.2.3-3.7-2.3-5.2-4.4-1.5-2.2-3-4-3.5-5l-.6-1.9 1 .2s8.8 10.8 8.4 11.2zm1.3-3.7c-.2.3-1.7-.9-2.7-2.1-1-1.3-.4-2.9-.4-2.9s3.3 4.8 3.1 5zm2-.5c-.5.3-2.5-2.2-4.2-5-1.3-2-1.6-2.3-1.8-2.5-.5-.3-1.4-.4-1.4-.4l-.2-.3 1-.2.6-.8 1-1.3 4.3 8.5s1 1.9.7 2z"
    />
    <path
      fill="#ab6d29"
      d="M318.3 234.9c0 .3 0 .6-1.2.5a21 21 0 0 1-9.9-7.8l-3-5 1.1-1.4 9.6 11 3.4 2.7z"
    />
    <path
      fill="#8f4620"
      d="M318.3 234.9c0 .5-.5.6-1.1.5-.6-.2-3-1-6.9-5.3a33.3 33.3 0 0 1-5.3-7.4l-.2-1.8 1.2-.5 6.5 10 5.8 4.5z"
    />
    <path
      fill="#4d2a15"
      d="M324.6 230.6s-2-1.5-3.2-3a24 24 0 0 1-3.8-5.7c.1-.7 1.2-.7 1.2-.7v-1.8l.2-.6 1.9.8 2.3 2.9.9 1.1s1.5 3.7 1.2 4c-.3.3-2.4-2-2.7-1.7-.3.3 2.4 4.4 2 4.7zm-3.7-1s.7 1 .4 1.7c-.3.7-.5 1-1.5-.4a16 16 0 0 0-2.3-3c0 .1.1 2.3-.3 2.3-.5 0-2-1.9-3-3.3l-2.5-3.9v-2l-.1-2.5.3.9.4.7 3.6 4.2 1-.7 2.1 4 2 2zm-13.5-6.1s2.8 4.8 5.3 7.5a17.4 17.4 0 0 0 5.6 3.9l-8.4-9.9-2.5-1.5zm21.2 2.8a12 12 0 0 1-3-3.4c-1-1.6-1.9-4-1.8-5 0-1 .4-3.4.4-3.4s2.8 3 3.4 4.3c.5 1.4 1.7 3.3 1.4 3.5-.2.2-2.1-1.3-2.4-1-.2.4 2.3 4.8 2 5zm3.2-3c-.3.1-1.8-1.6-2.1-2.6a14.8 14.8 0 0 1-.6-3.2l-1.2-3v-3.3l1.4-.2 1.9 2.7s.7 1.5.7 3.7c0 2.3.3 5.6 0 5.8zm-22.5 8a41.8 41.8 0 0 1-4-6l-1-2.9.5.4s.8 3.2 4.7 7.1c4 4 4.9 4.2 4.9 4.2s.7 2.2.4 3c0 0-2.9-2.6-5.5-5.7z"
    />
    <path
      fill="#202020"
      d="M313.6 235.9s-3.4-3-6-6.4a46.6 46.6 0 0 1-4.4-6.6l1.2-1a46.3 46.3 0 0 0 9.2 14zm4.7-1-6-6.1c-2-2.2-3-4.4-3-4.4l1.6.6s.7 1.7 2 3.5l5.4 6.4zm-.8-7s-2.1-2.6-3.1-4.2l-2-3.8s2.8 3.3 3.6 3.5c.9.2.9 0 .9 0s-.4 1.2-.1 2.2l.7 2.3zm.9-10.6s.3 1.9.1 3c-.2 1-.8 1-.8 1a15.7 15.7 0 0 0 4 4l-1.8-2.7c-.5-1-1.3-2-1-2.8.4-1 2.1.6 2.6 1l2.6 2.8s-.8-2.5-1.8-3.4a53.6 53.6 0 0 0-4-2.9z"
    />
    <path
      fill="#202020"
      d="m327 222.8-1.7-4.2-1.6-5.2v2.8c-.1 1.2-.5 3-1 3.3-.6.2-.7.3-1.7 0-1-.2.7.5.7.5s1 0 1.4-.5c.4-.5.5-1.5 1-1.4.4.2 1 1.7 1.3 2.4l1.6 2.3z"
    />
    <path
      fill="#202020"
      d="M323.7 213.4s2 2.3 3 1.3c.8-1 .3-4 .3-4s1.2.5 1.6.2c.4-.4.2-1.5.2-1.5s2.3 3.2 3.3 5.3c1.1 2 1.6 5.8 1.6 5.8s-1.8-3-2.7-5.8c-.9-2.6-2.1-3.8-2.3-3.5a5.3 5.3 0 0 0-.3 3c.2 1 1 2.1 1.5 3.5l1.1 3.4-1.6-2.5c-.7-.8-1.3-1.2-1.7-1.6-.4-.4-1-1.2-1.7-1.4-.6-.3-1.8-.9-1.8-.4s-.3-1-.3-1l-.2-.8z"
    />
    <path
      fill="#171717"
      d="M316.8 223.3a27 27 0 0 0 4.2 6.3s-2-1.8-2.8-3a15.5 15.5 0 0 1-1.4-3.3z"
    />
    <path
      fill="#8f4620"
      d="M330.2 223.9c-.3 0-1.3-.3-1.4 0 0 .4.6 1.8 1.3 2.5.7.7 1 .7 1.1.6.2 0 0-.7-.2-1.4v-1.7c-.1-.3-.8 0-.8 0z"
    />
    <path
      fill="#d2a567"
      d="m306 209.4-1.3.7-1.4 3 .4 5.3 2.1 3c.8 1.2 3.5 4.2 4.2 4 .7-.2 1.4-2.3 1.5-3.4l.2-3.2 1.8 2.3c1.1 1.3 2 2.4 2.6 2.3.5 0 2-3.2 2-3.6.1-.4-3.8-10-3.8-10l-1.8-1-6.6.6z"
    />
    <path
      fill="#ab6d29"
      d="m314.8 217.4 1 3.7c.5 1.2 0 2.3.3 2.3.2 0 2.3-2.7 2.3-4 0-1.2 0-2.5-.5-6.3s.2-5 .2-5l-1.2-1-2 4.2-.1 6.1zm-7-2.2.7 5c.3 1.2 1 3.3 1.4 3.2.4 0 1.6-3.3 1.7-4.4 0 0-.9-1.6-.8-5.5 0-4-.4-4.4-.4-4.4l-2.6 6.1z"
    />
    <path
      fill="#45392d"
      d="M302.5 207.5s-3.1 4.6-3 7c0 2.5.4 2 1.1 4.2.7 2.3 1.1 5.6 1.2 5.9 0 .2.5-.2.5-.5l.2-16.6z"
    />
    <path
      fill="#ab6d29"
      d="M302.5 208s-2.7 4.3-2.5 6.6c.2 2.3.5 2.3 1.3 4.4.8 2 .8 5.4.8 5.4s1-.2 1.9-.9c1-.7 1.8-2.1 1.8-2.1l-1-2.1a8 8 0 0 1-.6-2l-.8-1 .2-4.1.7-3v-1l-1.8-.1z"
    />
    <path
      fill="#dbad6c"
      d="M317.2 215.3s-1.3-.3-1.9-.6c-.6-.3-.8-1.1-.8-1.1l.4-.8 2.3 2.5z"
    />
    <path
      fill="#d2a567"
      d="M303 208.5s-2 4.3-1.7 7.2 1.9 6.6 2 6.7c.2 0 0-.3.1-1v-8.7l.9-2.8v-1.5l-1.3.1z"
    />
    <path
      fill="#8f4620"
      d="M307.8 209.5s.3 1.2.1 1.8c-.2.5-1.2 1.2-1.6 2-.5.8-1 2.8-1 2.8s.4-1.1 1-1.8c.7-.7 1-1.2 1-.8.2.4.4 2 .3 2.3-.1.3-.7.8-1 2-.4 1.3 0 2.4 0 2.4l.5-2.2c.2-.6.7-1 .7-1l1 2.4s0-1.1.3-2c.1-.8 1-2 1.3-2 .3 0 .8-.1-.3-.7-.4-.2-.1-4.2.1-4.4.3-.2 1.9-.2 1.7-.8a11 11 0 0 0-1.6-2.2c-.1-.1-2.5 2.2-2.5 2.2z"
    />
    <path
      fill="#dbad6c"
      d="m317 218.1-1.5-.3c-.5 0-.6-.6-.6-.6l.2-.6 1.2.7.7.8z"
    />
    <path
      fill="#8f4620"
      d="M304.4 218.6c0 .4-.3.9-.5 1.5-.3.7-.4 1.6-.4 1.6l-.4-3.3-.3-2.4c-.2 0-.7.7-.7.7s0-1.6.3-2.3c.3-.7.5-1.8.3-2-.3-.1-.8.3-1 .7a30.8 30.8 0 0 0-.8 1.3s.3-1.3.6-1.9c.3-.5 1.8-2.2 2-2.8.4-.7.4-1.4.4-1.4h1s1 .8 1 1.5c0 .4-1 .9-1 1 0 0-.8-.1-1 3.2-.2 3.4.6 3.2.5 4.6zm9.4-8.7s.2 1.8 0 2.4c-.2.6-.7 1-1.1 1.8-.4.7-.4 2.4-.4 2.4l.5-1.4.7-1c.1 0 .6.7.8 1.7l.8 2.5s-.2-1.2.1-1.2.5-.1.9.2l.9.8s0-.5-.7-1.1c-.6-.7-1-.6-1.1-1.5-.2-1-.3-1.8-.2-2.2 0-.3.5.3.9.7l1.5 1.4-.7-1v-3c0-1 0-1.9.4-2.1.3-.3.4-1.6.2-1.8-.1-.2-3.5 2.4-3.5 2.4z"
    />
    <path
      fill="#1e2121"
      d="M324.6 206.1a23.7 23.7 0 0 0 1.5 7.1s-1-2-1.6-3.6-.9-3.5-1.3-3.6c-.4-.2-1 .8-1 1.5s.5 3.3 1.1 4.2c.6 1-1-1.2-1.3-2.3l-.7-2.2s-.4 1-.3 2c.2 1.1 1.1 2.7 1.1 2.7l-1-1-.6-.7s0 1.5.4 2.1l1.2 1.7-1.3-1-.4-.8s.2 2.1.6 3.3l1.5 3s-1.2-1-2-2.9c-.8-1.8-1.2-7.3-1-8.1l1.1-1.9c.6-.8 1.3-4.7 1.3-4.7s.9 3.6 1.5 4.3c.6.7 1.2 1 1.2 1zm-8.6-1 .8 1.3.6 1s-1 1.1-2.3 2c-1.2 1-2.8 2-3.1 1.5-.4-.5-.4-1-.4-1s1.4-.8 2.4-1.8a6.6 6.6 0 0 0 1.6-2.2c.2-.6.5-.9.5-.9zm-10.9 3.5s.2 2.2 1.2 2.2c.9 0 3.7-2.9 3.9-3 .2-.1.4-.8.4-1l-.2-.8s-3 3-4 3.2c-.9 0-1.3-.6-1.3-.6zm.1-3-.3 2c0 .5.2.9.2.9s-2.2.7-2.5 0c-.4-.6-.1-1.6-.1-1.6h1.5c.6-.2 1.2-1.3 1.2-1.3zm20.3-3.1 1.5 3.2 1.4 2.8s-1.4-1.7-1.9-2l-1.2-1 .2-1.1v-2z"
    />
    <path
      fill="#dbad6c"
      d="M302.1 207h1.3c.5 0 .8-.2.8-.2l.9-1.2s-.5 1.4-.2 2.5c.3 1 1 1.1 1.2 1.1a4 4 0 0 0 2.2-1.1c.9-1 2.1-1.9 2.1-1.9s-.3 1.3.2 2.7c.5 1.3 1.2 1.3 2.2.4 1-.8 2-2.2 2.6-2.8l.7-1 1.1-1 1-5.4-.5-.7-1.4.7-1.7-.7-.5-.7-1 1.7-1 .6-.5.1-1.2.3-.5-1.1-.3-.8-.6-.3-2.4 2.5-1.4-.1-1.3 2.2-1 1.3-1 2.4.2.5z"
    />
    <path
      fill="#8f4620"
      d="M313.9 201.5s.2 1.3-.5 3.6-1.6 3.9-1.6 3.9 2.4-1.5 3.6-4.2c1.1-2.6.9-5.7.9-5.7l-2.4 2.4zm3-2.5s.2.4 0 2.4l-.8 4 .6 1.2c.4.7 1.2 1.8 1.7 1.6.6-.2 1.6-.9 2.2-2.2.6-1.4 1.1-2.7 1.4-2.9.2-.2.3.1.4.2 0 .1.3 1.3.9 1.8.5.5 1.3 1.3 1.6 1 .4-.2.8-.9.7-1.2l-1.3-4-1.6-4-1-1.6-2.8.3-2 3.4z"
    />
    <path
      fill="#ab6d29"
      d="M321.7 195.3s.8 1.7.9 3.6c0 1.8-.4 3.8-.4 3.8s.2-2.3 0-3.7c-.3-1.4-.7-2.3-.7-2.7l.2-1z"
    />
    <path
      fill="#4d2a15"
      d="M325.6 202.6v2.3c-.2.8-1.3-.5-2-3-.6-2.5-.5-3-1-4.3l-.9-2.2 1.5-.3 2.4 7.5zm-7 4.6s2.8-1.5 3.1-6.2c.2-2.1-1.2-5.7-1.2-5.7s0 3.8-1 6.2a60.9 60.9 0 0 1-1.9 4s.7-.2 1-.6l.8-1.1s.1.7-.1 1.6l-.6 1.8zm-2.3-8.1s-.1 1-1.3 2c-1 .9-3.1 1.9-3.1 1.9s1.5-1.4 2-2.6c.6-1.2.1-2 .1-2s-.2.6-.8 1.1c-.6.5-1.6.6-1.6.6s0-.6.7-1.3c0-.1 0-.4.2-.7.3-1 1.1-2.3 1.1-2.3s.7 1.4 1.3 2l1.4 1.3z"
    />
    <path
      fill="#1e2121"
      d="M324.7 193.6a17.6 17.6 0 0 0 .9 9s-1.4-2.2-1.7-3c-.4-1-.4-2.3-.7-3a3.2 3.2 0 0 0-1-1c-.3-.2-1-.1-1-.1s.8-.4.8-1.1v-1l1.4.3h1.3zm-6 9.8s1.4-2 1.8-4.6c.4-2.6 0-3.5 0-3.5s-.6 0-1.1-.5c-.5-.5-1.3-1.8-1.3-1.8s.2 1.4 0 3c-.4 1.6-1.8 3-1.8 3s.8.4 1.4 0c1.5-.9 1.4-2.5 1.4-2.5s.3.2.3 2.2-.7 4.7-.7 4.7z"
    />
    <path
      fill="#8f4620"
      d="M301.2 206.9c-.3 0 1-2 1.8-3.4l2.1-3.4s.3.3.8.3a3.6 3.6 0 0 0 2.4-1.7 7 7 0 0 0 1-2.5c0-.3-.1 1.8 1 3 1 1.1.9 1 1.3 1 0 0 0 1.4-.4 2.7l-.8 3.3s.2-2.5-.3-3.2c-.4-.8-.6 0-1 1-.3.9-1.1 1.5-1.1 1.5s.6-1.1 1-2.3c.4-1.2.2-1.2 0-1.2 0 0-.2-.1-.6.4-.5.5-.9.6-.9.6s.5-.4.7-1a6 6 0 0 1 1-1.8c.2-.3.4-.7.4-1 0-.2 0-.7-.2-.7s-.5.3-1.4 1.2l-1.3 1.3-.9 2.6a17 17 0 0 1-1 2.8l-.6.4.9-2.4 1-3.4c-.2-.3-.7-.3-.8 0l-2 2.8c-1 1.4-1 3.1-1.2 3.2l-1-.1z"
    />
    <path
      fill="#874f20"
      d="M325.7 192.1c0 .2 0 1.2-1 1.5a3.5 3.5 0 0 1-2.3-.2c-.2 0-.2-1.4-.2-1.4l3.5.1z"
    />
    <path
      fill="#b27129"
      d="M306 195.4s-.2.9-.8 2c-.5 1.2-1.4 2.2-1.3 2.4 0 .1.6.7 1.4.6.8 0 1.1-4.8 1.1-4.8l-.1-.2h-.3z"
    />
    <path
      fill="#dbad6c"
      d="M318.4 192.7s-.3 6.4-2.1 6.4-2.7-3.2-2.7-3.2-.1 4.3-2.4 4.3c-1 0-2.1-3.4-1.9-4 0 0-.4 2.3-1.5 3.2-2.2 1.7-3.5.9-3.6.6 0-.3 1.8-2 2-4.6 0 0 .4.1 1-.6s.7-1.6 1.3-1.5c.5.2 3-1 3-1l1.4-1.7s.2.5 1.2-.2a3.6 3.6 0 0 0 1.3-1.7l2.7 2.3.3 1.7z"
    />
    <path
      fill="#b27129"
      d="m311.4 186.6 2.7 3.8.6-.5c.4.5.6.9.4 1.2-.4 1-1.3 2.3-.5 3.7 0 0-.3-.8.1-1.8s.7-1.4 1-1.3c.2 0 .6 5.8 1 5.8.3 0 .9-2.7.9-4.5 0-1.8.3-.3.5 0 .2.4 1.8 3 3.1 2.6 1.4-.4 1.2-2.8 1.2-3.3 0-.6-1-3.7-1-3.7l-6.1-3.9-.5 1.6c-.3 1-3.4.3-3.4.3z"
    />
    <path
      fill="#8f4620"
      d="M320 186s.4.4 1 1.9.7 6.4-.1 6.4c-.8 0-2.3-1-2.6-1.6-.3-.7 0-3.1-.4-3.8a8.1 8.1 0 0 1-1.2-2.7l.1-2 1.4-.5 1.9 2.3z"
    />
    <path
      fill="#4d2a15"
      d="m319.6 184.5 2.6 3.9 2.3 3.3 1.2.4a2.5 2.5 0 0 1-3.2.5c-.9-.5-.4-2-1.5-4.5-1.2-2.5-3.2-3.6-3.2-3.6l.7-.7 1.1.7z"
    />
    <path
      fill="#1e2121"
      d="M318.2 182.4s2.3 1.5 3.1 3.2c.9 1.7 1.3 2.7 2.3 4.3 1 1.6 2.1 2.1 2 2.2 0 .1-.7.3-1.2 0a4.7 4.7 0 0 1-1.4-1.6 35 35 0 0 0-2.4-4.2c-.5-.7-2.3-2-2.3-1.9 0 .1.5.5 1.5 2.1a7 7 0 0 1 1.2 3.1l-1.1-2c-1-1.5-2.8-3.3-2.9-3-.1.2 1 1.9 1.5 2.9l1.3 3.3-1.8-3c-1-1.5-1.2-1.3-1.6-1.8l-1.4-1.8s1 .3 1.8-.3c1-.6 1.4-1.5 1.4-1.5z"
    />
    <path
      fill="#8f4620"
      d="M312.3 186.7s1.5.3 2.3.2h1.1s.5.6.5 1.4c0 .7-.5 2.1-.8 2.2-.2 0-.2-1.3-.5-1.8l-2.6-2z"
    />
    <path
      fill="#b27129"
      d="M313.1 190.6s.5 1.6.1 3.9c-.4 2.2-1.7 4.6-2 4.6-.3 0-.2-2.6-.4-4a38.8 38.8 0 0 0 0-.4l-.5 1.6.4-2.6-.1-.8 1.6-2 .9-.3z"
    />
    <path
      fill="#8f4620"
      d="M310.3 192.3c-.5.5-1.2.4-1.8.6-.6.2-.9 1-.9 1s.5-.3.7-.2c.3.1.5.1.1 1.2-.5 1.1-2.2 3-2.1 3 0 0 2-1.5 2.5-2.5.7-.9.6-1.4.8-1.8 0-.3.8-.7 1-.7.1 0 .5 0 .6.7l.6 2.6.8-2.6c.2-1 .2-2.9.2-2.9l-.6-.1c-.5-.1-1.5-1-1.5-1s.2 2-.5 2.7z"
    />
    <path
      fill="#dbad6c"
      d="M318.3 180.8s.6 1.5-.7 2.6c-.4.3-.7.5-1.4.6a4.5 4.5 0 0 1-1.7-.6l-4-1.6-2-.6-1-.3.2-1.1h3l3 1.2 1.3.5 1.1.2h.9l.7-.2.4-.3.2-.4z"
    />
    <path
      fill="#ab6d29"
      d="M318.3 180.8c0 .3-.3 1.1-.6 1.3-.3 0-.8.3-2 0-1.1-.2-2.3-1-3.6-1.3-1.3-.4-2.3-.7-3.3-.7s-.5-.4-.5-.4 2.3-.3 4.3.5c2 .7 2.9 1.2 4 1.2 1.4 0 1.7-.6 1.7-.6z"
    />
    <path
      fill="#4d2a15"
      d="M307.6 179.6h.9c.4 0 .7-.3.7-.3s0 .5-.2.7c-.3.2-1 .1-1.2.1l-.2-.5z"
    />
    <path
      fill="#dbad6c"
      d="M315.3 184.4s1.3 1.3 1 2.4l-2.7-1.2-4.2-1.7-2.3-.7-.3-.4.6-.8.2-.8 2.8.4 3 1 1.9 1.8z"
    />
    <path
      fill="#dbad6c"
      d="M312.4 186.3s2.4 3.1 1.8 4.1l-5.6-3.5-2 3.3-4.7-2.3s3.8-3 4.2-3.5l.5-.7 2 .4 3.4 1 .4 1.2z"
    />
    <path
      fill="#ab6d29"
      d="M311 181.6s2 .5 3.3 1.2c1.3.6 3 .8 3 .8s-.6.7-2 .8c-.4 0-1.4-.8-2-1.3-.7-.4-2.6-1-2.6-1l.3-.5z"
    />
    <path
      fill="#4d2a15"
      d="M307.6 180.6s1.4.3 2.2.7c1 .3 1 .2 1.2.1.3 0 .3-.2.3-.2s.2 1-.5 1-1-.3-1.8-.7c-1-.4-1.5 0-1.5 0v-1z"
    />
    <path
      fill="#ab6d29"
      d="M315.4 186s1 .7.9.9c-.2 0-.7.3-1.6.4a3.4 3.4 0 0 1-2-.4c-.6-.2-1-1.3-2.5-2a18 18 0 0 0-2.8-.9l-1.3-.2 1-.4 3.2.6 2.8.9 1.7.8.6.4zm-5.4 2 .6 2.6-.4 1.5-.8.6-.8-.3-.3-.5s.4-.6 0-1.1c-.3-.6-2-1.2-2-1.2s.7-1.3 1.4-1.6c.8-.3.4-1.2.4-1.2l1.9 1.2z"
    />
    <path
      fill="#4d2a15"
      d="M306.8 182.8s.5.4 1.5.5c.5 0 1.3.2 2.2.5l1-.3-.5.4c.9.2 2 .7 2.5.9a5.8 5.8 0 0 1 2 1.3l-2-1a17.4 17.4 0 0 0-3-.9c-2-.3-4-.2-4.3-.4-.4 0 .1-.1.4-.3.2-.2.2-.7.2-.7z"
    />
    <path
      fill="#ab6d29"
      d="M314 189.8s.7.7 0 .9c-.6.2-2.4.2-3.2-.7l-.6-1.2a14 14 0 0 0-2.4-1.7c-.7-.5.3-.5.3-.5l3.6 1.5a13 13 0 0 1 2.3 1.7z"
    />
    <path
      fill="#4d2a15"
      d="M314 189.9s-1.2-1.8-4.9-3.3l1.2-.2h-2a24 24 0 0 0-.8-.3c-2-.6-2-.6-2.2-.8-.1-.3-.4 0-.6.3l-.7 1a5 5 0 0 1 2.5-.1c1.1.3 1 .7 1 1-.1.5-1.4 2-1.3 2.1.2 0 1-1.5 2-1.3 1 .3 1.2.8 1.2.8s0-.6-.2-.8c-.2-.2-1.3-1.3-1-1.3.3 0 1.6.3 3.3 1.2 1.8.9 2 1.1 2.6 1.7z"
    />
    <path
      fill="#dbad6c"
      d="M308.1 187s2.8.8 2.7 3.8c-.1 3-2.3 2.4-2.5 1.3-.2-1 .3.5 1 .4.9-.2 1-1 1-2.2 0-1-.3-1.6-1-2.2a12 12 0 0 0-1.2-1z"
    />
    <path
      fill="#6c3f18"
      d="M296 179.9s.4.2-.4 2.3c-.8 2.1-1.3 2.8-2.5 4.2-2.2 2.4-3.2 2.5-3 3.5.3 1 1.1.8 1.3.8.2 0 4.3-6 4.3-6l.9-3.5-.2-1-.3-.3z"
    />
    <path
      fill="#dbad6c"
      d="M306.1 175.6s1.2 1.8.8 5c-.3 3.4-4.7 6.3-4.7 6.3l-6.4 4.4-2.7-.2h-.8c-.4-.1-.8-.5-.9-.5l-.5-1.2.9-1 2.3-2.3 1.4-2s.7-1.3.8-2.5c0-1.1-.2-1.7-.2-1.7l.5.8.3 1.8-.2 2 1.6-1.2 2.2-1s.7 0 1-1.3c.5-1.2.9-3 .9-3.8l-.1-1.8h.3c.2 0 .7 1.2.7 1.7l.4 2.8 1-1 1-1.5c.2-.5.4-1.3.4-1.8z"
    />
    <path
      fill="#904720"
      d="M306.8 192.2s.5.4.3 1.6c-.2 1.2-1.1 1.8-1.6 1.8V194l-1.4-1.2-1.5-.4.3-.3c.1-.2 1.7-.8 1.7-.8l2.2.9z"
    />
    <path
      fill="#ab6d29"
      d="M305.7 192.2s.5.4 1.2.3c.7-.2 1-1.3.6-1.8-.4-.4-.2 1-.7 1.3-.4.1-1-1.2-1.5-1.3-.7-.1-1.6.3-1.9.7-.2.4 1 0 1 0l.7.3h.5l.1.5z"
    />
    <path
      fill="#904720"
      d="M296.5 187.6s.8.3 1.7.1l3.1-1 1.8-1.3c.7-.7 3.1-2.2 3.4-5.1.2-3-.4-4.7-.4-4.7s3.5 3.8.5 8.2c-2 2.8-3.8 3.7-3.8 3.7s3.4-1 3.7-.2c.3.8-.1 2-.2 2.3 0 0 1.9.4 2.2 1.4.1.6-2.2-.7-4-.2-1.8.4-2.5 1.4-2.5 1.4s-.4-.5-2-.5c-1.5 0-2.2.7-3.1.7-1 0-3.7-.6-4.2-1.4l1.8-2.2c.8-1.6 2-1.2 2-1.2z"
    />
    <path
      fill="#ab6d29"
      d="M303.8 179.7s1.3-1.3 1.8-2.3c.4-1 .5-1.8.5-1.8s.2 1-.6 2.3-1.7 2-1.7 2v-.2z"
    />
    <path
      fill="#904720"
      d="M303.4 176.7s1.1 4.4 0 6.1c-1.3 1.8-6.5 4.1-6.5 4.1s4-2.1 5.2-4.6 1.1-4.5 1.1-4.5l.2-1z"
    />
    <path
      fill="#1e2121"
      d="M298.2 187.7s1.7 0 2.6-.6c1-.5 2.3-1.7 2.3-1.7s-1.2 1-1.6 1c-.3 0-.6-.5-.5-.9 0 0-.3.8-1 1.4-.8.5-1.8.8-1.8.8zm3.9-5.4s1.4-1.4 1.4-4.4c0-3-1.2-2.5-1.2-2.5s1 .7.7 3c-.2 2.3-1 4-1 4zm1.7.3s1.6-.3 2.1-1.3.6-2.7.6-2.7-.2 1.7-.7 2.3c-.4.6-2 1.7-2 1.7zm-1 9.5s.8-1.5 1.9-1.1c1 .4 1 1.2 1 1.2s-.4-.6-1.2-.7c-.7 0-1.6.6-1.6.6zm-2.9-2.7 3.7-1 3-1s-1.2 1.3-3 2.3c-1.6 1-3 1-3 1s3.2-1.4 3.4-2c0 0-3 .9-4 .7z"
    />
    <path fill="#fff" d="M296.2 185.8a2.6 2.7 67.8 0 1-3 4.4" />
    <path fill="#f16e16" d="M296.1 186.1a2.3 2.4 67.8 0 1-2.7 3.8" />
    <path d="M295 187.4a1 1 0 1 1-.8 1.4" />
    <path
      fill="#d5d3ca"
      d="M295.2 188.6a.3.3 0 1 1-.6-.1.3.3 0 0 1 .3-.3.3.3 0 0 1 .3.4z"
    />
    <path
      fill="#ab6d29"
      d="M296.8 184.2s1.6-1.5 1.9-3.5c.3-2 .1-3.2.1-3.2l.9 1 .3 1.4-.5 2.6 1.6-.8c.6-.8 1.5-4.2 1.2-6.3 0 0 .4 1-.2 3.8-.6 2.9-1 3.2-3.2 4.4a9.6 9.6 0 0 0-3.8 4.2 19 19 0 0 1-2.3 3l1.6-2.6c.8-1.8 1.7-2.8 1.7-2.8l.7-1.2z"
    />
    <path
      fill="#904720"
      d="M296.1 185.4s.7-2 .7-3.1-.7-2.4-.7-2.4 1-.1 1 2.2c.1 2.4-.4 2.6-1 3.3z"
    />
    <path
      fill="#4d2a15"
      d="M299.2 182.8s.7-1.7.7-3c0-1.1-1-2.3-1-2.3s1.1.3 1.2 2.4c.1 2.2-.2 2.2-1 3z"
    />
    <path
      fill="#ab6d29"
      d="M292.1 191s-.6-.8-.5-1.3c0-.6 0-.7 1.4-2.2a13 13 0 0 0 2.5-3c.3-.9 1.5-3 .6-4.6 0 0 .6 2.4-.8 4.3a15.7 15.7 0 0 1-3.3 3.7c-1.1.8-1.3 1.2-1.2 1.7 0 .5.1 1 .3 1 .4.3 1 .3 1 .3z"
    />
    <path
      fill="#6c4119"
      d="M305.5 195.6s.3 0 .5-.3.2-1-.3-1.6a3.3 3.3 0 0 0-1.7-1.1l-2-.4s.4.8 1.3 1.3c.4.2 1.2 0 1.6.4.5.4.6 1.7.6 1.7z"
    />
    <path
      fill="#6c4119"
      d="M305.5 195.6s1.5-.5 1.6-2l-.1-1.2s.2.5.8.7l.6-.2s-1 2.8-3 2.7z"
    />
    <path
      fill="#bf802d"
      d="m294.8 195.3.8.8.9 1 3.7-1 1.2-1.2-1-1.6h-2.7l-3 2z"
    />
    <path
      fill="#f9c83a"
      stroke="#8f4620"
      strokeWidth=".4"
      d="m303.8 194-.7-.9-.7-.6c-.6-.3-2.8-.3-2.8-.3l-1.6.3s-.5.5-1.3.3a22 22 0 0 1-2.6-1l-1.9-.7s-1.3-.6-1.6-.5c-.3.1-1.5 1.3-1.5 1.3s-.2.7.3.7c.4 0-.7.2-.7.2s-2.8 1.6-3.2 4.4c-.5 2.7 4.6 6.8 6.5 4.7 0 0-2.8-2-2.2-3.7.5-1.7 1.8-2.8 4-3 2.1 0 2.3-.3 3.2-1 1-.6 2.7-1 4 .3 1.3 1.4-5 2.7-5 2.7l.7 1s7.7-2.7 7-4.1z"
    />
    <path
      fill="#fcf3d8"
      d="M289.4 200.7s-3.1-.8-2.9-3.7c.3-2.8 3-3.9 3.4-4 .4-.2.3-1.6.8-1.8a2.4 2.4 0 0 1 2 .5l1.4.8s-5.5 2.4-5.5 5.6c0 2.1.8 2.5.8 2.5z"
    />
    <path
      fill="#fdeaaf"
      d="M303.8 193.8s-.4.2-.5 0c-.6-1-2-1.4-3-1.3-1.5 0-2.4.5-3.4.5s-.7-.1-1.8-.2c-1.1 0-3.5-1.8-4-1.6-.6.2-.8.8-.8 1.1.1.4-1 .4-1 .1-.2-.2.7-1.7 1.7-1.7 2.6 0 4.6 1.7 5.8 1.7 1.3 0 1.7-.7 3.4-.7s3.5.8 3.6 2z"
    />
    <path
      fill="#513625"
      d="M295.2 195.8s1.3-.2 2.2-.6l2.2-.8-2 1.2-2 .5-.4-.3z"
    />
    <path
      fill="#f9c83a"
      d="M290.8 202.3c-.2 0-1.3 0-3-1.1-1.8-1.2-2.3-3.2-2.3-3.2s-.4-1.9 1.4-3.8c1.8-1.9 2.1-1.3 2.2-1.2.1 0 0 .1 0 .1l-1.7 1.3-.7 1.3-.7 1.2v1.4l.8 1.5 2.5 1.5 1.5 1z"
    />
    <path
      fill="#8b5122"
      d="M289.8 191.4v-.2.3-.3.3-.3l-.3.2h.2v-.2l-.2.2.2-.2h-.2a.3.3 0 0 0 0 .2l.2-.2h-.2.2-.2.2-.2.2l-.2-.1.2.1-.2-.1-.1.1a4.6 4.6 0 0 0-.4.5l-.2.6v.1c0 .3.2.5.4.6h1.4a.3.3 0 0 0 .1-.4.3.3 0 0 0-.3-.2l-.7.1a.8.8 0 0 1-.3 0v-.2a.5.5 0 0 1 0-.2 3 3 0 0 1 .3-.5l.2-.1v-.1l.1-.2a.3.3 0 0 0-.3-.2.3.3 0 0 0-.2.3.3.3 0 0 0 .3.2z"
    />
    <path
      fill="#f9c83a"
      d="m295.1 194.1-3.8 1.1c-.3.2 1.2 0 2.4 0l1.3.1.9-.2c1.4-.5 4.4-1.6 4.7-.3.2 1-4.1 2-4.1 2v.5l3.4-.9 1.9-1 .5-.9-1.7-1.2H298l-1.2.3-1.7.5z"
    />
    <path
      fill="#8f4620"
      d="M289.7 199.5c.3.8.9 2 1.6 2.3 0 0 .1 0 0 0 0 .1-.5.5-1.7.1-1.2-.3-3-.7-4.1-4v.7l.7 1.3 1.1 1.2 1.9 1.1 1.2.3 1-.2.6-.4-1.1-1-1.4-2.3.2 1z"
    />
    <path
      fill="#fcca3d"
      d="M302.1 232.6v1.2h-.7v-1.5zm-4.7-34.4-1.2-1.4-.8.1 1.2 1.8z"
    />
    <path
      fill="#816c2a"
      d="m302 235.5-1.7-1a10 10 0 0 0-2.4-.6v.3h.2l2.1.6a14.3 14.3 0 0 1 1.7 1l.1-.3zm0-3.1h-3a4 4 0 0 0-1.3.7l.1.2a3.8 3.8 0 0 1 2.6-.7 23 23 0 0 1 1.4.1v-.3zm-.4-2.7-2.6 1.4-1.6 1.2.2.2.5-.4a16.5 16.5 0 0 1 2.6-1.6l1-.5-.1-.3zm-1.7-2.7s0 .7-.3 1.2a8.6 8.6 0 0 1-.6.8 86.3 86.3 0 0 1-2.5 2.6l.2.3a220.4 220.4 0 0 0 2.5-2.7l.7-.8c.3-.6.3-1.3.3-1.4h-.3zm-2.1-1.2a4.2 4.2 0 0 1-.2 2.2l-1 2.2-.4.9-.2.3.2.2s1.3-2.2 1.7-3.5c.2-.5.2-1 .2-1.5a4 4 0 0 0 0-.9h-.4zm-2.1-.3a8.7 8.7 0 0 0 0 1.2c0 .6 0 1.2-.2 1.7l-.7 1.8-.3 1 .3.1 1-2.8c.2-.5.2-1.2.2-1.8v-1.2h-.3zm-1.6 0v1.2l-.3 2a52.2 52.2 0 0 0-.5 2.5h.3l.2-.8.3-1.7c.3-1 .3-3.2.3-3.2h-.3zm-1.8.3a13 13 0 0 0 0 2.9 14 14 0 0 0-.4 2.5h.3a23.3 23.3 0 0 1 .4-2.4l.1-1.4v-1.6h-.4zm-1.3.2v.2a9 9 0 0 1-.3 2.2l-.6 1.9-.2 1h.3l.8-2.9a8.9 8.9 0 0 0 .3-2.2v-.2h-.3zm-1.6 0v.7c0 .6 0 1.4-.4 2a5.5 5.5 0 0 1-1.3 1.6 9.8 9.8 0 0 1-.7.4l-.2.2.1.3s1.7-1 2.4-2.3c.4-.7.5-1.6.5-2.2v-.7h-.4zm-.9-.3v.2a6.7 6.7 0 0 1-1 1.9c-.3.4-.9.8-1.3 1.1a12.1 12.1 0 0 1-.8.5l.2.3s1.4-.8 2.1-1.7a8 8 0 0 0 1.1-2.2h-.3zm-1.5-.7v.1a6.2 6.2 0 0 1-1 1.3c-.1.2-.5.4-.9.6l-.6.4.1.3.7-.4 1-.7.7-.9.3-.6-.3-.1zm-.7-1-.3.3-.9 1a6.5 6.5 0 0 1-.5.4l-.4.3.1.3.7-.4c.7-.6 1.5-1.7 1.5-1.7l-.2-.2zm-.4-.6-.2.2-.9.6a2 2 0 0 1-.8.3v.4l.6-.3c.7-.3 1.5-1 1.5-1l-.2-.2zm-.2-.7-.8.4-.6.3a1.9 1.9 0 0 1-.4.2v.3c.2 0 .3 0 .5-.2l1.4-.7-.1-.3zm-.4-1.3-.5.5-.9.3v.3a2 2 0 0 0 1.2-.5 3.8 3.8 0 0 0 .5-.4l-.3-.2zm.1-2.2-.6.5c-.3.3-.6.6-.7 1a.6.6 0 0 1-.1 0v.5l.2-.2a.8.8 0 0 0 .2-.2c0-.2.4-.6.7-.9a7.9 7.9 0 0 1 .5-.5l-.2-.2zm10.7-12.8h1.6l.1-.2v-.1h-.1v.3-.1h-.2.1-.1v-.2l.1.1v-.1.1-.1h-1.5v.3zm0-1h.2c.2 0 .4 0 .6-.2.4-.1.7-.4 1-.6l.5-.3a.8.8 0 0 1 .3 0v-.4l-.6.2-1 .7-.8.3-.1.3zm0-1.5.7-.2 1.2-.8c.4-.3.7-.4 1-.4v-.3c-.3 0-.5 0-.8.2l-1.2.7a3 3 0 0 1-1 .5v.3zm-.6-1.4 1.5-1 1.6-1.2-.1-.3-1.7 1.2c-.5.5-1.1.9-1.5 1l.2.4zm-1-1.5 3.2-2.3-.2-.3-3.2 2.3.1.3zm-1.5-1.6a20.7 20.7 0 0 1 3.4-2.3l-.2-.2-1.5 1-1.9 1.3.2.2zm-1-1a123.7 123.7 0 0 1 2.6-1.8l.8-.5-.1-.3a7.6 7.6 0 0 0-.8.5 113 113 0 0 0-2.7 2l.1.2z"
    />
    <path
      fill="#78732e"
      d="m294.5 195.4.1.1a17.3 17.3 0 0 1 2.5 2.5c1 1.2 1.8 2.7 1.8 4.1v.5a9.5 9.5 0 0 1-2.5 5c-2 2.3-4.8 4.4-7 6.4a18 18 0 0 0-3 3.1 6.1 6.1 0 0 0-1.2 3.7 6.4 6.4 0 0 0 1.1 3.4 4.4 4.4 0 0 0 3.9 2c1.8 0 3.8-.7 5.6-.7 1.6 0 3 .4 4.4 1.9 1.3 1.4 1.7 3.6 1.7 5.7 0 1.6-.2 3-.4 4.2a25.6 25.6 0 0 1-.4 1.8h.3s.8-2.8.8-6c0-2.1-.4-4.5-1.8-6a5.8 5.8 0 0 0-4.6-1.9c-1.9 0-3.9.6-5.6.6a4 4 0 0 1-3.6-1.8 6 6 0 0 1-1-3.3v-.1c0-1.6.7-3 1.9-4.3 1.8-2 4.5-4 7-6.2 2.3-2.2 4.4-4.5 4.7-7.5v-.5c0-1.8-1.1-3.5-2.3-4.8a17.2 17.2 0 0 0-2.3-2.2l-.1.3z"
    />
    <path fill="#a8ac71" d="m292.1 198.4-.4-.3-.3.1.6.5zm1 1-.3-.3h-.1l.2.4z" />
    <path
      fill="#78732e"
      d="m294.5 201-.2-.4-.2.2.3.3zm1 1.5-.1-.3h-.3l.4.5zm.7 1.5-.2-.4v.4zm0 1.5v-.4l-.2-.1v.5zm0 1v-.5l-.1-.1v.6zM284 221.1l.1-.7c.1-.3-.3.1-.3.1v.5l.2.1z"
    />
    <path fill="#fff" d="m284 222.1-.3.1.1.5.1-.2v-.4z" />
    <path fill="#78732e" d="M284 223.9v-.4h-.2v.6z" />
    <path
      fill="#fff"
      d="M284 224.9v-.4h-.1v.4zm.3 1.4v-.4l-.2.1.1.4zm.4 1.4-.1-.5h-.2l.2.6z"
    />
    <path
      fill="#a8ac71"
      d="m285.6 229.7-.2-.3h-.2l.3.3zm1.5 1.4-.5-.3c-.3-.3-.1.2-.1.2l.4.2h.2zm9.8.8-.4-.3c-.2 0 0 0 .2.4.1.3.2-.1.2-.1z"
    />
    <path fill="#fff" d="m297.7 232.5-.3-.3v.3h.2z" />
    <path
      fill="#a8ac71"
      d="M297.9 233c-.1-.2-.2.1-.2.1l.2.3v-.5zm0 1.3v-.5c0-.2-.1 0-.1 0v.5h.1z"
    />
    <path
      fill="#fff"
      d="m297.4 235.7.2-.4h-.2v.4zm-14.8-52s.5-.2.1.4l.3-.5h-.5z"
    />
    <path fill="#f9c83a" d="m294.6 195 .4.3h-.5l.1-.3z" />
    <path fill="#8f4620" d="m295 195.3-.7.1c-.2 0 .2-.2.2-.2l.4.1z" />
    <path fill="#977c2e" d="M301 239.1s.3 0 .5-.3-.1.4-.1.4l-.3.1-.2-.2z" />
  </svg>
);

export default Icon;
