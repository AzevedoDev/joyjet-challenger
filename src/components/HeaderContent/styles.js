import styled from 'styled-components';
import backgroundMobileImage from '../../assets/img/background-mobile.png';
import backgroundImage from '../../assets/img/background.png';
import { theme } from '../../styles/theme';
import { MenuIcon } from '../../assets/svg/icons';
import media from 'styled-media-query';

export const Container = styled.section`
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  background-color: ${theme.color.bgMask};
  ${media.greaterThan('769px')`
      height: 662px;
    `}

  &::before {
    content: '';
    background-image: url(${backgroundMobileImage});
    ${media.greaterThan('769px')`
      background-image: url(${backgroundImage});
      background-size: 100% 100%;
      height: 662px;
    `}
    background-position: center;
    background-size: cover;
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
  ${media.greaterThan('huge')`
    width: 1440px;
  `}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 24px;
`;

export const HeaderContent = styled.div`
  display: flex;
  max-width: 567px;
  flex-direction: column;
  padding: 24px;

  color: ${theme.color.white};
  letter-spacing: 0.305085px;
  padding-bottom: 220px;

  h2 {
    font-size: 48px;
    line-height: 67px;
    text-transform: uppercase;
    padding-bottom: 8px;
    span {
      color: ${theme.color.blue};
    }
  }

  p {
    font-size: 18px;
    line-height: 27px;
    padding-bottom: 32px;
  }
`;

export const MenuHamburguer = styled(MenuIcon)`
  background-color: transparent;
  ${media.greaterThan('769px')`
    display: none;
  `}
`;

export const Trending = styled.div`
  height: 142px;
  width: 100%;
  background-color: ${theme.color.bgMask};
  bottom: 0;
  position: absolute;
  z-index: 2;
  color: ${theme.color.white};
  ${media.lessThan('medium')`
    display: none;
  `};
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    width: 236px;
    height: 100px;
    border-right: solid ${theme.color.white} 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    &:last-child {
      border: 0;
    }
  }
  h4 {
    font-size: 20px;
    height: 100px;
    line-height: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 20px;
    justify-content: center;
    border-right: solid ${theme.color.white} 1px;
    span {
      color: ${theme.color.blue};
    }
  }
`;
