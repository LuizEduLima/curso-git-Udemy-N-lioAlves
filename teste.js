
class Pesso {

    nome;
    email;
}
const p = {
    nome: "luiz",
    email: "luizedu_lima@hotmail.com"
}

var pessoa = new Pesso();

//pessoa = Object.assign(pessoa, p)

pessoa = { ...p };

console.log(pessoa);;



