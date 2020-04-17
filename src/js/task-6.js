"use strict" /* использование последней  версии  js  */;

const masive = [];
let total = 0;
do {
  let input = prompt("Введите число.");

  const number = Number(input);
  if (Number.isNaN(number)) {
    alert("Было введено не число, попробуйте еще раз.");
  }

  if (!Number.isNaN(number)) {
    masive.push(number);
  }
  if (input === null) {
    for (let x of masive) {
      total += x;
    }

    console.log(`Общая сумма чисел равна [${total}]`);
    break;
  }
} while (true);
