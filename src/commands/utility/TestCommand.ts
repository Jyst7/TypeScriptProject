import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { Command } from '../../types/Command';

export const testCommand: Command = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('testcommand')
        .setDescription('replies with testEmbed'),
    run(interaction: any) {
        const user = interaction.user;
        const testEmbed = new EmbedBuilder()
            .setTitle("Test Title")
            .setDescription("Test Description")
            .setAuthor({
                name: user.tag,
                iconURL: user.displayAvatarURL(),
            })
            .addFields(
                { name: 'test name 1', value: 'test value 1', inline: true },
                { name: 'test name 2', value: 'test value 2', inline: true }
            )
            .setFooter(
                { text: 'test footer', iconURL: 'https://i.imgur.com/AfFp7pu.png' }
            );

        return interaction.reply({ embeds: [testEmbed] });
    },
};

/*


const testEmbed = new EmbedBuilder()
    .setTitle("Test Title")
    .setDescription("Test Description")
    .setAuthor({
        name: user.tag,
        iconURL: user.displayAvatarURL(),
    })
    .addFields(
        { name: 'test name 1', value: 'test value 1', inline: true },
        { name: 'test name 2', value: 'test value 2', inline: true }
    )
    .setFooter(
    { text:'test footer', iconURL: 'https://i.imgur.com/AfFp7pu.png' }
    );
*/
