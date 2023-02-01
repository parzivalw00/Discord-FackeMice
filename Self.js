//=============================== Port =================================
const discord = require("discord.js")
const express = require('express')
const app = express()
const port = 4001;
const discordTTS = require('discord-tts')
app.get('/', (req, res) => res.send('Bot Is Working Well!'));
app.listen(port, () => 
    console.log(`Example app listening at https://loclhost:${port}`)
);

//=============================== Bot =================================

const Discord = require('discord.js-self')
const user = new Discord.Client()
const { error, success } = require('./config.json')


user.on("ready", () => {
    const targetguild = user.guilds.cache.get("793037788866019378")
    const activities = [
        {name: '1', type: 'STREAMING', url: "https://www.twitch.tv/trikanoid"},
        {name: '2', type: 'LISTENING'}
    ];
    
    setInterval(function(){
        setTimeout(function(){
            user.user.setStatus('online')
        }, 1000)

        setTimeout(function(){
            user.user.setStatus('dnd')
        }, 1500)

        setTimeout(function(){
            user.user.setStatus('idle')
        }, 2000)
    }, 3000)
    let activity = 1;
    setInterval(() => {
        activities[2] = {name: `parzival`, type: `WATCHING`};
        activities[3] = {name: `parzival`, type: `WATCHING`};
        activities[4] = {name: `parzival`, type: `PLAYING`};
        if (activity > 4) activity = 0;
        user.user.setActivity(activities[activity])
        activity++;
     },1500)
     console.log(`${user.user.tag} is running on ${user.guilds.cache.size} server(s), for ${user.users.cache.size} users`);
});


user.on("message", async (message) => {
     const targetguild = user.guilds.cache.get('976580118191411200')
    if (message.content === prefix + "join")) {
    const channel = user.channels.cache.get('971728627022577674')
    if (!channel) return console.error(`${error}`);
    channel 
    .join()
    .then(connection => {
        connection.voice.setSelfDeaf(false)
        connection.voice.setSelfMute(true)
        console.log(`${success}`)
    })
    .catch(e => {
        console.error(e)
     })
})
// ======================================================================

user.login(your-token);
