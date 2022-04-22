import styled from 'styled-components';

export const KadoIconContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    object-fit: contain;
  }

  &.lg {
    width: 72px;
    height: 36px;
  }

  &.lg-wide {
    width: 128px;
    height: 64px;
  }

  &.xl {
    width: 128px;
    height: 128px;
  }
`;
