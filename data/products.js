import { direct, vat, sulphur, naphtol } from "./color";

export const products = [
  {
    id: "P1",
    name: "Pupuk",
    categories: [
      {
        id: "C1",
        name: "Pupuk",
        products: [
          {
            id: "W1",
            name: "Direct Turkish Blue",
            image: "/color/direct/direct-fast-turq-blue-gl.jpg",
          },
          {
            id: "W2",
            name: "Direct Congo Red",
            image: "/color/direct/direct-congo-red.jpg",
          },
          {
            id: "W3",
            name: "Direct Black EX 300%",
            image: "/color/direct/direct-black-ex.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "P2",
    name: "Benang",
    categories: [
      {
        id: "C1",
        name: "Katun",
        products: direct,
      },
      {
        id: "C2",
        name: "Sutra",
        products: direct,
      },
      {
        id: "C3",
        name: "Misris",
        products: [...sulphur, ...naphtol, ...vat],
      },
      {
        id: "C4",
        name: "Fiber",
        products: [...vat, ...naphtol],
      },
    ],
  },
];
