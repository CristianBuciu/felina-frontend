const { v4: uuidv4 } = require("uuid");

const INITIAL_STATE = {
  //! Boys============================================
  boys: {
    id: uuidv4(),
    categoryTitle: "Newborn 0-24 Months",
    subcategories: [
      {
        id: uuidv4(),
        title: "Boys",
        subTitle: "Newborn 0-24 Months",
        route: "/kids/boys/newborn",
        items: [
          //! Newborn 0-24 Months
          {
            id: uuidv4(),

            title: "CAMOUFLAGE PRINT",
            price: 49.99,
            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/P1RG07KA6W0-PC74-ALT1",

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

            title: "SIDE LOGO JACKET",
            price: 49.9,
            quantity: 99,
            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/I1RL00WCMN0-DEKB",
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

            title: "ACTIVE TOP AND PANT",
            price: 50.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/I1RG03KA6R0-FD99",
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

            title: "T-SHIRT AND SHORT SET",
            price: 30.9,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/I1RG06K8HM0-G721",
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
        title: "Baby 2-6 Years",
        subTitle: "Boys",
        route: "/kids/boys/baby",
        items: [
          {
            id: uuidv4(),

            title: "OXFORD SHIRT",
            price: 119.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/N1RH05W9CL0-PQ91",
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

            title: "PRINT TERRY SHORT",
            price: 109.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/N1GQ08KA6R0-PHT2",
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

            title: "SKINNY FIT JEANS",
            price: 79.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/N0YA10D3ZP0-TJOY",
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

            title: "POPELINE PANT",
            price: 105.55,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/N1RB04WDNY0-F7S2",
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

            title: "LINEN BLEND SHIRT",
            price: 109.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/N02H03WBHE0-SOM",
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
      //! Junior 6-16 years =========================================
      {
        id: uuidv4(),
        title: "Junior 6-16 years",
        subTitle: "Boys",
        route: "/kids/boys/junior",
        items: [
          {
            id: uuidv4(),

            title: "JACQUARD BLAZER",
            price: 179.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/L1RN03WDO30-DEKB",
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

            title: "POPELINE BLAZER",
            price: 149.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/L1RN05WDNY0-F7S2",
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

            title: "FAUX LEATHER JACKET",
            price: 40.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/L1RL04WBA70-DEKB",
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

            title: "REVERSIBLE BOMBER",
            price: 199.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/L1RL01WDGX0-P882",
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
  //! Girls ============================================
  girls: {
    id: uuidv4(),
    categoryTitle: "Newborn 0-24 Months",
    subcategories: [
      {
        id: uuidv4(),
        title: "Girls",
        subTitle: "Newborn 0-24 Months",
        route: "/kids/girls/newborn",
        items: [
          //! Newborn 0-24 Months
          {
            id: uuidv4(),

            title: "VEST, BODY AND PANT",
            price: 49.99,
            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/S1RG10KA6W0-GBMT",

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

            title: "DENIM RUFFLES DRESS",
            price: 49.9,
            quantity: 99,
            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/A1RK07D3X30-SLLB",
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

            title: "ALL OVER PRINT DRESS",
            price: 50.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/A1GK15WA2T0-PU30",
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

            title: "TOP AND LEGGING SET",
            price: 30.9,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/A1RG00KAEF0-P98L",
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
      //! Baby  ==========================================================
      {
        id: uuidv4(),
        title: "Baby 2-6 Years",
        subTitle: "Girls",
        route: "/kids/girls/baby",
        items: [
          {
            id: uuidv4(),

            title: "STUDS DRESS",
            price: 119.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/J1RK28KAE30-TWHT",
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

            title: "SEQUINS LOGO T-SHIRT",
            price: 109.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/K1GI23K6YW1-TWHT",
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

            title: "FLAVORED DENIM PANT",
            price: 79.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/K1GB03WB5Z0-JLPK",
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

            title: "DENIM DRESS",
            price: 105.55,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/K1RK04D4A00-LTWS",
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

            title: "PRINT CHIFFON DRESS",
            price: 109.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/K1GK16WA2T0-PU30",
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
      //! Junior 6-16 years =========================================
      {
        id: uuidv4(),
        title: "Junior 6-16 years",
        subTitle: "Boys",
        route: "/kids/girls/junior",
        items: [
          {
            id: uuidv4(),

            title: "LOGO CROP T-SHIRT",
            price: 179.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/J1GI24K6YW1-C448",
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

            title: "FLAVORED DENIM JACKET",
            price: 149.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/J1GN00WB5Z0-SNLT",
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

            title: "JACQUARD DRESS",
            price: 40.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/J02K21WCS60-G607",
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

            title: "FAUX LEATHER JACKET",
            price: 199.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/J02L03WCV10-TWHT",
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
};

const kidsShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default kidsShopReducer;
