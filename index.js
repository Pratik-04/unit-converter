function submit1(){
    let m1 = document.getElementById("mtok").value;
    let m1a = m1/1000;

    document.getElementById("post1").innerHTML = `
    <strong>Meter to Kilometer = ${m1a}</strong>`
}

function submit2(){
    let m2 = document.getElementById("mtof").value;
    let m2a = m2*3.28048;

    document.getElementById("post2").innerHTML = `
    <strong>Meter to Feet = ${m2a}</strong>`
}


function submit3(){
    let m3 = document.getElementById("mtoi").value;
    let m3a = m3*39.3701;

    document.getElementById("post3").innerHTML = `
    <strong>Meter to Inchs= ${m3a}</strong>`
}    

function submit4(){
    let m4 = document.getElementById("ktom").value;
    let m4a = m4*1000;

    document.getElementById("post4").innerHTML = `
    <strong>Kilometer to Meter= ${m4a}</strong>`
}

function submit5(){
    let m5 = document.getElementById("ktof").value;
    let m5a = m5*3280.84;

    document.getElementById("post5").innerHTML = ` 
    <strong>Kilometer to Feet= ${m5a}</strong>`
}

function submit6(){
    let m6 = document.getElementById("ktoi").value;
    let m6a = m6*39370.1;

    document.getElementById("post6").innerHTML = ` 
    <strong>Kilometer to inchs= ${m6a}</strong>`  
}

function submit7(){
    let m7 = document.getElementById("ftom").value;
    let m7a = m7/3.28084;

    document.getElementById("post7").innerHTML = ` 
    <strong>Feet to meter= ${m7a}</strong>`  
}

function submit8(){
    let m8 = document.getElementById("ftok").value;
    let m8a = m8/3280.84;

    document.getElementById("post8").innerHTML = ` 
    <strong>Feet to Kilometer= ${m8a}</strong>`  
}

function submit9(){
    let m9 = document.getElementById("ftoi").value;
    let m9a = m9*12;

    document.getElementById("post9").innerHTML = ` 
    <strong>Feet to inchs= ${m9a}</strong>`  
}

function submit10(){
    let m10 = document.getElementById("itom").value;
    let m10a = m10/39.3701;

    document.getElementById("post10").innerHTML = ` 
    <strong>Feet to meter= ${m10a}</strong>`  
}

function submit11(){
    let m11 = document.getElementById("itok").value;
    let m11a = m11/39370.1;

    document.getElementById("post11").innerHTML = ` 
    <strong>Feet to meter= ${m11a}</strong>`  
}

function submit12(){
    let m12 = document.getElementById("itof").value;
    let m12a = m12/3.12;

    document.getElementById("post12").innerHTML = ` 
    <strong>Feet to meter= ${m12a}</strong>`  
}

function submit13(){
    let m13 = document.getElementById("kgtog").value;
    let m13a = m13*1000;

    document.getElementById("post13").innerHTML = ` 
    <strong>Kilogram to grams= ${m13a}</strong>` 
}

function submit14(){
    let m14 = document.getElementById("kgtomg").value;
    let m14a = m14*1000000;

    document.getElementById("post14").innerHTML = ` 
    <strong>Kilogram to Milligram= ${m14a}</strong>` 
}

function submit15(){
    let m15 = document.getElementById("kgtop").value;
    let m15a = m15*2.20462;

    document.getElementById("post15").innerHTML = ` 
    <strong>Kilogram to Pound= ${m15a}</strong>` 
}

function submit16(){
    let m16 = document.getElementById("gtokg").value;
    let m16a = m16/1000;

    document.getElementById("post16").innerHTML = ` 
    <strong>Gram to Kilogram= ${m16a}</strong>` 
}

function submit17(){
    let m17 = document.getElementById("gtomg").value;
    let m17a = m17*1000;

    document.getElementById("post17").innerHTML = ` 
    <strong>Gram to Milligram= ${m17a}</strong>` 
}

function submit18(){
    let m18 = document.getElementById("gtop").value;
    let m18a = m18/453.592;

    document.getElementById("post18").innerHTML = ` 
    <strong>Gram to Pound= ${m18a}</strong>` 
}

function submit19(){
    let m19 = document.getElementById("mgtokg").value;
    let m19a = m19/100000;

    document.getElementById("post19").innerHTML = ` 
    <strong>Milligram to Kilogram= ${m19a}</strong>` 
}

function submit20(){
    let m20 = document.getElementById("mgtog").value;
    let m20a = m20/1000;

    document.getElementById("post20").innerHTML = ` 
    <strong>Milligram to Gram= ${m20a}</strong>` 
}

function submit21(){
    let m21 = document.getElementById("mgtop").value;
    let m21a = m21/453592;

    document.getElementById("post21").innerHTML = ` 
    <strong>Gram to Pound= ${m21a}</strong>` 
}

function submit22(){
    let m22 = document.getElementById("ptokg").value;
    let m22a = m22/2.20462;

    document.getElementById("post22").innerHTML = ` 
    <strong>Pound to Kilogram= ${m22a}</strong>` 
}

function submit23(){
    let m23 = document.getElementById("ptog").value;
    let m23a = m23*453.592;

    document.getElementById("post23").innerHTML = ` 
    <strong>Pound to Gram= ${m23a}</strong>` 
}

function submit24(){
    let m24 = document.getElementById("ptomg").value;
    let m24a = m24*453592;

    document.getElementById("post24").innerHTML = ` 
    <strong>Pound to Milligram= ${m24a}</strong>` 
}
