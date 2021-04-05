const { v4: uuidv4 } = require("uuid");

const INITIAL_STATE = {
  //! For Her ============================================
  forHer: {
    id: uuidv4(),
    categoryTitle: "For Her",
    subcategories: [
      {
        id: uuidv4(),
        title: "Accessories",
        subTitle: "For Her",
        route: "/gifts/for-her/accessories",
        items: [
          //! Accessories ===================
          {
            id: uuidv4(),

            title: "LOCK ME UP’ EARRINGS",
            price: 49.99,
            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/JUBE20055JW-GL-ALT1",

            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "universal size",
                symbol: "universal size",
                quantity: 0,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "ETERNAL LOVE’ NECKLACE",
            price: 49.9,
            quantity: 99,
            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/JUBN20077JW-GL-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "universal size",
                symbol: "universal size",
                quantity: 0,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "ROMANCE BRACELET",
            price: 50.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/JUBB70091JW-RG-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "universal size",
                symbol: "universal size",
                quantity: 0,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "LOVERS EARRINGS",
            price: 30.9,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/JUBE70103JW-RG-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "universal size",
                symbol: "universal size",
                quantity: 0,
              },
            ],
          },
        ],
      },
      //! Bags ==========================================================
      {
        id: uuidv4(),
        title: "Bags",
        subTitle: "For Her",
        route: "/gifts/for-her/bags",
        items: [
          {
            id: uuidv4(),

            title: "FLORAL SHOULDER BAG",
            price: 119.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/HWFS7580190-SPF-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 0,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 0,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 10,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 0,
              },
            ],

            id: uuidv4(),

            title: "CROCODILE CROSSBODY",
            price: 109.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/HWCG7991780-PIN-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 0,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 0,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 10,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 0,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "PRINT SHOULDER BAG",
            price: 79.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/HWTG7748190-GRY-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 0,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 0,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 10,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 0,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "LAMINATED CROSSBODY",
            price: 105.55,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/HWPG7976780-GOL-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 0,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 0,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 10,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 0,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "CROC-LOOK SHOULDER BAG",
            price: 109.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/HWMC7477180-GOL-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 0,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 0,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 10,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  //! For Him ============================================
  forHim: {
    id: uuidv4(),
    categoryTitle: "For Him",
    subcategories: [
      {
        id: uuidv4(),
        title: "Accessories",
        subTitle: "For Him",
        route: "/gifts/for-him/accessories",
        items: [
          //! Accessories ===================
          {
            id: uuidv4(),

            title: "GUESS HERO BRACELET",
            price: 49.99,
            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/JUMB29007JW-BOWN",

            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "universal size",
                symbol: "universal size",
                quantity: 0,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "ROUND SUNGLASSES",
            price: 49.9,
            quantity: 99,
            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/G0001252QQQ-08V",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "universal size",
                symbol: "universal size",
                quantity: 0,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "BRAIDED LEATHER BRACELET",
            price: 50.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/JUMB70095JW-RH-ALT2",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "universal size",
                symbol: "universal size",
                quantity: 0,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "TORPEDO CUFFLINKS",
            price: 30.9,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/JUMC28004JW-RH-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "universal size",
                symbol: "universal size",
                quantity: 0,
              },
            ],
          },
        ],
      },
      //! Bags ==========================================================
      {
        id: uuidv4(),
        title: "Bags",
        subTitle: "For Her",
        route: "/gifts/for-him/bags",
        items: [
          {
            id: uuidv4(),

            title: "LOGO CROSSBODY BAG",
            price: 119.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/HMVEZLP1226-BLA-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 0,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 0,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 10,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 0,
              },
            ],

            id: uuidv4(),

            title: "ELVIS LOGO BACKPACK",
            price: 109.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/HMELPEP1105-BRO-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 0,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 0,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 10,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 0,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "POCKET BACKPACK",
            price: 79.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/HMSCLAP1210-BLA-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 0,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 0,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 10,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 0,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "DAN WEEKENDER BAG",
            price: 105.55,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/TMDNNAP0238-SAN-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 0,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 0,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 10,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 0,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "SCALA CROSSBODY BAG",
            price: 109.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/HMSCLAP1226-BLU-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 0,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 0,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 10,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 0,
              },
            ],
          },
        ],
      },
    ],
  },
};

const giftsShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default giftsShopReducer;
