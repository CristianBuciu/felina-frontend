import { createSelector } from "reselect";

const selectKidsShop = (state) => state.kidsShop;

export const selectKidsShopData = createSelector(
  [selectKidsShop],
  (shop) => shop
);
