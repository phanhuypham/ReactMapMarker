import { configureStore } from '@reduxjs/toolkit'
import mapReducer from './components/mapSlice'

export const store = configureStore({
  reducer: {
    map: mapReducer
  },
})