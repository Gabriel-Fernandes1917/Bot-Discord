require('dotenv').config()

const Client = require('./src/structures/Client')

var errado = 0

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

        if (message.content[0] == "!") {
            
            if (message.content == "!help") {
                message.reply("Ola, sou o GAME BOT, criado pela Rama TI, vamos comecar a jogar!?\nDigite !comandos para saber mais\nAs suas respostas devem seguir esse padrao \nEX: !R1 A")
            }


       
        
            if (message.content == "!comandos") {
                 message.reply("!START - para iniciar o nosso questionario\n!R- para responder o questionario")
            }
             

    
        // comandos do questionario
        let respsota;
        
    
        if (message.content == "!START") {
           

            comando1()
        }

        function comando2() {
            message.reply('2 ) Qual das seguintes declarações e um objetivo válido para os testes?'+
            ' a) O teste deve começar o mais tarde possível para que o desenvolvimento tenha tempo suficiente para criar um bom produto.'+
            ' b) Para validar se o objeto de teste funciona como esperado pelos usuários e outras partes interessadas.'+
            ' c) Para provar que todos os possíveis defeitos são identificados.'+
             'd) Para provar que qualquer defeito remanescente não causará nenhuma falha.')
        }

        function comando8() {
            message.reply('\n\n8 ) Combine os seguintes produtos de trabalho de teste (1-4) com a descrição correta (A-d).Obs(Respondam separando cada ligação por uma vírgula mais um espaço (ex: 1a, 2b, 3c, 4d))'+
            '(1) Conjunto de teste'+
            '(2) Caso de teste'+
            '(3) Roteiro de teste'+
            '(4) Carta de teste'+
            '(a) Um conjunto de scripts de teste a serem executados em uma execução de teste específica'+
            '(b) Um conjunto de instruções para a execução de um teste'+
            '(c) Contém os resultados esperados'+
            '(d) Documentação das atividades de teste em testes exploratórios baseados em sessões')
        }

        function comando4() {

            message.reply( "\n\n4) Você está trabalhando em um projeto que está efetuando um release de manutenção de um sistema bancário grande"
            +" e de alto risco.\nQual dos seguintes é um benefício da automação do teste para este projeto?\na) Redução do trabalho repetitivo " 
            +"b) Facilidade de preencher relatórios de bugs\nc) Baixo custo para automatizar todos os testes\nd) Oportunidade para "+
            "aprender novo conhecimento \n e) Facilidade para construção de testes de aceitação")
            
            
        }

        function comando10() {
            message.reply('Levando em consideração uma situação de componente de software, no qual, o  campo de entrada'+
           ' referente ao ano aceita valores de 1900 até 2004. Utilizando á técnica de teste de análise do valor limite o teste usaria quais valores de entrada?'+ 
           '(Obs: Respondam separando os valores com vírgula mais um espaço ex: 1950, 1951, 1952, 1953)'
           )

        }
        function comando6() {
            message.reply('\n\n6) Sobre a técnica de teste de caixa preta do valor limite, qual das afirmações abaixo está correta?'+
                'a) É o mesmo que o teste de Partição de Equivalência'+
               ' b) Verifica as condições de limite, ou seja, abaixo e acima dos limites de cada entrada e saída das partições equivalentes'+
               ' c) Testa as combinações de entrada'+
                'd) É utilizada como uma estratégia de teste de caixa branca'+
                'e) Nenhuma das anteriores.')
            
        }

        function comando7() {
            message.reply("\n\n7) Qual dos seguintes e o MAIS provável que seja um benefício das ferramentas de execução de testes?\n"
            +"a) E fácil criar testes de regressão\n"
            +"b) E fácil manter o controle de versão dos ativos de teste\n"
            +"c) E fácil projetar testes para testes de segurança\n"
            +"d) E fácil executar testes de regressão\n")
            
        }
        function comando3() {
            message.reply( "\n\n3)Qual das seguintes afirmações está correta, quanto ao teste de sistema não funcional?"
                +"a) Teste para verificar se algo no sistema não funciona corretamente"
                +"b) Testa os atributos de qualidade, incluindo o desempenho e usabilidade"
                +"c) Testa uma funcionalidade do sistema usando apenas o componente do software, necessário para a execução da função"
                +"d) Testa uma funcionalidade do sistema usando apenas o componente do software, necessário para a execução da ação"
                +"e) Testa as funcionalidades que não deveriam existir")    
        }
        function comando9() {
            message.reply("\n\n9) Qual o número mínimo de casos de testes que uma regra de negócio com 3 condicionais encadeados deve possuir?")
        }
        function comando5() {
            message.reply('\n\n5 ) Qual das seguintes alternativas não faz parte do teste de sistema?'+
                'a) Teste baseado nas regras de negócio'+
               ' b) Teste de desempenho, carga e stress'+
                'c) Teste baseado em requisitos'+
                'd) Teste de usabilidade'+
                'e) Teste de integração ')
        
            
        }

        if (message.content == "!R1 B") {
            message.reply("certa resposta da 1 ")
            comando2()
        }else if(message.content == "!R1 A" || message.content == "!R1 C"|| message.content == "!R1 D" ){
            message.reply("ERRADA resposta da 1 ")      
            errado++

            if (errado >= 6) {
                message.reply("voce perdeu")
            }else{
                comando2() 
            }

        }


        if (message.content == "!R2 B") {
            message.reply("certa resposta da 2 ")
    
            
            comando3()
        }else if(message.content == "!R2 A" || message.content == "!R2 C"|| message.content == "!R2 D" ){
            message.reply("ERRADA resposta da 2 ")
            errado++   
            if (errado >= 6) {
                message.reply("voce perdeu")
            }else{
                comando3()
            }
            
            
        }

             
        if (message.content == "!R8 1A 2C 3B 4D") {
             message.reply("certa resposta da 8 ")
             comando9()
         }
        if (message.content == "!R4 A") {
            message.reply("certa resposta da 4 ")
            comando5()
        }else if(message.content == "!R4 B" || message.content == "!R4 C"|| message.content == "!R4 D" || message.content == "!R4 E" ){
            message.reply("ERRADA resposta da 4 ")
            errado++
            
            if (errado >= 6) {
                message.reply("voce perdeu")
            }else{
                comando5()
            }
            

        }

        if (message.content == "!R10 1899, 1900, 2004, 2005") {
            let resul = (100*(10-errado))/10
            message.reply("certa resposta da 10 \n "+ resul+"%")
            errado = 0
            
            
        }

        if (message.content == "!R6 B") {
            message.reply("certa resposta da 6 ")
            
            
            comando7()
        }else if(message.content == "!R6 A" || message.content == "!R6 C"|| message.content == "!R6 D" || message.content == "!R6 E"){
            message.reply("ERRADA resposta da 6 ")
            errado++
            
            if (errado >= 6) {
                message.reply("voce perdeu")
                errado = 0
            }else{
                comando7()
            }
                  
        }
        if (message.content == "!R7 D") {
            message.reply("certa resposta da 7 ")
            
            
            comando8()
        }else if(message.content == "!R7 A" || message.content == "!R7 C"|| message.content == "!R7 B" ){
            message.reply("ERRADA resposta da 7 ")
            errado++
            if (errado > 6) {
                message.reply("voce perdeu")
                errado = 0
            }else{
                comando8()
            }
           

        }
        if (message.content == "!R3 B") {
            message.reply("certa resposta da 3 ")
            
            
            comando4()
        }else if(message.content == "!R3 C" || message.content == "!R3 A"|| message.content == "!R3 D" || message.content == "!R3 E"){
            message.reply("ERRADA resposta da 3 ")
            errado++
            if (errado > 6) {
                message.reply("voce perdeu")
                errado = 0
            }else{
                comando4()
            } 
                  

        }
        if (message.content == "!R9 6") {
            message.reply("certa resposta da 9 ")
            
            
            comando10()
        }

        if (message.content == "!R5 E") {
            message.reply("certa resposta da 5 ")
            comando6()
            
            
        }else if(message.content == "!R5 A" || message.content == "!R5 C"|| message.content == "!R5 D" || message.content == "!R5 E"){
            message.reply("ERRADA resposta da 5 ")
            errado++
            comando6()
            if (errado > 6) {
                message.reply("voce perdeu")
                errado = 0
            }  
                

        }


    
        function comando1() {
            message.reply("\n1 ) Qual das seguintes respostas descreve uma condição de teste? \n a) Uma característica distinta de um componente ou sistema. \n b) Um aspecto testável de um componente ou sistema identificado como base para os testes. \n c) O grau em que um produto de software fornece funço es que atendem a s necessidades declaradas e implícitas quando o software e utilizado sob condições específicas. \n d) Casos de teste projetados para executar combinações de condições ações resultantes delas.")
            
            
        }
    
        //fim questionario 


    }

   
    
})

client.login(process.env.BOT_TOKEN)