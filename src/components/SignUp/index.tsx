import React, {useState} from 'react'
import { register } from '../../services/Dogs'
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom';

export const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const handleSignUp = () => {
        const data = {
            email,
            password
        }
        register(data).then((user) => {
            history.push('/login')
        })
    }

    return (
        <React.Fragment>
            <p>Email</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text"/>
            <p>Password</p>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
            <Link to={'/login'}>Back</Link>
            <button onClick={handleSignUp}>Sign up</button>
        </React.Fragment>
    )
}
