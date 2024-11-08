function sumFunc(){
    let num1 = parseFloat(document.getElementById("num3").value);
    let num2 = parseFloat(document.getElementById("num4").value);

    let sum = num1 + num2;
    
    document.getElementById("result2").value = sum;
}


function equalOperator(params) {
    let num1 = document.getElementById("firstnum").value;
    let num2 = document.getElementById("secondnum").value;
    let opt = document.getElementById("operation").value;


    let sum = num1 + opt + num2;
    
    document.getElementById("result3").value = eval(sum);
}