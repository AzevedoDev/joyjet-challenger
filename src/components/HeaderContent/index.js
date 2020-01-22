import React, { useState } from 'react';
import { SpaceLogo } from '../../assets/svg/icons';
import { Button } from '../utils/Button/styles';
import NavMenu from './NavMenu';
import NavMenuDesktop from './NavMenuDesktop';
import Tranding from './Tranding';

import * as Styled from './styles';

export default function HeaderContent() {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <Styled.Container>
        <Styled.Wrapper>
          <SpaceLogo />
          <NavMenuDesktop />
          <Styled.MenuHamburguer
            onClick={() => {
              setMenuState(true);
            }}
          />
        </Styled.Wrapper>
        <Styled.HeaderContent>
          <div>
            <h2>
              space<span>.</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              molestie elit at lacus…
            </p>
            <Button color="lightBlue">Click</Button>
          </div>
        </Styled.HeaderContent>
        <Styled.Trending>
          <Tranding />
        </Styled.Trending>
      </Styled.Container>
      {menuState && <NavMenu setMenuState={setMenuState} />}
    </>
  );
}
