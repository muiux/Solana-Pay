import styled from 'styled-components';

export const BlackBackgroundFullscreen = styled.div`
  background: rgba(0, 0, 0, 0.24);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  user-select: none;
  overflow: hidden;
`;