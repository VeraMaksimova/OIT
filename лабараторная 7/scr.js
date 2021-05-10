/*Студент   Фамилия   специальность  ИСиТ   курс  1   должен сда-вать следующие  предметы:
•	ОИТ
•	История
•	Математика
*/ 
function pr_1(){
    
    var newWin = window.open("about:blank", "ggg", "width=800,height=600");//создание окна
    var text_area = document.getElementById('ta');
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var sel = document.getElementById("sel");
    var kurs_1 =  document.getElementById("radio_1");//input
    var kurs_2 = document.getElementById("radio_2");//input
    var kurs_3 =  document.getElementById("radio_3");//input
    var kurs_4 =  document.getElementById("radio_4");//input
    var k_1 =  document.getElementById("k_1");//label
    var k_2 = document.getElementById("k_2");//label
    var k_3 =  document.getElementById("k_3");//label
    var k_4 =  document.getElementById("k_4");//label
    var string_kurs;
    //value
    if(kurs_1.checked) string_kurs = k_1.textContent;
    if(kurs_2.checked) string_kurs = k_2.textContent;
    if(kurs_3.checked) string_kurs = k_3.textContent;
    if(kurs_4.checked) string_kurs = k_4.textContent;
    newWin.document.write("<p>"+text_area.value+"</p>");
    newWin.document.write("<p>Cтуендт " + surname.value + " " + name.value + " специльность " + sel.value + " курс " + string_kurs + "дожен сдавать следующие предметы: </p>");
    //цикл на сдачу предметов
    
    var chek_1 = document.getElementById("checkbox_1");//ch
    var chek_2 =  document.getElementById("checkbox_2");//ch
    var chek_3 =  document.getElementById("checkbox_3");//ch
    var chek_4 =  document.getElementById("checkbox_4");//ch
    var chek_5 =  document.getElementById("checkbox_5");//ch
    var str_check;
    var c_1 = document.getElementById("c_1");//lab
    var c_2 = document.getElementById("c_2");//lab
    var c_3 = document.getElementById("c_3");//lab
    var c_4 = document.getElementById("c_4");//lab
    var c_5 = document.getElementById("c_5");//lab
    newWin.document.write("<ul> ")
    //вывод на сдачу предметов
    if(chek_1.checked) newWin.document.write("<li>" + c_1.textContent + "</li>");
    if(chek_2.checked) newWin.document.write("<li>" + c_2.textContent + "</li>");
    if(chek_3.checked) newWin.document.write("<li>" + c_3.textContent + "</li>");
    if(chek_4.checked) newWin.document.write("<li>" + c_4.textContent + "</li>");
    if(chek_5.checked) newWin.document.write("<li>" + c_5.textContent + "</li>");
    newWin.document.write("</ul> ");
    newWin.document.write('<select>');
    if(chek_1.checked) newWin.document.write("<option>" + c_1.textContent + "</option>");
    if(chek_2.checked) newWin.document.write("<option>" + c_2.textContent + "</option>");
    if(chek_3.checked) newWin.document.write("<option>" + c_3.textContent + "</option>");
    if(chek_4.checked) newWin.document.write("<option>" + c_4.textContent + "</option>");
    if(chek_5.checked) newWin.document.write("<option>" + c_5.textContent + "</option>");
    newWin.document.write('</select>');
   
}

