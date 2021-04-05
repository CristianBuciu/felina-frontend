const { v4: uuidv4 } = require("uuid");
const INITIAL_STATE = [
  {
    id: uuidv4(),
    activeClass: "is-active",
    cName: "category-links",
    route: "/gifts/for-her",
    title: "For Her",

    dropdownLinks: [
      {
        id: uuidv4(),
        title: "Accessories",
        route: "/gifts/for-her/accessories",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/JUBE20055JW-GL-ALT1",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Bags",
        route: "/gifts/for-her/bags",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/HWFS7580190-SPF-ALT1",
        imageClassName: "most-wanted-image",
      },
    ],
  },
  //! =============================================================================
  {
    id: uuidv4(),
    activeClass: "is-active",
    cName: "category-links",
    route: "/gifts/for-him",
    title: "For Him",
    dropdownLinks: [
      {
        id: uuidv4(),
        title: "Accessories",
        route: "/gifts/for-him/accessories",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/G0001252QQQ-08V",
        imageClassName: "most-wanted-image most-wanted-image__jacket",
      },
      {
        id: uuidv4(),
        title: "Bags",
        route: "/gifts/for-him/bags",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/HMVEZLP1226-BLA-ALT1",
        imageClassName: "most-wanted-image",
      },
    ],
  },
  //! =============================================================================
];

const giftsLinkDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default giftsLinkDataReducer;
