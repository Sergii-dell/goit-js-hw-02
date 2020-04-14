'use strict' /* использование последней  версии  js  */;

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const password = prompt('Введите пароль.');

if (password === null) {
  message = 'Отменено пользователем !'; // проверка  на  отказ
} else {
  if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать !';
  } else {
    message = 'Доступ запрещен, неверный пароль !';
  }
}
alert(message); //  вывод  символов
