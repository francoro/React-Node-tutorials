import { DogType } from '../../services/types/types'
import {
    addFavorite,
    removeFavorite
  } from '.'
  
  export const addFavoriteAction = (
    favorite: DogType 
  ) => {
    return (dispatch: any) => {
      dispatch(
          addFavorite(favorite)
      )
  }}


  export const removeFavoriteAction = (
    favorite: DogType 
  ) => {
    return (dispatch: any) => {
      dispatch(
          removeFavorite(favorite)
      )
  }}