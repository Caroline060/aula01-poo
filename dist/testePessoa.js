"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//IMPORTAR A CLASSE QUE QUERO USAR
const Pessoa_1 = require("./Pessoa");
//INSTANCIAR (criar objeto)
const pessoa1 = new Pessoa_1.Pessoa('Felisberto', 25);
const pessoa2 = new Pessoa_1.Pessoa('Roberta', 37);
console.log(pessoa1.aniversario());
console.log(pessoa2.correr());
//# sourceMappingURL=testePessoa.js.map