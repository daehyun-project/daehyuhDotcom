function call1() {
for (i = 42; i <= 4242; i = i + 10) {
document.write("<option>" + i + "</option>");
}
}

function call2() {
                                            for (i = 42; i <= 10002; i = i + 10) {
                                                document.write("<option>" + i + "</option>");
                                            }
                                            document.getElementById("wantmail").value = 1002;
}

        function Calculation1() {
            let threetier = document.getElementById('3t').value;
            let fourtier = document.getElementById('4t').value;
            let fivetier = document.getElementById('5t').value;
            let needcard = Number(120) - Number(threetier) - Number(fourtier * 4) - Number(fivetier * 20);
            let threeup = (needcard + Number(threetier)) / 4 * 100000;
            let fourup = ((needcard + Number(threetier)) / 4 + Number(fourtier)) / 5 * 500000;

            if ((Number(120) - Number(threetier) - Number(fourtier) * 4 - Number(fivetier) * 20) >= 0) {
                document.getElementById("re").value = Number(120) - Number(threetier) - Number(fourtier) * 4 - Number(fivetier) * 20;
                document.getElementById("re2").value = Number(threeup) + ' Rubles'
                document.getElementById("re3").value = Number(fourup) + ' Rubles'
                document.getElementById("re4").value = Number(threeup) + Number(fourup) + Number(1000000) + ' Rubles';
            } else {
                document.getElementById("re").value = 'ERROR';
                document.getElementById("re2").value = 'ERROR';
                document.getElementById("re2").value = 'ERROR';
                document.getElementById("re3").value = 'ERROR';
                document.getElementById("re4").value = 'ERROR';
            }
        }


function Calculation2() {
    let a = document.getElementById("mymail");
    let b = document.getElementById("wantmail");
    let first = a.options[a.selectedIndex].value;
    let second = b.options[b.selectedIndex].value;
    let last = 50 * (Number(second) - Number(first)) * (Number(first) + Number(second) - 74);
    document.getElementById("mailre").value =  last + ' Rubles';
    if (last < 0) {
        document.getElementById("mailre").value = "The current mailbox is longer than the target mailbox.";
    }
}

function Calculation3() {
    let a = document.getElementById("Fame").value;
    let rub = a*100;
    let b = document.getElementsByClassName("Guild");
    let c = document.getElementsByClassName("frostbite");
    let first = b[0].selectedIndex;
    let second = c[0].selectedIndex;
    let sum;
    let arr1 = [0,1,2,3,4,5,6];
    let arr2 = [0,2.5,5,7.5,10,12.5,15]
    if(document.getElementById("FameBuff").checked) {
        sum = rub + (rub*(arr1[first]+arr2[second])/100) + (rub*(3)/100);
    } else {
        sum = rub + rub*(arr1[first]+arr2[second])/100;
    }

    document.getElementById("dayrub").value = Number(sum);
    document.getElementById("dayruna").value = Number(a/42);

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