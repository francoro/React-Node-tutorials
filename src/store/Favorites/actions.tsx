import {
    addFavorite,
    removeFavorite
  } from '.'
  
  export const addFavoriteAction = (
    favorite: number
  ) => {
    return (dispatch: any) => {
      dispatch(
          addFavorite(favorite)
      )
  }}


  export const removeFavoriteAction = (
    favorite: number
  ) => {
    return (dispatch: any) => {
      dispatch(
          removeFavorite(favorite)
      )
  }}