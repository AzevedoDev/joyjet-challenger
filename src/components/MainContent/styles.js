import styled from 'styled-components';
import Slider from 'infinite-react-carousel';
import ArrowRight from '../../assets/img/arrow-right.png';
import ArrowLeft from '../../assets/img/arrow-left.png';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Carousel = styled(Slider)`
  width: 100%;
  padding-bottom: 64px;
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
  padding: 0 24px 72px 24px;

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 39px;
    text-transform: uppercase;
    color: ${theme.color.blue};
    padding-bottom: 16px;
  }
  p {
    font-size: 16px;
    line-height: 32px;
    color: ${theme.color.darkBlue};
  }
  img {
    border-radius: 9px;
    padding-bottom: 34px;
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
