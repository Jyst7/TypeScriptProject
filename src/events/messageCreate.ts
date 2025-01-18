import { Message } from 'discord.js';

export const messageCreateEvent = (message: Message) => {
    if (message.author.bot) return;
    console.log(`Message from ${message.author.tag}: ${message.content}`);
}; 