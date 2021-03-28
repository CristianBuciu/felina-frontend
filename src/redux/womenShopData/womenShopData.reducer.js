const INITIAL_STATE = {
  newArrival: {
    id: "a1",
    categoryTitle: "New Arrivals",
    subcategories: [
      {
        id: "a11",
        title: "Felina Collection",
        subTitle: "New Arrivals",
        route: "/women/new-arrivals/felina-collection",
        items: [
          {
            id: 0,

            title: "Blue Sleeveless Dress",
            price: 199.99,
            imgSrc:
              "https://images.pexels.com/photos/3600325/pexels-photo-3600325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

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
            id: 1,

            title: "Black Round Sunglasses",
            price: 99.9,
            quantity: 99,
            imgSrc:
              "https://images.pexels.com/photos/3589734/pexels-photo-3589734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
            id: 2,

            title: "Black Leather Jacket",
            price: 350.99,

            imgSrc:
              "https://images.pexels.com/photos/3873498/pexels-photo-3873498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
            id: 3,

            title: "Red High Shoes",
            price: 130.9,

            imgSrc:
              "https://images.pexels.com/photos/3782789/pexels-photo-3782789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
            id: 4,

            title: "Gray Knitted Sweater",
            price: 115.9,

            imgSrc:
              "https://images.pexels.com/photos/5770469/pexels-photo-5770469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
            id: 5,

            title: "Syntetic Gray Fur Coat ",
            price: 250.9,

            imgSrc:
              "https://images.pexels.com/photos/3769125/pexels-photo-3769125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
            id: 6,

            title: "Cotton White Shirt ",
            price: 49.99,

            imgSrc:
              "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
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
            id: 7,

            title: "Red Formal Coat ",
            price: 89.99,

            imgSrc:
              "https://images.pexels.com/photos/1390600/pexels-photo-1390600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
        id: "a12",
        title: "Holiday Looks",
        subTitle: "New Arrivals",
        route: "/women/new-arrivals/holiday-looks",
        items: [
          {
            id: 8,

            title: "Christmas Blue Sweater ",
            price: 89.99,

            imgSrc:
              "https://images.pexels.com/photos/3439818/pexels-photo-3439818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
            route: "/women/new-arrivals/holiday-looks/8",

            id: 9,

            title: " Yellow Knitted Sweater ",
            price: 129.99,

            imgSrc:
              "https://images.pexels.com/photos/5352625/pexels-photo-5352625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
            route: "/women/new-arrivals/holiday-looks/9",
          },
          {
            id: 10,

            title: "Red Holliday Sweater ",
            price: 79.99,

            imgSrc:
              "https://images.pexels.com/photos/3746210/pexels-photo-3746210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
            id: 11,

            title: "Blue Holliday Sweater ",
            price: 85.55,

            imgSrc:
              "https://images.pexels.com/photos/709789/pexels-photo-709789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
            id: 12,

            title: "Pink Knitted Sweater ",
            price: 109.99,

            imgSrc:
              "https://images.pexels.com/photos/4863052/pexels-photo-4863052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
            id: 13,

            title: "Grey Synthetic Coat ",
            price: 225.99,

            imgSrc:
              "https://images.pexels.com/photos/2755612/pexels-photo-2755612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
            id: 14,

            title: "Grey Full Synthetic Coat ",
            price: 425.99,

            imgSrc:
              "https://images.pexels.com/photos/2043204/pexels-photo-2043204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
            id: 15,

            title: "Holiday Markings Sweater ",
            price: 225.99,

            imgSrc:
              "https://images.pexels.com/photos/3521891/pexels-photo-3521891.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
        id: "a13",
        title: "Sustainable Style",
        subTitle: "New Arrivals",
        route: "/women/new-arrivals/sustainable-style",
        items: [
          {
            id: 16,

            title: "White Linen Shirt ",
            price: 105.99,

            imgSrc:
              "https://images.pexels.com/photos/4153187/pexels-photo-4153187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
            id: 17,

            title: "White Linen Shirt ",
            price: 65.99,

            imgSrc:
              "https://images.pexels.com/photos/3021601/pexels-photo-3021601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
            id: 18,

            title: "White Linen Bra ",
            price: 40.99,

            imgSrc:
              "https://images.pexels.com/photos/4641680/pexels-photo-4641680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
            id: 19,

            title: "Black Cotton Jumpsuit",
            price: 99.99,

            imgSrc:
              "https://images.pexels.com/photos/4765370/pexels-photo-4765370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
  clothing: {
    id: "a2",
    categoryTitle: "Clothing",
    subcategories: [
      {
        id: "a21",
        title: "Coats & Jackets",
        subTitle: "Clothing",
        route: "/women/clothing/coats-jackets",
        items: [
          {
            id: 20,

            title: "Grey Formal Coat",
            price: 185.89,

            imgSrc:
              "https://images.pexels.com/photos/5669640/pexels-photo-5669640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
            id: 21,

            title: "Black Leather Jacket",
            price: 350.99,

            imgSrc:
              "https://images.pexels.com/photos/3873498/pexels-photo-3873498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
            id: 23,

            title: "Syntetic Gray Fur Coat ",
            price: 250.9,

            imgSrc:
              "https://images.pexels.com/photos/3769125/pexels-photo-3769125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
            id: 24,

            title: "Red Formal Coat ",
            price: 89.99,

            imgSrc:
              "https://images.pexels.com/photos/1390600/pexels-photo-1390600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
        id: "a22",
        title: "Jeans",
        subTitle: "Clothing",
        route: "/women/clothing/jeans",
        items: [{}, {}, {}, {}],
      },
      {
        id: "a23",
        title: "T-Shirts",
        subTitle: "Clothing",
        route: "/women/clothing/t-shirts",
        items: [{}, {}, {}, {}],
      },
      {
        id: "a24",
        title: "Shirts & Blouses",
        subTitle: "Clothing",
        route: "/women/clothing/shirts-blouses",
        items: [{}, {}, {}, {}],
      },
      {
        id: "a25",
        title: "Dresses & Jumpsuits",
        subTitle: "Clothing",
        route: "/women/clothing/dresses-jumpsuits",
        items: [{}, {}, {}, {}],
      },
      {
        id: "a26",
        title: "Tops",
        subTitle: "Clothing",
        route: "/women/clothing/tops",
        items: [{}, {}, {}, {}],
      },
      {
        id: "a27",
        title: "Skirts",
        subTitle: "Clothing",
        route: "/women/clothing/skirts",
        items: [{}, {}, {}, {}],
      },
      {
        id: "a28",
        title: "Lingerie",
        subTitle: "Clothing",
        route: "/women/clothing/lingerie",
        items: [{}, {}, {}, {}],
      },
    ],
  },
  bagsAccessories: {
    id: "a3",
    categoryTitle: "Bags & Accessories",
    subcategories: [
      {
        id: "a31",
        title: "Bags",
        subTitle: "Bags & Accessories",
        route: "/women/bags-accessories/bags",
        items: [{}, {}, {}, {}],
      },
      {
        id: "a32",
        title: "Watches",
        subTitle: "Bags & Accessories",
        route: "/women/bags-accessories/watches",
        items: [{}, {}, {}, {}],
      },
      {
        id: "a33",
        title: "Sunglasses",
        subTitle: "Bags & Accessories",
        route: "/women/bags-accessories/sunglasses",
        items: [{}, {}, {}, {}],
      },
    ],
  },
  shoes: {
    id: "a4",
    categoryTitle: "Shoes",
    subcategories: [
      {
        id: "a41",
        title: "Boots",
        subTitle: "Shoes",
        route: "/women/shoes/boots",
        items: [{}, {}, {}, {}],
      },
      {
        id: "a42",
        title: "Sneakers",
        subTitle: "Shoes",
        route: "/women/shoes/sneakers",
        items: [{}, {}, {}, {}],
      },
      {
        id: "a43",
        title: "Sandals",
        subTitle: "Shoes",
        route: "/women/shoes/sandals",
        items: [{}, {}, {}, {}],
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
