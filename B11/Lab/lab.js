// lab 1
const test = document.getElementById("test-one");
test.innerHTML= "Changed!";

// lab 2

let changeColor = document.getElementById("change-color");
function changeContent(){
    let testTwo = document.getElementById("input-test").value;
    test.innerHTML= testTwo;
}

function changeBackground(){
    test.style.color = "red";
}


// lab 3
const list = document.getElementById("list-item");

function deleteCategory(){
    list.removeChild(list.firstChild);
}
