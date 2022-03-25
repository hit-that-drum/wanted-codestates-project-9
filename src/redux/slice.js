import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "userData",
  initialState: {
    userName: "",
    finishMatchPer: 0,
    winMatchPer: 0,
    retiredMatchPer: 0,
    matchRankFifty: 0,
    matchRankAll: 0
  },
  reducers: {
    usernameSet: (state, action) => {
      const userName = action.payload;
      state.userName = userName;
    },
    finishMatchPerSet: (state, action) => {
      const finishMatchPerSet = action.payload;
      state.finishMatchPerSet = finishMatchPerSet;
    },
    winMatchPerSet: (state, action) => {
      const winMatchPerSet = action.payload;
      state.winMatchPerSet = winMatchPerSet;
    },
    retiredMatchPerSet: (state, action) => {
      const retiredMatchPerSet = action.payload;
      state.retiredMatchPerSet = retiredMatchPerSet;
    },
    matchRankFiftySet: (state, action) => {
      const matchRankFiftySet = action.payload;
      state.matchRankFiftySet = matchRankFiftySet;
    },
    matchRankAllSet: (state, action) => {
      const matchRankAllSet = action.payload;
      state.matchRankAllSet = matchRankAllSet;
    },
  }
});

export const { usernameSet, finishMatchPerSet, winMatchPerSet, retiredMatchPerSet, matchRankFiftySet, matchRankAllSet } = counterSlice.actions;

export default counterSlice.reducer;