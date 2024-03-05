import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/user/UserSlice'

export const Store = configureStore(
    {
        reducer: {
            auth: authReducer
        }
    }
)