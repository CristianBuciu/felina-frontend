const INITIAL_STATE = [
  {
    id: 1,
    activeClass: "is-active",
    cName: "category-links",
    route: "/gifts/for-her",
    title: "For Her",

    dropdownLinks: [
      {
        id: 11,
        title: "Winter Warmers",
        route: "/gifts/for-her/winter-warmers",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/3774980/pexels-photo-3774980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 21,
        title: "Stocking Stuffers",
        route: "/gifts/for-her/stocking-stuffers",
        cName: "dropdown-links",
        imgSrc:
          "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80",
        imageClassName: "most-wanted-image",
      },
    ],
  },
  //! =============================================================================
  {
    id: 2,
    activeClass: "is-active",
    cName: "category-links",
    route: "/gifts/for-him",
    title: "For Him",
    dropdownLinks: [
      {
        id: 12,
        title: "Winter Warmers",
        route: "/gifts/for-him/winter-warmers",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/157842/bezel-hairstyle-man-mode-157842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        imageClassName: "most-wanted-image most-wanted-image__jacket",
      },
      {
        id: 22,
        title: "Stocking Stuffers",
        route: "/gifts/for-him/stocking-stuffers",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/2442893/pexels-photo-2442893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        imageClassName: "most-wanted-image",
      },
    ],
  },
  //! =============================================================================
  {
    id: 3,
    activeClass: "is-active",
    cName: "category-links",
    route: "/gifts/for-kids",
    title: "For Kids",
    dropdownLinks: [
      {
        id: 31,
        title: "Winter Warmers",
        route: "/women/bags-accessories/bags",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/3934014/pexels-photo-3934014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        imageClassName: "most-wanted-image ",
      },
      {
        id: 32,
        title: "Stocking Stuffers",
        route: "/women/bags-accessories/watches",
        cName: "dropdown-links",
        imgSrc:
          "https://images.pexels.com/photos/1842182/pexels-photo-1842182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        imageClassName: "most-wanted-image ",
      },
    ],
  },
];

const giftsLinkDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default giftsLinkDataReducer;
