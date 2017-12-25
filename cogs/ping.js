const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => { 

    if(message.content == 'bark') { 
        message.reply('woof');
    }

})

bot.login(Mzk0MzA1MjgxNjQ1MDg0Njcy.DSE-dg.0wT5CO_AdHYMZAPyEzI61p9NdPg);