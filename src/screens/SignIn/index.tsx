import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

import AppleSVG from '../../assets/apple.svg'
import GoogleSVG from '../../assets/google.svg'
import LogoSVG from '../../assets/logo.svg'
import { SignInSocialButton } from '../../shared/components'

import {
    Container,
    Header,
    TitleWrapper,
    Title,
    SIgnInTitle,
    Footer,
    FooterWrapper
} from './styles'

const SignIn: React.FC = () => {
    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSVG width={RFValue(120)} height={RFValue(68)} />

                    <Title>
                        Controle suas {'\n'}
                        finanças de forma {'\n'}
                        muito simples
                    </Title>
                </TitleWrapper>

                <SIgnInTitle>
                    Faça seu login com {'\n'}
                    uma das contas abaixo
                </SIgnInTitle>
            </Header>

            <Footer>
                <FooterWrapper>
                    <SignInSocialButton
                        title='Entrar com Google'
                        svg={GoogleSVG}
                    />
                    <SignInSocialButton
                        title='Entrar com Apple'
                        svg={AppleSVG}
                    />
                </FooterWrapper>
            </Footer>
        </Container>
    );
}

export default SignIn;