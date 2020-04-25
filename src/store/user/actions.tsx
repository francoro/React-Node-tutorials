import {
  saveUser
} from '.'

export const saveUserAction = (
  user: any
) => {
  return (dispatch: any) => {
    dispatch(
        saveUser(user)
    )
}}