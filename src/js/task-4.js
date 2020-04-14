'use strict' /* использование последней  версии  js  */;

const credits = 23580;
const pricePerDroid = 3000;

let message;

let ordered = prompt(`"Введите количество дроидов для покупки."`); //  ввод  символов
if (ordered === null) {
  message = 'Досвидания !'; // проверка  на  отказ
} else {
  ordered = Number(ordered); //  приобразование в числ
  if (ordered <= 0) {
    message = 'Некоректный ввод.';
  } else {
    if (Number.isNaN(ordered)) {
      message = 'Некоректный ввод.';
    } else {
      if (pricePerDroid * ordered <= credits) {
        message = `"Вы купили ${ordered} дроидов, на счету осталось ${
          credits - pricePerDroid * ordered
        } кредитов."`;
      } else {
        message = 'Недостаточно средств на счету !';
      }
    }
  }
}
alert(message); //  вывод  символов
