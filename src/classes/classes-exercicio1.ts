abstract class Ingresso {
    protected valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    imprimeValor() {
        console.log(`O valor do ingresso é R$${this.valor}`);

    }
}

export class Normal extends Ingresso {
    constructor(valor: number) {
        super(valor);
    }
}


export class Vip extends Ingresso {
    private adicional: number;

    constructor(valor: number, adicional: number) {
        super(valor);

        this.adicional = adicional;
    }

    imprimeValor() {
        console.log(
            `O valor do ingresso VIP é R$${this.valor + this.adicional}`
        );
    }
}

export class Camarote extends Ingresso {
    private adicional: number;

    constructor(valor: number, adicional: number) {
        super(valor);

        this.adicional = adicional;
    }

    imprimeValor() {
        console.log(
            `O valor do ingresso VIP é R$${this.valor + this.adicional}`
        );
    }
}