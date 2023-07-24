import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurent: null,
}

export const restaurentSlice = createSlice({
  name: 'restaurent',
  initialState,
  reducers: {
   setRestaurent: (state, action) => {
      state.restaurent = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurent } = restaurentSlice.actions;

export const selectRestaurent = state=> state.restaurent.restaurent;

export default restaurentSlice.reducer