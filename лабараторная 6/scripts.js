/* 1 ЗАДАНИЕ Создать кнопки, открывающие и закрывающие окна с произвольными именами. Создать кнопки,
 выводящие в каждое из окон какой-нибудь текст, включающий имя окна. Проверить работу скрипта в разных браузерах.*/

var win;
function win_open() {
  win = window.open("http://www.yandex.ru", "win", "width=300, height=300");
}
function win_close() {
  if (win) {
    win.close();
    win = null;
  }
}

var win_1;
 // открывается пустое окошко с запросом ввода текста
 var t = document.getElementById("but_3");
function win1_open() {
  win_1 = window.open("", "win_1", "width=300, height=300");
 
}
function win1_text() {
  win_1.document.write("<p>Просто текст "+t.name+"</p>");
}

function win1_close() {
  if (win_1) {
    win_1.close();
    win_1 = null;
  }
}


/*
1) 2 ЗАДАНИЕ	всю информацию о браузере пользователя; 
2)	версию браузера;
3)	название браузера;
4)	кодовое название браузера;
5)	ОС, которую использует пользователь;
6)	включена ли поддержка Java в браузере;
7)	ширину и высоту экрана;
8)	глубину цвета;
9)	URL, которые были посещены в данном окне браузера;
10)	URL текущего документа;
11)	путь к загруженному документу;
12)	имя домена загруженного документа.
*/

document.write('<table>');
document.write("<tr><td>Значение</td><td>Свойство</td></tr>")
document.write("<tr><td>"+ navigator.userAgent + "</td><td>navigator.userAgent (Информация о браузере пользователя)</td></tr>");
document.write("<tr><td>"+ navigator.appVersion+"</td><td>navigator.appVersion (Версия браузера)</td></tr>");
document.write("<tr><td>"+navigator.appName+"</td><td>navigator.appName (Название браузера)</td></tr>");
document.write("<tr><td>"+navigator.appCodeName+"</td><td>navigator.appCodeName (Кодовое название браузера)</td></tr>");
document.write("<tr><td>"+navigator.platform+"</td><td>navigator.platform (оперативная система пользователя)</td></tr>");
document.write("<tr><td>"+navigator.javaEnabled()+"</td><td>navigator.javaEnabled() (Включена ли поддержка JAVA)</td></tr>");
document.write("<tr><td>"+screen.width+"</td><td> screen.width (Ширина  экрана)</td></tr>");
document.write("<tr><td>"+screen.height+"</td><td> screen.height (Высота экрана)</td></tr>");
document.write("<tr><td>"+screen.colorDepth+"</td><td> screen.colorDepth(Глубина цвета) </td></tr>");
document.write("<tr><td>"+history.length+"</td><td> history.length (URL, которые были посещены в данном окне браузера)</td></tr>");
document.write("<tr><td>"+location.href+"</td><td>location.href ( URL текущего документа)</td></tr>");
document.write("<tr><td>"+location.pathname+"</td><td>location.pathname	(путь к загруженному документу)</td></tr>");
document.write("<tr><td>"+location.host+"</td><td>location.host (имя домена загруженного документа)</td></tr></table>");


