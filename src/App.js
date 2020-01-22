import React, { useEffect, useRef, useState } from 'react';
import { GlobalStyle, Container } from './styles/GlobalStyle';
import HeaderContent from './components/HeaderContent';
import MainContent from './components/MainContent';

function App() {
  const ref = useRef(null);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (ref.current.getBoundingClientRect().top <= -153) {
      setSticky(true);
    }
    if (ref.current.getBoundingClientRect().top === 0) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <Container ref={ref}>
      <GlobalStyle />
      <HeaderContent isSticky={isSticky} />
      <MainContent />
    </Container>
  );
}

export default App;
