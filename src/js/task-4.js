"use strict" /* использование последней  версии  js  */;

const formatString = function (string) {
  if (string.length < 41) {
    return string;
  } else {
    let result = string.slice(0, 40);
    return `${result}...`;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
