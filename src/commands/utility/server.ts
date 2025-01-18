import { SlashCommandBuilder } from "discord.js";
import { Command } from '../../types/Command';

export const serverCommand: Command = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Provides information about the server.'),
    run(interaction: any) {
        return interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
    },
};