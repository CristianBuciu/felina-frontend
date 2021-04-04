import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import womenLinkDataReducer from "./womenLinkData/womenLinkData.reducer";
import menLinkDataReducer from "./menLinkData/menLinkData.reducer";
import kidsLinkDataReducer from "./kidsLinkData/kidsLinkData.reducer";
import giftsLinkDataReducer from "./giftsLinkData/giftsLinkData.reducer";
import womenShopReducer from "./womenShopData/womenShopData.reducer";
import menShopReducer from "./menShopData/menShopData.reducer.js";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  womenLinkData: womenLinkDataReducer,
  menLinkData: menLinkDataReducer,
  kidsLinkData: kidsLinkDataReducer,
  giftsLinkData: giftsLinkDataReducer,
  womenShop: womenShopReducer,
  menShop: menShopReducer,
});

export default persistReducer(persistConfig, rootReducer);
