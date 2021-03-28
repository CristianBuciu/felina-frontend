import { createSelector } from "reselect";

const selectWomenLinkData = (state) => state.womenLinkData;

export const selectWomenLinkDataSection = createSelector(
  [selectWomenLinkData],
  (womenLinkData) => womenLinkData
);
