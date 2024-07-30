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
    let m11 = document.getElementById("ftom").value;
    let m11a = m11/39370.1;

    document.getElementById("post11").innerHTML = ` 
    <strong>Feet to meter= ${m11a}</strong>`  
}

function submit12(){
    let m12 = document.getElementById("ftom").value;
    let m12a = m12/3.12;

    document.getElementById("post12").innerHTML = ` 
    <strong>Feet to meter= ${m12a}</strong>`  
}