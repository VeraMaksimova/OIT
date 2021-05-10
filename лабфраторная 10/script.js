//1 Задание
$(document).ready(function(){
    $(".t_1").mouseover(function(){$(".t_1").css("color","green")});
    $(".t_1").mouseout(function(){$(".t_1").css("color","black")});
    });
// 2 Задание   
    $(document).ready(function(){
        $(".task_2").click(function(){$(".task_2").css("font-size","40px")});
        });
// 3 Задание

$(document).ready(function(){
    $("#task_3").click(function(){$("#task_3").attr("src","kard_2.jpg")});
    });

// 4 Задание
//$('<img src="kard_2.jpg">').replaceAll('#task_3');
$(document).ready(function(){
    $("#task_4").click(function(){$('<img src="kard_2.jpg">').replaceAll('#task_4')});
});

// 5 Задание

$(document).ready(function(){
    $("#t5").mouseover(function(){$("#t5").css("width","300px")});
    $("#t5").mouseout(function(){$("#t5").css("width","150px")});
    });
    
// 6 Задание
$(document).ready(function(){
    $("#t6").dblclick(function(){$("#t6").css("border","3px solid green")});
 
    });
    