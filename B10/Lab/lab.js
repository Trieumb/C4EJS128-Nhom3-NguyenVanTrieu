
// let a = parseInt(prompt("Nhap tien ăn:"));
// let b = parseInt(prompt("Nhap tien ăn:"));
// function tinhTong(a, b){
//     s = a+b;
//     return s;
// }
// console.log(tinhTong(a,b));

//Viết một hàm pow (x, n) trả về x theo lũy thừa n. Hay nói cách khác, nhân x với chính nó n lần và trả về kết quả.

let x = parseInt(prompt("Nhap x:"));
let n = parseInt(prompt("Nhap n:"));

function pow(x,n){

    if (n == 1)  return x;
    else return pow(x,n-1)*x;
}

console.log(pow(x,n));