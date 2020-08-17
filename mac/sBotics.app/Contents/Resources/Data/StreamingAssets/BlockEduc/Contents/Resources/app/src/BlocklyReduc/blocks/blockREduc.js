Blockly.defineBlocksWithJsonArray([{
        "type": "escrever",
        "message0": "escrever %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "String"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "Imprime na linha especificada do console virtual o texto indicado O console possui três linhas: 1, 2 e 3",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=escrever"
    },
    {
        "type": "escrevernumero",
        "message0": "escrevernumero %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "Imprime na linha especificada do console virtual o número indicado O console possui três linhas: 1, 2 e 3",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=escrevernumero"
    },
    {
        "type": "limparregistro",
        "message0": "limparregistro ",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "Apagar o conteúdo salvo no arquivo de registro",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=limparregistro"
    },
    {
        "type": "pararregistro",
        "message0": "pararregistro ",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "Desabilita o registro em arquivo do conteúdo escrito no console",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=pararregistro"
    },
    {
        "type": "registrar",
        "message0": "registrar ",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "Habilita o registro em arquivo do conteúdo escrito no console",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=registrar"
    },
    {
        "type": "registrarnumero",
        "message0": "registrarnumero %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "Registra o número informado em um arquivo chamado consoleLogtxt",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=registrarnumero"
    },
    {
        "type": "registrartexto",
        "message0": "registrartexto %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "String"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "Registra o texto informado em um arquivo chamado consoleLogtxt",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=registrartexto"
    },
    {
        "type": "virartexto",
        "message0": "virartexto %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "String",
        "colour": 160,
        "tooltip": "Converte um valor do tipo número para o tipo texto",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=virartexto"
    },
    {
        "type": "anguloatuador",
        "message0": "anguloatuador ",
        "output": "Number",
        "colour": 290,
        "tooltip": "Retorna o número correspondente ao ângulo de inclinação do atuador robô em relação ao plano",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=anguloatuador"
    },
    {
        "type": "angulogiroatuador",
        "message0": "angulogiroatuador ",
        "output": "Number",
        "colour": 290,
        "tooltip": "Retorna o número correspondente ao ângulo de giro do atuador robô em relação ao plano",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=angulogiroatuador"
    },
    {
        "type": "cor",
        "message0": "cor %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "String",
        "colour": 290,
        "tooltip": "Retorna a cor percebida pelo sensor indicado A cor pode ser “VERMELHO”, “VERDE”, “AZUL”, “AMARELO”, “PRETO” e “BRANCO” A numeração dos sensores de cor estão disponíveis na aba sensores do tutorial do simulador",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=cor"
    },
    {
        "type": "corazul",
        "message0": "corazul %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 290,
        "tooltip": "Retorna a intensidade da cor azul percebida pelo sensor indicado A numeração dos sensores de cor estão disponíveis na aba sensores do tutorial do simulador",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=corazul"
    },
    {
        "type": "corverde",
        "message0": "corverde %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 290,
        "tooltip": "Retorna a intensidade da cor verde percebida pelo sensor indicado A numeração dos sensores de cor estão disponíveis na aba sensores do tutorial do simulador",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=corverde"
    },
    {
        "type": "corvermelha",
        "message0": "corvermelha %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 290,
        "tooltip": "Retorna a intensidade da cor vermelha percebida pelo sensor indicado A numeração dos sensores de cor estão disponíveis na aba sensores do tutorial do simulador",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=corvermelha"
    },
    {
        "type": "direcao",
        "message0": "direcao ",
        "output": "Number",
        "colour": 290,
        "tooltip": "Retorna o ângulo do robô em relação ao norte geográfico O retorno é um valor do tipo número",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=direcao"
    },
    {
        "type": "inclinacao",
        "message0": "inclinacao ",
        "output": "Number",
        "colour": 290,
        "tooltip": "Retorna o ângulo de inclinação do robô em relação ao plano da arena O retorno é um valor do tipo número",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=inclinacao"
    },
    {
        "type": "luz",
        "message0": "luz %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 290,
        "tooltip": "Retorna um valor do tipo número com a quantidade de luz percebida pelo sensor de luz indicado A numeração dos sensores de luz estão disponíveis na aba sensores do tutorial do simulador",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=luz"
    },
    {
        "type": "temalgo",
        "message0": "temalgo %1 , %2 , %3",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "3",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "output": "Boolean",
        "colour": 290,
        "tooltip": "Retorna se o sensor ultrassônico indicado (parâmetro 1)  está detectando algo entre as distâncias mínima (parâmetro 2) e máxima (parâmetro 3) indicadas O retorno será verdadeiro caso um objeto seja percebido pelo sensor, e falso caso contrário",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=temalgo"
    },
    {
        "type": "tempo",
        "message0": "tempo ",
        "output": "Number",
        "colour": 290,
        "tooltip": "Retorna o tempo em milissegundos decorrido desde o início da execução da rotina",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=tempo"
    },
    {
        "type": "temporizador",
        "message0": "temporizador ",
        "output": "Number",
        "colour": 290,
        "tooltip": "Retorna o tempo em milissegundos decorrido desde o início da execução da rotina ou desde o último comando zerartemporizador()",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=temporizador"
    },
    {
        "type": "toque",
        "message0": "toque %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Boolean",
        "colour": 290,
        "tooltip": "Retorna o estado do sensor de toque especificado O retorno pode ser verdadeiro ou falso A numeração dos sensores de toque estão disponíveis na aba sensores do tutorial do simulador",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=toque"
    },
    {
        "type": "ultra",
        "message0": "ultra %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 290,
        "tooltip": "Retorna um valor do tipo número com a distância percebida pelo sensor de ultrassom informado por um número na função A numeração dos sensores de ultrassom estão disponíveis na aba sensores do tutorial do simulador",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=ultra"
    },
    {
        "type": "abrir",
        "message0": "abrir %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Abre a garra do atuador empilhadeira durante o tempo especificado em milissegundos",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=abrir"
    },
    {
        "type": "baixar",
        "message0": "baixar %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Abaixa o atuador por um tempo indicado em milissegundos",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=baixar"
    },
    {
        "type": "direita",
        "message0": "direita %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Aplica uma força nas rodas do robô para que se mova em torno do eixo para a direita (Limites de força: negativo(300) a 300)",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=direita"
    },
    {
        "type": "esquerda",
        "message0": "esquerda %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Aplica uma força nas rodas do robô para que ele se mova em torno do eixo para a esquerda (Limites de força: negativo(300) a 300)",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=esquerda"
    },
    {
        "type": "fechar",
        "message0": "fechar %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Fecha a garra do atuador empilhadeira durante o tempo especificado em milissegundos",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=fechar"
    },
    {
        "type": "frente",
        "message0": "frente %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Aplica uma força (parametro1) nas rodas do robô no sentido direto (Limites de força: negativo(200) a 200)",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=frente"
    },
    {
        "type": "frenterotacao",
        "message0": "frenterotacao %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Move o robô para frente com a força indicada pela quantidade de rotações fornecida(Limites de força: 200)",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=frenterotacao"
    },
    {
        "type": "girarbaixo",
        "message0": "girarbaixo %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Gira o atuador para baixo por um tempo especificado em milissegundos",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=girarbaixo"
    },
    {
        "type": "girarcima",
        "message0": "girarcima %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Gira o atuador para cima por um tempo indicado em milissegundos",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=girarcima"
    },
    {
        "type": "levantar",
        "message0": "levantar %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Levanta o atuador pelo tempo indicado em milissegundos",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=levantar"
    },
    {
        "type": "motordireita",
        "message0": "motordireita %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Aplica a força indicada no motor da direita (Limites de força: negativo(200) a 200)",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=motordireita"
    },
    {
        "type": "motoresquerda",
        "message0": "motoresquerda %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Aplica a força indicada no motor da esquerda (Limites de força: negativo(200) a 200)",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=motoresquerda"
    },
    {
        "type": "mover",
        "message0": "mover %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Move o robô em diferentes direções dependendo da força aplicada Deve ser indicada a força a ser aplicada na roda da esquerda e na da direita(Limites de força: negativo(300) a 300 em curvas e negativo(200) a 200 para movimentações em linha reta)",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=mover"
    },
    {
        "type": "parar",
        "message0": "parar ",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Interrompe a aplicação de forças nas rodas do robô",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=parar"
    },
    {
        "type": "rotacionar",
        "message0": "rotacionar %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Aplica uma força nas rodas do robô para que ele rotacione em torno do eixo uma determinada angulação, positiva ou negativa, a partir de sua direção atual(Limite de força: 0 a 300)",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=rotacionar"
    },
    {
        "type": "tras",
        "message0": "tras %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Aplica uma força nas rodas do robô no sentido inverso (Limites de força: negativo(200) a 200)",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=tras"
    },
    {
        "type": "trasrotacao",
        "message0": "trasrotacao %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Move o robô para trás com a força indicada pela quantidade de rotações fornecida(Limites de força: 200)",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=trasrotacao"
    },
    {
        "type": "velocidadeatuador",
        "message0": "velocidadeatuador %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "Modifica a força aplicada na movimentação dos atuadores (Limite de força: 0 a 150)",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=velocidadeatuador"
    },
    {
        "type": "acenderled",
        "message0": "acenderled %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "String"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Acende o led na cor especificada A cor pode ser 'VERMELHO', 'VERDE', 'AZUL', 'AMARELO', 'PRETO' ou 'BRANCO'",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=acenderled"
    },
    {
        "type": "acenderledrgb",
        "message0": "acenderledrgb %1 , %2 , %3",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "3",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Acende o led na cor especificada a partir de um código código RGB O parâmetro 1 corresponde ao R, o parâmetro 2 ao G e o parâmetro 3 ao B Os valores de RGB recebidos podem variar de 0 a 255",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=acenderledrgb"
    },
    {
        "type": "adicionarlistanumero",
        "message0": "adicionarlistanumero %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Insere na lista indicada (Parâmetro 1) o número especificado (Parâmetro 2) As listas são criadas automaticamente ao inserir números nelas",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=adicionarlistanumero"
    },
    {
        "type": "adicionarlistatexto",
        "message0": "adicionarlistatexto %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "String"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Insere na lista indicada (Parâmetro 1) o texto especificado (Parâmetro 2)  As listas são criadas automaticamente ao inserir textos nelas",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=adicionarlistatexto"
    },
    {
        "type": "ajustarcor",
        "message0": "ajustarcor %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Ajusta a sensibilidade do sensor de cor Deve ser fornecido um valor de sensibilidade que varia de 0 a 100 A sensibilidade padrão é 25",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=ajustarcor"
    },
    {
        "type": "ajustaronda",
        "message0": "ajustaronda %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "String"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Ajusta o tipo de onda que irá modular o som emitido na função tocar",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=ajustaronda"
    },
    {
        "type": "ajustarprecisao",
        "message0": "ajustarprecisao %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Ajusta a quantidade de casas decimais manipuladas para o valor especificado",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=ajustarprecisao"
    },
    {
        "type": "aleatorio",
        "message0": "aleatorio %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna um número inteiro aleatório entre os números inteiros fornecidos",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=aleatorio"
    },
    {
        "type": "apagarled",
        "message0": "apagarled ",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Apaga o led",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=apagarled"
    },
    {
        "type": "arcocosseno",
        "message0": "arcocosseno %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna o arco cujo cosseno é igual ao valor informado",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=arcocosseno"
    },
    {
        "type": "arcoseno",
        "message0": "arcoseno %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna o arco cujo seno é igual ao valor informado",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=arcoseno"
    },
    {
        "type": "arcotangente",
        "message0": "arcotangente %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna o arco cuja tangente é igual ao valor informado",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=arcotangente"
    },
    {
        "type": "arredondar",
        "message0": "arredondar %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Arredonda o número indicado",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=arredondar"
    },
    {
        "type": "comentar",
        "message0": "comentar %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "String"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Insere comentários no código para documentação, essa função não altera o funcionamento do robô Pode ser utilizado também o caracter # para inserir comentários de uma linha",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=comentar"
    },
    {
        "type": "concatenar",
        "message0": "concatenar %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "String"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "String"
            },
        ],
        "inputsInline": true,
        "output": "String",
        "colour": 160,
        "tooltip": "Realiza a concatenação(junção) de dois textos em um só",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=concatenar"
    },
    {
        "type": "concatenar3",
        "message0": "concatenar3 %1 , %2 , %3",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "String"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "String"
            },
            {
                "type": "input_value",
                "name": "3",
                "check": "String"
            },
        ],
        "inputsInline": true,
        "output": "String",
        "colour": 160,
        "tooltip": "Realiza a concatenação(junção) de três textos em um só",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=concatenar3"
    },
    {
        "type": "concatenar4",
        "message0": "concatenar4 %1 , %2 , %3 , %4",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "String"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "String"
            },
            {
                "type": "input_value",
                "name": "3",
                "check": "String"
            },
            {
                "type": "input_value",
                "name": "4",
                "check": "String"
            },
        ],
        "inputsInline": true,
        "output": "String",
        "colour": 160,
        "tooltip": "Realiza a concatenação(junção) de quatro textos em um só",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=concatenar4"
    },
    {
        "type": "concatenar5",
        "message0": "concatenar5 %1 , %2 , %3 , %4 , %5",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "String"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "String"
            },
            {
                "type": "input_value",
                "name": "3",
                "check": "String"
            },
            {
                "type": "input_value",
                "name": "4",
                "check": "String"
            },
            {
                "type": "input_value",
                "name": "5",
                "check": "String"
            },
        ],
        "inputsInline": true,
        "output": "String",
        "colour": 160,
        "tooltip": "Realiza a concatenação(junção) de cinco textos em um só",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=concatenar5"
    },
    {
        "type": "cosseno",
        "message0": "cosseno %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna o cosseno do ângulo informado em graus",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=cosseno"
    },
    {
        "type": "dividir",
        "message0": "dividir %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna a divisão dos dois números indicados Também pode ser utilizado o símbolo / diretamente",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=dividir"
    },
    {
        "type": "esperar",
        "message0": "esperar %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Espera de um tempo em milissegundos antes de executar o próximo comando Os valores devem ser sempre inteiros maiores que 0",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=esperar"
    },
    {
        "type": "imprimirlistanumero",
        "message0": "imprimirlistanumero %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "String",
        "colour": 160,
        "tooltip": "Retorna um texto com os elementos da lista indicada separados por '|'",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=imprimirlistanumero"
    },
    {
        "type": "imprimirlistatexto",
        "message0": "imprimirlistatexto %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "String",
        "colour": 160,
        "tooltip": "Retorna um texto com os elementos da lista indicada separados por '|'",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=imprimirlistatexto"
    },
    {
        "type": "interromper",
        "message0": "interromper ",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Interrompe a execução do laço de repetição (enquanto - farei, farei - enquanto, repita e para) mais interno OBS: caso seja utilizado fora de um laço de repetição o simulador acusará um erro",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=interromper"
    },
    {
        "type": "limparconsole",
        "message0": "limparconsole ",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Apaga todo texto previamente escrito no console",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=limparconsole"
    },
    {
        "type": "limparlinha",
        "message0": "limparlinha %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Apaga o texto escrito na linha especificada do console O console possui três linhas: 1, 2 e 3",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=limparlinha"
    },
    {
        "type": "listanumero",
        "message0": "listanumero %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna o número presente na lista (Parâmetro 1) e na posição especificada (Parâmetro 2) Caso a lista não possua nenhum elemento na posição especificada o retorno será 0",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=listanumero"
    },
    {
        "type": "listatexto",
        "message0": "listatexto %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "output": "String",
        "colour": 160,
        "tooltip": "Retorna o texto presente na lista (Parâmetro 1) e na posição especificada (Parâmetro 2) Caso a lista não possua nenhum elemento na posição especificada o retorno será ''",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=listatexto"
    },
    {
        "type": "mapeamento",
        "message0": "mapeamento %1 , %2 , %3 , %4 , %5",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "3",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "4",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "5",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Mapeia um número de um intervalo a outro",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=mapeamento"
    },
    {
        "type": "modulo",
        "message0": "modulo %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna o módulo do número indicado",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=modulo"
    },
    {
        "type": "multiplicar",
        "message0": "multiplicar %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna a multiplicação dos dois números indicados Também pode ser utilizado o símbolo * diretamente",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=multiplicar"
    },
    {
        "type": "negativo",
        "message0": "negativo %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Negativa o número indicado",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=negativo"
    },
    {
        "type": "pi",
        "message0": "pi ",
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna o valor da constante pi",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=pi"
    },
    {
        "type": "raizquadrada",
        "message0": "raizquadrada %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna o número correspondente a raiz quadrada do número indicado",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=raizquadrada"
    },
    {
        "type": "removerlistanumero",
        "message0": "removerlistanumero %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Remove na lista (Parâmetro 1) o número presente na posição indicada (Parâmetro 2)",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=removerlistanumero"
    },
    {
        "type": "removerlistatexto",
        "message0": "removerlistatexto %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Remove na lista (Parâmetro 1) o texto presente na posição indicada (Parâmetro 2)",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=removerlistatexto"
    },
    {
        "type": "resto",
        "message0": "resto %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna o resto da divisão dos dois número indicados",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=resto"
    },
    {
        "type": "seno",
        "message0": "seno %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna o seno do ângulo informado em graus",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=seno"
    },
    {
        "type": "somar",
        "message0": "somar %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna soma dos dois números indicados Também pode ser utilizado o símbolo + diretamente",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=somar"
    },
    {
        "type": "substituir",
        "message0": "substituir %1 , %2 , %3",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "String"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "String"
            },
            {
                "type": "input_value",
                "name": "3",
                "check": "String"
            },
        ],
        "inputsInline": true,
        "output": "String",
        "colour": 160,
        "tooltip": "Recebe um texto e substitui uma sequência de caracteres indicada pela outra fornecida",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=substituir"
    },
    {
        "type": "subtrair",
        "message0": "subtrair %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna a subtração dos dois números indicados Também pode ser utilizado o símbolo - diretamente",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=subtrair"
    },
    {
        "type": "tamanholistanumero",
        "message0": "tamanholistanumero %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna a quantidade de elementos da lista indicada",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=tamanholistanumero"
    },
    {
        "type": "tamanholistatexto",
        "message0": "tamanholistatexto %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna a quantidade de elementos da lista indicada",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=tamanholistatexto"
    },
    {
        "type": "tangente",
        "message0": "tangente %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna a tangente do ângulo informado em graus",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=tangente"
    },
    {
        "type": "textoposicao",
        "message0": "textoposicao %1 , %2",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "String"
            },
        ],
        "inputsInline": true,
        "output": "String",
        "colour": 160,
        "tooltip": "Retorna um texto com o caractere que se encontra na posição indicada do texto fornecido",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=textoposicao"
    },
    {
        "type": "textotamanho",
        "message0": "textotamanho %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "String"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna a quantidade de caracteres do texto indicado",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=textotamanho"
    },
    {
        "type": "tocar",
        "message0": "tocar %1 , %2 , %3",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "String"
            },
            {
                "type": "input_value",
                "name": "3",
                "check": "Number"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Toca uma nota musical pelo tempo indicado no auto-falante especificado As notas musicais podem ser: 'DO', 'RE', 'MI', 'FA', 'SOL', 'LA' e 'SI'",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=tocar"
    },
    {
        "type": "tocarsom",
        "message0": "tocarsom %1 , %2 , %3 , %4",
        "args0": [{
                "type": "input_value",
                "name": "1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "2",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "3",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "4",
                "check": "String"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Toca no autocolante informado, a frequência especificada por um determinado tempo utilizando a onda informada Os valores de frequência variam de 0 a 300 e as ondas podem ser 'QUADRADA', 'DENTE-DE-SERRA', 'RUIDO' ou 'MUDO'",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=tocarsom"
    },
    {
        "type": "truncar",
        "message0": "truncar %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "Number"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Retorna a parte inteira do número indicado",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=truncar"
    },
    {
        "type": "virarnumero",
        "message0": "virarnumero %1",
        "args0": [{
            "type": "input_value",
            "name": "1",
            "check": "String"
        }, ],
        "inputsInline": true,
        "output": "Number",
        "colour": 230,
        "tooltip": "Converte um texto para número",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=virarnumero"
    },
    {
        "type": "zerartemporizador",
        "message0": "zerartemporizador ",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Zera o tempo decorrido no temporizador e inicia uma nova contagem",
        "helpUrl": "https://weduc.natalnet.br/sbotics/funcoes/reduc?share=zerartemporizador"
    },
]);
Blockly.JavaScript['escrever'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'escrever(' + value_1 + ',' + value_2 + ')\n';
    return code;
};
Blockly.JavaScript['escrevernumero'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'escrevernumero(' + value_1 + ',' + value_2 + ')\n';
    return code;
};
Blockly.JavaScript['limparregistro'] = function(block) {
    var code = 'limparregistro()\n';
    return code;
};
Blockly.JavaScript['pararregistro'] = function(block) {
    var code = 'pararregistro()\n';
    return code;
};
Blockly.JavaScript['registrar'] = function(block) {
    var code = 'registrar()\n';
    return code;
};
Blockly.JavaScript['registrarnumero'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'registrarnumero(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['registrartexto'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'registrartexto(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['virartexto'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'virartexto(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['anguloatuador'] = function(block) {
    var code = 'anguloatuador()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['angulogiroatuador'] = function(block) {
    var code = 'angulogiroatuador()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['cor'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'cor(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['corazul'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'corazul(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['corverde'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'corverde(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['corvermelha'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'corvermelha(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['direcao'] = function(block) {
    var code = 'direcao()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['inclinacao'] = function(block) {
    var code = 'inclinacao()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['luz'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'luz(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['temalgo'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_3 = Blockly.JavaScript.valueToCode(block, '3', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'temalgo(' + value_1 + ',' + value_2 + ',' + value_3 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['tempo'] = function(block) {
    var code = 'tempo()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['temporizador'] = function(block) {
    var code = 'temporizador()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['toque'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'toque(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['ultra'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'ultra(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['abrir'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'abrir(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['baixar'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'baixar(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['direita'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'direita(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['esquerda'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'esquerda(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['fechar'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'fechar(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['frente'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'frente(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['frenterotacao'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'frenterotacao(' + value_1 + ',' + value_2 + ')\n';
    return code;
};
Blockly.JavaScript['girarbaixo'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'girarbaixo(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['girarcima'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'girarcima(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['levantar'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'levantar(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['motordireita'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'motordireita(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['motoresquerda'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'motoresquerda(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['mover'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mover(' + value_1 + ',' + value_2 + ')\n';
    return code;
};
Blockly.JavaScript['parar'] = function(block) {
    var code = 'parar()\n';
    return code;
};
Blockly.JavaScript['rotacionar'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'rotacionar(' + value_1 + ',' + value_2 + ')\n';
    return code;
};
Blockly.JavaScript['tras'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'tras(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['trasrotacao'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'trasrotacao(' + value_1 + ',' + value_2 + ')\n';
    return code;
};
Blockly.JavaScript['velocidadeatuador'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'velocidadeatuador(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['acenderled'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'acenderled(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['acenderledrgb'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_3 = Blockly.JavaScript.valueToCode(block, '3', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'acenderledrgb(' + value_1 + ',' + value_2 + ',' + value_3 + ')\n';
    return code;
};
Blockly.JavaScript['adicionarlistanumero'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'adicionarlistanumero(' + value_1 + ',' + value_2 + ')\n';
    return code;
};
Blockly.JavaScript['adicionarlistatexto'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'adicionarlistatexto(' + value_1 + ',' + value_2 + ')\n';
    return code;
};
Blockly.JavaScript['ajustarcor'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'ajustarcor(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['ajustaronda'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'ajustaronda(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['ajustarprecisao'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'ajustarprecisao(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['aleatorio'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'aleatorio(' + value_1 + ',' + value_2 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['apagarled'] = function(block) {
    var code = 'apagarled()\n';
    return code;
};
Blockly.JavaScript['arcocosseno'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'arcocosseno(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['arcoseno'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'arcoseno(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['arcotangente'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'arcotangente(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['arredondar'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'arredondar(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['comentar'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'comentar(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['concatenar'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'concatenar(' + value_1 + ',' + value_2 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['concatenar3'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_3 = Blockly.JavaScript.valueToCode(block, '3', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'concatenar3(' + value_1 + ',' + value_2 + ',' + value_3 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['concatenar4'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_3 = Blockly.JavaScript.valueToCode(block, '3', Blockly.JavaScript.ORDER_ATOMIC);
    var value_4 = Blockly.JavaScript.valueToCode(block, '4', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'concatenar4(' + value_1 + ',' + value_2 + ',' + value_3 + ',' + value_4 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['concatenar5'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_3 = Blockly.JavaScript.valueToCode(block, '3', Blockly.JavaScript.ORDER_ATOMIC);
    var value_4 = Blockly.JavaScript.valueToCode(block, '4', Blockly.JavaScript.ORDER_ATOMIC);
    var value_5 = Blockly.JavaScript.valueToCode(block, '5', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'concatenar5(' + value_1 + ',' + value_2 + ',' + value_3 + ',' + value_4 + ',' + value_5 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['cosseno'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'cosseno(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['dividir'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'dividir(' + value_1 + ',' + value_2 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['esperar'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'esperar(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['imprimirlistanumero'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'imprimirlistanumero(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['imprimirlistatexto'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'imprimirlistatexto(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['interromper'] = function(block) {
    var code = 'interromper();';
    return code;
};
Blockly.JavaScript['limparconsole'] = function(block) {
    var code = 'limparconsole();';
    return code;
};
Blockly.JavaScript['limparlinha'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'limparlinha(' + value_1 + ')\n';
    return code;
};
Blockly.JavaScript['listanumero'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'listanumero(' + value_1 + ',' + value_2 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['listatexto'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'listatexto(' + value_1 + ',' + value_2 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['mapeamento'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_3 = Blockly.JavaScript.valueToCode(block, '3', Blockly.JavaScript.ORDER_ATOMIC);
    var value_4 = Blockly.JavaScript.valueToCode(block, '4', Blockly.JavaScript.ORDER_ATOMIC);
    var value_5 = Blockly.JavaScript.valueToCode(block, '5', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mapeamento(' + value_1 + ',' + value_2 + ',' + value_3 + ',' + value_4 + ',' + value_5 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['modulo'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'modulo(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['multiplicar'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'multiplicar(' + value_1 + ',' + value_2 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['negativo'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'negativo(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['pi'] = function(block) {
    var code = 'pi()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['raizquadrada'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'raizquadrada(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['removerlistanumero'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'removerlistanumero(' + value_1 + ',' + value_2 + ')\n';
    return code;
};
Blockly.JavaScript['removerlistatexto'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'removerlistatexto(' + value_1 + ',' + value_2 + ')\n';
    return code;
};
Blockly.JavaScript['resto'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'resto(' + value_1 + ',' + value_2 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['seno'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'seno(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['somar'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'somar(' + value_1 + ',' + value_2 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['substituir'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_3 = Blockly.JavaScript.valueToCode(block, '3', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'substituir(' + value_1 + ',' + value_2 + ',' + value_3 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['subtrair'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'subtrair(' + value_1 + ',' + value_2 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['tamanholistanumero'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'tamanholistanumero(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['tamanholistatexto'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'tamanholistatexto(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['tangente'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'tangente(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['textoposicao'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'textoposicao(' + value_1 + ',' + value_2 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['textotamanho'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'textotamanho(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['tocar'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_3 = Blockly.JavaScript.valueToCode(block, '3', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'tocar(' + value_1 + ',' + value_2 + ',' + value_3 + ')\n';
    return code;
};
Blockly.JavaScript['tocarsom'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_3 = Blockly.JavaScript.valueToCode(block, '3', Blockly.JavaScript.ORDER_ATOMIC);
    var value_4 = Blockly.JavaScript.valueToCode(block, '4', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'tocarsom(' + value_1 + ',' + value_2 + ',' + value_3 + ',' + value_4 + ')\n';
    return code;
};
Blockly.JavaScript['truncar'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'truncar(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['virarnumero'] = function(block) {
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'virarnumero(' + value_1 + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['zerartemporizador'] = function(block) {
    var code = 'zerartemporizador()\n';
    return code;
};