import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        user: null,
    },
    reducers:{
        signin: (state, action)=>{
            state.user=action.payload;
        },
        signout: (state, action)=>{
            state.user = null;
        }
    }
})

export const {signin, signout} = userSlice.actions

export const selectUser = state=>state.user.user;

export default userSlice.reducer