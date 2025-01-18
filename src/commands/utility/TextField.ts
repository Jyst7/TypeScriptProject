import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from '../../types/Command';

export const textField: Command = {
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('textfield')
        .setDescription('Allows writing in a text field with custom input')
        .addStringOption(option => option.setName('input')
            .setDescription('Type your input to send as a message (required)')
            .setRequired(true)), // Make the input required
    run: async function (interaction: ChatInputCommandInteraction): Promise<void> {
        await interaction.deferReply(); // Acknowledge the interaction
        const input = interaction.options.getString('input'); // Get the input from the command
        await interaction.editReply({ content: `You entered: ${input}` }); // Respond with the input
    }
};