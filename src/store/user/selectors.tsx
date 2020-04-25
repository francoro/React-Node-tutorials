import { createSelector } from '@reduxjs/toolkit'

export const getUser = createSelector(
  (state: any) => state.user,
  (user: any) => user
)