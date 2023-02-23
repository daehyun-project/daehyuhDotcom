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
        document.getElementById("re").value = Number(120) - Number(threetier) - Number(fourtier) * 4 - Number(fivetier) * 20 + '개';
        document.getElementById("re2").value = Number(threeup) + '루블' + '>>>' + Number(threeup) / 10000 + '만 루블';
        document.getElementById("re3").value = Number(fourup) + '루블' + '>>>' + Number(fourup) / 10000 + '만 루블';
        document.getElementById("re4").value = Number(threeup) + Number(fourup) + Number(1000000) + '루블' + '>>>' + (Number(threeup) + Number(fourup) + Number(1000000)) / 10000 + '만 루블';
    } else {
        document.getElementById("re").value = '오류';
        document.getElementById("re2").value = '오류';
        document.getElementById("re2").value = '오류';
        document.getElementById("re3").value = '오류';
        document.getElementById("re4").value = '오류';
    }
}

function Calculation11() {
    let threetier = document.getElementById('5-3t').value;
    let fourtier = document.getElementById('5-4t').value;
    let needcard = Number(20) - Number(threetier) - Number(fourtier * 4);
    let threeup = (needcard + Number(threetier)) / 4 * 100000;
    let fourup = ((needcard + Number(threetier)) / 4 + Number(fourtier)) / 5 * 500000;

    if ((Number(20) - Number(threetier) - Number(fourtier) * 4) >= 0) {
        document.getElementById("5-re").value = needcard + '개';
        document.getElementById("5-re2").value = threeup + '루블' + '>>>' + threeup / 10000 + '만 루블';
        document.getElementById("5-re3").value = fourup + '루블' + '>>>' + fourup / 10000 + '만 루블';
    } else {
        document.getElementById("5-re").value = '오류';
        document.getElementById("5-re2").value = '오류';
        document.getElementById("5-re2").value = '오류';
        document.getElementById("5-re3").value = '오류';
    }
}

function Calculation2() {
    let a = document.getElementById("mymail");
    let b = document.getElementById("wantmail");
    let first = a.options[a.selectedIndex].value;
    let second = b.options[b.selectedIndex].value;
    let last = 50 * (Number(second) - Number(first)) * (Number(first) + Number(second) - 74);
    document.getElementById("mailre").value = last / 10000 + "만 루블";
    if (last < 0) {
        document.getElementById("mailre").value = "현재 우체통이 목표 우체통보다 큽니다";
    }
}

function Calculation3() {
    let a = document.getElementById("Fame").value;
    let rub = a * 100;
    let b = document.getElementsByClassName("Guild");
    let c = document.getElementsByClassName("frostbite");
    let first = b[0].selectedIndex;
    let second = c[0].selectedIndex;
    let sum;
    let arr1 = [0, 1, 2, 3, 4, 5, 6];
    let arr2 = [0, 2.5, 5, 7.5, 10, 12.5, 15];
    if (document.getElementById("FameBuff").checked) {
        sum = rub + (rub * (arr1[first] + arr2[second]) / 100) + (rub * (3) / 100);
    } else {
        sum = rub + rub * (arr1[first] + arr2[second]) / 100;
    }

    document.getElementById("dayrub").value = sum + "루블";
    document.getElementById("dayruna").value = Math.floor(a / 42) + "루나";

}

function Calculation4() {
    let a = Number(document.getElementById("enamyFame").value) + 51;
    let sldt = document.getElementById("slider").value;
    let harpa = Math.round(a * (sldt / 1000)) * 10;
    let harpa2 = a - harpa;


    document.getElementById("mailinfo").value = "징엽으로 " + harpa + "명성 만큼 깍아야함\r\n" +
        "경엽으로 " + harpa2 + "명성 만큼 깍아야함\r\n" +
        "깜엽은 " + harpa / 10 + "개\r\n" +
        "경엽은 " + harpa2 + "개\r\n";;
    document.getElementById("needrub").value = harpa / 10 * 42000 + "루블";
    document.getElementById("needruna").value = harpa2 * 10 + "루나";


}


function Calculation5() {

    if (chkRadio[1].checked == "true") {
        let retunr5 = Number(needrub5) * Number(nowExchaange) / 1000000 * 135 / 100;
        document.getElementById("return5").value = Math.round(retunr5) + "루나";
    } else {
        let retunr5 = Number(needrub5) / Number(nowExchange) * 1000000;
        document.getElementById("return5").value = Math.round(retunr5) + "루블";
    }

}
function ChangeRadio() {
    let needrub5 = Number(document.getElementById("needrub5").value);
    let nowExchange = Number(document.getElementById("nowExchange").value);
    let chkRadio1 = document.getElementById('radio');
    let chkRadio2 = document.getElementById('radio2');
    let element = document.getElementById("near");
    let element2 = document.getElementById("near2");
    if (chkRadio1.checked) {
        element.innerHTML = "구매 루블";
        element2.innerHTML = "지불 루나 (수수료포함)"
        let retunr5 = Number(needrub5) * Number(nowExchange) / 1000000 *135 / 100;
        document.getElementById("return5").value =  Math.round(retunr5)+ "루나";
    } if (chkRadio2.checked) {
        element.innerHTML = "구매 루나";
        element2.innerHTML = "지불 루블";
        let retunr5 = Number(needrub5) / Number(nowExchange) * 1000000;
        document.getElementById("return5").value = Math.round(retunr5) + "루블";
    }
}

<!--
var keydownCtrl = 0;
var keydownShift = 0;

document.onkeydown = keycheck;
document.onkeyup = uncheckCtrlShift;

function keycheck() {
    switch (event.keyCode) {
        case 123:
            event.keyCode = '';
            return false;
            break; //F12
        case 17:
            event.keyCode = '';
            keydownCtrl = 1;
            return false;
            break; //컨트롤키
    }

    if (keydownCtrl) return false;
}

function uncheckCtrlShift() {
    if (event.keyCode == 17) keydownCtrl = 0;
    if (event.keyCode == 16) keydownShift = 0;
}


function click() {
    if ((event.button == 2) || (event.button == 2))
        alert('[마우스 오른쪽 클릭] 금지 입니다.');

    }

document.onmousedown = click;
-->