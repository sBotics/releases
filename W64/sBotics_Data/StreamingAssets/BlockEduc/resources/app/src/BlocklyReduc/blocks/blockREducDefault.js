'use strict';

goog.require('Blockly.JavaScript');


Blockly.defineBlocksWithJsonArray([{
    "type": "default_text",
    "message0": "\" %1 \"",
    "args0": [{
        "type": "field_input",
        "name": "1",
        "text": ""
    }],
    "output": "String",
    "colour": 160,
    "tooltip": "",
    "helpUrl": ""
}, {
    "type": "default_num",
    "message0": "%1",
    "args0": [{
        "type": "field_number",
        "name": "1",
        "value": 0
    }],
    "output": "Number",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
}, {
    "type": "start",
    "message0": "inicio %1 %2 fim",
    "args0": [{
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "A"
        }
    ],
    "colour": 20,
    "tooltip": "Todo programa deve começar com inicio e terminar com fim",
    "helpUrl": "https://weduc.natalnet.br/sbotics/tutorial/reduc"
}, {
    "type": "farei_enquanto",
    "message0": "farei %1 %2 enquanto %3",
    "args0": [{
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "farei0"
        },
        {
            "type": "input_value",
            "name": "enquanto0",
            "align": "RIGHT",
            "check": "Boolean"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "A estrutura farei da linguagem R-Educ representa uma estrutura de repetição condicional, A única diferença entre esta estrutura e a enquanto farei, primeiro a sequência de comandos é realizada e, em seguida, a condição é avaliada, caso a condição seja satisfeita os comandos serão executados novamente.",
    "helpUrl": "https://weduc.natalnet.br/sbotics/tutorial/reduc"
}, {
    "type": "enquanto_farei",
    "message0": "enquanto %1 farei %2",
    "args0": [{
            "type": "input_value",
            "name": "enquanto0",
            "check": "Boolean"
        },
        {
            "type": "input_statement",
            "name": "farei0"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "A estrutura enquanto da linguagem R-Educ representa uma estrutura de repetição condicional. A ideia básica é fazer com que a execução de uma série de comandos seja repetida enquanto uma determinada condição for satisfeita. Quando a condição não for mais satisfeita a repetição será finalizada.",
    "helpUrl": "https://weduc.natalnet.br/sbotics/tutorial/reduc"
}, {
    "type": "repita",
    "message0": "repita %1 vezes  %2 %3",
    "args0": [{
            "type": "input_value",
            "name": "repita",
            "check": "Number",
            "align": "RIGHT"
        },
        {
            "type": "input_dummy",
            "align": "RIGHT"
        },
        {
            "type": "input_statement",
            "name": "farei"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "A estrutura repita da linguagem R-Educ representa uma estrutura de repetição contada. A utilização desta estrutura faz com que um conjunto de comandos seja executado por uma quantidade determinada de vezes. Abaixo apresentamos como deve ser utilizada esta estrutura para que um conjunto de comando seja executado 4 vezes.",
    "helpUrl": "https://weduc.natalnet.br/sbotics/tutorial/reduc"
}, {
    "type": "para",
    "message0": "para %1 de %2 ate %3 passo %4 farei %5 %6",
    "args0": [{
            "type": "input_value",
            "name": "variavel",
            "check": "Number",
            "align": "RIGHT"
        },
        {
            "type": "input_value",
            "name": "v1",
            "check": "Number",
            "align": "RIGHT"
        },
        {
            "type": "input_value",
            "name": "ate",
            "check": "Number",
            "align": "RIGHT"
        },
        {
            "type": "input_value",
            "name": "v2",
            "check": "Number",
            "align": "RIGHT"
        },
        {
            "type": "input_dummy",
            "align": "RIGHT"
        },
        {
            "type": "input_statement",
            "name": "farei"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "A estrutura para da linguagem R-Educ representa uma estrutura de repetição contada. A utilização desta estrutura faz com que um conjunto de comandos seja executado um determinado número de vezes. A quantidade de vezes que a sequência de comandos é realizada vai depender do valor da variável de controle, esta irá assumir valores desde um limite inferior até um limite superior, percorrendo-os de acordo com um determinado passo informado na estrutura.",
    "helpUrl": "https://weduc.natalnet.br/sbotics/tutorial/reduc"
}, {
    "type": "teste_constructor",
    "message0": "teste %1 %2",
    "args0": [{
            "type": "input_value",
            "name": "t1",
            "check": "String"
        },
        {
            "type": "input_statement",
            "name": "t2",
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "A estrutura teste da linguagem R-Educ representa um comando de seleção. A utilização desta estrutura faz com que o valor de uma variável do tipo texto seja avaliada e dependendo de seu valor uma determinada sequência de comandos seja realizada. ",
    "helpUrl": "https://weduc.natalnet.br/sbotics/tutorial/reduc"
}, {
    "type": "teste_caso",
    "message0": "caso %1 %2",
    "args0": [{
            "type": "input_value",
            "name": "c1",
            "check": "String"
        },
        {
            "type": "input_statement",
            "name": "t2"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "A estrutura teste da linguagem R-Educ representa um comando de seleção. A utilização desta estrutura faz com que o valor de uma variável do tipo texto seja avaliada e dependendo de seu valor uma determinada sequência de comandos seja realizada. ",
    "helpUrl": "https://weduc.natalnet.br/sbotics/tutorial/reduc"
}, {
    "type": "teste_outros",
    "message0": "outros %1 %2",
    "args0": [{
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "t2"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "A estrutura teste da linguagem R-Educ representa um comando de seleção. A utilização desta estrutura faz com que o valor de uma variável do tipo texto seja avaliada e dependendo de seu valor uma determinada sequência de comandos seja realizada. ",
    "helpUrl": "https://weduc.natalnet.br/sbotics/tutorial/reduc"
}]);
// =========== Basico ===========
Blockly.JavaScript['default_text'] = function(block) {
    var text_1 = block.getFieldValue('1');
    var code = '"' + text_1 + '"';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['default_num'] = function(block) {
    var text_1 = block.getFieldValue('1');
    var code = '' + text_1 + '';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['start'] = function(block) {
    var statements_a = Blockly.JavaScript.statementToCode(block, 'A');
    var code = 'inicio\n' + statements_a + 'fim';
    return code;
};
// =========== Farei Enquanto ===========
Blockly.JavaScript['farei_enquanto'] = function(block) {
    var n = 0;
    var code = '',
        branchCode, conditionCode;
    if (Blockly.JavaScript.STATEMENT_PREFIX) {
        // Automatic prefix insertion is switched off for this block.  Add manually.
        code += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_PREFIX,
            block);
    }
    do {
        conditionCode = Blockly.JavaScript.valueToCode(block, 'enquanto' + n,
            Blockly.JavaScript.ORDER_NONE) || 'falso';
        branchCode = Blockly.JavaScript.statementToCode(block, 'farei' + n);
        if (Blockly.JavaScript.STATEMENT_SUFFIX) {
            branchCode = Blockly.JavaScript.prefixLines(
                Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX,
                    block), Blockly.JavaScript.INDENT) + branchCode;
        }
        code += (n > 0 ? ' senao ' : '') +
            'farei {\n' + branchCode + '\n} enquanto(' + conditionCode + ')\n';
        ++n;
    } while (block.getInput('enquanto' + n));


    return code + '\n';
};
// =========== Enquanto Farei ===========
Blockly.JavaScript['enquanto_farei'] = function(block) {
    var n = 0;
    var code = '',
        branchCode, conditionCode;
    if (Blockly.JavaScript.STATEMENT_PREFIX) {
        // Automatic prefix insertion is switched off for this block.  Add manually.
        code += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_PREFIX,
            block);
    }
    do {
        conditionCode = Blockly.JavaScript.valueToCode(block, 'enquanto' + n,
            Blockly.JavaScript.ORDER_NONE) || 'falso';
        branchCode = Blockly.JavaScript.statementToCode(block, 'farei' + n);
        if (Blockly.JavaScript.STATEMENT_SUFFIX) {
            branchCode = Blockly.JavaScript.prefixLines(
                Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX,
                    block), Blockly.JavaScript.INDENT) + branchCode;
        }
        code += (n > 0 ? ' senao ' : '') +
            'enquanto (' + conditionCode + ') farei{\n' + branchCode + '}\n';
        ++n;
    } while (block.getInput('enquanto' + n));


    return code + '\n';
};
// =========== Repita ===========
Blockly.JavaScript['repita'] = function(block) {
    var value_enquanto = Blockly.JavaScript.valueToCode(block, 'repita', Blockly.JavaScript.ORDER_ATOMIC) || '0'
    var statements_farei = Blockly.JavaScript.statementToCode(block, 'farei');

    var code = 'repita ' + value_enquanto + ' vezes{\n' + statements_farei + '}\n';
    return code;
};
// =========== Para ===========
Blockly.JavaScript['para'] = function(block) {
    var value_variavel = Blockly.JavaScript.valueToCode(block, 'variavel', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_v1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_ate = Blockly.JavaScript.valueToCode(block, 'ate', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_v2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var statements_farei = Blockly.JavaScript.statementToCode(block, 'farei');
    // TODO: Assemble JavaScript into code variable.
    var code = 'para ' + value_variavel + ' de ' + value_v1 + ' ate ' + value_ate + ' passso ' + value_v2 + ' farei{\r ' + statements_farei + '}\n';
    return code;
};
// =========== Teste Contrustor ===========
Blockly.JavaScript['teste_constructor'] = function(block) {
    var value_t1 = Blockly.JavaScript.valueToCode(block, 't1', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_t2 = Blockly.JavaScript.statementToCode(block, 't2');
    var code = 'teste (' + value_t1 + '){\n ' + statements_t2 + '}\n';
    return code;
};
// =========== Teste Caso ===========
Blockly.JavaScript['teste_caso'] = function(block) {
    var value_c1 = Blockly.JavaScript.valueToCode(block, 'c1', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_t2 = Blockly.JavaScript.statementToCode(block, 't2');
    // TODO: Assemble JavaScript into code variable.
    var code = 'caso ' + value_c1 + ':\n ' + statements_t2 + ' \n';
    return code;
};
// =========== Teste Outros ===========
Blockly.JavaScript['teste_outros'] = function(block) {
    var statements_t2 = Blockly.JavaScript.statementToCode(block, 't2');
    // TODO: Assemble JavaScript into code variable.
    var code = 'outros:\n ' + statements_t2 + '\n';
    return code;
};