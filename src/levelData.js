import gamecube from './assets/images/gamecube.jpg';
import n64 from './assets/images/n64.jpg';
import linkN64 from './assets/images/n64/link.png';
import marioN64 from './assets/images/n64/mario-star.png';
import falconN64 from './assets/images/n64/captain-falcon.png';

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
        name: '',
        found: false,
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
      },
    ],
  },
];

export default levelData;
