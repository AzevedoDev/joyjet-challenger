import React from 'react';
import { GlobalStyle, Container } from './styles/GlobalStyle';
import HeaderContent from './components/HeaderContent';
import MainContent from './components/MainContent';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <HeaderContent />
      <MainContent />
    </Container>
  );
}

export default App;
