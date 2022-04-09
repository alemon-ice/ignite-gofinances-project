import React from 'react';
import { HighLightCard, TransactionCard } from '../../shared/components';
import { ITransactionCardProps } from '../../shared/components/TransactionCard';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighLightCards,
    Transactions,
    Title,
    TransactionList,
} from './styles';

export interface IDataListProps extends ITransactionCardProps {
    id: string;
}

const data: IDataListProps[] = [
    {
        id: '1',
        type: 'positive',
        title: "Desenvolvimento de site",
        amount: "R$ 6.000,00",
        category: {
            icon: 'dollar-sign',
            name: 'Vendas'
        },
        date: "03/04/2022",
    },
    {
        id: '2',
        type: 'negative',
        title: "Pizzaria",
        amount: "R$ 60,00",
        category: {
            icon: 'coffee',
            name: 'Alimentação'
        },
        date: "03/04/2022",
    },
    {
        id: '3',
        type: 'negative',
        title: "Aluguel do apartamento",
        amount: "R$ 1.200,00",
        category: {
            icon: 'shopping-bag',
            name: 'Casa'
        },
        date: "03/04/2022",
    },
]

export const Dashboard: React.FC = () => {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/43359988?v=4' }} />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Rafael</UserName>
                        </User>
                    </UserInfo>

                    <Icon name="power" />
                </UserWrapper>
            </Header>


            <HighLightCards>
                <HighLightCard
                    type="up"
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Última entrada dia 03 de abril"
                />
                <HighLightCard
                    type="down"
                    title="Saídas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última saída dia 03 de abril"
                />
                <HighLightCard
                    type="total"
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="01 à 16 de abril"
                />
            </HighLightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transactions>
        </Container>
    );
}
