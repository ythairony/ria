var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Carro = /** @class */ (function () {
    //Construtor
    function Carro(marca, modelo, cor, anoDeFabricacao) {
        this._marca = marca;
        this._modelo = modelo;
        this._cor = cor;
        this._anoDeFabricacao = anoDeFabricacao;
    }
    Object.defineProperty(Carro.prototype, "marca", {
        // Acessadores
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "cor", {
        get: function () {
            return this._cor;
        },
        set: function (cor) {
            this._cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "anoDeFabricacao", {
        get: function () {
            return this._anoDeFabricacao;
        },
        set: function (anoDeFabricacao) {
            if (anoDeFabricacao > 1885) {
                this._anoDeFabricacao = anoDeFabricacao;
            }
            else {
                throw new Error('Não existe carros criados antes de 1885');
            }
        },
        enumerable: false,
        configurable: true
    });
    //Métodos
    Carro.prototype.acelerar = function (velocidade) {
        return "".concat(this.veiculo(), " est\u00E1 acelerando a ").concat(velocidade, "km/h");
    };
    Carro.prototype.frear = function () {
        return "".concat(this.veiculo(), " freiou");
    };
    Carro.prototype.virar = function (direcao) {
        return "".concat(this.veiculo(), " est\u00E1 virando \u00E0 ").concat(direcao);
    };
    Carro.prototype.veiculo = function () {
        return this._modelo;
    };
    return Carro;
}());
var CarroEletrico = /** @class */ (function (_super) {
    __extends(CarroEletrico, _super);
    //Construtor
    function CarroEletrico(marca, modelo, cor, anoDeFabricacao, capacidadeDeCarga) {
        var _this = _super.call(this, marca, modelo, cor, anoDeFabricacao) || this;
        _this._capacidadeDeCarga = capacidadeDeCarga;
        return _this;
    }
    //Métodos 
    CarroEletrico.prototype.carregamento = function (carga) {
        return "".concat(this.veiculo(), " est\u00E1 carregando na ").concat(carga);
    };
    return CarroEletrico;
}(Carro));
var CarroCombustao = /** @class */ (function (_super) {
    __extends(CarroCombustao, _super);
    //Construtor
    function CarroCombustao(marca, modelo, cor, anoDeFabricacao, tanque) {
        var _this = _super.call(this, marca, modelo, cor, anoDeFabricacao) || this;
        _this._tanque = tanque;
        return _this;
    }
    //Métodos
    CarroCombustao.prototype.abastecimento = function () {
        return "O carro est\u00E1 abastecendo";
    };
    return CarroCombustao;
}(Carro));
var carro1 = new Carro('Honda', 'Civic', 'Cinza', 2021);
console.log(carro1.acelerar(100));
var carro2 = new CarroEletrico('Volvo', 'C40', 'branco', 2023, 200);
console.log(carro2.carregamento('wallbox'));
