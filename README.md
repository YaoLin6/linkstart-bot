# linkstart-bot
French discord bot that can play music among other things!

## Run the bot
Rename .env.example file in .env and fill these information needed:
```env
DISCORD_CLIENT_ID = your_application_id
DISCORD_TOKEN = the_token_of_your_bot
```

### Run bot with Node.js
Install dependencies
```
npm install
```

Lauch the bot (slash commands can take time to propagate to Discord)
```
npm start
```

### Run bot with Docker
Build Docker image:
```
docker build -t linkstart-bot .
```

Run image in a container:
```
docker run linkstart-bot
```
    
## Invite my bot : 
Invite it on your server by this link: 
>https://discord.com/oauth2/authorize?client_id=784536536459771925&permissions=8&scope=bot

**Have fun!**
