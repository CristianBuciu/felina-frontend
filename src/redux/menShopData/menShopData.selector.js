import { createSelector } from "reselect";

const selectMenShop = (state) => state.menShop;

export const selectMenShopData = createSelector(
  [selectMenShop],
  (shop) => shop
);
