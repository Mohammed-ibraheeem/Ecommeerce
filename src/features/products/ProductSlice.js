import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsService } from "./ProductService";


export const getAllProducts = createAsyncThunk(
    "product/get",
    async (thunkAPI) => {
        try {
            return await productsService.getproducts();
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    });

const productState = {
    product: "",
    isError: false,
    issuccess: false,
    isLoadong: false,
    massage: ""
}

export const productslice = createSlice({
    name: "product",
    initialState: productState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.isLoadong = true;
        }).addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoadong = false;
            state.isError = false;
            state.issuccess = true;
            state.product = action.payload;
            /*if (state.issuccess === true) {
                localStorage.setItem('token', action.payload.token)
                toast.info("User Created Successfully")
            }*/
        }).addCase(getAllProducts.rejected, (state, action) => {
            state.isLoadong = false;
            state.isError = true;
            state.issuccess = false;
            state.massage = action.error;
            /*if (state.isError === true) {
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
            }*/
        })
    }
})

export default productslice.reducer;