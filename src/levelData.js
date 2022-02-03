import gamecube from './assets/images/gamecube.jpg';
import n64 from './assets/images/n64.jpg';
import linkN64 from './assets/images/n64/link.png';
import marioN64 from './assets/images/n64/mario-star.png';
import falconN64 from './assets/images/n64/captain-falcon.png';
import samusGC from './assets/images/gc/samus.png';
import toadGC from './assets/images/gc/toad.png';
import peachGC from './assets/images/gc/peach.webp';
import kirbyWii from './assets/images/wii/kirby.png';
import midnaWii from './assets/images/wii/midna.png';
import waluigiWii from './assets/images/wii/waluigi.png';

import wii from './assets/images/wii.jpg';

const levelData = [
  {
    name: 'Nintendo 64',
    image: n64,
    characters: [
      {
        name: 'Link',
        image: linkN64,
        found: false,
      },
      {
        name: 'Power Star',
        image: marioN64,
        found: false,
      },
      {
        name: 'Captain Falcon',
        image: falconN64,
        found: false,
      },
    ],
  },
  {
    name: 'Gamecube',
    image: gamecube,
    characters: [
      {
        name: 'Samus',
        image: samusGC,
        found: false,
      },
      {
        name: 'Toad',
        image: toadGC,
        found: false,
      },
      {
        name: 'Peach',
        image: peachGC,
        found: false,
      },
    ],
  },
  {
    name: 'Wii',
    image: wii,
    characters: [
      {
        name: 'Kirby',
        image: kirbyWii,
        found: false,
      },
      {
        name: 'Waluigi',
        image: waluigiWii,
        found: false,
      },
      {
        name: 'Midna',
        image: midnaWii,
        found: false,
      },
    ],
  },
];

export default levelData;
