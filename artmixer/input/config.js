const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const description = "This is an NFT made by the coolest generative code.";
const baseImageUri = "https://gateway.pinata.cloud/ipfs/QmZTB98VhtbMPpjd98jt1rECtK783j46sj7eCtzSBihFZN";
const startEditionFrom = 1;
const endEditionAt = 100;
const editionSize = 100;
const raceWeights = [
  {
    value: "skull",
    from: 1,
    to: editionSize,
  },
];

const races = {
  skull: {
    name: "Skull",
    layers: [
      {
        name: "Body",
        elements: [
          {
            id: 0,
            name: "Orange",
            path: `${dir}/1-body/orange.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Brown",
            path: `${dir}/1-body/brown.png`,
            weight: 65,
          },
          {
            id: 2,
            name: "Dark Brown",
            path: `${dir}/1-body/darkbrown.png`,
            weight: 35,
          },
          {
            id: 3,
            name: "Green",
            path: `${dir}/1-body/green.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eyes",
        elements: [
          {
            id: 0,
            name: "Blue",
            path: `${dir}/2-eyes/blue.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Red",
            path: `${dir}/2-eyes/red.png`,
            weight: 40,
          },
          {
            id: 2,
            name: "Yellow",
            path: `${dir}/2-eyes/yellow.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Clothes",
        elements: [
          {
            id: 0,
            name: "Empty",
            path: `${dir}/3-clothes/empty.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Adidas",
            path: `${dir}/3-clothes/adidas.png`,
            weight: 75,
          },
          {
            id: 2,
            name: "Jordan",
            path: `${dir}/3-clothes/jordan.png`,
            weight: 55,
          },
          {
            id: 3,
            name: "Gucci",
            path: `${dir}/3-clothes/gucci.png`,
            weight: 40,
          },
          {
            id: 4,
            name: "LV",
            path: `${dir}/3-clothes/lv.png`,
            weight: 20,
          },
          {
            id: 5,
            name: "Supreme",
            path: `${dir}/3-clothes/supreme.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mouth",
        elements: [
          {
            id: 0,
            name: "Empty",
            path: `${dir}/4-mouth/empty.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Cigar",
            path: `${dir}/4-mouth/cigar.png`,
            weight: 50,
          },
          {
            id: 2,
            name: "Fangs",
            path: `${dir}/4-mouth/fangs.png`,
            weight: 30,
          },
          {
            id: 3,
            name: "Pipe",
            path: `${dir}/4-mouth/pipe.png`,
            weight: 15,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Accessories",
        elements: [
          {
            id: 0,
            name: "Empty",
            path: `${dir}/5-accessories/empty.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Rolex",
            path: `${dir}/5-accessories/rolex.png`,
            weight: 20,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Glasses",
        elements: [
          {
            id: 0,
            name: "Empty",
            path: `${dir}/6-glasses/empty.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Sunglasses",
            path: `${dir}/6-glasses/sunglasses.png`,
            weight: 50,
          },
          {
            id: 2,
            name: "3D",
            path: `${dir}/6-glasses/3d.png`,
            weight: 15,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      // {
      //   name: "Mask",
      //   elements: [
      //     {
      //       id: 0,
      //       name: "No mask",
      //       path: `${dir}/7-mask/NoMask.png`,
      //       weight: 100,
      //     },
      //     {
      //       id: 1,
      //       name: "Medical",
      //       path: `${dir}/7-mask/mask.png`,
      //       weight: 5,
      //     },
      //   ],
      //   position: { x: 0, y: 0 },
      //   size: { width: width, height: height },
      // },
      // {
      //   name: "Hair",
      //   elements: [
      //     {
      //       id: 0,
      //       name: "Blonde bun",
      //       path: `${dir}/8-hair/BlondeBun.png`,
      //       weight: 100,
      //     },
      //     {
      //       id: 1,
      //       name: "Pink",
      //       path: `${dir}/8-hair/Pink.png`,
      //       weight: 91,
      //     },
      //   ],
      //   position: { x: 0, y: 0 },
      //   size: { width: width, height: height },
      // },
      // {
      //   name: "Accessories",
      //   elements: [
      //     {
      //       id: 0,
      //       name: "No accessories",
      //       path: `${dir}/9-accessories/NoAcc.png`,
      //       weight: 100,
      //     },
      //   ],
      //   position: { x: 0, y: 0 },
      //   size: { width: width, height: height },
      // },
      // {
      //   name: "Headwear",
      //   elements: [
      //     {
      //       id: 0,
      //       name: "Glass dome",
      //       path: `${dir}/10-headwear/GlassDome.png`,
      //       weight: 100,
      //     },
      //   ],
      //   position: { x: 0, y: 0 },
      //   size: { width: width, height: height },
      // },
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
