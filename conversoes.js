// tipos de dados
//booleanos

//conversao implicita
const numero = 456;
const numeroString = Number("456");// colocando o number estou convertendo string p/ numero
//OBS caso tenha letrar no meio dos numeros a conversao da erro vai apresentar NaN
console.log(numero + numeroString)

let telefon = 12341234;
console.log("O telefone é " + String(telefon)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// Numeros

// Vamos calcular a área de um retângulo
let largur = "10";
let altur = "5";
console.log(Number(largur) * Number(altur)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN
