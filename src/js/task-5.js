"use strict" /* использование последней  версии  js  */;

const checkForSpam = function (message) {
  const forbiddenWord = "spam";
  const forbiddenWord1 = "sale";
  const forbiddenWord2 = "[sale]";
  const forbiddenWord3 = "[spam]";
  const messageSmol = message.toLowerCase();
  const masive = messageSmol.split(" ");
  for (let i = 0; i < masive.length; i += 1) {
    if (
      forbiddenWord === masive[i] ||
      forbiddenWord1 === masive[i] ||
      forbiddenWord2 === masive[i] ||
      forbiddenWord3 === masive[i]
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
