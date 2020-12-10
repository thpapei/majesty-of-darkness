import { createSlice } from '@reduxjs/toolkit';



const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    logIn: (state, action) => { state.uid = action.payload },
    logOut: (state, action) => { state = {} }
  },
});

export const {
  logIn,
  logOut
} = authSlice.actions;
export default authSlice.reducer;