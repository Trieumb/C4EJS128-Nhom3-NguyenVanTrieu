const n = parseInt(prompt("Nhập số: "));

let isPrime = true;

if (n < 1){
    isPrime = false;
}
if (n === 1){
    isPrime = false;
}
if (n > 1){
    for(let i =2; i < n ; i++){
        if (n % i === 0){
            isPrime = false;
            break;
        }
    }
}
if (isPrime){
    alert(`${n} là số nt`);
}else{
    alert(`${n} k là số nt`)
}