
/*1-A previsão do tempo para hoje é de 293 Kelvin. Para começar, crie uma variável
chamada "kelvin" e atribua a ela o valor 293. O valor armazenado na variável
"kelvin" permanecerá constante. Escolha o tipo de variável que é mais adequado
para manter esse valor constante.*/

const kelvin = 293;

/*2-Escreva um comentário acima que explique a linha de código que você acabou
de escrever.*/

/*Esta variável "kelvin" armazena a temperatura em Kelvin para que seja visto a previsão do tempo.*/

/*3-Celsius é similar a Kelvin — a única diferença é que Celsius é 273 graus menor
que Kelvin. Vamos converter Kelvin para Celsius subtraindo 273 da variável
"kelvin". Armazene o resultado em outra variável, chamada "celsius".*/

const celsius = kelvin - 273;

/*4-Escreva um comentário acima que explique a linha de código que você acabou
de escrever.*/

/*A variável "celsius" armazena a temperatura em Celsius, calculada pela subtração de 273 em Kelvin.*/


/*5-Use a seguinte fórmula para calcular Fahrenheit, e então armazene o resultado
em uma variável chamada "fahrenheit". A fórmula é: Fahrenheit = Celsius * (9/5)
+ 32. No próximo passo, iremos arredondar o número salvo na variável
"fahrenheit". Escolha o tipo de variável que permite que você altere seu valor.*/

let fahrenheit = celsius * (9/5) + 32;

/*6-Escreva um comentário acima que explique a linha de código que você acabou
de escrever.*/

/*A variável "fahrenheit" armazena a temperatura em Fahrenheit usando a fórmula do enunciado.*/

/*7-Quando você converte de Celsius para Fahrenheit, geralmente obtém um
número decimal. Use o método .floor() do objeto Math para arredondar para
baixo a temperatura em Fahrenheit. Salve o resultado na variável "fahrenheit".*/

fahrenheit = Math.floor(fahrenheit);

/*8-Escreva um comentário acima que explique a linha de código que você acabou
de escrever.*/

/*Ao usar .floor() do objeto Math é arredondado a temperatura em Fahrenheit para baixo.*/

/*9-Use console.log e interpolação de string para registrar no console a
temperatura em Fahrenheit da seguinte forma: "A temperatura é TEMPERATURA
graus Fahrenheit". Use a interpolação de string para substituir "TEMPERATURA"
pelo valor armazenado na variável "fahrenheit".*/

console.log("A temperatura é " + fahrenheit + " graus Fahrenheit");


/*11-Ao usar variáveis, seu programa deve funcionar para qualquer temperatura
em Kelvin — basta alterar o valor de "kelvin" e executar o programa novamente.
Qual seria a temperatura correspondente a 0 Kelvin em Fahrenheit?*/

/*A temperatura correspondente a 0 Kelvin em Fahrenheit seria -459,67 graus Fahrenheit.*/


/*12-Ótimo trabalho! Agora Kelvin pode publicar suas previsões tanto em Celsius
quanto em Fahrenheit. Se você quiser praticar um pouco mais, tente fazer o
seguinte: Converta Celsius para a escala Newton usando a equação abaixo:
Newton = Celsius * (33/100). Arredonde a temperatura em Newton para baixo
usando o método .floor(). Use console.log e interpolação de string para registrar
no console a temperatura em Newton.*/

const newton = Math.floor(celsius * (33/100));

console.log("A temperatura é " + newton + " graus Newton");
