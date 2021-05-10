//1 задание



function fun_1(){
    const text_1 = document.getElementById('task_1');
    text_1.style.color = 'red';
}
function fun_2(){
    const text_1 = document.getElementById('task_1');
    text_1.style.color = 'black';
}

//2 задание
function fun_3_1(){
    const click = document.getElementById('task_2');
    click.style.fontSize = '50px';
}
function fun_3_2(){
    const click = document.getElementById('task_2');
    click.style.fontSize = '32px';
}

var j = 2;
function fun_3(){
    if(j % 2 == 0){
        fun_3_1();
    }
    if(j % 2 != 0){
        fun_3_2();
    }

  j = j + 1;
}
//32px
//3 задание
function fun_4_1(){
    const pic = document.getElementById('task_3');
    pic.src = "kard_2.jfif";
}
function fun_4_2(){
    const pic = document.getElementById('task_3');
    pic.src = "kard_1.jpg";
}
var i = 2;
function fun_4(){
 
    if(i % 2 == 0){
        fun_4_1();
    }
    if(i % 2 != 0){
        fun_4_2();
    }

  i = i + 1;
        
    
}

//4 Задание
function fun_5(){
  
    let text_ = document.getElementById('task_4');
    text_.innerHTML = '<img src = "sun.jpg">'
    
}

//5 задание
function fun_6(){
    var imag = document.getElementById('task_5');
    imag.style.width = '200px';
}


function fun_7(){
    var imag = document.getElementById('task_5');
    imag.style.width = '100px';
}

//6 задание



function fun_8(){
    var border = document.getElementById('task_6');
    border.style.border = '2px solid aqua';
}


