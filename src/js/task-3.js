"use strict" /* использование последней  версии  js  */;

const findLongestWord = function (string) {
  const array = string.split(" "); //  делаем  масив  из  слов,  разбив  по  пробелу
  let rezult = array[0];
  for (let i = 0; i < array.length; i += 1) {
    //   перебераем  елементы  масива

    if (array[i].length > rezult.length) {
      rezult = array[i];
    }
  }
  return rezult;
};

console.log(findLongestWord(`The quick brown fox jumped over the lazy dog`));
console.log(findLongestWord(`Google do a roll`));
console.log(findLongestWord(`May the force be with you`));
