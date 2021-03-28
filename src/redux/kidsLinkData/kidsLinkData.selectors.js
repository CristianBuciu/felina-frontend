import { createSelector } from "reselect";

const selectKidsLinkData = (state) => state.kidsLinkData;

export const selectKidsLinkDataSection = createSelector(
  [selectKidsLinkData],
  (kidsLinkData) => kidsLinkData
);
