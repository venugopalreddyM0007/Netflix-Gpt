import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    aiGeneratedMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addAiGeneratedMovies: (state, action) => {
      state.aiGeneratedMovies = action.payload;
    },
  },
});

export const { toggleGptSearchView, addAiGeneratedMovies } = gptSlice.actions;

export default gptSlice.reducer;
