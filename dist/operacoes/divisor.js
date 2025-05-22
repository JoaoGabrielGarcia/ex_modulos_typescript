"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisor = void 0;
class Divisor {
    constructor() {
        this.calcular = (numero1, numero2) => {
            if (numero2 === 0)
                throw new Error('Divisão por zero não é permitida.');
            return numero1 / numero2;
        };
    }
}
exports.Divisor = Divisor;
