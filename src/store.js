import { configureStore } from '@reduxjs/toolkit'
import mapReducer from './components/MapContainer/mapSlice'
import saleReducer from './components/CarSale/saleSlice'

export const store = configureStore({
  reducer: {
    map: mapReducer,
    sale: saleReducer
  },
})