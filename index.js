require('dotenv').config();

const Discord = require('discord.js');

const bot = new Discord.Client();

const { getWow } = require('./lib/audio');

bot.on('message', async message => {
  const voiceChannel = message.member.voice.channel;

  if(!voiceChannel) return;

  const wow = await getWow();
  const connection = await voiceChannel.join();

  const dispatcher = connection
   .play(wow)
   .on('error', err => {
     console.log(`Error: ${err}`);
   })
   .resume();
});

bot.login(process.env.DISCORD_BOT_TOKEN);
