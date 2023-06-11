import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const userSlice = createSlice({
    name: 'USER',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value +=1;
        },
        decrement: (state) => {
            state.value -=1;
        },

    },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;