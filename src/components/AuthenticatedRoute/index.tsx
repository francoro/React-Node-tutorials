import React from 'react'
import { RouteProps, Route } from 'react-router-dom'
import { getItem } from '../../helpers/localStorage'
import { Login } from '../../components/Login'

export const AuthenticatedRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const user = getItem('user')
  if (user) {
    return <Route {...props} />
  } else {
    return <Route {...props}><Login /></Route>
  }
}

