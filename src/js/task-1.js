'use strict' /* использование последней  версии  js  */;

const name = `"Генератор защитного поля"`;
const price = 1000;

let input = prompt(`'Выбран ${name}, цена за штуку ${price} кредитов'`);

input = Number(input);

alert(`'Выбран ${name}, цена за штуку ${input + price} кредитов'`);
