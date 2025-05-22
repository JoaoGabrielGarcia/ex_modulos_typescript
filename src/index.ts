import readlineSync from 'readline-sync';
import { Somador } from './operacoes/somador';
import { Subtrador } from './operacoes/subtrador';
import { Multiplicador } from './operacoes/multiplicador';
import { Divisor } from './operacoes/divisor';

console.log('Selecione a operacao desejada:');
console.log('1 - Soma (+)');
console.log('2 - Subtracao (-)');
console.log('3 - Multiplicacao (*)');
console.log('4 - Divisao (/)');

const operacao = readlineSync.question('Digite o numero da operacao (1-4): ');
const numero1 = Number(readlineSync.question('Digite o primeiro numero: '));
const numero2 = Number(readlineSync.question('Digite o segundo numero: '));

let resultado: number | undefined;
let nomeOperacao = '';

try {
    switch (operacao) {
        case '1':
            resultado = new Somador().calcular(numero1, numero2);
            nomeOperacao = 'Soma';
            break;
        case '2':
            resultado = new Subtrador().calcular(numero1, numero2);
            nomeOperacao = 'Subtracao';
            break;
        case '3':
            resultado = new Multiplicador().calcular(numero1, numero2);
            nomeOperacao = 'Multiplicacao';
            break;
        case '4':
            resultado = new Divisor().calcular(numero1, numero2);
            nomeOperacao = 'Divisao';
            break;
        default:
            console.log('Operacao invalida.');
    }
    if (resultado !== undefined) {
        console.log(`${nomeOperacao} de ${numero1} e ${numero2} = ${resultado}`);
    }
} catch (error: any) {
    console.log('Erro:', error.message);
} 