import React, { useEffect, useRef, useState } from 'react';
import { GlobalStyle, Container } from './styles/GlobalStyle';
import HeaderContent from './components/HeaderContent';
import MainContent from './components/MainContent';

function App() {
  const ref = useRef(null);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    console.log(ref.current.getBoundingClientRect());

    if (ref.current.getBoundingClientRect().top <= -583) {
      setSticky(true);
    }
    if (ref.current.getBoundingClientRect().top >= -580) {
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
