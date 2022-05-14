let day = parseInt(prompt("Nhập ngày"));
let month = parseInt(prompt("Nhập tháng"));
let year = parseInt(prompt("Nhập năm"));
let arr = [1,3,5,7,8,10,12];
if (day < 0 || day > 31) {
    alert("Ngày này không tồn tại"); }
else if (month > 12 || month < 0) {
    alert("Ngày này không tồn tại");
} else if(year % 4===0 || year%400 === 0){
    if (month == 2) {
        if (day > 29) {
            alert('Ngày này không tồn tại')
        }
        else if(day == 29) {
            alert(` Ngày ${day} Tháng ${month} Năm ${year}`);
            alert(`Ngày tiếp theo là: \n Ngày 1 Tháng 3 Năm ${year}`)
        } else if (day >0 || day <= 28) {
            alert(`Ngày ${day} Tháng ${month} Năm ${year}`);
            alert(`Ngày tiếp theo là: \n Ngày ${day+1} Tháng ${month} Năm ${year}`)
        }
    } else if (arr.includes(month)) {
        if (day == 31) {
           if(month == 12) {
               alert(` Ngày ${day} Tháng ${month} Năm ${year}`);
               alert(`Ngày tiếp theo là : \n Ngày 1 Tháng 1 Năm ${year + 1}`);
           } else {
               alert(` Ngày ${day} Tháng ${month} Năm ${year}`);
               alert(` Ngày tiếp theo là: \n Ngày 1 Tháng ${month + 1} Năm ${year}`);
           }
        } else {
            alert(` Ngày ${day} Tháng ${month} Năm ${year}`);
            alert(`Ngày tiếp theo là: Ngày ${day+1} Tháng ${month} Năm ${year}`)
        }
    }
} else {
    if (month == 2) {
        if (day > 28) {
            alert('Ngày này không tồn tại')
        }
        else if(day == 28) {
            alert(` Ngày ${day} Tháng ${month} Năm ${year}`);
            alert(`Ngày tiếp theo là: \n Ngày 1 Tháng 3 Năm ${year}`)
        } else if (day >0 || day < 28) {
            alert(`Ngày ${day} Tháng ${month} Năm ${year}`);
            alert(`Ngày tiếp theo là: \n Ngày ${day+1} Tháng ${month} Năm ${year}`)
        }
    } else if (arr.includes(month)) {
        if (day == 31) {
           if(month == 12) {
               alert(` Ngày ${day} Tháng ${month} Năm ${year}`);
              alert(`Ngày tiếp theo là : \n Ngày 1 Tháng 1 Năm ${year + 1}`);
           } else {
               alert(` Ngày ${day} Tháng ${month} Năm ${year}`);
              alert.log(` Ngày tiếp theo là: \n Ngày 1 Tháng ${month + 1} Năm ${year}`);
           }
        } else {
            alert(` Ngày ${day} Tháng ${month} Năm ${year}`);
            alert(`Ngày tiếp theo là: Ngày ${day+1} Tháng ${month} Năm ${year}`)
        }
    }
};