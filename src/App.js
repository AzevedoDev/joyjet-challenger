import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import HeaderContent from './components/HeaderContent';
import MainContent from './components/MainContent';

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderContent />
      <MainContent />
    </>
  );
}

export default App;
