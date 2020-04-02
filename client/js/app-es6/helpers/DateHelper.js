export class DateHelper {

    constructor(){
        throw new Error("DateHelper não pode ser instanciada!");
        
    }

    //let data = new Date(this._inputData.value.split("-")); Os dois convertem uma string em Date
    //let data = new Date(this._inputData.value.replace(/-/g,','));

    // => arrow function que retorna o valor e não precisa de bloco

     static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;//Template string ` `

    }

    static textoParaData(texto) {
        //Expressão regular - Caso texto não esteja no formato mostrar um erro
        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error("Deve estar no padrão aaaa-mm-dd");
        
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

}
