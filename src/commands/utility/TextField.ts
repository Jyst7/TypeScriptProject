import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from '../../types/Command';

export const textField: Command = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('textfield')
        .setDescription('Allows writing in a text field with custom input')
        .addStringOption(option => option.setName('input')
            .setDescription('Type your input to send as a message (required)')
            .setRequired(true)), // Make the input required
    run: async function (interaction: ChatInputCommandInteraction): Promise<void> {
        const input = interaction.options.getString('input'); // Get the input from the command
        await interaction.reply({ content: `You entered: ${input}`, ephemeral: true }); // Respond with the input
    }
};