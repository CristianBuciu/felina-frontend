const { v4: uuidv4 } = require("uuid");
const INITIAL_STATE = [
  {
    id: uuidv4(),
    activeClass: "is-active",
    cName: "category-links",
    route: "/men/new-arrivals",
    title: "New Arrivalss",

    dropdownLinks: [
      {
        id: uuidv4(),
        title: "FEL!NA COLLECTION",
        route: "/men/new-arrivals/felina-collection",
        cName: "dropdown-links dropdown-links__important",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GL55WDU90-JBLK",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Denim Season",
        route: "/men/new-arrivals/denim-season",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GXN1D4ED1-BDLD-ALT2",
        imageClassName: "most-wanted-image",
      },
      {
        id: uuidv4(),
        title: "Sustainable Style",
        route: "/men/new-arrivals/sustainable-style",
        cName: "dropdown-links ",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0BH25WDA00-TWHT",
        imageClassName: "most-wanted-image",
      },
    ],
  },
  {
    id: uuidv4(),
    activeClass: "is-active",
    cName: "category-links",
    route: "/men/clothing",
    title: "Clothing",
    dropdownLinks: [
      {
        id: uuidv4(),
        title: "Coats & Jackets",
        route: "/men/clothing/coats-jackets",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0BL03R0O00-JBLK-ALT1",
        imageClassName: "most-wanted-image most-wanted-image__jacket",
      },
      {
        id: uuidv4(),
        title: "Jeans",
        route: "/men/clothing/jeans",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1RAN1D4B74-TGEN-ALT1",
        imageClassName: "most-wanted-image",
      },
      {
        id: uuidv4(),
        title: "T-shirts",
        route: "/men/clothing/t-shirts",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0RI32R6CS1-G011",
        imageClassName: "most-wanted-image most-wanted-image__jacket",
      },
      {
        id: uuidv4(),
        title: "Suits",
        route: "/men/clothing/suits",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto/v1/EU/Style/ECOMM/1GH2012013Z-DKNB-ALT1",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Sweatshirts & Hoodies",
        route: "/men/clothing/sweatshirts-hoodies",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0RQ02R44Q9-G011-ALT1",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Shirts",
        route: "/men/clothing/shirts",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GH35RD4ZB-P1P5-ALT1",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Shorts",
        route: "/men/clothing/shorts",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GD55K68I1-G8DA-ALT1",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Underwear",
        route: "/men/clothing/underwear",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/U97G01JR003-F017",
        imageClassName: "most-wanted-image ",
      },
    ],
  },
  {
    id: uuidv4(),
    activeClass: "is-active",
    cName: "category-links",
    route: "/men/bags-accessories",
    title: "Bags & Accessories",
    dropdownLinks: [
      {
        id: uuidv4(),
        title: "Sunglasses",
        route: "/men/bags-accessories/sunglasses",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/G0002661QQQ-08B-ALT1",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Wallets",
        route: "/men/bags-accessories/wallets",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/SMVEZLLEA20-BLA",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Watches",
        route: "/men/bags-accessories/watches",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/WW0799FMSWC-G2",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Belts",
        route: "/men/bags-accessories/belts",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/BM7351VIN35-COA",
        imageClassName: "most-wanted-image ",
      },
    ],
  },
  {
    id: uuidv4(),
    activeClass: "is-active",
    cName: "category-links",
    route: "/men/shoes",
    title: "Shoes",
    dropdownLinks: [
      {
        id: uuidv4(),
        title: "Boots",
        route: "/men/shoes/boots",
        cName: "dropdown-links",
        imgSrc: "https://www.armani.com/11/11753174RO_16_r.jpg",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Sneakers",
        route: "/men/shoes/sneakers",
        cName: "dropdown-links",
        imgSrc: "https://www.armani.com/11/11500114KK_16_r.jpg",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Formal Shoes",
        route: "/men/shoes/formal-shoes",
        cName: "dropdown-links",
        imgSrc: "https://www.armani.com/11/11753147LV_16_r.jpg",
        imageClassName: "most-wanted-image ",
      },
    ],
  },
];

const menLinkDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menLinkDataReducer;
