class Carro1 {
    private modelo: string;
    private numeroDePortas: number;
    private velocidade: any;

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas
    }

    public acelerar() {
        this.velocidade = this.velocidade + 10
    }

    public parar() {
        this.velocidade = 0
    }

    public velocidadeAtual() {
        this.velocidade = this.velocidade
    }
}

class Concessionaria1 {
    private endereco: string;
    private listaDeCarros: Array<Carro1>;

    constructor(endereco: string, listadDeCarros: Carro1[]) {
        this.endereco = endereco
        this.listaDeCarros = this.listaDeCarros
    }

    public fornecerEndereço() {
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro1> { //dComo q ver a lista de carro ele é do tipo Array de Carro
        return this.listaDeCarros
    }
}

class Pessoa1 {
    private nome: string;
    private carroPreferido: string;
    private carro: any;

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public dizerNome() {
        return this.nome
    }

    public dizerCarroPreferido() {
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro1): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): void {
        return this.carro
    }
}

let carroX = new Carro1('Blue', 4);
let carroU = new Carro1('Yellow', 3);
let carroY = new Carro1('Brown', 4);

let listaDeCarro: Array<Carro1> = [carroX, carroU, carroY]; //criado o array

let concessionaria2 = new Concessionaria1('Reboco', listaDeCarro) //criando a concessionaria e pegando a lista de carro

let cliente2 = new Pessoa1('Bruno', 'Red') // criando o cliente 

concessionaria2.mostrarListaDeCarros().map((carro: Carro1) => { //pegar a lista, percorrer item por item
    if(carro['modelo'] == cliente2.dizerCarroPreferido()) {     // Se for igual, realiza a compra
        //comprar carro 
        cliente2.comprarCarro(carro)
    }
})

