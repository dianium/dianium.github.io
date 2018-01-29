var now = new Date();
var dayEl = document.querySelector('.day');
var weekdayEl = document.querySelector('.weekday');
var monthEl = document.querySelector('.month');
var answerEl = document.querySelector('.answer');
var monthes = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
var weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

dayEl.innerText = now.getDate();
weekdayEl.innerText = weekdays[now.getDay()];
monthEl.innerText = monthes[now.getMonth()];
var seed  = parseFloat(('0.' + now.getDate()) + now.getMonth());
answerEl.style.transform = 'matrix(' + (1 + seed * .4) + ','
+ (-.2 + seed * .3) + ','
+ (.2 + seed * .3) + ','
+ (1 - seed * .4) + ','
+ (3 - seed*.6) + ','
+ (-2 + seed*.6) + ')';
