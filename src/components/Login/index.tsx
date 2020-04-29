import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import BackgroundDogs from '../../resources/assets/dogs-bg.jpg'
import { login, register } from '../../services/Dogs'
import { useHistory } from "react-router-dom"
import { saveUserAction } from '../../store/user/actions'
import { Container, Title, Input, Button, ContainerButton, LinkSignUp, ErrorMessage, Background, Label, Overlay} from './styled'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isNotValidUser, setNotValidUser] = useState(false)
    const [isSignUp, changeToSignUp] = useState(false)

    const history = useHistory()
    const dispatch: any = useDispatch()

    const handleLogin = () => {
        const data = {
            email,
            password
        }
        if (!isSignUp) {
            login(data).then((user) => {
                if (user.length) {
                    dispatch(saveUserAction(user[0]))
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

    return (//TODO CHECK A BETTER WAY TO GET THE IMAGE
        <Background src={BackgroundDogs}>
            <Overlay />
            <Container>
                <Title>Welcome to Skin and Bone</Title>
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                <Label htmlFor="password">Password</Label>
                <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                {isNotValidUser && <ErrorMessage>Please enter the correct email or password</ErrorMessage>}
                <ContainerButton>
                    <Button onClick={handleLogin}>{isSignUp ? 'Sign up' : 'Login'}</Button>
                    {!isSignUp && <LinkSignUp onClick={() => changeToSignUp(true)}>Sign up</LinkSignUp>}
                    {isSignUp && <LinkSignUp onClick={() => changeToSignUp(false)}>Back</LinkSignUp>}
                </ContainerButton>
            </Container>
        </Background>
    )
}
