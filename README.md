# TypeScript Discord Bot

This is a Discord bot built with TypeScript and the Discord.js library. The bot includes several commands and is designed to be easily extendable.

## Features

- **Slash Commands**: The bot supports various slash commands, including:
  - `/server`: Provides information about the server.
  - `/user`: Provides information about the user.
  - `/textfield`: Allows users to input custom text.
  - `/testcommand`: Replies with an embedded message.

- **Command Cooldowns**: Implemented cooldowns for commands to prevent spam.

- **Environment Configuration**: Uses dotenv for managing environment variables.

## Prerequisites

- Node.js (version 16 or higher)
- A Discord bot token (create a bot on the [Discord Developer Portal](https://discord.com/developers/applications))

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/TypeScriptProject.git
   cd TypeScriptProject
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Discord bot token and other necessary environment variables:
   ```plaintext
   DISCORD_TOKEN=your_bot_token
   DISCORD_CLIENT_ID=your_client_id
   GUILD_ID=your_guild_id
   ```

## Usage

### Development

To run the bot in development mode with automatic reloading:

```

### Build

To compile the TypeScript code to JavaScript:
```bash
npm run build
```

### Start

To start the bot:
```bash
npm start
```

### Deploy Commands

To deploy the slash commands to your Discord server:
```bash
npm run deploy
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Discord.js](https://discord.js.org/) - A powerful library for interacting with the Discord API.
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that compiles to clean JavaScript output.
- [dotenv](https://www.npmjs.com/package/dotenv) - A zero-dependency module that loads environment variables from a `.env` file.
