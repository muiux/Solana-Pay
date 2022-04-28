import Fade from 'react-reveal/Fade';

import {
  Landing_Container,
  Landing_Background,
  Landing_Container_Inner,
  Landing_Container_Inner_Links,
  Landing_Container_Inner_Content,
  Landing_Watermark_Container,
  Landing_Text_Container
} from './styles';

function LandingPage() {
  return (
    <Landing_Container>
      <Landing_Background />
      <Landing_Container_Inner>
        <Landing_Container_Inner_Content>
          <Fade delay={500}>
            <Landing_Watermark_Container>
              <Kado_Watermark />
            </Landing_Watermark_Container>
          </Fade>
          <Landing_Text_Container>
            <Fade delay={1000}>
              <Kado_Text />
            </Fade> 
            <Fade delay={1250}>
              <h2>The UST - USD Gateway</h2>
            </Fade>
          </Landing_Text_Container>
        </Landing_Container_Inner_Content>
        <Landing_Container_Inner_Links>
          <a target='_blank' href='https://twitter.com/kado_money'>
            <Twitter_Icon />
          </a>
          <a target='_blank' href='https://t.me/joinchat/DBTEybbbFugwZjgx'>
            <Telegram_Icon />
          </a>
        </Landing_Container_Inner_Links>
      </Landing_Container_Inner>
    </Landing_Container>
  );
}

const Kado_Watermark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={187.5}
    height={175.3}
    viewBox="0 0 187.5 175.3"
    overflow="visible"
  >
    <path
      id="kado-icon-bg-1"
      d="M156.8 112.8c5.1-14 7.1-29.1 5-43.9-3.6-25.4-17.1-45-42.5-58.8C87-7.7 43.2-1.4 17 24.7 2.5 39.2-6.3 63.2 5.4 80.1c8.5 12.2 24.8 16.7 34.4 28 12 14.2 11.1 36.1 23 50.3 10.6 12.6 29.6 16.1 45.2 10.9 13.1-4.3 36.7-23.4 48.8-56.5z"
      fill="#5493f7"
      opacity={0.75}
    />
    <path
      id="kado-icon-bg-2"
      d="M108 169.4c13.1-4.3 36.7-23.4 48.8-56.5 5.1-14 7.9-27.5 5-43.9-9.7-54.1-76 15.5-87.5 22.6-22.6 13.9-28.8 44.5-12.7 65.6.4.5.7 1 1.1 1.4 10.6 12.5 29.7 15.9 45.3 10.8z"
      fill="#2043b5"
      opacity={0.8}
    />
    <path
      id="kado-icon-bg-3"
      d="M128.6 18.5c-14-5.1-29.1-7.1-43.9-5-25.4 3.6-45 17.1-58.8 42.5-17.8 32.3-11.5 76.1 14.6 102.3C55 172.8 79 181.6 95.9 169.9c12.2-8.5 16.7-24.8 28-34.4 14.2-12 36.1-11.1 50.3-23 12.6-10.6 16.1-29.6 10.9-45.2-4.3-13.1-23.4-36.7-56.5-48.8z"
      fill="#3573ec"
      opacity={0.7}
    />
    <path
      id="kado-icon-bg-4"
      d="M99.6 125.4l-12.9-26-8.6 7.9-3.9 18.1H59.5l14.1-66.6h14.8l-5.5 25.9 28.4-25.9h20.5L98.3 89l19 36.4H99.6z"
      fill="#fff"
    />
  </svg>
);

const Kado_Text = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={385}
    height={123.8}
    viewBox="0 0 385 123.8"
    overflow="visible"
  >
    <path
      fill="#FFF"
      d="M72.8 121.2L47.4 72 30.1 87.6l-7 33.7H0L25.1 2.5h23.1L37.7 52.6 93.3 2.5h31.8L65.6 55.8l34.3 65.5H72.8z"
    />
    <path
      fill="#FFF"
      d="M174.8 38.9h21.6l-13.6 64.3c-1 4.8-1.5 9.8-1.5 14.9 0 1.1.1 2.2.2 3.2h-20.6c-.1-.9-.2-2.2-.2-3.9 0-1.5.1-3.5.3-6.2-5.2 7.7-12.6 11.6-22.1 11.6-9.8 0-17.6-3.5-23.4-10.5-5.8-7-8.7-15.7-8.7-26.2 0-14 4-25.6 12.1-35.1 8-9.4 18-14.2 30-14.2 6.8 0 12.1 1.2 16 3.5 3.9 2.3 6.5 5 8 7.9l1.9-9.3zm-24.1 17.9c-6.7 0-12 2.9-15.9 8.7-3.9 5.8-5.9 12.4-5.9 19.8 0 5.7 1.4 10.2 4.4 13.4 2.9 3.2 6.8 4.9 11.7 4.9 5.9 0 11-2.7 15.2-8 4.2-5.3 6.3-12.4 6.3-21.2 0-5.5-1.4-9.8-4.2-12.9-2.8-3.2-6.7-4.7-11.6-4.7zM301.8 0L280 103.2c-1 4.5-1.6 9.3-1.8 14.6 0 1.9.1 3.1.2 3.5h-20.3c-.1-1-.2-2.4-.2-4.2 0-1.5.1-3.4.3-5.9-5.2 7.7-12.6 11.6-22.1 11.6-9.8-.1-17.6-3.6-23.4-10.5-5.8-6.9-8.7-15.6-8.7-26.1 0-14 4-25.6 12.1-35.1 8-9.4 18-14.2 30-14.2 11.5 0 19.3 3.6 23.4 10.7l10-47.6h22.3zm-53.9 56.8c-6.7 0-12 2.9-15.9 8.7-3.9 5.8-5.9 12.4-5.9 19.8 0 5.7 1.4 10.2 4.4 13.4 2.9 3.2 6.8 4.9 11.7 4.9 5.9 0 11-2.7 15.2-8 4.2-5.3 6.3-12.4 6.3-21.2 0-5.5-1.4-9.8-4.2-12.9-2.9-3.2-6.7-4.7-11.6-4.7zM385 74.7c0 13.5-4.4 25.1-13.1 34.7-8.7 9.6-19.7 14.4-33 14.4-11.3 0-20.4-3.7-27.3-11-6.9-7.3-10.4-16.4-10.4-27.4 0-14.3 4.5-26 13.4-35.3 8.9-9.2 19.9-13.8 32.8-13.8 11.4 0 20.5 3.6 27.3 10.9 6.9 7.3 10.3 16.4 10.3 27.5zm-39.2-18.1c-6.4 0-11.7 2.7-15.9 8-4.2 5.3-6.4 11.9-6.4 19.8 0 5.8 1.6 10.4 4.7 13.9s7.2 5.2 12.2 5.2c5.8 0 11-2.5 15.5-7.5s6.8-11.8 6.8-20.5c0-5.9-1.5-10.5-4.6-13.9-3-3.3-7.1-5-12.3-5z"
    />
  </svg>
);

const Twitter_Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 112.197 112.197"
  >
    <circle cx={56.099} cy={56.098} r={56.098} fill="#3573ec" />
    <path
      d="M90.461 40.316a26.753 26.753 0 01-7.702 2.109 13.445 13.445 0 005.897-7.417 26.843 26.843 0 01-8.515 3.253 13.396 13.396 0 00-9.79-4.233c-7.404 0-13.409 6.005-13.409 13.409 0 1.051.119 2.074.349 3.056-11.144-.559-21.025-5.897-27.639-14.012a13.351 13.351 0 00-1.816 6.742c0 4.651 2.369 8.757 5.965 11.161a13.314 13.314 0 01-6.073-1.679l-.001.17c0 6.497 4.624 11.916 10.757 13.147a13.362 13.362 0 01-3.532.471c-.866 0-1.705-.083-2.523-.239 1.706 5.326 6.657 9.203 12.526 9.312a26.904 26.904 0 01-16.655 5.74c-1.08 0-2.15-.063-3.197-.188a37.929 37.929 0 0020.553 6.025c24.664 0 38.152-20.432 38.152-38.153 0-.581-.013-1.16-.039-1.734a27.192 27.192 0 006.692-6.94z"
      fill="#f1f2f2"
    />
  </svg>
)

const Telegram_Icon = () => (
  <svg
    width={240}
    height={240}
    viewBox="0 0 240 240"
    xmlns="http://www.w3.org/2000/svg"
  >
    <linearGradient
      id="prefix__a"
      gradientUnits="userSpaceOnUse"
      x1={-683.305}
      y1={534.845}
      x2={-693.305}
      y2={511.512}
      gradientTransform="matrix(6 0 0 -6 4255 3247)"
    >
      <stop offset={0} stopColor="#3573ec" />
      <stop offset={1} stopColor="#3573ec" />
    </linearGradient>
    <path
      d="M240 120c0 66.3-53.7 120-120 120S0 186.3 0 120 53.7 0 120 0s120 53.7 120 120z"
      fill="url(#prefix__a)"
    />
    <path
      d="M98 175c-3.9 0-3.2-1.5-4.6-5.2L82 132.2 152.8 88l8.3 2.2-6.9 18.8L98 175z"
      fill="#c8daea"
    />
    <path
      d="M98 175c3 0 4.3-1.4 6-3 2.6-2.5 36-35 36-35l-20.5-5-19 12-2.5 30v1z"
      fill="#a9c9dd"
    />
    <linearGradient
      id="prefix__b"
      gradientUnits="userSpaceOnUse"
      x1={128.991}
      y1={118.245}
      x2={153.991}
      y2={78.245}
      gradientTransform="matrix(1 0 0 -1 0 242)"
    >
      <stop offset={0} stopColor="#eff7fc" />
      <stop offset={1} stopColor="#fff" />
    </linearGradient>
    <path
      d="M100 144.4l48.4 35.7c5.5 3 9.5 1.5 10.9-5.1L179 82.2c2-8.1-3.1-11.7-8.4-9.3L55 117.5c-7.9 3.2-7.8 7.6-1.4 9.5l29.7 9.3L152 93c3.2-2 6.2-.9 3.8 1.3L100 144.4z"
      fill="url(#prefix__b)"
    />
  </svg>
)

export default LandingPage;