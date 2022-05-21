
let change_my_life = document.getElementById("change_my_life");
function change(){

    document.getElementById("content").innerHTML = "Tôi giàu sau khi học lập trình tại mindX";
}

change_my_life.addEventListener("click", change);

let nope = document.getElementById("nope");

function setNope(){
    nope.style.backgroundColor = "#ff0000";
    nope.style.color = "#ffffff";
}
nope.addEventListener("mouseenter", setNope);

function fistNope(){
    nope.style.backgroundColor = "";
    nope.style.color = "black";
}
nope.addEventListener("mouseleave",fistNope);
function question(){
    alert("Bạn có chắc chắn không muốn thay đổi cuộc đời bạn?");
    nope.innerHTML = "Tôi rất tiếc!"
}
nope.addEventListener("click",question);