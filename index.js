const { Client, Intents } = require('discord.js');
const cliente = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

cliente.on("ready", async () =>{
    console.log(`${cliente.user.username} se ha conectado correctamente`)
});

cliente.login("OTM1OTI1MjkzMDQ1MTQxNTE1.YfFuWg.praphff3xwcYd6AhqFOXjPbUnc4");