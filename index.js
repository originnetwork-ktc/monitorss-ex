const { ClientManager } = require('monitorss');

const config = {
    bot: {
        token: 'Enter_your_discord_bot_token_here'
    },
    database: {
        uri: 'Enter_your_mongodb_database_link_here'
    }
} 

const settings = {
    setPresence: true,
    config
}

const client = new ClientManager(settings)

client.start()
