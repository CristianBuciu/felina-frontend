const { v4: uuidv4 } = require("uuid");

const INITIAL_STATE = [
  {
    id: uuidv4(),
    activeClass: "is-active",
    cName: "category-links",
    route: "/women/new-arrivals",
    title: "New Arrivals",

    dropdownLinks: [
      {
        id: uuidv4(),
        title: "FEL!NA COLLECTION",
        route: "/women/new-arrivals/felina-collection",
        cName: "dropdown-links dropdown-links__important",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/1GGK067068Z-P6K2",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Denim Season",
        route: "/women/new-arrivals/denim-season",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/0BG1539340Z-BRWA-ALT1",
        imageClassName: "most-wanted-image",
      },
      {
        id: uuidv4(),
        title: "Sustainable Style",
        route: "/women/new-arrivals/sustainable-style",
        cName: "dropdown-links ",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/1GG7289543Z-F1Y8-ALT1",
        imageClassName: "most-wanted-image",
      },
    ],
  },
  {
    id: uuidv4(),
    activeClass: "is-active",
    cName: "category-links",
    route: "/women/clothing",
    title: "Clothing",
    dropdownLinks: [
      {
        id: uuidv4(),
        title: "Coats & Jackets",
        route: "/women/clothing/coats-jackets",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/1GG3009525Z-G1CH",
        imageClassName: "most-wanted-image most-wanted-image__jacket",
      },
      {
        id: uuidv4(),
        title: "Jeans",
        route: "/women/clothing/jeans",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/0BG1539340Z-BRWA-ALT1",
        imageClassName: "most-wanted-image",
      },
      {
        id: uuidv4(),
        title: "T-shirts",
        route: "/women/clothing/t-shirts",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1RI9CJA900-TWHT",
        imageClassName: "most-wanted-image most-wanted-image__jacket",
      },
      {
        id: uuidv4(),
        title: "Shirts & Blouses",
        route: "/women/clothing/shirts-blouses",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/1GG6086989Z-G6K8",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Dresses & Jumpsuits",
        route: "/women/clothing/dresses-jumpsuits",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W0GK68WDJY0-P0WB",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Tops",
        route: "/women/clothing/tops",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W0GH04WDJY0-P0WB",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Skirts",
        route: "/women/clothing/skirts",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1GD0ZWDVC0-P76M-ALT1",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Lingerie",
        route: "/women/clothing/lingerie",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/O97C02PZ01C-A996-ALT1",
        imageClassName: "most-wanted-image ",
      },
    ],
  },
  {
    id: uuidv4(),
    activeClass: "is-active",
    cName: "category-links",
    route: "/women/bags-accessories",
    title: "Bags & Accessories",
    dropdownLinks: [
      {
        id: uuidv4(),
        title: "Bags",
        route: "/women/bags-accessories/bags",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/HWLAPIL0206-COG-ALT1",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Watches",
        route: "/women/bags-accessories/watches",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/GW0258FLSWC-L1",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Sunglasses",
        route: "/women/bags-accessories/sunglasses",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/GU773564QQQ-10B-ALT1",
        imageClassName: "most-wanted-image ",
      },
    ],
  },
  {
    id: uuidv4(),
    activeClass: "is-active",
    cName: "category-links",
    route: "/women/shoes",
    title: "Shoes",
    dropdownLinks: [
      {
        id: uuidv4(),
        title: "Boots",
        route: "/women/shoes/boots",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/FL5ORNFAL08-BROWN",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Sneakers",
        route: "/women/shoes/sneakers",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/FL6B2RFAL12-WHIBR",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Sandals",
        route: "/women/shoes/sandals",
        cName: "dropdown-links",
        imgSrc:
          "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/FL6RIOFAB03-BLKWH",
        imageClassName: "most-wanted-image ",
      },
    ],
  },
];

const womenLinkDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default womenLinkDataReducer;
