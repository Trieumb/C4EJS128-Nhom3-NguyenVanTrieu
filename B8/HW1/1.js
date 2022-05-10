const operator = prompt("Nhập phép toán cần tính(+ - * /)");
const a = parseInt(prompt("Nhập số thứ nhất:"));
const b = parseInt(prompt("Nhập số thứ hai:"));

let result;

// if (operator === "+"){
//     result = a+b;
// }else if (operator === "-"){
//     result = a-b;
// }else if (operator === "*"){
//     result = a*b;
// }else if (operator === "/"){
//     result = a/b;
// }else{
//     alert("Invalid!")
// }
//  alert(result);

switch (operator) {
    case "+":
        result = a+b;
        break;
    case "-":
        result = a-b;
        break;
    case "*":
        result = a*b;
        break;
    case "/":
        result = a/b;
        break;
    default:
        alert("Invalid!")
        break;
}
alert(result);