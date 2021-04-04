import { createSelector } from "reselect";

const selectWomenShop = (state) => state.womenShop;

export const selectWomenShopData = createSelector(
  [selectWomenShop],
  (shop) => shop
);
