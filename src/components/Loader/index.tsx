import React from 'react';

import {
  LoaderWrapper,
  LoaderWrapperInner,
  LoaderWrapperInnerA,
  LoaderWrapperInnerB
} from './styles';

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderWrapperInner>
        <LoaderWrapperInnerA />
        <LoaderWrapperInnerB />
      </LoaderWrapperInner>
    </LoaderWrapper>
  );
};

export default Loader;