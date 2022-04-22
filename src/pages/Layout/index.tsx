import React from 'react';

import { BlackBackgroundFullscreen } from './styles';

const resetCss = `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .layout {
    position: relative;
    overflow: unset;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0;
  }
  * {
    box-sizing: border-box;
  }
  .ReactModal__Overlay.ReactModal__Overlay--after-open {
    z-index: 999999;
  }
`;

interface IProps {
  children?: any;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className='layout'>
      <style dangerouslySetInnerHTML={{ __html: resetCss }} />
      <BlackBackgroundFullscreen>
        <div />
      </BlackBackgroundFullscreen>
      {children}
    </div>
  )
}

export default Layout;