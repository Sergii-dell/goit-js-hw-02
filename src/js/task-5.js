'use strict' /* использование последней  версии  js  */;

let countriesA = 'Китай';
let deliveryA = 100;

let countriesB = 'Чили';
let deliveryB = 250;

let countriesC = 'Австралия';
let deliveryC = 170;

let countriesD = 'Индия';
let deliveryD = 80;

let countriesF = 'Ямайка';
let deliveryF = 120;

let message;
let ordered = prompt(`"Напишите страну, в которую нужно доставить товар."`); //  ввод  символов

if (ordered === null) {
  message = 'Досвидания';
} else {
  if (Number(ordered) === 0) {
    message = 'Вы незделали выбор !';
  } else {
    ordered = ordered.toLowerCase();

    switch (ordered) {
      case countriesA.toLowerCase():
        message = `"Доставка в ${countriesA} будет стоить ${deliveryA} кредитов."`;
        break;
      case countriesB.toLowerCase():
        message = `"Доставка в ${countriesB} будет стоить ${deliveryB} кредитов."`;
        break;
      case countriesC.toLowerCase():
        message = `"Доставка в ${countriesC} будет стоить ${deliveryC} кредитов."`;
        break;
      case countriesD.toLowerCase():
        message = `"Доставка в ${countriesD} будет стоить ${deliveryD} кредитов."`;
        break;
      case countriesF.toLowerCase():
        message = `"Доставка в ${countriesF} будет стоить ${deliveryF} кредитов."`;
        break;
      default:
        message = 'В вашей стране доставка недоступна.';
    }
  }
}
alert(message); //  вывод  символов
