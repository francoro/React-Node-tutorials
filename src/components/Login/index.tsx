import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../services/Dogs'
import { useHistory } from "react-router-dom"
import { saveUser } from '../../store/user'
import { Container, Title, Input, Button, ContainerButton } from './styled'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isNotValidUser, setNotValidUser] = useState(false)

    const history = useHistory()
    const dispatch: any = useDispatch()

    const handleLogin = () => {
        const data = {
            email,
            password
        }
        login(data).then((user) => {
            if(user.length) {
                dispatch(saveUser(user))
                setNotValidUser(false)
                history.push('/')
            } else {
                setNotValidUser(true)
            }
        })
    }

    return (
        <Container>
            <Title>Welcome to Skin and Bone</Title>
            <label htmlFor="email">Email</label>
            <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text"/>
            <label htmlFor="password">Password</label>
            <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            {isNotValidUser && <p>Please enter the correct email or password</p>}
            <ContainerButton>
                <Button onClick={handleLogin}>Login</Button>
                <Button id="signup">Sign up</Button>
            </ContainerButton>
        </Container>
    )
}
