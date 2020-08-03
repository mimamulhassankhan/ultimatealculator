const display = document.getElementById('display_area');
let operation = 0;
let num1 = 0.00;
let ans = 0.00;
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor1 = "rgb(" + x + "," + y + "," + z + ")";
    var bgColor2 = "rgb(" + z + "," + x + "," + y + ")";
    var linerBack = "linear-gradient(45deg, " + bgColor1 + "," + bgColor2 + ")";
    console.log(linerBack);

    document.body.style.backgroundImage = linerBack;
}

random_bg_color();

function btnPlusMinus(){
    let displayedNumber = parseInt(display.innerText);
    if(displayedNumber<0){
        display.innerText = display.innerText.substr(1);
    }
    else if(displayedNumber>0){
        display.innerText = '-' + display.innerText;
    }
}

function valueAddToDisplay(value){
    if(display.innerText == '0' && value == '0'){
        return;
    }
    display.innerText = display.innerText + value;
}

function btnDelete(){
    display.innerText = display.innerText.substr(0,display.innerText.length -1);
    if(display.innerText == ""){
        display.innerText = '0';
    }
}

function btnOperation_Clicked(operator){
    num1 = parseFloat(display.innerText);
    display.innerText = '0';
    display.focus();
    if(operator == 'plus'){
        operation = 1;
    }
    if(operator == 'minus'){
        operation = 2;
    }
    if(operator == 'mul'){
        operation = 3;
    }
    if(operator == 'divide'){
        operation = 4;
    }
    
}

function btnDot_Clicked(){
    if(!display.innerText.includes('.')){
        display.innerText = display.innerText + '.';
        return;
    }
}

function btnEqual_Clicked(){
    switch(operation){
        case 1:
            ans = num1 + parseFloat(display.innerText);
            display.innerText = ans.toFixed(2);
            break;
        case 2:
            ans = num1 - parseFloat(display.innerText);
            display.innerText = ans.toFixed(2);
            break;
        case 3:
            ans = num1 * parseFloat(display.innerText);
            display.innerText = ans.toFixed(2);
            break;
        case 4:
            ans = num1 / parseFloat(display.innerText);
            display.innerText = ans.toFixed(2);
            break;
    }
}

function btnC_Clicked(){
    display.innerText = '0';
    num1 = 0;
    operation = 0;
}