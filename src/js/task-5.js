"use strict" /* использование последней  версии  js  */;

const checkForSpam = function (message) {
  let masive = message.split(/\b/); //  разбивка по словам и символам (скобки, комы, знаки вопросов)

  for (let i = 0; i < masive.length; i += 1) {
    if (
      masive[i].toLowerCase() === "spam" ||
      masive[i].toLowerCase() === "sale"
    ) {
      return true;
    }
  }
  return false;
};

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekiy newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
