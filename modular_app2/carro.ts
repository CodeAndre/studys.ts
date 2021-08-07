export class Carro {
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