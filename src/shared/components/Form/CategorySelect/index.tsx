import React from 'react';

import { Container, Category, Icon } from './styles';

interface IProps {
    title: string
}

function CategorySelect({ title }: IProps) {
  return (
      <Container>
          <Category>{title}</Category>

          <Icon name="chevron-down" />
      </Container>
  );
}

export default CategorySelect;