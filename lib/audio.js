const axios = require('axios');

const MEDIA_PATH = './media';
const RANDOM_ENDPOINT = 'https://owen-wilson-wow-api.herokuapp.com/wows/random';
const wows = [
  'wow1.mp3',
  'wow2.mp3',
  'wow3.mp3',
  'wow4.mp3',
  'wow5.mp3',
  'wow6.mp3',
  'wow7.mp3',
  'wow8.mp3',
];

const getWow = async () => {
  try {
    const response = await axios.get(RANDOM_ENDPOINT);
    console.log(response)
    return response.data[0].audio;
  } catch(e) {
    console.log(e);
    return fallback();
  }
}

const fallback = () => `${MEDIA_PATH}/${wows[getRandomInt(wows.length)]}`;

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

module.exports = { getWow };