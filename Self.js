//=============================== Port =================================
const discord = require("discord.js")
const express = require('express');
const app = express();
const prefix = "!";
const port = 4001;
const ytdl = require('ytdl-core');
const discordTTS =require('discord-tts');

const {
    video_urls
} = require("./config.json");
app.get('/', (req, res) => res.send('Bot Is Working Well!'));
app.listen(port, () => 
    console.log(`Example app listening at https://loclhost:${port}`)
);

//=============================== Bot =================================

const Discord = require('discord.js-self');
const user = new Discord.Client();
const {id, id_1, error, success } = require('./config.json');


user.on('ready', () => {
    const channel = user.channels.cache.get(`${id}`);
    if (!channel) return console.error(`${error}`);
    channel 
    .join()
    .then(connection => {
        connection.voice.setSelfDeaf(true);
        connection.voice.setSelfMute(false);
        console.log(`${success}`);
    })
    .catch(e => {
        console.eroor(e);
     });
});


user.on("ready", () => {
    const targetguild = user.guilds.cache.get("793037788866019378");
    const activities = [
        {name: '1', type: 'STREAMING', url: "https://www.twitch.tv/trikanoid"},
        {name: '2', type: 'LISTENING'}
    ];

    setInterval(function(){
        setTimeout(function(){
            user.user.setStatus('online')
        }, 1000);

        setTimeout(function(){
            user.user.setStatus('dnd')
        }, 1500);

        setTimeout(function(){
            user.user.setStatus('idle')
        }, 2000);
    }, 3000);
    let activity = 1;
    setInterval(() => {
        activities[2] = {name: `parzival`, type: `WATCHING`};
        activities[3] = {name: `parzival`, type: `WATCHING`};
        activities[4] = {name: `parzival`, type: `PLAYING`};
        if (activity > 4) activity = 0;
        user.user.setActivity(activities[activity]);
        activity++;
     },1500);
     console.log(`${user.user.tag} is running on ${user.guilds.cache.size} server(s), for ${user.users.cache.size} users`);
});


user.on("message", async (message) => {
    if (message.content.startsWith(prefix + "join")) {
    const voiceChannel = user.channels.cache.get("814910544879419433")
    voiceChannel.join().then(connection => {
        console.log("joined voice channel")
        function play(connection) {
            const stream = video_urls[Math.floor(Math.random() * video_urls.length)]
            const dispatcher = connection.play(stream)
            dispatcher.on("finish", () => {
                play(connection)
            })
        }
        play(connection)
        return message.channel.send("Hello, i come to your channel.")
    })
    }
});
// ======================================================================

user.login(your-token);
