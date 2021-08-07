import {Carro} from './carro'
import {Concessionaria} from './concessionaria'
import {Pessoa} from './pessoa'

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