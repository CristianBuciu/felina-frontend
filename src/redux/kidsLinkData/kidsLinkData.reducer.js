const { v4: uuidv4 } = require("uuid");
const INITIAL_STATE = [
  {
    id: uuidv4(),
    activeClass: "is-active",
    cName: "category-links",
    route: "/kids/new-arrivals",
    title: "New Arrivalss",

    dropdownLinks: [
      {
        id: uuidv4(),
        title: "Holiday Season",
        route: "/kids/new-arrivals/holiday-season",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/3965542/pexels-photo-3965542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image",
      },
      {
        id: uuidv4(),
        title: "Sustainable Style",
        route: "/men/new-arrivals/sustainable-style",
        cName: "dropdown-links ",
        imgSrc:
          "https://images.pexels.com/photos/5368737/pexels-photo-5368737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image",
      },
    ],
  },
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
        title: "Coats & Jackets",
        route: "/kids/boys/coats-jackets",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/3117341/pexels-photo-3117341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image most-wanted-image__jacket",
      },
      {
        id: uuidv4(),
        title: "Jeans",
        route: "/kids/boys/jeans",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/1280725/pexels-photo-1280725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image",
      },
      {
        id: uuidv4(),
        title: "T-shirts",
        route: "/kids/boys/t-shirts",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1518199259649-1ba3b8f79306?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1219&q=80",
        imageClassName: "most-wanted-image most-wanted-image__jacket",
      },
      {
        id: uuidv4(),
        title: "Shoes & Accessories",
        route: "/kids/boys/shoes-accessories",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1573309463328-ec43614b3def?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Shirts",
        route: "/kids/boys/shirts",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/4881985/pexels-photo-4881985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Shorts",
        route: "/kids/boys/shorts",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1588109579922-e67f1233f72f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Underwear & Socks",
        route: "/kids/boys/underwear-socks",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/4569851/pexels-photo-4569851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        imageClassName: "most-wanted-image ",
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
        title: "Coats & Jackets",
        route: "/kids/girls/coats-jackets",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/3449715/pexels-photo-3449715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Dresses",
        route: "/kids/girls/dresses",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/3763588/pexels-photo-3763588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Sweatshirts & Hoodies",
        route: "/kids/girls/sweatshirts-hoodies",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/2976674/pexels-photo-2976674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },

      {
        id: uuidv4(),
        title: "Jeans",
        route: "/kids/gils/jeans",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1605639313137-40d577a8bee9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Shoes & Accessories",
        route: "/kids/girls/shoes-accessories",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1600455745764-ebd75e6cd567?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
        imageClassName: "most-wanted-image ",
      },
    ],
  },
  {
    id: uuidv4(),
    activeClass: "is-active",
    cName: "category-links",
    route: "/kids/babies",
    title: "Babies",
    dropdownLinks: [
      {
        id: uuidv4(),
        title: "Boys",
        route: "/kids/babies/boys",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1583007109931-cdf68cdc4f4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
        imageClassName: "most-wanted-image ",
      },
      {
        id: uuidv4(),
        title: "Girls",
        route: "/kids/babies/girls",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1588103641025-7fec3ceffc60?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
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
