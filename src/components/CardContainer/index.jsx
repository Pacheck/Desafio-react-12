import React from 'react';
import { Container, CardsWrapper } from './styles';

const CardContainer = ({ children }) => {
  return (
    <Container>
      <CardsWrapper>{children}</CardsWrapper>
    </Container>
  );
};

export default CardContainer;
