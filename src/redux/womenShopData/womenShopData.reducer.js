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
        route: "/women/new-arrivals/felina-collection",
        items: [
          //! Felina Collection
          {
            id: uuidv4(),

            title: "SWEATER CUT-OUTS",
            price: 199.99,
            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621326609/felina/woman-felina-collection/0BGR045590Z-G1BA_pw1kx0.jpg",

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

            title: "RIB SWEATER",
            price: 99.9,
            quantity: 99,
            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621326635/felina/woman-felina-collection/0BG5045613Z-JBLK_f7rny0.jpg",
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

            title: "CARDIGAN",
            price: 150.99,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621326659/felina/woman-felina-collection/1GG5125608Z-G1CH_er3tg7.jpg",
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

            title: "PRINT JERSEY SKIRT",
            price: 130.9,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621326687/felina/woman-felina-collection/1GG7006063A-P49S-ALT1_wlbkne.jpg",
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
          {
            id: uuidv4(),

            title: "LOGO SUNGLASSES",
            price: 185.9,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621326710/felina/woman-felina-collection/GM081057QQQ-01B_cxvaci.jpg",
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
                quantity: 0,
              },
              {
                size: "large",
                symbol: "L",
                quantity: 0,
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

            title: "SKINNY DENIM PANT",
            price: 250.9,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621326740/felina/woman-felina-collection/1GG1559531Z-F6T9-ALT1_rvr6vo.jpg",
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

            title: "JERSEY BODY",
            price: 119.99,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621326765/felina/woman-felina-collection/1GG6046059A-G1CH_vye2gb.jpg",
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

            title: "PRINT SHIRT",
            price: 139.99,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621326801/felina/woman-felina-collection/1GG6196063A-P49S_wuhbyy.jpg",
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
      //! Denim Season ==========================================================
      {
        id: uuidv4(),
        title: "Denim Season",
        subTitle: "New Arrivals",
        route: "/women/new-arrivals/denim-season",
        items: [
          {
            id: uuidv4(),

            title: "BODYCON DENIM DRESS",
            price: 119.99,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621326859/felina/woman-denim-season/W1GK17D4CS1-PIN1_rw1cop.jpg",
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

            title: " FIT DENIM DRESS ",
            price: 109.99,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621326946/felina/woman-denim-season/W1RK0PD14LN-IMGN_sd9nxc.jpg",
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

            title: "FLARE DENIM PANT",
            price: 79.99,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621326975/felina/woman-denim-season/0BG1539340Z-BRWA-ALT1_beturw.jpg",
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

            title: "DENIM PANT ABRASIONS",
            price: 105.55,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621327008/felina/woman-denim-season/W0BA09D3Y0A-MYFA-ALT1_gadunl.jpg",
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

            title: "BELL-BOTTOM DENIM PANT",
            price: 109.99,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621327040/felina/woman-denim-season/W1GA27R49T0-MNCB-ALT1_wy8fit.jpg",
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
            price: 79.99,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621327075/felina/woman-denim-season/WBYGJ2R49T4-GVLW_ssqeuj.jpg",
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

            title: "EMBROIDERY DENIM PANT",
            price: 149.99,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621327106/felina/woman-denim-season/W1RA46D4AO2-WFLO-ALT1_gvsuan.jpg",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum quia sed ea consequatur eos quam, in vel! Esse nobis sed voluptatibus iure ipsum odit.  ",
            availableSize: [
              {
                size: "extra small",
                symbol: "XS",
                quantity: 10,
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

            title: "POLKADOT  DENIM PANT",
            price: 105.99,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621327141/felina/woman-denim-season/W0RA12R4AS0-GODB-ALT3_ihyh2x.jpg",
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
      {
        id: uuidv4(),
        title: "Sustainable Style",
        subTitle: "New Arrivals",
        route: "/women/new-arrivals/sustainable-style",
        items: [
          {
            id: uuidv4(),

            title: "HIGH-NECK MIDI DRESS",
            price: 179.99,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621327838/felina/woman-sustainable/1GSK178080Z-G1CR_zpgr49.jpg",
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

            title: "RIB DRESS",
            price: 149.99,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621327872/felina/woman-sustainable/0BG7785012Z-G1AC_uxrlxd.jpg",
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

            title: "TWEED-LOOK DRESS",
            price: 240.99,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621327908/felina/woman-sustainable/1GG7289543Z-F1Y8-ALT1_apbu4g.jpg",
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

            title: "DRESS BUTTONS",
            price: 199.99,

            imgSrc:
              "https://res.cloudinary.com/c1oud9/image/upload/v1621327956/felina/woman-sustainable/1GG7429529Z-TWHM_sm6ps9.jpg",
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
        route: "/women/clothing/coats-jackets",
        items: [
          //! Coats & Jackets ===========================
          {
            id: uuidv4(),

            title: "COAT",
            price: 229.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/1GG3559550Z-G022-ALT1",
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

            title: "CREPE BLAZER",
            price: 220.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/1GG2059545Z-F6T9-ALT1",
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
            price: 159.9,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/1GG3028984Z-F6T9",
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

            title: "LOGO LINING BLAZER ",
            price: 229.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/0BG2087804Z-G1F3",
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
        route: "/women/clothing/jeans",
        items: [
          {
            id: uuidv4(),

            title: "Jeans super elastic",
            price: 119.19,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W0BA09D46A1-BYSW-ALT1",
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

            title: "Jeans super fit",
            price: 99.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W0BA46D46E2-SPTF-ALT1",
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

            title: "Jeans full body",
            price: 159.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1RD49D4AK2-ONEW",
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

            title: "Jeans slim super elastic",
            price: 119.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1GA26D3ZT7-POIP-ALT1",
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
        route: "/women/clothing/t-shirts",
        items: [
          {
            id: uuidv4(),

            title: "PLACED PRINT T-SHIRT",
            price: 39.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1GI88R9TD2-G011",
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

            title: "ALL OVER LOGO T-SHIRT",
            price: 39.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1GI57R4JZ4-P0CS-ALT1",
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

            title: "ALL OVER PRINT T-SHIRT",
            price: 45.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1RI98JA900-P07Q-ALT2",
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

            title: "ALL-OVER PRINT T-SHIRT",
            price: 39.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1GI41K7NG0-JBLK",
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
      //! Shirts & Blouses ===============================================
      {
        id: uuidv4(),
        title: "Shirts & Blouses",
        subTitle: "Clothing",
        route: "/women/clothing/shirts-blouses",
        items: [
          {
            id: uuidv4(),

            title: "EMBROIDERY LACE SHIRT",
            price: 99.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1GH0DWDW20-TWHT",
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

            title: "ALL-OVER PRINT BLOUSE",
            price: 79.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W61H38W1V32-P6L7",
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

            title: "A-JOUR TAPES VISCOSE SHIRT",
            price: 88.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1RH52WAUK2-JBLK",
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

            title: "ALL-OVER PRINT SHIRT ",
            price: 139.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/1GGH087099Z-P6K2-ALT1",
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
      //! Dresses & Jumpsuits ===================================================
      {
        id: uuidv4(),
        title: "Dresses & Jumpsuits",
        subTitle: "Clothing",
        route: "/women/clothing/dresses-jumpsuits",
        items: [
          {
            id: uuidv4(),

            title: "ALL OVER PRINT BODYSUIT",
            price: 59.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1GP08RA4L1-P7AS-ALT1",
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

            title: "BOW JUMPSUIT",
            price: 109.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1GD0JK4JZ0-P76M",
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

            title: "DRAPED JUMPSUIT",
            price: 250.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/1GGK308177Z-G5K4-ALT1",
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

            title: "LACE JUMPSUIT",
            price: 139.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1GD1HWDW30-TWHT",
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
      //! Tops =====================================================
      {
        id: uuidv4(),
        title: "Tops",
        subTitle: "Clothing",
        route: "/women/clothing/tops",
        items: [
          {
            id: uuidv4(),

            title: "TURTLE NECK RIB TOP",
            price: 59.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1RP19KAER2-G1J7",
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

            title: "LACE TOP",
            price: 55.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1GP49KALO0-G1Y0",
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

            title: "BODY ALL-OVER PRINT",
            price: 69.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W0RP45RA4L0-JBLK",
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

            title: "BLOUSE BOWS",
            price: 119.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/1GG4739535Z-P49S-ALT1",
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
      //! Skirts ========================================
      {
        id: uuidv4(),
        title: "Skirts",
        subTitle: "Clothing",
        route: "/women/clothing/skirts",
        items: [
          {
            id: uuidv4(),

            title: "SHAPING FIT DENIM SKIRT",
            price: 99.19,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1RD60D4AK2-ONEW-ALT1",
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

            title: "MINI DOTS PRINT SKIRT",
            price: 99.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1GD0NWBUD2-P05C-ALT1",
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

            title: "PRINT LONG SKIRT",
            price: 129.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1GD0VWDV90-P16P-ALT1",
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

            title: "KNIT LONGUETTE SKIRT",
            price: 79.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W0RR38R2QA0-F133-ALT1",
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
      //! Lingerie =========================================
      {
        id: uuidv4(),
        title: "Lingerie",
        subTitle: "Clothing",
        route: "/women/clothing/lingerie",
        items: [
          {
            id: uuidv4(),

            title: "ELASTIC TAPE BRAZILIAN",
            price: 29.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/O1GE08PZ01T-TWHT-ALT1",
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

            title: "LOGO PUSH UP BRA",
            price: 39.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/O1GC07NT01K-JBLK-ALT1",
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

            title: "LACE BRASSIERE",
            price: 21.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/O0BC00PZ01C-SRYW",
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

            title: "LACE NATURAL BRA ",
            price: 19.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/O0BC01PZ01C-G110",
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
        title: "Bags",
        subTitle: "Bags & Accessories",
        route: "/women/bags-accessories/bags",
        items: [
          {
            id: uuidv4(),

            title: "GENUINE LEATHER LUXE HANDBAG",
            price: 185.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/HWLAPIL0206-COG-ALT1",
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

            title: "LOGO SHOPPER BAG",
            price: 90.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/HWVG6853240-BLS-ALT1",
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

            title: "LOGO HANDBAG",
            price: 58.9,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/HWKHLOP1006-BRO",
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

            title: "LOGO SHOPPER",
            price: 89.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/HWVY7365220-BLA",
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
        title: "Watches",
        subTitle: "Bags & Accessories",
        route: "/women/bags-accessories/watches",
        items: [
          {
            id: uuidv4(),

            title: "TIE-DYE  WATCH",
            price: 245.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/GW0258FLSWC-L1",
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

            title: "CHRONOGRAPH WATCH",
            price: 530.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/Y65005FLSWC-L7MF",
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

            title: "CRYSTAL WATCH ",
            price: 350.9,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/GW0104FLSWC-L2",
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

            title: "FLORAL ANALOGUE WATCH ",
            price: 209.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/GW0242FLSWC-L3",
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
      //! Sunglasses ===========================================
      {
        id: uuidv4(),
        title: "Sunglasses",
        subTitle: "Bags & Accessories",
        route: "/women/bags-accessories/sunglasses",
        items: [
          {
            id: uuidv4(),

            title: "AVIATOR SUNGLASSES",
            price: 99.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/GU773564QQQ-10B-ALT1",
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

            title: "ROUND SUNGLASSES",
            price: 89.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/GU777858QQQ-01C-ALT1",
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
            price: 99.9,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/GU778363QQQ-28Z-ALT1",
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

            title: "OVAL SUNGLASSES ",
            price: 115.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/GU772453QQQ-01B-ALT1",
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
        route: "/women/shoes/boots",
        items: [
          //! Boots ======================================
          {
            id: uuidv4(),

            title: "LOGO LOW BOOT",
            price: 185.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/FL5ORNFAL08-BROWN",
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

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/FL5OLIFAB08-BLACK",
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

            title: "FLORAL COMBAT BOOT",
            price: 150.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/FL5OLIFAL08-BLKMU",
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

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/FL8ONAELE10-GREY",
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
        route: "/women/shoes/sneakers",
        items: [
          {
            id: uuidv4(),

            title: "BRADLY SNEAKER",
            price: 185.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/FL6B2RFAL12-WHIBR",
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

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/FL6MX3ELE12-WHIFU",
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

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/FL6MX4ESU12-PLATI",
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

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/FL5TESPEL12-BLKGO",
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
        title: "Sandals",
        subTitle: "Shoes",
        route: "/women/shoes/sandals",
        items: [
          {
            id: uuidv4(),

            title: "RION POLKADOT SANDAL",
            price: 129.89,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/FL6RIOFAB03-BLKWH",
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

            title: "DIVINE LAMINATED SANDAL",
            price: 135.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/FL5DV2LEL03-GREEN",
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

            title: "PEEP-TOE SANDAL ",
            price: 145.9,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/FL5GN3FAP07-LEOPA",
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

            title: "SILK RIBBON SANDAL ",
            price: 79.99,

            imgSrc:
              "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/FL6TIFSAT03-BLACK",
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

const womenShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default womenShopReducer;
