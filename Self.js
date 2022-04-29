    // =============== Port ===============

    const express = require('express');
    const prefix = "$";
    const app = express();
    const port = 4000;
    const ytdl = require('ytdl-core');
    const discordTTS = require('discord-tts');

    const {
        token,
        video_urls
    } = require("./config.json")

    app.get('/', (req, res) => res.send('Bot Is Working Well!'));

    app.listen(port, () =>

        console.log(`Example app listening at http://localhost:${port}`)

    );

    // =============== Bot ===============
    
    const Discord = require('discord.js-self');

    const user = new Discord.Client();

    const { id, id_1, error, success } = require('./config.json');

    
    user.on('ready', () => {
        console.log(`USER ${user.user.tag}!`);
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
                console.error(e);
            });
    });

    
    user.on("ready", () => {
        const targetguild = user.guilds.cache.get("813392815345106974");
        
        const activities = [
            { name: 'MoonTeam`', type: 'STREAMING', url: "https://www.twitch.tv/trikanoid" }, 
            
            { name: `﹝🌙﹞`, type: 'LISTENING' }
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
        }, 3000) 

          let activity = 1;
          setInterval(() => {
            
            activities[2] = { name: `${targetguild.memberCount} Members`, type: 'WATCHING' };     
            activities[3] = { name: `</> - ᴘᴀʀᴢɪᴠᴀʟ ☾, type: 'WATCHING' }; 
            activities[4] = { name: `im discord self music` , type: 'PLAYING'}
            
            if (activity > 4) activity = 0;
 user.user.setActivity(activities[activity]);
            activity++;
          }, 15000);

          console.log(`${user.user.tag} is running on ${user.guilds.cache.size} server(s), for ${user.users.cache.size} users`);
    });

      

     user.on("message", async (message) => {      if(message.content.toLowerCase().startsWith(prefix + "join")) {
                const voiceChannel = user.channels.cache.get("voice Id")
                voiceChannel.join().then(connection => {
                    console.log("Joined voice channel")
                    function play(connection) {
                        const stream = video_urls[Math.floor(Math.random() * video_urls.length)]
                        const dispatcher = connection.play(stream)
                        dispatcher.on("finish", () => {
                            play(connection)
                        })
                    }
                    play(connection)
                    return message.channel.send("Hello, I came to your channel");
                })
        }}
    );

    
    // ==============================================
  
    user.login("your token")
