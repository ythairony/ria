class Carro {
    // Atributos
    _marca: string;
    _modelo: string;
    _cor: string;
    _anoDeFabricacao: number;
    
    //Construtor
    constructor(marca:string, modelo:string, cor:string, anoDeFabricacao:number) {
        this._marca = marca;
        this._modelo = modelo;
        this._cor = cor;
        this._anoDeFabricacao = anoDeFabricacao;
    }

    // Acessadores
    get marca() {
        return this._marca;
    }

    get modelo() {
        return this._modelo;
    }

    get cor() {
        return this._cor;
    }

    get anoDeFabricacao() {
        return this._anoDeFabricacao;
    }

    set marca(marca) {
        this._marca = marca;
    }

    set modelo(modelo) {
        this._modelo = modelo;
    }

    set cor(cor) {
        this._cor = cor;
    }

    set anoDeFabricacao(anoDeFabricacao) {
        if (anoDeFabricacao > 1885) {
            this._anoDeFabricacao = anoDeFabricacao;
        } else { 
            throw new Error('Não existe carros criados antes de 1885');
        }
    }

    //Métodos
    acelerar(velocidade:number):string {
        return `${this.veiculo()} está acelerando a ${velocidade}km/h`
    }

    frear():string {
        return `${this.veiculo} freiou`
    }

    virar(direcao: 'direita' | 'esquerda'):string {
        return `${this.veiculo} está virando à ${direcao}`
    }

    veiculo():string {
        return this._modelo;
    }
}


class CarroEletrico extends Carro{
    //Atributos
    _capacidadeDeCarga:number;

    //Construtor
    constructor(marca:string, modelo:string, cor:string, anoDeFabricacao:number, capacidadeDeCarga:number) {
        super(marca, modelo, cor, anoDeFabricacao);
        this._capacidadeDeCarga = capacidadeDeCarga;
    }

    //Métodos 
    carregamento(carga: 'tomada' | 'wallbox'):string {
        return `${this.veiculo} está carregando na ${carga}`
    }
}


class CarroCombustao extends Carro {
    //Atributos
    _tanque:number;

    //Construtor
    constructor(marca:string, modelo:string, cor:string, anoDeFabricacao:number, tanque:number) {
        super(marca, modelo, cor, anoDeFabricacao);
        this._tanque = tanque;
    }

    //Métodos
    abastecimento():string {
        return `O carro está abastecendo`
    }
}
