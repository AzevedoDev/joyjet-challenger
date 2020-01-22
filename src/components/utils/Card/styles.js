import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import media from 'styled-media-query';

export const Card = styled.div`
  max-width: 368px;
  height: 388px;
  ${media.greaterThan('medium')`
    height: 462px;
  `}
  background-color: ${theme.color.white};
  margin: 0 24px;
  font-style: normal;
  border-radius: 8px;
  margin-top: 50px;
  padding-bottom: 25px;
  font-weight: normal;
  img {
    width: 100%;
    padding-bottom: 18px;
    border-radius: 8px;
  }

  h3 {
    padding: 0 24px;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: ${theme.color.title};
  }
  p {
    padding: 15px 24px;
    color: ${theme.color.description};
    font-size: 14px;
    line-height: 21px;
  }
`;
