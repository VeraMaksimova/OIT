/* 1 Задание Вывести на экран все тэги и их номера в коллекции all своей первой web-страницы. */


console.log('1 ЗАДАНИЕ');
var html_ = document.all;
console.log(html_);


/* 2 Задание  Вывести все дочерние элементы узла document.body своей первой web-страницы. */


console.log('ЗАДАНИЕ 2');
console.log('\n\n\n');
var perem_1 = document.body.childNodes;
console.log(perem_1);
console.log('\n\n\n');


/* Задание 3 Вывести в окно содержимое первого элемента span:
- 	используя для доступа к элементу коллекцию all;
-	используя частную коллекцию (span);
-	используя идентификатор элемента. */

console.log('ЗАДАНИЕ 3');
//1

for(let i = 0;i < html_.length; i++){
    if(html_[i].localName === 'span'){
        console.log(html_[i]);
        break;
    }
}

// 2

console.log('\n\n\n Используя частную колекцию SPAN');
var span_ = document.getElementsByTagName('span');
span_ = span_[0];
console.log(span_);

//3

console.log('\n\n\nЧерез идентификатор');
let elem = document.getElementById('vid');
console.log(elem);



/* Задание 4 Организовать доступ к содержимому таблицы и посчитать свой средний балл.
 Добавить значение среднего балла к содержимому вто-рого элемента span. */

console.log("\n\n\nЗАДАНИЕ 4\n");

let otsenka_1 = document.getElementById('ot1').innerHTML;
otsenka_1 = Number(otsenka_1);
let otsenka_2 = document.getElementById('ot2').innerHTML;
otsenka_2 = Number(otsenka_2);
let otsenka_3 = document.getElementById('ot3').innerHTML;
otsenka_3 = Number(otsenka_3);
let otsenka_4 = document.getElementById('ot4').innerHTML;
otsenka_4 = Number(otsenka_4);
let otsenka_5 = document.getElementById('ot5').innerHTML;
otsenka_5 = Number(otsenka_5);
console.log('СРЕДНИЙ БАЛЛ');
console.log((otsenka_1 + otsenka_2 + otsenka_3 + otsenka_4 +  otsenka_5) / 5);
let sr_ball = ((otsenka_1 + otsenka_2 + otsenka_3 + otsenka_4 +  otsenka_5) / 5);

var span_1 = document.getElementsByTagName('span');
span_1 = span_1[1];
span_1.innerHTML = ((otsenka_1 + otsenka_2 + otsenka_3 + otsenka_4 +  otsenka_5) / 5);
