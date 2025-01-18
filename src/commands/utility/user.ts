import { SlashCommandBuilder } from "discord.js";
import { Command } from '../../types/Command';

export const userCommand: Command = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides information about the user.'),
    run(interaction: any) {
        return interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
    },
};