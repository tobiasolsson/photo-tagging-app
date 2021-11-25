import gamecube from './assets/images/gamecube.jpg';
import n64 from './assets/images/n64.jpg';
import linkN64 from './assets/images/n64/link.jpg';
import marioN64 from './assets/images/n64/mario-star.jpg';
import falconN64 from './assets/images/n64/captain-falcon.jpg';

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
        xCoord: 0,
        yCoord: 0,
      },
      {
        name: 'Power Star',
        image: marioN64,
        found: false,
        xCoord: 0,
        yCoord: 0,
      },
      {
        name: 'Captain Falcon',
        image: falconN64,
        found: false,
        xCoord: 0,
        yCoord: 0,
      },
    ],
  },
  {
    name: 'Gamecube',
    image: gamecube,
    characters: [
      {
        name: '',
        found: false,
        xCoord: 0,
        yCoord: 0,
      },
    ],
  },
  {
    name: 'Wii',
    image: wii,
    characters: [
      {
        name: '',
        found: false,
        xCoord: 0,
        yCoord: 0,
      },
    ],
  },
];

export default levelData;
