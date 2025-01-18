import { Client } from 'discord.js';

export const readyEvent = (client: Client) => {
    console.log(`${client.user?.tag} is online.`);
}; 