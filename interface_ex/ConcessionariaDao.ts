import { DaoInterface } from "./DaoInterface";
import { Concessionaria } from './concessionaria'

export class ConcessionariaDao implements DaoInterface {
    nomeTabela: string = 'tb_concessionaria';

    inserir(object: Concessionaria): boolean {Concessionaria
        console.log('Lógica de Insert')
        return
    }
    atualizar(object: Concessionaria): boolean {
        console.log('Lógica de Update')
        return
    }
    remover(id: number): Concessionaria {  //pode ser número, string
        console.log('Lógica de Remove')
        return new Concessionaria('',[])
    } 
    selecionar(id: number): Concessionaria {
        console.log('Lógica de Selected')
        return new Concessionaria('', []) 
    }

    selecionarTodos(): [any] {
        console.log('Lógica de getAll')
        return [ new Concessionaria('',[])]    //retorna um array
    }

}
