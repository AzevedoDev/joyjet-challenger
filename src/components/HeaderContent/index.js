import React, { useState } from 'react';
import { SpaceLogo } from '../../assets/svg/icons';
import { Button } from '../utils/Button/styles';
import NavMenu from './NavMenu';

import * as Styled from './styles';

export default function HeaderContent() {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <Styled.Container>
        <Styled.Wrapper>
          <SpaceLogo />
          <Styled.MenuHamburguer
            onClick={() => {
              setMenuState(true);
            }}
          />
        </Styled.Wrapper>
        <Styled.HeaderContent>
          <h2>space</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie elit at lacus…
          </p>
        </Styled.HeaderContent>
        <Button color="lightBlue">Click</Button>
      </Styled.Container>
      {menuState && <NavMenu setMenuState={setMenuState} />}
    </>
  );
}
