import styled, { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Poppins');

* {
  -webkit-text-size-adjust: 100%;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
}
body{
  background-color: #F8F8F8;
  font-family: 'Poppins', sans-serif;
}


`;

export const Container = styled.div`
  ${media.greaterThan('huge')`
    width: 100%;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

  `}
`;
