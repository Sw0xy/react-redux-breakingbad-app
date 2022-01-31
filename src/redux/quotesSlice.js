import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
export const fetchAllQuotes = createAsyncThunk('quotes/getQuotes', async () => {
    const response = await axios.get(`https://www.breakingbadapi.com/api/quotes`);
    return response.data;
});

export const quotesSlice = createSlice({
    name: "quotes",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    reducers: {
    },
    extraReducers: {
        [fetchAllQuotes.pending]: (state, action) => {
            state.status = 'idle';
        },
        [fetchAllQuotes.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "succeeded";
           
            
        },
        [fetchAllQuotes.rejected]: (state, action) => {
            state.error = action.error;
            state.status = "failed";
        },
    },
});
export const quotesSelector = state => state.quotes.items;

export const statusSelector = state => state.quotes.status;

export const errorSelector = state => state.quotes.error;


export default quotesSlice.reducer;
