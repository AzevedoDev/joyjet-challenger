import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { FadeIn } from 'animate-css-styled-components';
import { CloseIcon } from '../../../assets/svg/icons';
import media from 'styled-media-query';

export const Container = styled(FadeIn)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 9999999;
  background-color: ${theme.color.lightBlue};
  color: ${theme.color.white};
  padding: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  svg {
    margin-right: 8px;
  }
`;

export const MenuItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
`;

export const MenuItem = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  ${media.greaterThan('large')`
    font-size: 14px;
  `}
  line-height: 64px;
  text-align: center;
  letter-spacing: 2px;
  background-color: transparent;
  color: ${theme.color.white};
  outline: 0;
`;

export const CloseMenu = styled(CloseIcon)`
  background-color: transparent;
`;
