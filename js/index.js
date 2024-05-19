function Connectionpage() {
var type=navigator.appName
if (type=="Netscape")
var lang = navigator.language
else
var lang = navigator.userLanguage

// 국가코드에서 앞 2글자만 자름
var lang = lang.substr(0,2)

// 영어인 경우
if (lang == "en")

window.location.replace('../en/index.html')

// 한국어인 경우
else if (lang == "ko")
window.location.replace('../kr/index.html')

// 아랍어인 경우
else if (lang == "ar")
window.location.replace('../ar/index.html')

// 위의 어느것도 아닌경우 (디폴트 페이지)
}


var keydownCtrl = 0;
var keydownShift = 0;

document.onkeydown=keycheck;
document.onkeyup=uncheckCtrlShift;

function keycheck()
{
      switch(event.keyCode){ 
        case 123:event.keyCode='';return false; break; //F12
        case 17:event.keyCode='';keydownCtrl=1;return false; break; //컨트롤키
      }
    
      if(keydownCtrl) return false;
}

function uncheckCtrlShift()
{
      if(event.keyCode==17)      keydownCtrl=0;
      if(event.keyCode==16)      keydownShift=0;
}


    function click()
{
    if ((event.button==2) || (event.button==2)) 
        {alert('[Right-click] / [Control] / [F12] is prohibited.');}
}
document.onmousedown=click;



