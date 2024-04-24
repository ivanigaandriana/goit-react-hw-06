import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
      name: '',
     

  };
  
  const filterSlice = createSlice({
    name: 'filters',
    initialState: INITIAL_STATE,
    reducers: {
      setFilterName(state, action) { 
        state.name = action.payload;
      },
      
    },
  });
  export const selectFilterName = state => state.filters.name;
  export const { setFilterName } = filterSlice.actions;
  export const filterReducer = filterSlice.reducer;