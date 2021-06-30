/* eslint-disable */

$(function(){

    $("li.mainLi").mouseover(function(){
        $("ul.subMenu").stop().slideDown(700);
        $("div#gnbBG").stop().slideDown(700);
    });

    $("li.mainLi").mouseout(function(){
        $("ul.subMenu").stop().slideUp(300);
        $("div#gnbBG").stop().slideUp(300);
    });

});
