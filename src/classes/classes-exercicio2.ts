class Imovel {
    endereco: string;
    preco: number;

    constructor(endereco: string, preco: number) {
        this.endereco = endereco;
        this.preco = preco;
    }
}

export class Novo extends Imovel {
    adicional: number

    constructor(adicional: number, endereco: string, preco: number) {
        super(endereco, preco);
        this.adicional = adicional;
    }

    impriveValor() {
        console.log(`O valor do imóvel novo é ${this.preco + (this.preco * (this.adicional / 100))} reais`);
    }
}

export class Velho extends Imovel {
    desconto: number

    constructor(desconto: number, endereco: string, preco: number) {
        super(endereco, preco);
        this.desconto = desconto;
    }

    impriveValor() {
        console.log(`O valor do imóvel velho é ${this.preco - (this.preco * (this.desconto / 100))} reais`);
    }
}