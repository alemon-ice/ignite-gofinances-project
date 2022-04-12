import React from 'react';
import { Input, Button } from '../../shared/components'

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
} from './styles';

const Register: React.FC = () => {
  return (
    <Container>
        <Header>
            <Title>Cadastro</Title>
        </Header>

        <Form>
            <Fields>
                <Input placeholder='Nome' />
                <Input placeholder='Preço' />
            </Fields>
            <Button>Enviar</Button>
        </Form>
    </Container>
  );
}

export default Register;