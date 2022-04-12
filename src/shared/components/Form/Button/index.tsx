import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

function Button({ children, ...rest }: TouchableOpacityProps) {
  return (
      <Container {...rest}>
          <Title>{children}</Title>
      </Container>
  );
}

export default Button;