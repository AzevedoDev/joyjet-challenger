import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import media from 'styled-media-query';

export const Container = styled.div`
  color: ${theme.color.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  svg {
    margin-right: 8px;
  }
  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const MenuItens = styled.div`
  ${media.greaterThan('medium')`
    flex-direction: row;
    justify-content: space-evenly;
    width: 580px;
  `}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 32px 138px;
`;

export const MenuItem = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  ${media.greaterThan('medium')`
    font-size: 14px;
  `}
  line-height: 64px;
  text-align: center;
  letter-spacing: 2px;
  background-color: transparent;
  color: ${theme.color.white};
  outline: 0;
`;
