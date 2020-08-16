require('dotenv').config();

const Discord = require('discord.js');

const bot = new Discord.Client();
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

const MEDIA_PATH = './media';

bot.on('message', async message => {
  const voiceChannel = message.member.voice.channel;

  if(!voiceChannel) return;

  const connection = await voiceChannel.join();
  const wow = `${MEDIA_PATH}/${wows[getRandomInt(wows.length)]}`;

  const dispatcher = connection
   .play(wow)
   .on('error', err => {
     console.log(`Error: ${err}`);
   })
   .resume();
});

const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

bot.login(process.env.DISCORD_BOT_TOKEN);
