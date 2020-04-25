import {
  saveUser
} from '.'

export const getFrozenEmbryoList = (
  user: any
) => {
  return (dispatch: any) => {
    dispatch(
        saveUser(user)
    )
}}