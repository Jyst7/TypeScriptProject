import 'dotenv/config';
import { Client, Collection, Events } from 'discord.js';
import { readyEvent } from './events/ready';
import { interactionCreateEvent } from './events/interactionCreate';


const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent']
});

client.cooldowns = new Collection();
client.commands = new Collection();

client.on('ready', () => readyEvent(client));
client.on(Events.InteractionCreate, (interaction) => { 
    interactionCreateEvent(interaction)
});


client.login(process.env.DISCORD_TOKEN);