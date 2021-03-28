import { createSelector } from "reselect";

const selectGiftsLinkData = (state) => state.giftsLinkData;

export const selectGiftsLinkDataSection = createSelector(
  [selectGiftsLinkData],
  (giftsLinkData) => giftsLinkData
);
