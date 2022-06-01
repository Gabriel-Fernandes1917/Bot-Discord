require('dotenv').config()

const Client = require('./src/structures/Client')

const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGES',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES'
    ]
})

client.once('ready', function(){
    console.log("bote ON ")
})

client.on('messageCreate', function(message){
    if (message.content == "oi") {
        message.reply("oi krl tudo bem ? ")
    }
    if (message.content == "o gerarde vai fazer uma festa na mansão dele ?") {
        message.reply("Claro po, resenha de 50% so se tem 1 vez")
    }

    if (message.content == "Quem e voce ?") {
        message.reply("ola sou o 1 bot 100% programado a mão pelo @GeGi#9490")
    }

    if (message.content == ".play") {
        message.reply("Espera porra, ainda to começando nessa vida de DJ, jaja essa função vai tar on... Aguarde")
    }
    
})

client.login(process.env.BOT_TOKEN)