let user = document.getElementById("uname");
let pass = document.getElementById("pword");
let login = document.getElementById("submit");

user.oninvalid = function(event){
    event.target.setCustomValidity("nhập đúng định dạng mail!");
}
pass.oninvalid = function(event){
    event.target.setCustomValidity('Password phải gồm số,chữ hoa,chữ thường và có 8 kí tự trở lên!');
}

login.addEventListener("submit", function(event){
    if(user.value == "trieuhl@gmail.com" && pass.value == "Hab123456"){
        alert("Đăng nhập thành công");
    }else{
        alert("Đăng nhập thất bại");
    }
});


