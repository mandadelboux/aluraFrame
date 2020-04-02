export class ProxyFactory{
    static create(objeto,props,acao){
        return new Proxy(objeto, {

            get (target,prop,receiver) {
                if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])){
                    //Se está exec um get e ele adiciona ou esvazia e é uma função 


                    return function(){
                        console.log(`Interceptando ${prop}`);
                        Reflect.apply(target[prop],target,arguments);    
                        return acao(target);

                    };
                };
                return Reflect.get(target, prop, receiver);
            },
            set(target,prop,value,receiver){
                
                if(props.includes(prop)){
                    target[props] = value;
                    acao(target);
                   
                
                }
                return Reflect.set(target,prop,value,receiver);
                
            }
        });
    }

    static _ehFuncao(func){
        return typeof(func) == typeof(Function); 

    }
}