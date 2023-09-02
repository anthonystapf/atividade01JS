/*1) Registro de idade no console: Sua tarefa é usar a função console.log()
para imprimir a sua idade no console do navegador. console.log() é
uma função do JavaScript usada para imprimir a saída em um
console, geralmente útil para depuração. Consulte a documentação
oficial para mais detalhes: */

console.log("Minha idade é " + 21);

/*2) Registrar o número de semanas de programação: Agora, registre o
número de semanas que você programou usando a mesma função
console.log(). */

console.log("Comecei a programar tem "+ 52 + " semanas");

/*4) Criando variáveis de diferentes tipos: JavaScript suporta vários tipos
de dados, incluindo números (number), texto (string), objetos
(object), etc. Sua tarefa é criar 5 variáveis de diferentes tipos de
dados. Consulte a documentação oficial para mais informações sobre

tipos de dados e variáveis:*/

let idade = 21;
const nome = "Anthony";
var altura = 1.89;
let n = null;
var treineiHoje = false;

/*5) Adicionando 3.5 à sua idade: O JavaScript permite operações
aritméticas como adição, subtração, etc. Adicione 3.5 à sua idade
usando um operador de adição (+) e registre o resultado com
console.log(). */

let idade5 = 21;

console.log(idade + 3.5);

/*6) Quantos anos se passaram desde o pouso na lua em 1969: O objeto
Date em JavaScript é usado para trabalhar com datas. Sua tarefa é
obter o ano atual, subtrair 1969 dele e registrar o resultado. Consulte
a documentação oficial para mais detalhes sobre o objeto Date:*/

let dataHoje = new Date();
let anoHoje= dataHoje.getFullYear();

let dataLua = new Date(1969);
let anoLua= dataLua.getFullYear();

console.log(anoHoje - anoLua);
/*7) Divisão de números: Sua tarefa é dividir 65 por 240 e registrar o
resultado usando console.log().*/

let x = 65;
let y = 240;

console.log(x / y);

/*8) Multiplicação de números: Multiplique 0.2708 por 100 e registre o
resultado. Esta é uma operação aritmética simples usando o
operador de multiplicação (*).*/

let a = 0.2708;
let b = 100;

console.log(a * b);

/*9) Concatenação de strings: Em JavaScript, você pode concatenar (unir)
strings usando o operador de concatenação (+). Sua tarefa é
concatenar as strings 'Hello' e 'World' e registrar o resultado.*/ 

const c = "Hello";
const d = "Word";

console.log(c + d);

/*10) Concatenação de strings com espaço: Agora, concatene
'Hello' e 'World', mas certifique-se de incluir um espaço entre as duas
palavras.*/

const e = "Hello";
const f = "Word";

console.log(e + " " + f);

/*11) Usando a propriedade length: Em JavaScript, a propriedade
.length é usada para obter o número de caracteres em uma string.
Sua tarefa é registrar o número de caracteres na string 'Teaching the
world how to code' usando a propriedade .length.*/ 

let frase = "Teaching theworld how to code";
console.log(frase.length);

/*12) Usando o método toUpperCase(): Este método é usado para
converter todas as letras de uma string para maiúsculas. Use o
método .toUpperCase() para converter a string 'Kaian Novais' em
maiúsculas e registre o resultado.*/ 

let nomeProf = "Kaian Novais";
console.log(nomeProf.toUpperCase(nomeProf));

/*13) Removendo espaços em branco: O método .trim() é usado
para remover espaços em branco do início e do final de uma string.
Sua tarefa é remover os espaços em branco no início e no final da
string “ Professor Kaian Novais ” usando o método .trim(). Consulte a
documentação oficial sobre o método .trim():*/

let Prof = " Professor Kaian Novais ";

console.log(Prof.trim());

/*14) Gerando um número aleatório: A função Math.random() é
usada para gerar um número aleatório entre 0 (inclusive) e 1
(exclusive). Sua tarefa é gerar um número aleatório, multiplicá-lo por
100 e registrar o resultado. */

const randomNumber = Math.random();
const randomBetween0And100 = randomNumber * 100;

console.log(randomBetween0And100);
 

/*15) Encontrando o próximo inteiro maior: O método Math.ceil() é
usado para arredondar um número para cima até o próximo número
inteiro maior. Sua tarefa é usar Math.ceil() com o número 43.8 e
registrar o resultado. Veja mais sobre Math.ceil():*/

const numeroDecimal = 43.8;
const numeroArredondadoParaCima = Math.ceil(numeroDecimal);

console.log(numeroArredondadoParaCima);

/*16) Verificando se um número é um número inteiro: O método
Number.isInteger() é usado para determinar se um valor é um
número inteiro. Sua tarefa é verificar se o número 2017 é um número
inteiro e registrar o resultado. Veja mais sobre Number.isInteger():*/

const numero = 2017;
const resultado3 = Number.isInteger(numero);
 
console.log(resultado3);





