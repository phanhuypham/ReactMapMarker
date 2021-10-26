import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  options: [],
  price: 0
};

const checkDuplicatedOptionType = (arr, optionType) => {
  return arr.findIndex(element => {
    return element.optionType === optionType
  });
}

export const saleSlice = createSlice({
  name: 'sale',
  initialState,
  reducers: {
    selectOption: (state, action) => {
      const {option, optionType} = action.payload
      const duplicateIndex = checkDuplicatedOptionType(state.options, optionType)
      console.log(duplicateIndex);
      if(duplicateIndex >= 0) {
        const newOptions = state.options;
        newOptions[duplicateIndex] = {...option, optionType};
        state.options = newOptions;
      }
      else {
        state.options.push({...option, optionType})
      }

      state.price = state.options.reduce((prev, curr) => {
        return prev + curr.price} , 0);
    },
    selectPreviousTab: (state, action) => {
      state.options.splice(action.payload + 1);
    },
  },
})

// Action creators are generated for each case reducer function
export const { selectOption, selectPreviousTab } = saleSlice.actions

export default saleSlice.reducer