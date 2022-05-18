
let Employee1= {

    firstName : "Nguyen",
    latsName: "Minh",
    age: 26,
    role: "coder",
    salary: "15000000",
    active: "true",
    email: "minh@gmail.com",
    address: "31 Thạch Cầu",
    phone: "0912 456 789"

};
let Employee2 = {

    firstName : "Phạm",
    latsName: "Hùng",
    age: 24,
    role: "coder",
    salary: "18000000",
    active: "true",
    email: "hungp@gmail.com",
    address: "72 Định Công",
    phone: "0983 668 788"

};
let Employee3= {

    firstName : "Nguyen",
    latsName: "Hưng",
    age: 26,
    role: "leader",
    salary: "25000000",
    active: "true",
    email: "hungpro@gmail.com",
    address: "27 Cầu Giấy",
    phone: "0934 456 266"

};

let chooser = parseInt(prompt("Bạn chọn làm gì?\n1.Đọc thông tin nhân viên\n2.Thêm thông tin mới cho nhân viên\n3.Sửa thông tin nhân viên\n4.Xóa thông tin nhân viên\n5.Thoát"));

switch (chooser) {
    case 1:
        let a = parseInt(prompt("Chọn nhân viên?\n1.Nhân viên 1\n2.Nhân viên 2\n3.Nhân viên 3"));
        switch (a) {
            case 1:
                console.log(Employee1);
                break;
            case 2:
                console.log(Employee2);
                break;
            case 3:
                console.log(Employee3);
                break;
            default:
                alert("Invalid");
                break;
        }
        break;
    case 2:
        let b = parseInt(prompt("Chọn nhân viên cần thêm?\n1.Nhân viên 1\n2.Nhân viên 2\n3.Nhân viên 3"));
        switch (b) {
            case 1:
                let c = prompt("Nhập thông tin cần thêm:");
                if (c === "firstName" || c === "latsName" || c === "age" || c === "role" ||
                c === "salary" || c === "actve" || c === "email" || c === "address" || c === "phone"){
                    alert("Thông tin này đã có!")
                }else{
                    Employee1.c = prompt("Nhập giá trị:");
                }
                break;
            default:
                break;
        }
        break;
    default:
        break;
}