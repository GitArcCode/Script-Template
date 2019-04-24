$(document).ready(function(){

    var cur_width = $(window).width();

    $(window).resize(function(){
        if($(window).width() <= 600 && cur_width > 600){
            //reload
            location.reload();
        }
        else if($(window).width() > 600 && cur_width <= 600){
            //reload
            location.reload();
        }
    });

});



/*--- ОБНОВИТЬ СТРАНИЦУ ПРИ ИЗМЕНЕНИИ РАЗМЕРА --------------
600 - размер браузера в пикселях, когда сработает обновления
https://ru.stackoverflow.com/questions/925064/Перезагрузка-страницы-при-изменение-ширины-браузера
---------------------------------------------------------- */