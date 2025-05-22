export class Divisor {
    public calcular = (numero1: number, numero2: number): number => {
        if (numero2 === 0) throw new Error('Divisão por zero não é permitida.');
        return numero1 / numero2;
    }
} 