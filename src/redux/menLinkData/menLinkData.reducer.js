const INITIAL_STATE = [
  {
    id: 1,
    activeClass: "is-active",
    cName: "category-links",
    route: "/men/new-arrivals",
    title: "New Arrivalss",

    dropdownLinks: [
      {
        id: 11,
        title: "FEL!NA COLLECTION",
        route: "/men/new-arrivals/felina-collection",
        cName: "dropdown-links dropdown-links__important",
        imgSrc:
          "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 21,
        title: "Holiday Looks",
        route: "/men/new-arrivals/holiday-looks",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/3289663/pexels-photo-3289663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image",
      },
      {
        id: 31,
        title: "Sustainable Style",
        route: "/men/new-arrivals/sustainable-style",
        cName: "dropdown-links ",
        imgSrc:
          "https://images.pexels.com/photos/4876309/pexels-photo-4876309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image",
      },
    ],
  },
  {
    id: 2,
    activeClass: "is-active",
    cName: "category-links",
    route: "/men/clothing",
    title: "Clothing",
    dropdownLinks: [
      {
        id: 12,
        title: "Coats & Jackets",
        route: "/men/clothing/coats-jackets",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/1036643/pexels-photo-1036643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image most-wanted-image__jacket",
      },
      {
        id: 22,
        title: "Jeans",
        route: "/men/clothing/jeans",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
        imageClassName: "most-wanted-image",
      },
      {
        id: 32,
        title: "T-shirts",
        route: "/men/clothing/t-shirts",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/2560894/pexels-photo-2560894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image most-wanted-image__jacket",
      },
      {
        id: 42,
        title: "Suits",
        route: "/men/clothing/suits",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 52,
        title: "Sweatshirts & Hoodies",
        route: "/men/clothing/sweatshirts-hoodies",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 62,
        title: "Shirts",
        route: "/men/clothing/shirts",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1582851758630-35282b9610e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 72,
        title: "Shorts",
        route: "/men/clothing/shorts",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1601141256817-c60897f2776a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 82,
        title: "Underwear",
        route: "/men/clothing/underwear",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1586204861018-14c36bef0bdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
        imageClassName: "most-wanted-image ",
      },
    ],
  },
  {
    id: 3,
    activeClass: "is-active",
    cName: "category-links",
    route: "/men/bags-accesories",
    title: "Bags & Accessories",
    dropdownLinks: [
      {
        id: 31,
        title: "Sunglasses",
        route: "/men/bags-accesories/sunglasses",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 32,
        title: "Backpacks",
        route: "/men/bags-accesories/backpacks",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/704805/pexels-photo-704805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 33,
        title: "Watches",
        route: "/men/bags-accesories/watches",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/1374128/pexels-photo-1374128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 34,
        title: "Belts",
        route: "/men/bags-accesories/belts",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1582759959881-307a185233b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
        imageClassName: "most-wanted-image ",
      },
    ],
  },
  {
    id: 4,
    activeClass: "is-active",
    cName: "category-links",
    route: "/men/shoes",
    title: "Shoes",
    dropdownLinks: [
      {
        id: 41,
        title: "Boots",
        route: "/men/shoes/boots",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1520809382381-d95e6364bbdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 42,
        title: "Sneakers",
        route: "/men/shoes/sneakers",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 43,
        title: "Formal Shoes",
        route: "/men/shoes/formal-shoes",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/5537815/pexels-photo-5537815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
