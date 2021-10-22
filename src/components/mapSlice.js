import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  labels: ['repair', 'showroom', 'service'],
  name: ''
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    filterMarkers: (state, action) => {
      state.name = action.payload.name
      state.labels = action.payload.labels
    },
  },
})

// Action creators are generated for each case reducer function
export const { filterMarkers } = mapSlice.actions

export default mapSlice.reducer