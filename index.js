const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] 
});

client.once('ready', () => {
    console.log(`Bot is live as ${client.user.tag}`);
});

// Simple test command
client.on('messageCreate', (message) => {
    if (message.content === '!hello') {
        message.reply('I am online and working!');
    }
});

client.login(process.env.DISCORD_TOKEN);
