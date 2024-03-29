import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./UserService";
import { toast } from "react-toastify";



export const registerUser = createAsyncThunk("auth/register", async (useeData, thunkAPI) => {
    try {
        return await authService.register(useeData)
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const loginUser = createAsyncThunk("auth/login", async (useeData, thunkAPI) => {
    try {
        return await authService.login(useeData)
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

const initialstate = {
    user: "",
    isError: false,
    issuccess: false,
    isLoadong: false,
    massage: ""
}

export const authslice = createSlice({
    name: "auth",
    initialState: initialstate,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoadong = true;
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.isLoadong = false;
            state.isError = false;
            state.issuccess = true;
            state.createduser = action.payload;
            if (state.issuccess === true) {
                localStorage.setItem('token', action.payload.token)
                toast.info("User Created Successfully")
            }
        }).addCase(registerUser.rejected, (state, action) => {
            state.isLoadong = false;
            state.isError = true;
            state.issuccess = false;
            state.massage = action.error;
            if (state.isError === true) {
                toast.error(action.error)
            }
        }).addCase(loginUser.pending, (state) => {
            state.isLoadong = true;
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.isLoadong = false;
            state.isError = false;
            state.issuccess = true;
            state.user = action.payload;
            if (state.issuccess === true) {
                toast.info("User logged In Successfully")
            }
        }).addCase(loginUser.rejected, (state, action) => {
            state.isLoadong = false;
            state.isError = true;
            state.issuccess = false;
            state.massage = action.error;
            if (state.isError === true) {
                toast.error(action.error)
            }
        })
    }
})

export default authslice.reducer;