//задание 1
var img_1 = document.getElementById('img_1');

img_1.onmousedown = function(i) { // 1. отследить нажатие

    // подготовить к перемещению
    // 2. разместить на том же месте, но в абсолютных координатах
    img_1.style.position = 'absolute';
    moveAt(i);
    // переместим в body, чтобы мяч был точно не внутри position:relative
    document.body.appendChild(img_1);
  
    img_1.style.zIndex = 100; // показывать мяч над другими элементами
  
    // передвинуть мяч под координаты курсора
    // и сдвинуть на половину ширины/высоты для центрирования
    function moveAt(i) {
      img_1.style.left = i.pageX - img_1.offsetWidth / 2 + 'px';
      img_1.style.top = i.pageY - img_1.offsetHeight / 2 + 'px';
    }
  
    // 3, перемещать по экрану
    document.onmousemove = function(i) {
      moveAt(i);
    }
  
    // 4. отследить окончание переноса
    img_1.onmouseup = function() {
      document.onmousemove = null;
      img_1.onmouseup = null;
    }
    img_1.ondragstart = function() {
        return false;
      };
}




var text = document.getElementById('text');

text.onmousedown = function(i) { // 1. отследить нажатие

    // подготовить к перемещению
    // 2. разместить на том же месте, но в абсолютных координатах
    text.style.position = 'absolute';
    moveAt(i);
    // переместим в body, чтобы мяч был точно не внутри position:relative
    document.body.appendChild(text);
  
    img_1.style.zIndex = 100; // показывать мяч над другими элементами
  
    // передвинуть мяч под координаты курсора
    // и сдвинуть на половину ширины/высоты для центрирования
    function moveAt(i) {
      text.style.left = i.pageX - text.offsetWidth  + 'px';
      text.style.top = i.pageY - text.offsetHeight  + 'px';
    }
  
    // 3, перемещать по экрану
    document.onmousemove = function(i) {
      moveAt(i);
    }
  
    // 4. отследить окончание переноса
    text.onmouseup = function() {
      document.onmousemove = null;
      text.onmouseup = null;
    }
    text.ondragstart = function() {
        return false;
      };
}


//2 Задание
var kot = document.getElementById('kot');
kot.style.position ='absolute';
kot.style.left = '0px';
function cat() {
    let left = kot.style.left;
    if(left != ' ') left  = parseInt(left);
    else left = 1;
    left = left + 2;
    kot.style.left = left + 'px';

}

function move_cat_1(){
    let interval = setInterval(() => cat(), 1);
    setTimeout(() => { clearInterval(interval);  }, 4300);
}



//3 задание




