
let second = parseInt(prompt("Nhập vào số giây:"));
let minute , hour;

if(second <60){ 
    minute = 0;
    hour = 0;
    alert(`${hour}:${minute}:${second}`);
}else if (second >= 60){
    minute = Math.floor(second/60);
    second = second % 60;
    if(minute <60){
        hour = 0;
        alert(`${hour}:${minute}:${second}`);
    }else if(minute >=60){
        hour = Math.floor(minute/60);
        minute = minute % 60;
        alert(`${hour}:${minute}:${second}`);
    }
}



