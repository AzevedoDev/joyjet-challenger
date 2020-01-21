import React, { useState, useEffect } from 'react';
import Card from '../utils/Card';
import { contents } from '../../Content';
import AboutImage from '../../assets/img/43688.png';

import * as Styled from './styles';

export default function MainContent() {
  const [states, setStates] = useState(window.innerWidth >= 765 ? 2 : 1);

  const sliderSettings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrowsBlock: false,
    slidesToShow: states,
  };
  return (
    <Styled.Container>
      <Styled.Carousel
        {...sliderSettings}
        onResize={e => {
          if (e.target.innerWidth <= 765) {
            setStates(1);
          } else if (
            e.target.innerWidth >= 766 &&
            e.target.innerWidth <= 1023
          ) {
            setStates(2);
          } else {
            setStates(3);
          }
        }}
      >
        {contents.map(content => (
          <Card content={content} key={Math.random()} />
        ))}
      </Styled.Carousel>
      <Styled.About states={states}>
        <img src={AboutImage} alt="one satelite" />
        <div>
          <h3>About us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum.
          </p>
        </div>
      </Styled.About>
      <Styled.Footer>
        <p>© 2016 Created by Joyjet Digital Space Agency</p>
      </Styled.Footer>
    </Styled.Container>
  );
}
