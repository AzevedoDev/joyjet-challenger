import styled from 'styled-components';
import backgroundImage from '../../assets/img/background-mobile.png';
import { theme } from '../../styles/theme';
import { MenuIcon } from '../../assets/svg/icons';

export const Container = styled.section`
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 24px;
  background-color: ${theme.color.bgMask};

  &::before {
    content: '';
    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 420px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.color.white};
  letter-spacing: 0.305085px;

  h2 {
    font-size: 48px;
    line-height: 67px;
    text-transform: uppercase;
    padding-bottom: 8px;
  }

  p {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const MenuHamburguer = styled(MenuIcon)`
  background-color: transparent;
`;
