import {View} from './View';

export class MensagemView extends View {
    
    constructor(elemento) {
       super(elemento); //Passar para o Pai - Super = Pai
    }
    
   template(model) {
       
       return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
   }
}