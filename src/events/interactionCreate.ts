import { Interaction, ChatInputCommandInteraction } from 'discord.js';
import { commands } from '../commands';

export const interactionCreateEvent = (interaction: Interaction) => {
    if (!interaction.isCommand()) return;

    const command = commands.find((c) => c.data.name === interaction.commandName);
    if (!command) return;

    if (!(interaction instanceof ChatInputCommandInteraction)) {
        return interaction.reply({ content: 'This command can only be used as a chat input command.', ephemeral: true });
    }

    const now = Date.now();
    const cooldowns = interaction.client.cooldowns;

    if (!cooldowns.has(command.data.name)) {
        cooldowns.set(command.data.name, now);
    } else {
        const expirationTime = cooldowns.get(command.data.name)! + (command.cooldown ?? 0) * 1000;

        if (now < expirationTime) {
            const remainingTime = Math.ceil((expirationTime - now) / 1000);
            return interaction.reply({ content: `Please wait ${remainingTime} seconds before using this command again.`, ephemeral: true });
        }

        cooldowns.set(command.data.name, now);
    }

    try {
        return command.run(interaction);
    } catch (error) {
        console.error(error);
        return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
}; 

