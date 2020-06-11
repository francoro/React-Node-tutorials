import React, { useState } from 'react'
import { login, register } from '../../services/Dogs'
import { useHistory } from "react-router-dom"
import { Container, Title, Input, Button, ContainerButton, LinkSignUp, ErrorMessage, Content, Label, ContainerInputs, Wrapper, ErrorContainer } from './styled'
import { setItem } from '../../helpers/localStorage'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isNotValidUser, setNotValidUser] = useState(false)
    const [isSignUp, changeToSignUp] = useState(false)

    const history = useHistory()

    const handleLogin = () => {
        const data = {
            email,
            password
        }
        if (!isSignUp) {
            login(data).then((user) => {
                if (user.length) {
                    setItem('user', user[0])
                    setNotValidUser(false)
                    history.push('/')
                } else {
                    setNotValidUser(true)
                }
            })
        } else {
            register(data).then((user) => {
                changeToSignUp(false)
            })
        }
    }

    return (
        <Container>
            {isNotValidUser && <ErrorContainer><ErrorMessage>Please enter the correct email or password</ErrorMessage></ErrorContainer>}
            <Wrapper>
                <Title>My account</Title>
                <Content>
                    <ContainerInputs>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                    </ContainerInputs>
                    <ContainerButton>
                        <Button onClick={handleLogin}>{isSignUp ? 'Sign up' : 'Log in'}</Button>
                        {!isSignUp && <LinkSignUp onClick={() => changeToSignUp(true)}>Sign up</LinkSignUp>}
                        {isSignUp && <LinkSignUp onClick={() => changeToSignUp(false)}>Back</LinkSignUp>}
                    </ContainerButton>
                </Content>
            </Wrapper>
        </Container>
    )
}
