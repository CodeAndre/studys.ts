export interface DaoInterface {
    nomeTabela: string;

    inserir(object: any): boolean;
    atualizar(object: any): boolean;
    remover(id: number): any; //pode ser número, string
    selecionar(id: number): any;
    selecionarTodos(): [any]; // um array 
}