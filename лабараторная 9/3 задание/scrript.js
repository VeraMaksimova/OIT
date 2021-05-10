var t_3 = document.getElementById('t_3');
t_3.style.position ='absolute';

t_3.style.top = '40%';

function task_3() {
    

    let interval_1 = setInterval(() => task_3_1(),35);
    setTimeout(() => { clearInterval(interval_1);  }, 100000);
    t_3.style.left = '0';
    t_3.style.top = '40%';
    

}

function task_3_1(){
  
        if(t_3.offsetLeft == 1370){
            t_3.style.left = 0;
        }
        var X = t_3.offsetLeft + 10;
        var Y = Math.sin(X/100) * 100 + 200;
        t_3.style.left = X + 'px';
        t_3.style.top = Y + 'px';
    
  
}






