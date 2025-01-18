import { Collection } from "discord.js";
import { Command } from "./Command";

declare module 'discord.js' {
    export interface Client {
        cooldowns: Collection<string, number>;
        commands: Collection<string, Command>;
    }
}