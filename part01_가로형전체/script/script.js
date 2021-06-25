/* eslint-disable */

$(document).ready(function(){
   /* html 문서가 브라우저에 출력되면 */
    // 입력함수에 있는 추가기능을 실행하세요.
    // jquery 템플릿 코드

    // 1차기능
        /* 서브메뉴 펼치기 */
    $("li.mainLi").mouseover(function(){
    // 추가기능
        $("ul.subMenu").stop().slideDown(800);
    });
        /* 서브메뉴 올리기 */
    $("li.mainLi").mouseout(function(){
        $("ul.subMenu").stop().slideUp(300);
    });

    /* stop() 메서드는 메모리 유지기능을 소멸시켜서 사용자의 이벤트가 종료되면 기능 또한
    멈추는 기능 */


});
