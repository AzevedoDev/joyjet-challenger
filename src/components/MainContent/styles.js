import styled from 'styled-components';
import Slider from 'infinite-react-carousel';
import ArrowRight from '../../assets/img/arrow-right.png';
import ArrowLeft from '../../assets/img/arrow-left.png';
import { theme } from '../../styles/theme';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${media.greaterThan('huge')`
    width: 1440px;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `}
  ${media.greaterThan('medium')`
    padding: 51px 10vw;
  `}
`;

export const Carousel = styled(Slider)`
  width: 100%;
  padding-bottom: 64px;
  .carousel-row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .carousel-next:before {
    background-image: url(${ArrowRight});
  }
  .carousel-prev:before {
    background-image: url(${ArrowLeft});
  }
`;

export const About = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 72px 24px;
  ${media.greaterThan('large')`
    flex-direction: row;
  `};
  div {
    ${media.greaterThan('medium')`
      padding: 0 32px;
  `};
  }
  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 39px;
    text-transform: uppercase;
    color: ${theme.color.blue};
    padding-top: 32px;
    padding-bottom: 16px;
  }
  p {
    font-size: 16px;
    line-height: 32px;
    color: ${theme.color.darkBlue};
  }
  img {
    border-radius: 10px;
    width: 100%;
    max-width: 355px;
    min-width: 277px;
    ${media.greaterThan('medium')`
      max-width: 552px;
    `};
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 75px;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 16px;
    color: ${theme.color.ligthGray};
  }
`;
