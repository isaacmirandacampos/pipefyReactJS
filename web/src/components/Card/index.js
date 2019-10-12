import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
        <p>Fazer a migração completa de servidor</p>
        <img src="https://api.adorable.io/avatars/285/qa@adorable.io.png" />
      </header>
    </Container>
  );
}
