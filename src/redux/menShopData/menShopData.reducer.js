const { v4: uuidv4 } = require("uuid");

const INITIAL_STATE = {
  newArrival: {
    id: uuidv4(),
    categoryTitle: "New Arrivals",
    subcategories: [
      {
        id: uuidv4(),
        title: "Felina Collection",
        subTitle: "New Arrivals",
        route: "/men/new-arrivals/felina-collection",
        items: [
          //! Felina Collection
          {
            id: uuidv4(),

            title: "DENIM JACKET",
            price: 199.99,
            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GXN1D4ED1-BDLD-ALT2",

            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "FAUX LEATHER JACKET",
            price: 99.9,
            quantity: 99,
            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GL55WDU90-JBLK",
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
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
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

            title: "SKINNY FIT PANT",
            price: 150.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0BB48R07P0-DMML-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: " SLIM BLAZER",
            price: 230.9,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto/v1/EU/Style/ECOMM/1GH2012013Z-DKNB-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "38",
                quantity: 0,
              },
              {
                size: "small",
                symbol: "39",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "40",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "41",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "42",
                quantity: 20,
              },
            ],
          },
        ],
      },
      //! Denim Season ==========================================================
      {
        id: uuidv4(),
        title: "Denim Season",
        subTitle: "New Arrivals",
        route: "/men/new-arrivals/denim-season",
        items: [
          {
            id: uuidv4(),

            title: "SLIM DENIM SHIRT",
            price: 119.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GH12R4DL0-LGSK",
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

            title: " DENIM PANT ABRASIONS ",
            price: 109.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GA31D3ZJ5-SFAR-ALT1",
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

            title: "SKINNY DENIM PANT",
            price: 79.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1RAN1D4B74-TGEN-ALT1",
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

            title: "LOGO DENIM JACKET",
            price: 105.55,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0FN18R2KR0-G048-ALT1",
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

            title: "DENIM JACKET",
            price: 109.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GN01R49T0-GVSW",
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
      //! Sustainable style
      {
        id: uuidv4(),
        title: "Sustainable Style",
        subTitle: "New Arrivals",
        route: "/men/new-arrivals/sustainable-style",
        items: [
          {
            id: uuidv4(),

            title: "OXFORD SHIRT",
            price: 179.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0BH25WDA00-TWHT",
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
                quantity: 10,
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

            title: "STRETCH SHIRT",
            price: 149.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1RH25W7ZK1-TWHT-ALT1",
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
                quantity: 10,
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

            title: "LOGO T-SHIRT",
            price: 40.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M82P64R7HD0-G011",
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
                quantity: 10,
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

            title: "GARMENT-DYED PANT",
            price: 199.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/1GH1091999Z-TWHT-ALT1",
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
                quantity: 10,
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
  //! CLOTHING============================================
  clothing: {
    id: uuidv4(),
    categoryTitle: "Clothing",
    subcategories: [
      {
        id: uuidv4(),
        title: "Coats & Jackets",
        subTitle: "Clothing",
        route: "/men/clothing/coats-jackets",
        items: [
          //! Coats & Jackets ===========================
          {
            id: uuidv4(),

            title: "LEATHER BIKER JACKET",
            price: 229.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0BL03R0O00-JBLK-ALT1",
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
                quantity: 10,
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

            title: "COTTON DUFFLE COAT",
            price: 220.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0RL56R0740-JBLK",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "PARKA FRONT POCKETS",
            price: 159.9,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GL05RDYD0-G78E-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 10,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "PACKABLE PADDED JACKET ",
            price: 229.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1RL47WDQ50-G77G-ALT1",
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
      {
        //! Jeans ==================================================================
        id: uuidv4(),
        title: "Jeans",
        subTitle: "Clothing",
        route: "/men/clothing/jeans",
        items: [
          {
            id: uuidv4(),

            title: "FIT DENIM PANT",
            price: 119.19,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1RA31D47I4-ORI1-ALT1",
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
                quantity: 10,
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

            title: "SLIM FIT DENIM PANT",
            price: 99.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0YA27D3Y28-DRCD-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "SLIM DENIM PANT",
            price: 159.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GA08D49T0-GVSW-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 10,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "CHINO DENIM PANT",
            price: 119.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/1GH1522014Z-3DRW-ALT1",
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
      //! T-shirts =====================================
      {
        id: uuidv4(),
        title: "T-Shirts",
        subTitle: "Clothing",
        route: "/men/clothing/t-shirts",
        items: [
          {
            id: uuidv4(),

            title: "STRIPE PATTERN T-SHIRT",
            price: 39.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0BI1NR6CS0-F1S4-ALT1",
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
                quantity: 10,
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

            title: "TRIANGLE LOGO POLO",
            price: 39.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1RP54K7O61-G77G-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "CAMOUFLAGE T-SHIRT",
            price: 45.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1RI59K8FQ0-JBLK-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 10,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "STRIPED  T-SHIRT",
            price: 39.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1RI55K8500-S18B-ALT1",
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
      //! Suits ===============================================
      {
        id: uuidv4(),
        title: "Suits",
        subTitle: "Clothing",
        route: "/men/clothing/suits",
        items: [
          {
            id: uuidv4(),

            title: "SLIM BLAZER",
            price: 299.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto/v1/EU/Style/ECOMM/1GH2012013Z-DKNB-ALT1",
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
                quantity: 10,
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

            title: " PRINTED BLAZER",
            price: 279.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto/v1/EU/Style/ECOMM/1GH2252010Z-L140-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "LINEN BLEND BLAZER",
            price: 88.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto/v1/EU/Style/ECOMM/1GH2222008Z-F71J-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 10,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "SLIM BLAZER ",
            price: 239.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto/v1/EU/Style/ECOMM/1GH2012013Z-G1H1-ALT1",
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
      //! Sweatshirts & Hoodies ===================================================
      {
        id: uuidv4(),
        title: "Sweatshirts & Hoodies",
        subTitle: "Clothing",
        route: "/men/clothing/sweatshirts-hoodies",
        items: [
          {
            id: uuidv4(),

            title: "ZIP SWEATSHIRT",
            price: 89.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0RQ18RAJI0-JBLK-ALT1",
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
                quantity: 10,
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

            title: "LOGO PRINTED SWEATSHIRT",
            price: 109.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/U1GA12K6ZS1-G9H0",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "FRONT LOGO SWEATSHIRT",
            price: 250.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1RQ08K7ON1-G77G-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 10,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "ZIP  SWEATSHIRT",
            price: 139.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1RQ80K6ZS1-JBLK-ALT1",
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
      //! Shirts =====================================================
      {
        id: uuidv4(),
        title: "Shirts",
        subTitle: "Clothing",
        route: "/men/clothing/shirts",
        items: [
          {
            id: uuidv4(),

            title: "STRETCH SHIRT",
            price: 59.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1RH25W7ZK1-TWHT-ALT1",
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
                quantity: 10,
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

            title: "OXFORD SHIRT",
            price: 55.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0BH25WDA00-TWHT-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "ALL OVER PRINT SHIRT",
            price: 69.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0RH48RD4Z1-P275-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 10,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "ALL OVER PRINT SHIRT",
            price: 119.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0RH53RD4Z1-P9GU",
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
      //! Shorts ========================================
      {
        id: uuidv4(),
        title: "Shorts",
        subTitle: "Clothing",
        route: "/men/clothing/shorts",
        items: [
          {
            id: uuidv4(),

            title: "TRIANGLE LOGO SHORT",
            price: 99.19,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GD55K68I1-G8DA-ALT1",
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
                quantity: 10,
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

            title: "SLIM FIT DENIM SHORT",
            price: 99.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GD03D4B74-TGEN-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "REGULAR FIT DENIM SHORT",
            price: 129.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GD10D3ZJ5-SFAR-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 10,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "MULTI-PRINT SHORTS",
            price: 79.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0FD05RC480-F8Z5-ALT1",
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
      //! Underwear =========================================
      {
        id: uuidv4(),
        title: "Underwear",
        subTitle: "Clothing",
        route: "/men/clothing/underwear",
        items: [
          {
            id: uuidv4(),

            title: "BOXERS WITH LOGO",
            price: 29.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/U97G01JR003-F017",
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
                quantity: 10,
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

            title: "PACK OF 3 BRIEFS",
            price: 39.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/U97G00JR003-F017",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "BOXERS WITH LOGO",
            price: 21.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/U92F16JR00A-A553",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 10,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "PRINT BOXER ",
            price: 19.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/U1GG05K6YW1-F048",
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
  //! BAGS & ACCESSORIES ==============================================
  bagsAccessories: {
    id: uuidv4(),
    categoryTitle: "Bags & Accessories",
    subcategories: [
      {
        id: uuidv4(),
        title: "Sunglasses",
        subTitle: "Bags & Accessories",
        route: "/men/bags-accessories/sunglasses",
        items: [
          {
            id: uuidv4(),

            title: "AVIATOR SUNGLASSES",
            price: 185.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/G0002661QQQ-08B-ALT1",
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
                quantity: 10,
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

            title: "AVIATOR SUNGLASSES",
            price: 90.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/G0002661QQQ-02W-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "AVIATOR SUNGLASSES",
            price: 58.9,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/G0002761QQQ-10B-ALT1",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 10,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "AVIATOR SUNGLASSES",
            price: 89.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/GU698264QQQ-90W",
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
      //! Watches =======================================
      {
        id: uuidv4(),
        title: "Wallets",
        subTitle: "Bags & Accessories",
        route: "/men/bags-accessories/wallets",
        items: [
          {
            id: uuidv4(),

            title: "LOGO WALLET",
            price: 245.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/SMVEZLLEA20-BLA",
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
                quantity: 10,
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

            title: " REAL LEATHER NOTE CLIP",
            price: 530.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/SMTYLELEA47-BLA",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "LOGO NOTE CLIP ",
            price: 350.9,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/SMVEZLLEA23-BRO",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 10,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "REAL LEATHER WALLET",
            price: 209.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/SM2663LEA24-BLA",
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
      //! Watches ===========================================
      {
        id: uuidv4(),
        title: "Watches",
        subTitle: "Bags & Accessories",
        route: "/men/bags-accessories/watches",
        items: [
          {
            id: uuidv4(),

            title: "RHINESTONE CASE WATCH",
            price: 299.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/WW0799FMSWC-G2",
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
                quantity: 10,
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

            title: "LOGO ANALOGUE WATCH",
            price: 289.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/GW0201FMSWC-G2",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "RHINESTONE CASE WATCH",
            price: 399.9,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/WW0799FMSWC-G4",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 10,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "CRYSTAL WATCH ",
            price: 315.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/GW0208FMSWC-G1",
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
      //! Belts ===========================================
      {
        id: uuidv4(),
        title: "Belts",
        subTitle: "Bags & Accessories",
        route: "/men/bags-accessories/belts",
        items: [
          {
            id: uuidv4(),

            title: "REAL LEATHER BELT",
            price: 299.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/BM7351VIN35-COA",
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
                quantity: 10,
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

            title: "REAL LEATHER BELT",
            price: 289.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/BM7318LEA35-BBN",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "REAL LEATHER BELT",
            price: 399.9,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/BM7313LEA35-BLA",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 10,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "REAL LEATHER BELT",
            price: 315.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/BM7305LEA35-BLA",
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
  //! SHOES ==========================================
  shoes: {
    id: uuidv4(),
    categoryTitle: "Shoes",
    subcategories: [
      {
        id: uuidv4(),
        title: "Boots",
        subTitle: "Shoes",
        route: "/men/shoes/boots",
        items: [
          //! Boots ======================================
          {
            id: uuidv4(),

            title: "LOGO LOW BOOT",
            price: 185.89,

            imgSrc: "https://www.armani.com/11/11753199LI_16_r.jpg",
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
                quantity: 10,
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

            title: "OLINIA COMBAT BOOT",
            price: 139.99,

            imgSrc: "https://www.armani.com/11/11753174RO_16_r.jpg",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "BLUE COMBAT BOOT",
            price: 150.99,

            imgSrc: "https://www.armani.com/11/11990700IP_16_d.jpg",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 10,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "LOGO COMBAT BOOT ",
            price: 89.99,

            imgSrc: "https://www.armani.com/11/11935625NE_16_d.jpg",
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
      //! Sneakers =========================================
      {
        id: uuidv4(),
        title: "Sneakers",
        subTitle: "Shoes",
        route: "/men/shoes/sneakers",
        items: [
          {
            id: uuidv4(),

            title: "BRADLY SNEAKER",
            price: 185.89,

            imgSrc: "https://www.armani.com/11/11500114KK_16_r.jpg",
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
                quantity: 10,
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

            title: "MOXEA RUNNING SHOE",
            price: 119.99,

            imgSrc: "https://www.armani.com/11/11996299BA_16_d.jpg",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "LOGO RUNNING SHOE ",
            price: 119.9,

            imgSrc: "https://www.armani.com/11/11875945GR_16_d.jpg",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 10,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "LOGO SNEAKER ",
            price: 125.99,

            imgSrc: "https://www.armani.com/11/11911037MM_16_d.jpg",
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
      //! Sandals ========================================
      {
        id: uuidv4(),
        title: "Formal Shoes",
        subTitle: "Shoes",
        route: "/men/shoes/formal-shoes",
        items: [
          {
            id: uuidv4(),

            title: "Leather Shoes",
            price: 129.89,

            imgSrc: "https://www.armani.com/11/11753147LV_16_r.jpg",
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
                quantity: 10,
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

            title: "Leather brown shoes",
            price: 135.99,

            imgSrc: "https://www.armani.com/11/11725033MS_16_r.jpg",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 20,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 20,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "Leather Shoes ",
            price: 145.9,

            imgSrc: "https://www.armani.com/17/17005598AF_16_d.jpg",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 20,
              },
              {
                size: "small",
                symbol: "S",
                quantity: 20,
              },
              {
                size: "medium",
                symbol: "M",
                quantity: 20,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
              },
              {
                size: "extra large",
                symbol: "XL",
                quantity: 10,
              },
            ],
          },
          {
            id: uuidv4(),

            title: "Leather shoes ",
            price: 679.99,

            imgSrc: "https://www.armani.com/11/11735280TM_16_r.jpg",
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

const menShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menShopReducer;
