import React from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../../store/user/selectors'

export const MyAnimals:React.FC = () => {
    const user = useSelector(getUser)
    console.log("user", user)
    return <p>HOLa</p>
}