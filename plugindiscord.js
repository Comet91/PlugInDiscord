const ytdl = require('youtube-dl')
const fs = require('fs')
const Discord = require("discord.js");
const client = new Discord.Client();
var PlugAPI = require('plugapi');
const bot = new PlugAPI({ guest: true })

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

var message = 'msg'
var prefix = "!"

client.on('ready',() => {
  client.user.setGame("on plug.dj");
	console.log('I\'m Online\nI\'m Online');
});

bot.connect('YOUR ROOM!'); // The part after https://plug.dj

bot.on('roomJoin', function(room) {
    console.log("Joined " + room);
});


/* ----- FUNCTIONS N STUFF ----- */

function getMedia() {
    const media = bot.getMedia()
    const obj = {
        title: `${media.author} - ${media.title}`,
        cid: media.cid,
        duration: media.duration,
        format: media.format,
        elapsed: bot.getTimeElapsed(),
    }
    if (obj.format === 1) {
        obj.url = `https://www.youtube.com/watch?v=${media.cid}`
    } else {
        obj.url = `https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${media.cid}`
    }
    return obj
}

/* ----- COMMANDS ----- */

client.on('message', message => {
	if (message.content.startsWith(prefix + 'plugdj')) {
    message.channel.sendMessage('**Current Song Playing:** ' + getMedia().title )
	}
});


client.login('Your Bots Token Here!');
