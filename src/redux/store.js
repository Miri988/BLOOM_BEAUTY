import { configureStore } from "@reduxjs/toolkit";
import { userSlice} from "redux/users/slice";


export const store = configureStore({
    reducer: {
       user: userSlice,        
    },
});