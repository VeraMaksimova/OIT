var canvas = document.getElementById('can');
var ctx = canvas.getContext('2d');
var x = 0;
var time;




function sinys(){
    var y = 200 + 100 * Math.sin(x/10);
    x = x + 0.1;
    
    ctx.fillRect(x,y,1,1);
    time = setTimeout(sinys, 0.01);
   
}


function cosin(){
    var y = 200 + 100 * Math.cos(x/20);
    x = x + 0.1;
 
    ctx.fillRect(x,y,1,2);
    time = setTimeout(cosin, 1);
}


x = -10;
function x_2(){
    
    ctx.fillRect(200+x*10,250-Math.pow(x,2),1.5,2);
    x = x + 0.05;
   
    time = setTimeout(x_2, 1);
}




function x_3(){
   // цвет квадратической параболы
    ctx.fillRect(200+x*10,200 - Math.pow(x,3),2,1);//x*10
    x = x + 0.03;
   
    time = setTimeout(x_3, 1);
    
}


function go_1(){
    x = 0;
    sinys();
}
function go_2(){
    x = 0;
    cosin();
}
function go_3(){
    x = -20;
    x_2();
}


function go_4(){
    x = -10;
    x_3();
}
function sub(){
    var color_b = document.getElementById('c_1');
    var color_r = document.getElementById('c_2');
    var color_g = document.getElementById('c_3');
    var color_b = document.getElementById('c_4');
    if(color_b.selected)  ctx.fillStyle = "black";//
    if(color_r.selected)  ctx.fillStyle = "red";
    if(color_g.selected)  ctx.fillStyle = "green";
    if(color_b.selected)  ctx.fillStyle = "blue";

}
