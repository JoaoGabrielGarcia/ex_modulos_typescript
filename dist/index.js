"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const somador_1 = require("./operacoes/somador");
const subtrador_1 = require("./operacoes/subtrador");
const multiplicador_1 = require("./operacoes/multiplicador");
const divisor_1 = require("./operacoes/divisor");
console.log('Selecione a operacao desejada:');
console.log('1 - Soma (+)');
console.log('2 - Subtracao (-)');
console.log('3 - Multiplicacao (*)');
console.log('4 - Divisao (/)');
const operacao = readline_sync_1.default.question('Digite o numero da operacao (1-4): ');
const numero1 = Number(readline_sync_1.default.question('Digite o primeiro numero: '));
const numero2 = Number(readline_sync_1.default.question('Digite o segundo numero: '));
let resultado;
let nomeOperacao = '';
try {
    switch (operacao) {
        case '1':
            resultado = new somador_1.Somador().calcular(numero1, numero2);
            nomeOperacao = 'Soma';
            break;
        case '2':
            resultado = new subtrador_1.Subtrador().calcular(numero1, numero2);
            nomeOperacao = 'Subtracao';
            break;
        case '3':
            resultado = new multiplicador_1.Multiplicador().calcular(numero1, numero2);
            nomeOperacao = 'Multiplicacao';
            break;
        case '4':
            resultado = new divisor_1.Divisor().calcular(numero1, numero2);
            nomeOperacao = 'Divisao';
            break;
        default:
            console.log('Operacao invalida.');
    }
    if (resultado !== undefined) {
        console.log(`${nomeOperacao} de ${numero1} e ${numero2} = ${resultado}`);
    }
}
catch (error) {
    console.log('Erro:', error.message);
}
