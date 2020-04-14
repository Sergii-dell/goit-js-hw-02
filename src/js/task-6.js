'use strict' /* использование последней  версии  js  */;

let total = 0;
let message = 'Введите сумму.';
let ordered;

do {
  ordered = prompt(message); //  ввод  символов
  if (ordered === null) {
    message = 'Введите сумму.';
    alert(`Общяя сумма чисел равна ${total}`); //  вывод  символов
    break;
  } else {
    ordered = Number(ordered); //  приобразование в числ
    if (ordered <= 0 || Number.isNaN(ordered)) {
      message = 'Было введенно не число, попробуйте ище раз.';
    } else {
      total = total + ordered;
      message = 'Введите сумму.';
    }
  }
} while (true);
