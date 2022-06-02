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

        if (message.content[0] == "!") {
            
            if (message.content == "!help") {
                message.reply("Ola, sou o GAME BOT, criado pela Rama TI, vamos comecar a jogar!?\nDigite !comandos para saber mais\nAs suas respostas devem seguir esse padrao \nEX: !R A B C D")
            }


       
        
            if (message.content == "!comandos") {
                 message.reply("!START - para iniciar o nosso questionario\n!R- para responder o questionario")
            }
             

    
        // comandos do questionario
        let respsota;
        
    
        if (message.content == "!START") {
           

            comando1()
        }

        

    
        function comando1() {
            message.reply("\n1 ) Qual das seguintes respostas descreve uma condição de teste? \n a) Uma característica distinta de um componente ou sistema. \n b) Um aspecto testável de um componente ou sistema identificado como base para os testes. \n c) O grau em que um produto de software fornece funço es que atendem a s necessidades declaradas e implícitas quando o software e utilizado sob condições específicas. \n d) Casos de teste projetados para executar combinações de condições ações resultantes delas."+
            "\n\n2 ) Qual das seguintes declarações e um objetivo válido para os testes?"+
           ' a) O teste deve começar o mais tarde possível para que o desenvolvimento tenha tempo suficiente para criar um bom produto.'+
           ' b) Para validar se o objeto de teste funciona como esperado pelos usuários e outras partes interessadas.'+
           ' c) Para provar que todos os possíveis defeitos são identificados.'+
            'd) Para provar que qualquer defeito remanescente não causará nenhuma falha.')
            
            // q3

            message.reply('\n\n3 ) Combine os seguintes produtos de trabalho de teste (1-4) com a descrição correta (A-d).Obs(Respondam separando cada ligação por uma vírgula mais um espaço (ex: 1a, 2b, 3c, 4d))'+
            '(1) Conjunto de teste'+
            '(2) Caso de teste'+
            '(3) Roteiro de teste'+
            '(4) Carta de teste'+
            '(a) Um conjunto de scripts de teste a serem executados em uma execução de teste específica'+
            '(b) Um conjunto de instruções para a execução de um teste'+
            '(c) Contém os resultados esperados'+
            '(d) Documentação das atividades de teste em testes exploratórios baseados em sessões'+
                       
            

            "\n\n4) Você está trabalhando em um projeto que está efetuando um release de manutenção de um sistema bancário grande"
            +" e de alto risco.\nQual dos seguintes é um benefício da automação do teste para este projeto?\na) Redução do trabalho repetitivo " 
            +"b) Facilidade de preencher relatórios de bugs\nc) Baixo custo para automatizar todos os testes\nd) Oportunidade para "+
            "aprender novo conhecimento \n e) Facilidade para construção de testes de aceitação"+
            
            "\n\n5) Levando em consideração uma situação de componente de software, no qual, o  campo de entrada  referente ao ano aceita"
            +"valores de 1900 até 2004. Utilizando á técnica de teste de análise do valor limite o teste usaria quais valores de entrada?\n "
            +"(Obs: Respondam separando os valores com vírgula mais um espaço ex: 1950, 1951, 1952, 1953)"
                
            )
            

            message.reply('\n\n6) Sobre a técnica de teste de caixa preta do valor limite, qual das afirmações abaixo está correta?'+
            'a) É o mesmo que o teste de Partição de Equivalência'+
           ' b) Verifica as condições de limite, ou seja, abaixo e acima dos limites de cada entrada e saída das partições equivalentes'+
           ' c) Testa as combinações de entrada'+
            'd) É utilizada como uma estratégia de teste de caixa branca'+
            'e) Nenhuma das anteriores.'+

            
            "\n\n7) Qual dos seguintes e o MAIS provável que seja um benefício das ferramentas de execução de testes?\n"
            +"a) E fácil criar testes de regressão\n"
            +"b) E fácil manter o controle de versão dos ativos de teste\n"
            +"c) E fácil projetar testes para testes de segurança\n"
            +"d) E fácil executar testes de regressão\n"+

            "\n\n8)Qual das seguintes afirmações está correta, quanto ao teste de sistema não funcional?"
            +"a) Teste para verificar se algo no sistema não funciona corretamente"
            +"b) Testa os atributos de qualidade, incluindo o desempenho e usabilidade"
            +"c) Testa uma funcionalidade do sistema usando apenas o componente do software, necessário para a execução da função"
            +"d) Testa uma funcionalidade do sistema usando apenas o componente do software, necessário para a execução da ação"
            +"e) Testa as funcionalidades que não deveriam existir"+

            "\n\n9) Qual o número mínimo de casos de testes que uma regra de negócio com 3 condicionais encadeados deve possuir?"+

            "\n\n10) Qual das seguintes alternativas não faz parte do teste de sistema?" 
            +"a) Teste baseado nas regras de negócio"
            +"b) Teste de desempenho, carga e stress"
            +"c) Teste baseado em requisitos"
            +"d) Teste de usabilidade"
            +"e) Teste de integração")
                        
            


            
        }
    

        
        if (message.content[0] == "!" && message.content[1] == "R" ) {
            let x = Number(0)
            
            
                
                if (message.content[3] == "B") {
                    x += Number(1)
                    console.log("1 "+x)
                }

                if (message.content[5] == "B") {
                    x += Number(1)
                    console.log("2"+x)
                }

                if (message.content[7] == "1" && message.content[8] == "A" && message.content[10] == "2" && message.content[11] == "C" && message.content[13] == "3" && message.content[14] == "B" && message.content[16] == "4" && message.content[17] == "D") {
                    x += Number(1)
                    console.log("3"+x)
                }

                if (message.content[19] == "A") {
                    x += Number(1)
                    console.log("4"+x)
                }

                
                if (message.content[21] == "B") {
                    x += Number(1)
                    console.log("5"+x)
                }

                if (message.content[23] == "D") {
                    x += Number(1)
                    console.log("6"+x)
                }

                if (message.content[25] == "B") {
                    x += Number(1)
                    console.log("7"+x)
                }

                if (message.content[27] == "6") {
                    x += Number(1)
                    console.log("8"+x)
                }

                if (message.content[29] == "E") {
                    x += Number(1)
                    console.log("9"+x)
                }
               
                if  (message.content[31] == "1" && message.content[32] == "8" && message.content[33] == "9" && message.content[34] == "9" && message.content[35] == "," && message.content[37] == "1" && message.content[38] == "9" && message.content[39] == "0" && message.content[40] == "0" && message.content[41] == "," && message.content[43] == "2" && message.content[44] == "0" && message.content[45] == "0" && message.content[46] == "4" && message.content[47] == "," && message.content[49] == "2" && message.content[50] == "0" && message.content[51] == "0" && message.content[52] == "5") {

                    //1899, 1900, 2004, 2005
                    x += Number(1)
                    console.log("10"+x)
                }
                
                let porAcerto = (x *100)/10
                
                if (porAcerto >= 70) {
                    
                    message.reply("voce ganhou "+ porAcerto +" % portanto voce passou")
                }else{
                    
                    message.reply("voce ganhou parcialmente "+ porAcerto +" % de acerto")
                    
                }
                


                
          
        }
        
        
        //fim questionario 
    }

   
    
})

client.login(process.env.BOT_TOKEN)