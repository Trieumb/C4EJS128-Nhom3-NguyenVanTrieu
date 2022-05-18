
let num1 = "";

function buttonSub(num){
    const result = document.getElementById("result");
    num1 += num;
    result.value = num1;
}
function deleteNum(){
    const result = document.getElementById("result");
    num1 = "";
    result.value = num1;
}

function result(){
    const result = document.getElementById("result");
    result.value = eval(result.value);
}