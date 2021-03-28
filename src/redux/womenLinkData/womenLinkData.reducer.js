const INITIAL_STATE = [
  {
    id: 1,
    activeClass: "is-active",
    cName: "category-links",
    route: "/women/new-arrivals",
    title: "New Arrivals",

    dropdownLinks: [
      {
        id: 11,
        title: "FEL!NA COLLECTION",
        route: "/women/new-arrivals/felina-collection",
        cName: "dropdown-links dropdown-links__important",
        imgSrc:
          "https://images.pexels.com/photos/4255179/pexels-photo-4255179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 21,
        title: "Holiday Looks",
        route: "/women/new-arrivals/holiday-looks",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1588613523533-656df85b8a35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
        imageClassName: "most-wanted-image",
      },
      {
        id: 31,
        title: "Sustainable Style",
        route: "/women/new-arrivals/sustainable-style",
        cName: "dropdown-links ",
        imgSrc:
          "https://images.unsplash.com/photo-1563222781-576f9f9e4bee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
        imageClassName: "most-wanted-image",
      },
    ],
  },
  {
    id: 2,
    activeClass: "is-active",
    cName: "category-links",
    route: "/women/clothing",
    title: "Clothing",
    dropdownLinks: [
      {
        id: 12,
        title: "Coats & Jackets",
        route: "/women/clothing/coats-jackets",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image most-wanted-image__jacket",
      },
      {
        id: 22,
        title: "Jeans",
        route: "/women/clothing/jeans",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/2068349/pexels-photo-2068349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image",
      },
      {
        id: 32,
        title: "T-shirts",
        route: "/women/clothing/t-shirts",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/5432532/pexels-photo-5432532.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        imageClassName: "most-wanted-image most-wanted-image__jacket",
      },
      {
        id: 42,
        title: "Shirts & Blouses",
        route: "/women/clothing/shirts-blouses",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/4972985/pexels-photo-4972985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 52,
        title: "Dresses & Jumpsuits",
        route: "/women/clothing/dresses-jumpsuits",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/3831039/pexels-photo-3831039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 62,
        title: "Tops",
        route: "/women/clothing/tops",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/3119697/pexels-photo-3119697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 72,
        title: "Skirts",
        route: "/women/clothing/skirts",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/4577274/pexels-photo-4577274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 82,
        title: "Lingerie",
        route: "/women/clothing/lingerie",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/3819577/pexels-photo-3819577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
    ],
  },
  {
    id: 3,
    activeClass: "is-active",
    cName: "category-links",
    route: "/women/bags-accessories",
    title: "Bags & Accessories",
    dropdownLinks: [
      {
        id: 31,
        title: "Bags",
        route: "/women/bags-accessories/bags",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 32,
        title: "Watches",
        route: "/women/bags-accessories/watches",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/1374128/pexels-photo-1374128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 33,
        title: "Sunglasses",
        route: "/women/bags-accessories/sunglasses",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
    ],
  },
  {
    id: 4,
    activeClass: "is-active",
    cName: "category-links",
    route: "/women/shoes",
    title: "Shoes",
    dropdownLinks: [
      {
        id: 41,
        title: "Boots",
        route: "/women/shoes/boots",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/1501210/pexels-photo-1501210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 42,
        title: "Sneakers",
        route: "/women/shoes/sneakers",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/3434962/pexels-photo-3434962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 43,
        title: "Sandals",
        route: "/women/shoes/sandals",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1556227127-18a3071683eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
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
