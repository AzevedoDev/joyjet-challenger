import React from 'react';

import * as Styled from './styles';

const Card = ({ content: { image, title, description } }) => (
  <Styled.Card>
    <img src={image} alt="" />
    <h3>{title}</h3>
    <p>{description}</p>
  </Styled.Card>
);

export default Card;
