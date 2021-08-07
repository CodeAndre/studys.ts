class Carro {
    private modelo: string; //dados que o cliente irá passar 
    private numeroDePortas: number; //dados que o cliente irá passar 
    private velocidade:number = 0 ;

    constructor(modelo: string, numeroDePortas: number) { //chamar na ciração do objeto o modelo e o numero de portas
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }
}

class Concessionaria {
    private endereco: string;//dados que o cliente irá passar 
    private listaDeCarros: Array<Carro>;

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco       //chamado na criação do objeto
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco 
    }

    public mostarListaDeCarros(): Array<Carro> { //do tipo Array de Carro que retorna a função listaDeCarro
        return this.listaDeCarros
    }
}

class Pessoa {
    private nome: string; //dados que o cliente irá passar 
    private carroPreferido: string; //dados que o cliente irá passar 
    private carro: Carro; //não sei o que vai entrar aqui

    constructor(nome: string, carroPreferido: string) {
        this.carroPreferido = carroPreferido;
        this.nome = nome;
    }

    public dizerNome(): string {
        return this.nome 
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro): void { //comprarCarro recebe carro
        this.carro = carro
    }

    public dizerCarroQueTem(): Carro {
        return this.carro
    }
}

// let pe = new Pessoa('José', 'Hylux')
// console.log(pe.dizerCarooPreferido)

/* ----- REGRA DENEGOCIO ------- */


// 1. Criar Carros 
let carroA = new Carro('Celta Pressão', 2)
let carroB = new Carro('Duster', 4)
let carroC = new Carro('Roblo', 5)
let carroD = new Carro('Veloster', 3)

// 2. Receber os Carros numa listaDeCarros do tipo Array
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC, carroD] 

// 3. Concessionária --> pegando a listaDeCarros para os clientes
let concessionaria = new Concessionaria('Av Yasmin', listaDeCarros)

// 4. Pessoa com seu (Nome, carroPrefereido)
let cliente1 = new Pessoa('André', 'Celta Pressão')
// 4.1 Pegar a listaDeCarros e mostrar ao cliente , se o carrorPrefirido exisitir
//     Realizar a compra
concessionaria.mostarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente1.dizerCarroPreferido()) {
        //comprar carro
        cliente1.comprarCarro(carro) //passar como parametro o carro que queremos comprar
    }
})
// 4.2 Dizer o carro que tem