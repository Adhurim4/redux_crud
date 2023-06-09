import { createSlice } from "@reduxjs/toolkit";

import { UsersData } from '../FakeData'

export const userSlice = createSlice({
    name: 'users',
    initialState: {value: UsersData },
    reducers:{
        addUser: (state, action) =>{
             // code for adding the user 
             state.value.push(action.payload);
        },
        deleteUser:(state,action)=>{
            //detele a user
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        },
        updateUser:(state,action) => {
            // update user
            state.value.map((user) => {
                if(user.id === action.payload.id){
                    user.username = action.payload.username;
                }
            })
        }
    },
});

export const {addUser,deleteUser, updateUser} = userSlice.actions;
export default userSlice.reducer;

