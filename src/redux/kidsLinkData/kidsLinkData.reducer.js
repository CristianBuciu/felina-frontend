const { v4: uuidv4 } = require("uuid");
const INITIAL_STATE = [
  //!==================================================================
  {
    id: uuidv4(),
    activeClass: "is-active",
    cName: "category-links",
    route: "/kids/boys",
    title: "Boys",
    dropdownLinks: [
      {
        id: uuidv4(),
        title: "Newborn 0-24 Months",
        route: "/kids/boys/newborn",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/P1RG07KA6W0-PC74-ALT1",
        imageClassName: "most-wanted-image most-wanted-image__jacket",
      },
      {
        id: uuidv4(),
        title: "Baby 2-6 Years",
        route: "/kids/boys/baby",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/N1RH05W9CL0-PQ91",
        imageClassName: "most-wanted-image",
      },
      {
        id: uuidv4(),
        title: "Junior 6-16 years",
        route: "/kids/boys/junior",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/L1RN03WDO30-DEKB",
        imageClassName: "most-wanted-image most-wanted-image__jacket",
      },
    ],
  },
  //!==================================================================
  {
    id: uuidv4(),
    activeClass: "is-active",
    cName: "category-links",
    route: "/kids/girls",
    title: "Girls",
    dropdownLinks: [
      {
        id: uuidv4(),
        title: "Newborn 0-24 Months",
        route: "/kids/girls/newborn",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/S1RG10KA6W0-GBMT",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Baby 2-6 Years",
        route: "/kids/girls/baby",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/J1RK28KAE30-TWHT",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Junior 6-16 years",
        route: "/kids/girls/junior",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/J1GI24K6YW1-C448",
        imageClassName: "most-wanted-image ",
      },
    ],
  },
];

const kidsLinkDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default kidsLinkDataReducer;
