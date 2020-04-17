"use strict" /* использование последней  версии  js  */;

const logItems = function (aray) {
  let i = 0;
  for (const element of aray) {
    i += 1;
    console.log(`${i} - ${element}`);
  }
  return;
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
