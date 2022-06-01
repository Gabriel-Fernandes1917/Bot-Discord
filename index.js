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
}, function(message){
    
    message.reply("Salve clã, estou on novamente pra ajudar vcs ! <3 \n")
    //não ta mandnado mensagem
})

client.on('messageCreate', function(message){
    if (message.content == ";help") {
        message.reply("Ola, sou o bot da Rama T.I, esses são os meu comandos: ")
        message.reply("1- Questionarios de perguntas\ 2 - boas vindas \n")
        message.reply("Estou as suas ordens, para chamar um comando digite ; e o numero do comando ex ;1 , abraço Rama T.I ")
    }

    // comandos do questionario
    let respsota;
    let acertos = 0

    if (message.content == ";1") {
        message.reply("OK, vamos la vou lhe fazer 10 perguntas se vc acertar 70% voce ganha, para responder digite ;letra correta e o numero da questão ex ;A1 . preparado ? la vamos nos")

        //q1()
    }

    function q1(){
        // console.log("entrei funcao")
        message.reply("Qual das seguintes respostas descreve uma condição de teste? \n a) Uma característica distinta de um componente ou sistema. \n b) Um aspecto testável de um componente ou sistema identificado como base para os testes. \n c) O grau em que um produto de software fornece funço es que atendem a s necessidades declaradas e implícitas quando o software e utilizado sob condições específicas. \n d) Casos de teste projetados para executar combinações de condições ações resultantes delas.");
        setTimeout(() => {  
            respsota = message.content
            if(respsota == ";A1"){
                message.reply("certa resposta")
                acertos++
            }else{
                message.reply("errada a resposta")
            }
         }, 10000);
        
    }

    function comando1() {
        message.reply("")
    }

    //fim questionario 
   
    
})

client.login(process.env.BOT_TOKEN)