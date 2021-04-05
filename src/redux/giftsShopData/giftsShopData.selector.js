import { createSelector } from "reselect";

const selectGiftsShop = (state) => state.giftsShop;

export const selectGiftsShopData = createSelector(
  [selectGiftsShop],
  (shop) => shop
);
