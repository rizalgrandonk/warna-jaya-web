import { direct, vat, sulphur, naphtol, indigosol } from "./color";

import Pupuk from "../public/images/pupuk.jpg";
import Benang from "../public/images/benang.jpg";
import Batik from "../public/images/batik.jpg";
import Kulit from "../public/images/kulit.jpg";
import Tinta from "../public/images/tinta.jpg";

export const products = [
  {
    id: "P1",
    name: "Pupuk",
    slug: "pupuk",
    image: Pupuk,
    categories: [
      {
        id: "C1",
        name: "Pupuk",
        colors: [
          {
            id: "W1",
            type: "Direct",
            name: ["Direct Turkish Blue"],
            image: "/color/direct/direct-fast-turq-blue-gl.jpg",
          },
          {
            id: "W2",
            type: "Direct",
            name: ["Direct Congo Red"],
            image: "/color/direct/direct-congo-red.jpg",
          },
          {
            id: "W3",
            type: "Direct",
            name: ["Direct Black EX 300%"],
            image: "/color/direct/direct-black-ex.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "P2",
    name: "Benang",
    slug: "benang",
    image: Benang,
    categories: [
      {
        id: "C1",
        name: "Katun",
        colors: direct,
      },
      {
        id: "C2",
        name: "Sutra",
        colors: direct,
      },
      {
        id: "C3",
        name: "Misris",
        colors: [...sulphur, ...naphtol, ...vat],
      },
      {
        id: "C4",
        name: "Fiber",
        colors: [...vat, ...naphtol],
      },
    ],
  },
  {
    id: "P3",
    name: "Batik",
    slug: "batik",
    image: Batik,
    categories: [
      {
        id: "C1",
        name: "Batik",
        colors: indigosol,
      },
    ],
  },
  {
    id: "P4",
    name: "Penyamakan Kulit",
    slug: "penyamakan-kulit",
    image: Kulit,
    categories: [
      {
        id: "C1",
        name: "Penyamakan Kulit",
        colors: naphtol,
      },
    ],
  },
  {
    id: "P5",
    name: "Tinta",
    slug: "tinta",
    image: Tinta,
    categories: [
      {
        id: "C1",
        name: "Tinta",
        colors: [
          {
            id: "W1",
            type: "Basic",
            name: ["Methyl Violet 5BN"],
            image: "/color/basic/methyl-violet-5bn.jpg",
          },
          {
            id: "W2",
            type: "Basic",
            name: ["Malachite Green"],
            image: "/color/basic/malachite-green.jpg",
          },
          {
            id: "W3",
            type: "Acid",
            name: ["Matanil Yellow"],
            image: "/color/acid/metanil-yellow.jpg",
          },
          {
            id: "W4",
            type: "Acid",
            name: ["Acid Scarlet 3R"],
            image: "/color/acid/acid-scarlet-3r.jpg",
          },
        ],
      },
    ],
  },
];
