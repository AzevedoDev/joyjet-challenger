import React from 'react';
import { SpaceLogo } from '../../../assets/svg/icons';
import * as Styled from './styles';
import { FadeInDown } from 'animate-css-styled-components';

export default function NavMenu({ setMenuState }) {
  function handleOnClose() {
    setMenuState(false);
  }
  return (
    <Styled.Container>
      <FadeInDown duration="1s" delay="0.5s">
        <Styled.Wrapper>
          <SpaceLogo />
          <Styled.CloseMenu onClick={handleOnClose} />
        </Styled.Wrapper>
        <Styled.MenuItens>
          <Styled.MenuItem>BLOG</Styled.MenuItem>
          <Styled.MenuItem>POPULAR</Styled.MenuItem>
          <Styled.MenuItem>ARCHIVE</Styled.MenuItem>
          <Styled.MenuItem>ABOUT</Styled.MenuItem>
        </Styled.MenuItens>
      </FadeInDown>
    </Styled.Container>
  );
}
