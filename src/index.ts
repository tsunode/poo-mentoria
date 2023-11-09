
// class Carro {
//     private modelo: string;
//     private cor: string;
//     private ano: number;

//     constructor(modelo: string, cor: string, ano: number) {
//         this.modelo = modelo;
//         this.cor = cor;
//         this.ano = ano;
//     }
// }


interface Marca {
    [modelo: string]: string
}

// Criar um contrato
// protected !== private
// private mantem o dado privado de todas as formas
// protected mantem privado para instancia e publico para herança
abstract class Veiculo {
    constructor(
        protected modelo: string, 
        protected cor: string, 
        protected ano: number
    ) {
    }

    public abstract obterCor(): void;
}



class Carro extends Veiculo {
    private marcas: Marca = {
        'hb20': 'hyundai',
        'civic': 'honda',
        'x6': 'bmw',
    }

    constructor(
        modelo: string, 
        cor: string, 
        ano: number
    ) {
        // como o new, mas ele chama o construtor da Herança, nessa caso o do Veiculo
        super(modelo, cor, ano)
    }

    public obterCor() {
        return this.cor;
    }

    public obterMarca() {
        // {
        //     'hb20': 'hyundai',
        //     'civic': 'honda',
        //     'x6': 'bmw',
        // }

        // 'civic'
        // this.marcas.civic

        return this.marcas[this.modelo]
    }
}

class Caminhao extends Carro {
    constructor(
        modelo: string, 
        cor: string, 
        ano: number,
        protected tamanhoDaCacamba: number
    ) {
        super(modelo, cor, ano)
    }

    public obterTamanhoDaCacamba() {
        return this.tamanhoDaCacamba
    }

    public override obterMarca() {
        return 'caminhão'
    }
}

// any - lib, frameworks
const civic = new Carro('civic', 'prata', 2020);
const hyundai = new Carro('hb20', 'prata', 2020);
const caminhao = new Caminhao('FH 540', 'azul', 2021, 30)

// honda.cor = 'vermelho';
console.log(caminhao.obterMarca())
console.log(civic.obterMarca())

// export interface User {
//     userId: number
//     id: number
//     title: string
//     completed: boolean
//     teste: number
//     company: Company
// }
  
// export interface Company {
//     id: number
// }



// const user: User = api.get();

// user.company

class HTTP {
    public makeRequest() {

    }
}