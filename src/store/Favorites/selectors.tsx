import { createSelector } from '@reduxjs/toolkit'

export const getFavoritesSelector = createSelector(
  (state: any) => state.favorites,
  (favorites: any) => favorites.favorites
)