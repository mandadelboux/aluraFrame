"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, DateHelper;

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("DateHelper", DateHelper = function () {
                function DateHelper() {
                    _classCallCheck(this, DateHelper);

                    throw new Error("DateHelper não pode ser instanciada!");
                }

                //let data = new Date(this._inputData.value.split("-")); Os dois convertem uma string em Date
                //let data = new Date(this._inputData.value.replace(/-/g,','));

                // => arrow function que retorna o valor e não precisa de bloco

                _createClass(DateHelper, null, [{
                    key: "dataParaTexto",
                    value: function dataParaTexto(data) {
                        return data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear(); //Template string ` `
                    }
                }, {
                    key: "textoParaData",
                    value: function textoParaData(texto) {
                        //Expressão regular - Caso texto não esteja no formato mostrar um erro
                        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error("Deve estar no padrão aaaa-mm-dd");

                        return new (Function.prototype.bind.apply(Date, [null].concat(_toConsumableArray(texto.split('-').map(function (item, indice) {
                            return item - indice % 2;
                        })))))();
                    }
                }]);

                return DateHelper;
            }());

            _export("DateHelper", DateHelper);
        }
    };
});
//# sourceMappingURL=DateHelper.js.map