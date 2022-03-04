const texto1 = "Olá Mundo!";
const texto2 = "Olá Mundo!";
const senha = "superSenha456";
const stringDeNumeros = "12345";

const citacao = "Meu nome é ";
const MeuNome = "Guilherme !";

// concatenação
console.log(citacao + MeuNome)

//comparação em string

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false
//toLowerCase() que converte todos os caracteres da string informada (no caso, input) para letras minúsculas
// (se forem algarismos, nada é convertido)
// comparacao independente da letra maiuscula e miniscula 
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true
// length vai contar a quantidade de caracteres tem nessa string 
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres