import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const char_limit = 12; 
export const fetchCharacters = createAsyncThunk('characters/getCharacters', async (page) => {   
    const response = await axios.get(`https://www.breakingbadapi.com/api/characters?limit=${char_limit}&offset=${page * char_limit}`);
    return response.data;
});
export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        status: "idle",
        error: null,
        page: 0, 
        hasNextPage: true,
    },
    reducers: {
    },
    extraReducers: {
        [fetchCharacters.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchCharacters.fulfilled]: (state, action) => {
            state.items = [...state.items, ...action.payload];
            state.status = "succeeded";
            console.log(action.payload);
            state.page += 1;

            if (action.payload.length < char_limit) {
                state.hasNextPage = false;
            }
        },
        [fetchCharacters.rejected]: (state, action) => {
            state.error = action.error;
            state.status = "failed";
        },
    },


});

export default charactersSlice.reducer;