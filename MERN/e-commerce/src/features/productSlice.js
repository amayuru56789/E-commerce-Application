import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    items: [],
    status: null,
    error: null,
};

export const productFetch = createAsyncThunk(
    "product/productFetch",
    async(id = null, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:5000/product");
            return response?.data;
        } catch(error) {
            return rejectWithValue("an error occured");
        }
        
    }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(productFetch.pending, (state, action) => {
            state.status = "pending";
        })
        .addCase(productFetch.fulfilled, (state, action) => {
            state.status = "success";
            state.items = action.payload;
        })
        .addCase(productFetch.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        });
    },
});

export default productSlice.reducer;