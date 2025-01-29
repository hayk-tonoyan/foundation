'use client';

import styled from 'styled-components';

import { Button } from '../ui/button';

export const StyledHeaderWrapper = styled.header`
  left: 0;
  top: 24px;
  width: 100%;
  z-index: 10;
  height: 56px;
  display: flex;
  position: fixed;
  padding: 8px 16px;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);

  .user-dropdown-open & {
    z-index: 100;
  }
`;

export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  max-width: 1920px;
  align-items: center;
`;

export const StyledLogoHolder = styled.div`
  gap: 8px;
  display: flex;
  cursor: pointer;
  align-items: end;
  position: relative;

  > img {
    transform: translate(0, 24%);
    filter: drop-shadow(-3px 2px 0px var(--primary-color)) drop-shadow(3px 2px 0px var(--primary-color));;
  }

  .mobile-device & {
    align-items: center;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const StyledNewPromptHolder = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  margin-inline-start: auto;
`;

export const StyledButton = styled(Button)`
  padding: var(--2);

  svg {
    width: 24px;
    height: 24px;
  }
`;
