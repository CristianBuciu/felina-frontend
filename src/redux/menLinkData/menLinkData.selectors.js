import { createSelector } from "reselect";

const selectMenLinkData = (state) => state.menLinkData;

export const selectMenLinkDataSection = createSelector(
  [selectMenLinkData],
  (menLinkData) => menLinkData
);
