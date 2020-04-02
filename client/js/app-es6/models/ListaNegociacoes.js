export class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {

        //this._negociacoes = [].concat(this._negociacoes,negociacao); Gambiarra ñ usar
        this._negociacoes.push(negociacao);

        //Reflect.apply(this._armadilha,this._contexto, [this]); //Cirnaod um modo de mudar o this
    }

    get negociacoes() {

        return [].concat(this._negociacoes);//programação defensiva - Envia uma cópia do meu array original
    }
    esvazia(){
        this._negociacoes = [];

        //Reflect.apply(this._armadilha,this._contexto, [this]);
    }

    get volumeTotal() {
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
     }

}