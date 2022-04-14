import React, { useState } from 'react';
import { Input, Button, TransactionTypeButton } from '../../shared/components'

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypes,
} from './styles';

const Register: React.FC = () => {
    const [transactionType, setTransactionType]= useState('')

    function handleTransactionsTypeSelect(type: 'up' | 'down') {
        setTransactionType(type)
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input placeholder='Nome' />
                    <Input placeholder='Preço' />

                    <TransactionsTypes>
                        <TransactionTypeButton
                            type='up'
                            title='Income'
                            isActive={transactionType === 'up'}
                            onPress={() => handleTransactionsTypeSelect('up')}
                        />
                        <TransactionTypeButton
                            type='down'
                            title='Outcome'
                            isActive={transactionType === 'down'}
                            onPress={() => handleTransactionsTypeSelect('down')}
                        />
                    </TransactionsTypes>
                </Fields>
                <Button>Enviar</Button>
            </Form>
        </Container>
    );
}

export default Register;