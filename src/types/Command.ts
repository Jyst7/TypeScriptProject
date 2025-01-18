import { ChatInputCommandInteraction } from "discord.js";

export interface Command {
    cooldown?: number;
    data: {
        toJSON(): any;
        name: string;
        description: string;
    };
    run: (interaction: ChatInputCommandInteraction) => Promise<void>;
} 
