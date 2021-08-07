import { Carro } from "./carro";

export class Concessionaria {
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