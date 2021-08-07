import { Carro } from "./carro";

export class Pessoa {
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