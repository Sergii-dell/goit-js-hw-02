'use strict' /* использование последней  версии  js  */;

const total = 100;
let message;
let ordered = prompt(`"Введите количество едениц в заказе."`); //  ввод  символов
if (ordered === null) {
  message = 'Досвидания'; // проверка  на  отказ
} else {
  ordered = Number(ordered); //  приобразование в числ
  if (ordered <= 0) {
    message = 'Некоректный ввод.';
  } else {
    if (Number.isNaN(ordered)) {
      message = 'Некоректный ввод.';
    } else {
      if (ordered <= total) {
        message = 'Заказ оформлен, с вами свяжетса менеджер.';
      } else {
        message = 'На складе недостаточно товаров !';
      }
    }
  }
}
alert(message); //  вывод  символов
