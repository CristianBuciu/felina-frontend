import { createSelector } from "reselect";

const selectWomenShop = (state) => state.womenShop;

export const selectWomenShopData = createSelector(
  [selectWomenShop],
  (shop) => shop
);

export const selectNewArrivalItems = createSelector(
  [selectWomenShopData],
  category => category.newArrival.subcategories.items
)

export const selectItem = itemUrlParam => 
createSelector(
  [selectNewArrivalItems],
  item => item[itemUrlParam]
  );