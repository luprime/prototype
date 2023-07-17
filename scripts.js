// aula 1
/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__
*/

//aula 2
/*
    type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo
*/

// console.log(Number('9') + 5) -> resultado da 14
// console.log('9' + 5) -> resultado da 95, pois assim está concatenando 9 de string com 5 de number.


// aula 3 - Manipulando Strings e Números

//Transformar String em Número e Número em String
/*
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

console.log serve para mostrar no devtools as alterações feitas nas funçoes chamadas.
para as alterações acimas acontecerem, basta colocar Number(string) e String(number).
*/

// aula 4 - Manipulando String e Números
// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número.

/*
let word = "paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)
*/

// aula 5 - Manipulando String e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula.

/*
let number = 213124125.12312455
console.log(number.toFixed(2).replace(".", ",")) 
toFixed -> alem de transformar o objeto numero em uma string, ele permite que escolhemos quantas
casas decimais ele terá.
E não é possível transformar novamente em número já que as propriedades colocadas agora são de String.

*/

//aula 6 - Manipulando Strings e Números
// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também.

/*
let word = "programar é muito bacana"
console.log(word.toUpperCase().toLowerCase())
toUpperCase() - deixa todas as letras maiusculas.
toLowerCase() - letras minusculas.
*/

//aula 7 - Manipulando Strings e Arrays
// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array.
// Depois disso, tranforme o array em um texto e onde eram espaços, coloque _.
/*
let phrase = " Eu quero viver o Amor! "
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
*/

//aula 8 - Manipulando Strings
// Verificar se o texto contém a palavra Amor

/*
let phrase = "eu quero viver!"
console.log(phrase.includes("Amor"))
*/

//aula 9 - Manipulando Arrays
// Criar Array com construtor
/*
let myArray = new Array('a', 'b', 'C')
console.log(myArray)
*/

//aula 10 - Manipulando Arrays
// Contar elementos de um array

//console.log(['a', 'b', 'C'].length)

//aula 11 - Manipulando Strings
// Transformar uma cadeia de caracteres em elementos de um array
/*
let word = "manipulação"
console.log(Array.from(word))
*/

//aula 12 - Manipulando Arrays

//let techs = ["html", "css", "js"]

// adicionar um item no fim
//techs.push("nodejs")
// adicionar no começo
//techs.unshift("sql")
// remover do fim
//techs.pop()
// remover do começo
//techs.shift()
// pegar somente elementos do array
//console.log(techs.slice(1, 3))
// remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 2)
// encontrar a posição de um elemento no array
//let index = techs.indexOf('css')
//techs.splice(index, 1)

//console.log(techs)