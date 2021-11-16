import gamecube from './assets/images/gamecube.jpg';
import n64 from './assets/images/n64.jpg';
import wii from './assets/images/wii.jpg';

const levelData = [
  {
    name: 'Nintendo 64',
    image: n64,
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
