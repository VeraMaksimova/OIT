console.log('LABA2'); 

//1 задание Диалог
function laba_1_nomer_1(){
    alert('Вас приветсвует учебный центр');
    let Name = prompt('Введите пожалуйста ваше имя ');
    alert('Добро пожаловать на наши курсы, ' +  Name  + '');
    let i = confirm('Хотите стать Web-дизайнером?');
    if(i == true){
        alert('Учите стили CSS и JavaScript!');
    }
    else{
        alert('Упускаете время');
    }    
}
//2 Задание
function laba_1_nomer_2(){
    document.write('<p style = "color:rgb(125, 163, 100);  text-align: center;font-family: monospace;  font-size: 20px">Результат сложения 10 + 5 <br></p>');
    document.write('<p style = "color:rgb(125, 163, 100);  text-align: center;font-family: monospace;  font-size: 20px">'+10 + 5 + '<br></p>');
    document.write('<p style = "color:rgb(125, 163, 100);  text-align: center;font-family: monospace;  font-size: 20px">Результат сложения "10" + "5" <br></p>');
    document.write('<p style = "color:rgb(125, 163, 100);  text-align: center;font-family: monospace;  font-size: 20px">' + "10" + "5" + '<br></p>');
    document.write('<p style = "color:rgb(125, 163, 100);  text-align: center;font-family: monospace;  font-size: 20px">Результат сложения 22 + "5" <br></p>');
    document.write('<p style = "color:rgb(125, 163, 100);  text-align: center;font-family: monospace;  font-size: 20px">'+ 22 + '5' + '<br></p>');
    document.write('<p style = "color:rgb(125, 163, 100);  text-align: center;font-family: monospace;  font-size: 20px">Результат сложения "22" + 5 <br></p>');
    document.write('<p style = "color:rgb(125, 163, 100);  text-align: center;font-family: monospace;  font-size: 20px">'+'22' + 5 +'<br></p>');
    let result = "22" + 5;
    alert('Результат сложения строки и числа всегда будет ' + result);
}

// Задание 3

function laba_1_nomer_3(){
    document.write('<p style = "color:rgb(125, 163, 100);  text-align: center;font-family: monospace;  font-size: 20px">задание 3 </p><br>');
    let x = 230;
    let y = 2;
    document.write('<p style = "color:rgb(125, 163, 100);  text-align: center;font-family: monospace;  font-size: 20px">x = ' + x + '</p><br>');
    document.write('<p style = "color:rgb(125, 163, 100);  text-align: center;font-family: monospace;  font-size: 20px">y = ' + y + '</p><br>');
    let a = (35*y-25*x)/5+232;
    document.write('<p style = "color:rgb(125, 163, 100);  text-align: center;font-family: monospace;  font-size: 20px">Выражение a = 35y-25x/5+232 </p><br>');
    document.write('<p style = "color:rgb(125, 163, 100);  text-align: center;font-family: monospace;  font-size: 20px">Результат a = ' + a + '</p><br>');
    let b = 8 * y/ x +5 * x / y - 43 * 6;
    document.write('<p style = "color:rgb(125, 163, 100);  text-align: center;font-family: monospace;  font-size: 20px">Выражение b = 8 * y/ x +5 * x / y - 43 * 6</p>  <br>');
    document.write('<p style = "color:rgb(125, 163, 100);  text-align: center;font-family: monospace;  font-size: 20px">Результат b =  ' + b + '</p><br>');
    let ostatok = a % b;
    document.write('<p style = "color:rgb(125, 163, 100);  text-align: center;font-family: monospace;  font-size: 20px">Остаток от деления а на b = ' + ostatok + '</p><br>');
    alert('Результат a = ' + a + '\n' + 'Результат b =  ' + b + '\n' + 'Остаток от деления а на b = ' + ostatok + '\n'); 
}

//Задание 4
function laba_1_nomer_4(){
    let chislo = prompt('Введите число');
    if((chislo < 20 || chislo > 40) && chislo != 15 && chislo % 5 == 0){
    alert('Правильно значение ');
    }
    else{
    alert('Не правильное значение');
    }

}


function laba_1_nomer_4_2(){
    let chislo_1 = prompt('Введите число(собственный пример');
    if(chislo_1 < 100 && chislo_1 > 50 && (chislo_1 % 5 == 0 || chislo_1 % 3 == 0)){
    alert('Правильно');
    }
    else{
    alert('Неправильно');
    }
}

// Задание 5

function laba_1_nomer_5(){
    a = prompt('Введите число а');
    b = prompt('Введите число b');
    if(a > b){
    alert('число а (' + a + ') больше числа b (' + b + ')' );
    }
    else if(b > a){
    alert('число b (' + b + ') больше числа a (' + a + ')' );
    }
    else{
    alert('число b (' + b + ') равно числу a (' + a + ')' );
    }

}

function laba_1_nomer_5_2(){
    let number = prompt('Введит число(Если больше 100 то true, иначе false)');
    (number > 100) ? console.log(true) : console.log(false);
}

//Задание 6

function laba_1_nomer_6(){
    let date_0 = prompt('Введите дату в формате (Month day, year)');
    let date = new Date(date_0);
    let weekday = date.getDay();

switch(weekday){
    case 1: alert('Понедельник'); break;
    case 2: alert('Вторник'); break;
    case 3: alert('Среда'); break;
    case 4: alert('Четвер'); break;
    case 5: alert('Пятница'); break;
    case 6: alert('Суббота'); break;
    case 7: alert('Воскресенье'); break;
    }
}

function laba_1_nomer_7(){
    try {
        console.log('Начало текста');  // (1) <--
        aaaaaaaaa; // ошибка, переменная не определена!
        console.log('конец текста');  // (2)
      
    }catch(error) {
        console.log('ERROR!'); // (3) <--
    }
      
}

// Таблица умножения
let w = prompt('Введите b');
let x = prompt('Введите a');
w = Number(w);
x = Number(x);
document.write('<table>')
for(let i = 1;i <= x; i++){
    document.write('<tr>');
    for(let j = 1;j <= w;j++){
        document.write( '<td>' + i  + '*'+  j + ' = ' + i * j + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>')
//table

/*Задание 3. 
Найти площадь круга и длину окружности, радиус меняется от а до b с шагом 0,3. Результаты округлить и вывести в таблице. Использовать оператор цикла do-while. */
let radius_a = prompt('Введите начальный радиус');
let radius_b = prompt('Ваедите конечный радиус');
    document.write('<table><tr><th>Радиус</th><th>Площадь круга</th><th>Длина окружности</th></tr>');
radius_a = Number(radius_a);
radius_b = Number(radius_b);
do{
    document.write('<tr><td>'+ Math.round(radius_a) +'</td>');
    document.write('<td>'+ Math.round(Math.pow(radius_a,2) * Math.PI) +'</td>');
    document.write('<td>'+ Math.round(radius_a * Math.PI * 2) +'</td></tr>');
    radius_a = radius_a + 0.3;
}
while(radius_a <= radius_b);
document.write('</table>');



/*Задание 4 Задание 4. Создать 2 объекта-числа (Number) – дробное и целое. 
Применить к каждому из них методы: toExponential, toFixed, toPrecision, toString. Результаты проанализировать, представить в таблице в следующем виде: */
x = new Number(10);
y = new Number(8.5);


document.write('<table><tr><th>Число</th><th>Метод</th><th>Результат</th><th>Описание метода</th></tr>');
document.write('<tr><td>'+ x +'</td>');
document.write('<td>'+ ' toExponential ' +'</td>');
document.write('<td>'+ x.toExponential(3) +'</td>');
document.write('<td>'+ ' toExponential(количество) – <br>представляет число в экспоненциальной форме, параметр количество – целое число, определяющее, сколько цифр после точки следует указывать.'+'</td></tr>');
document.write('<tr><td>'+ x +'</td>');
document.write('<td>'+ 'toFixed' +'</td>');
document.write('<td>'+ x.toFixed(3) +'</td>');
document.write('<td>'+ 'toFixed(количество) – представляет число в форме с фиксированным количеством цифр после точки, параметр количество – целое число,<br> определяющее, сколько цифр после точки следует указывать' +'</td></tr>');
document.write('<tr><td>'+ x +'</td>');
document.write('<td>'+ 'toPrecision' +'</td>');
document.write('<td>'+ x.toPrecision(3) +'</td>');
document.write('<td>'+ 'toPrecision(точность) – представляет число с заданным общим количеством значащих цифр.<br> Параметр точность – целое число, определяющее, сколько всего цифр, до и после точки, следует указывать.' +'</td></tr>');
document.write('<tr><td>'+ x +'</td>');
document.write('<td>'+ 'toString' +'</td>');
document.write('<td>'+ x.toString(16) +'</td>');
document.write('<td>'+ 'toString([основание]) – возвращает строковое представление числа в системе счисления с указанным основанием. <br>Если параметр не указан, имеется в виду десятеричная система счисления. Этот метод имеют все объекты.' +'</td></tr>');
//y
document.write('<tr><td>'+ y +'</td>');
document.write('<td>'+ ' toExponential ' +'</td>');
document.write('<td>'+ y.toExponential(3) +'</td>');
document.write('<td>'+ ' toExponential(количество) – <br>представляет число в экспоненциальной форме, параметр количество – целое число, определяющее, сколько цифр после точки следует указывать.'+'</td></tr>');
document.write('<tr><td>'+ y +'</td>');
document.write('<td>'+ 'toFixed' +'</td>');
document.write('<td>'+ y.toFixed(3) +'</td>');
document.write('<td>'+ 'toFixed(количество) – представляет число в форме с фиксированным количеством цифр после точки, параметр количество – целое число,<br> определяющее, сколько цифр после точки следует указывать' +'</td></tr>');
document.write('<tr><td>'+ y +'</td>');
document.write('<td>'+ 'toPrecision' +'</td>');
document.write('<td>'+ y.toPrecision(3) +'</td>');
document.write('<td>'+ 'toPrecision(точность) – представляет число с заданным общим количеством значащих цифр.<br> Параметр точность – целое число, определяющее, сколько всего цифр, до и после точки, следует указывать.' +'</td></tr>');
document.write('<tr><td>'+ y +'</td>');
document.write('<td>'+ 'toString' +'</td>');
document.write('<td>'+ y.toString(2) +'</td>');
document.write('<td>'+ 'toString([основание]) – возвращает строковое представление числа в системе счисления с указанным основанием. <br>Если параметр не указан, имеется в виду десятеричная система счисления. Этот метод имеют все объекты.' +'</td></tr>');