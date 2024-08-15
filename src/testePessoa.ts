//IMPORTAR A CLASSE QUE QUERO USAR
import {Pessoa} from './Pessoa'; 

//INSTANCIAR (criar objeto)
const pessoa1: Pessoa = new Pessoa ('Felisberto', 25);
const pessoa2: Pessoa = new Pessoa ('Roberta', 37);

console.log(pessoa1.aniversario());
console.log(pessoa2.correr());