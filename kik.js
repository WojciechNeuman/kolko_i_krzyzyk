var i = 0, k = 0, m = 0; 
var j1 = 0, x1 = 0, o1 = 0; 
var j2 = 0, x2 = 0, o2 = 0;
var j3 = 0, x3 = 0, o3 = 0;
var j4 = 0, x4 = 0, o4 = 0;
var j5 = 0, x5 = 0, o5 = 0;
var j6 = 0, x6 = 0, o6 = 0;
var j7 = 0, x7 = 0, o7 = 0;
var j8 = 0, x8 = 0, o8 = 0;
var j9 = 0, x9 = 0, o9 = 0;
function zmiana(){
    i = 0;
}
function zmiana1(){
    i = 1;
}
function klik1()
{
    if (i % 2 === 1 && j1 === 0 && m === 0) {
        document.getElementById("kratka1").innerHTML='<i class=\"icon-cancel-outline\"></i>';
        x1 = 1; j1 = 1;
        k++; i++;
    }
    if (i % 2 === 0 && j1 === 0 && m === 0) {
        document.getElementById('kratka1').innerHTML='<i class="icon-circle-empty"></i>';
        o1 = 1; j1 = 1;
        k++; i++;
    }
    sprawdz();

}
function klik2()
{
    if (i % 2 == 1 && j2 == 0 && m === 0) {
        document.getElementById('kratka2').innerHTML='<i class=\"icon-cancel-outline\"></i>';
        x2 = 1; j2 = 1;
        i++; k++;
    }
    if (i % 2 == 0 && j2 == 0 && m === 0) {
        document.getElementById('kratka2').innerHTML='<i class="icon-circle-empty"></i>';
        o2 = 1;
        i++; k++;
        j2 = 1;
    }   
    sprawdz();
}
function klik3()
{
    if (i % 2 == 1 && j3 == 0 && m === 0) {
        document.getElementById('kratka3').innerHTML='<i class=\"icon-cancel-outline\"></i>';
        x3 = 1;
        i++; k++;
        j3 = 1;
    }
    if (i % 2 == 0 && j3 == 0 && m === 0) {
        document.getElementById('kratka3').innerHTML='<i class="icon-circle-empty"></i>';
        o3 = 1;
        i++; k++;
        j3 = 1;
    }
    sprawdz();
}
function klik4()
{
    if (i % 2 == 1 && j4 == 0 && m === 0) {
        document.getElementById('kratka4').innerHTML='<i class=\"icon-cancel-outline\"></i>';
        x4 = 1;
        i++; k++;
        j4 = 1;
    }
    if (i % 2 == 0 && j4 == 0 && m === 0) {
        document.getElementById('kratka4').innerHTML='<i class="icon-circle-empty"></i>';
        o4 = 1;
        i++; k++;
        j4 = 1;
    }
    sprawdz();
}
function klik5()
{
    if (i % 2 == 1 && j5 == 0 && m === 0) {
        document.getElementById('kratka5').innerHTML='<i class=\"icon-cancel-outline\"></i>';
        x5 = 1;
        i++; k++;
        j5 = 1;
    }
    if (i % 2 == 0 && j5 == 0 && m === 0) {
        document.getElementById('kratka5').innerHTML='<i class="icon-circle-empty"></i>';
        o5 = 1;
        i++; k++;
        j5 = 1;
    }
    sprawdz();
}
function klik6()
{
    if (i % 2 == 1 && j6 == 0 && m === 0) {
        document.getElementById('kratka6').innerHTML='<i class=\"icon-cancel-outline\"></i>';
        x6 = 1;
        i++; k++;
        j6 = 1;
    }
    if (i % 2 == 0 && j6 == 0 && m === 0) {
        document.getElementById('kratka6').innerHTML='<i class="icon-circle-empty"></i>';
        o6 = 1;
        i++; k++;
        j6 = 1;
    }
    sprawdz();
}
function klik7()
{
    if (i % 2 == 1 && j7 == 0 && m === 0) {
        document.getElementById('kratka7').innerHTML='<i class=\"icon-cancel-outline\"></i>';
        x7 = 1;
        i++; k++;
        j7 = 1;
    }
    if (i % 2 == 0 && j7 == 0 && m === 0) {
        document.getElementById('kratka7').innerHTML='<i class="icon-circle-empty"></i>';
        o7 = 1;
        i++; k++;
        j7 = 1;
    }
    sprawdz();
}
function klik8()
{
    if (i % 2 == 1 && j8 == 0 && m === 0) {
        document.getElementById('kratka8').innerHTML='<i class=\"icon-cancel-outline\"></i>';
        x8 = 1;
        i++; k++;
        j8 = 1;
    }
    if (i % 2 == 0 && j8 == 0 && m === 0) {
        document.getElementById('kratka8').innerHTML='<i class="icon-circle-empty"></i>';
        o8 = 1;
        i++; k++;
        j8 = 1;
    }
    sprawdz();
}
function klik9()
{
    if (i % 2  ==1 && j9 == 0 && m === 0) {
        document.getElementById("kratka9").innerHTML='<i class=\"icon-cancel-outline\"></i>';
        x9 = 1;
        i++; k++;
        j9 = 1;
    }
    if (i % 2 == 0 && j9 == 0 && m === 0) {
        document.getElementById('kratka9').innerHTML='<i class="icon-circle-empty"></i>';
        o9 = 1;
        i++; k++;
        j9 = 1;
    }
    sprawdz();
}
function sprawdz() {
    if (((x9 === 1) && (x8 === 1) && (x7 === 1)) || ((x4 === 1) && (x5 === 1) && (x6 === 1)) || ((x1 === 1) && (x2 === 1) && (x3 === 1)) || ((x1 === 1) && (x5 === 1) && (x9 === 1)) || ((x3 === 1) && (x5 === 1) && (x7 === 1)) || ((x1 === 1) && (x4 === 1) && (x7 === 1)) || ((x2 === 1) && (x5 === 1) && (x8 === 1)) || ((x3 === 1) && (x6 === 1) && (x9 === 1))) {
        document.getElementById("win").innerHTML="WYGRYWA KRZYŻYK!";
        document.getElementById("plansza").style.backgroundColor="#666";
        m = 1;
    }
    
    else if (((o9 === 1) && (o8 === 1) && (o7 === 1)) || ((o4 === 1) && (o5 === 1) && (o6 === 1)) || ((o1 === 1) && (o2 === 1) && (o3 === 1)) || ((o1 === 1) && (o5 === 1) && (o9 === 1)) || ((o3 === 1) && (o5 === 1) && (o7 === 1)) || ((o1 === 1) && (o4 === 1) && (o7 === 1)) || ((o2 === 1) && (o5 === 1) && (o8 === 1)) || ((o3 === 1) && (o6 === 1) && (o9 === 1))) {
        document.getElementById("win").innerHTML="WYGRYWA KÓŁKO!";
        document.getElementById("plansza").style.backgroundColor="#666";
        m = 1;
    }
    
    else if (k === 9) document.getElementById("win").innerHTML="MAMY REMIS!";
}
