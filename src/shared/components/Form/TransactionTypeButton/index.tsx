import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Icon,
    Title,
} from './styles';

interface IProps extends TouchableOpacityProps {
    title: string
    type: 'up' | 'down'
    isActive: boolean
}

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
}

function TransactionTypeButton(props: IProps) {
    const { title, type, isActive, ...rest } = props
    return (
        <Container {...rest} type={type} isActive={isActive}>
            <Icon name={icons[type]} type={type} />
            <Title>{title}</Title>
        </Container>
    );
}

export default TransactionTypeButton;