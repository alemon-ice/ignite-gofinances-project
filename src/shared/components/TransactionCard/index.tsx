import React from 'react';

import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date,
} from './styles';

interface ICategory {
    icon: string;
    name: string;
}

export interface ITransactionCardProps {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: ICategory;
    date: string;
}

interface IProps {
    data: ITransactionCardProps
}

function TransactionCard({ data }: IProps) {
    const {
        type,
        title,
        amount,
        category,
        date,
    } = data

    return (
        <Container>
            <Title>{title}</Title>
            <Amount type={type}>
                {type === 'negative' && '- '}
                {amount}
            </Amount>

            <Footer>
                <Category>
                    <Icon name={category.icon} />
                    <CategoryName>{category.name}</CategoryName>
                </Category>
                <Date>{date}</Date>
            </Footer>
        </Container>
  );
}

export default TransactionCard;
