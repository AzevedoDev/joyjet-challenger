import React from 'react';
import * as Styled from './styles';

export default function NavMenuDesktop() {
  return (
    <Styled.Container>
      <Styled.MenuItens>
        <Styled.MenuItem>BLOG</Styled.MenuItem>
        <Styled.MenuItem>POPULAR</Styled.MenuItem>
        <Styled.MenuItem>ARCHIVE</Styled.MenuItem>
        <Styled.MenuItem>ABOUT</Styled.MenuItem>
      </Styled.MenuItens>
    </Styled.Container>
  );
}
