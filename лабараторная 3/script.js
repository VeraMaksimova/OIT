/* 1 Задание Сформировать массив (объект Array), элементами которого являются значения выражений. Для вычисления выражений использовать объект Math.
 Найти максимальный и минимальный элементы массива и их но-мера. */
console.log('1 Задание');
x = new Number(6 * Math.pow((Math.PI),2) + 3 * Math.exp(8));
y = new Number(2 * Math.cos(4) + Math.cos(2) + 8 * Math.exp(3));
z = new Number(3 * Math.sin(9) + Math.log(5) + Math.sqrt(3));
t = new Number(2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12));

console.log('Массив элементов');
var arr_= [Number(x),Number(y),Number(z),Number(t)];
console.log(arr_);
let max = x;
let min = x;
let index_min = 0;
let index_max = 0;
for(let i = 0; i <= arr_.length;i++){
    if(max < arr_[i]){
        max = arr_[i];
        index_max = i;
    }
    if(min > arr_[i]){
        min = arr_[i];
        index_min = i;
    }
}

console.log('Максимальный элемент');
console.log(max);
console.log('Индекс максимального элемента');
console.log(index_max);
console.log('Минимальный элемент');
console.log(min);
console.log('Индекс минимального элемента');
console.log(index_min);

/*2 Задание Задан массив с элементами, представляющими методы объектов Array и Math (pow, pop, push, shift, round, floor, sline, sort). Получить из него 2 массива,
 в один записать методы объекта Array, в другой – методы объекта Math.
Добавить в начало одного массива и в конец другого еще по одному методу соответствующих объектов.
Вывести исходный массив, полученные массивы и их длину (количество элементов). */

console.log('2 Задание');
console.log('Исходный массив');
var arr_obsh = ['pow', 'pop','push','shift','round','floor','slice','sort'];
console.log(arr_obsh);
//math
var arr_math_1 = arr_obsh.slice(0, 1);
var arr_math_2 = arr_obsh.slice(4,6);
var arr_MATH = arr_math_1.concat(arr_math_2);
console.log('Массив их элементов math');
console.log(arr_MATH);
console.log('Массив их элементов math с добавлением sqrt  в конце');
arr_MATH.push('sqrt');
console.log(arr_MATH);
//arr
var arr_array_1 = arr_obsh.slice(1,4);
var arr_array_2 = arr_obsh.slice(6,arr_obsh.length);
var arr_ARRAY = arr_array_1.concat(arr_array_2);
console.log('Массив из элементов array');
console.log(arr_ARRAY);
console.log('Массив из элементов array с добавлением concat в конце');
arr_ARRAY.push('concat');
console.log(arr_ARRAY);

/* 3 Задание Задание 3. Создать объект String – строку текста (свои Фамилия Имя Отчество), в которой присутствуют строчные и прописные буквы. Узнать ее длину.
Перевести все символы строки в верхний регистр, а затем в нижний. Содеинить полученные строки. Заменить свои Фамилия Имя Отчество на ФИО.*/

console.log('3 Задание');

str = new String('Максимова Вера Владимировна');
console.log(str);
console.log('Длинна строки');
console.log(str.length);
str_1 = new String(str.toUpperCase())
console.log('Перевод в верхний регистр');
console.log(str_1);
str_2 = new String(str.toLowerCase())
console.log('Перевод в нижний регистр');
console.log(str_2);
console.log('Соединенные строки');
str_3 = (str_1.concat(str_2));
console.log(str_3);
str = str.replace('Максимова', 'М');
console.log('Замененная фамилия ' + str);
str = str.replace('Вера', 'В');
console.log('Замененое имя ' + str);
str = str.replace('Владимировна', 'В');
console.log('Заменное отчество  ' + str);

/* Задание 4 Использовать объект Date. Вывести на страницу таблицу с составляющими текущей даты и времени в виде: */
t = new Date();
let month_ = t.getMonth() + 1;
document.write('<table><tr><td>Год <td>'+ t.getFullYear()+'</td></td></tr><tr><td>Месяц</td><td>'+ month_ + '</td></tr><tr><td>День</td><td>'+t.getDate()+'</td></tr><tr><td>Час</td><td>'+t.getHours()+'</td></tr><tr><td>Минуты</td><td>'+t.getMinutes()+'</td></tr><tr><td>Секунды</td><td>'+t.getSeconds()+'</td><tr></table>');

