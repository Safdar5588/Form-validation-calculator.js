

document.getElementById("but").addEventListener("click", change)
function change() {

    document.querySelectorAll("#heading")[0].innerHTML = " <h1>PHP</h1>"
    document.querySelectorAll("h1")[0].removeAttribute("class")
    document.querySelector("h1").setAttribute("class", "first")

}
function green() {

    document.querySelector("h1").setAttribute("class", "last")
}



function remove() {

    document.querySelectorAll("h1")[0].removeAttribute("class")

}


function para() {

    document.querySelectorAll(".sub-heading")[0].innerHTML = "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore nobis dolores amet officiis fuga nihil soluta magni blanditiis, non voluptas. Amet sunt dolor doloribus ab facilis saepe, magni reiciendis minima!</p>"

}

function main() {

    document.querySelector(".main").innerText = " "

}


function valid() {
    let v;
    v = document.forms["sub"]["name"].value
    if (v == "") {
        alert("Field is Empty")
    }
}

// Valid number in form

function correct(event) {
    event.preventDefault();
    let c = document.forms["check"]["input"].value
    let contant = "";
    if (isNaN(c) || c >= 10 || c < 1 || c == "") {
        contant = " Number is invalid"
    }
    else {
        contant = "Number is valid"
    }
    let dom = document.getElementsByClassName("ans")[0].innerText = contant;
}

// Counter

let count = document.getElementById("counter")

count.addEventListener("click", addcounting)

let counting = 0;

function addcounting() {
    counting++;
    document.getElementsByClassName("show")[0].innerText = "Count " + counting;
}

let set = document.getElementById("reset").addEventListener("click", reset)

function reset() {

    counting = 0;
    document.getElementsByClassName("show")[0].innerText = "Count " + counting;

}




// function again(){
//     let a = document.querySelector("h1")
//     a.style.backgroundColor= "green"
//     a.removeAttribute("class")
//     document.querySelector("h1").setAttribute("class","last")
// }

// function red(){
//     document.querySelector("body").style.backgroundColor= " red";
//     document.querySelector(".red").style.color= "red";

// }
// function black(){
//     document.querySelector("body").style.backgroundColor= " black";
//     document.querySelector(".black").style.color= "black";

// }
// function yellow(){
//     document.querySelector("body").style.backgroundColor= "yellow";
//     document.querySelector(".yellow").style.color= "yellow";

// }
// function pink(){
//     document.querySelector("body").style.backgroundColor= "pink";
//     document.querySelector(".pink").style.color= "pink";

// }
// function orange(){
//     document.querySelector("body").style.backgroundColor= "orange";
//     document.querySelector(".orange").style.color= "orange";

// }
// function blue(){
//     document.querySelector("body").style.backgroundColor= "blue";
//     document.querySelector(".blue").style.color= "blue";

// }
// function green(){
//     document.querySelector("body").style.backgroundColor = " green";
//     document.querySelector(".green").style.color= " green";
//     // document.querySelector(".green").innerText = " "
// }









// Calculator


let display = document.getElementsByClassName("answer")[0]

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    display.value = eval(display.value);
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1)
}







// Form Validation 



function complete(event) {
    event.preventDefault();
    let fone = document.getElementsByClassName("f1")[0].value;

    let ftwo = document.getElementsByClassName("f2")[0].value;

    let fthree = document.getElementsByClassName("f3")[0].value;

    let ffour = document.getElementsByClassName("f4")[0].value;

    if (fone == "" || ftwo == "" || fthree == "" || ffour == ""){

        alert("Please fill all field data");

    }
    else if (ftwo.length < 11 || ftwo.length > 11){

        alert("number must be 11 character");

    }
    else if (isNaN(ftwo)){

        alert("only fill a number in phone number , character is not allowed");

    }
    else if (fthree.trim() !== ffour.trim()){

        alert("password is not same");
    
    }

}




// DOM create element ,remove element , replace element


let element = document.createElement("li");
element.className = "created-list"
element.id = "created-id";

element.innerText = " last list"

let add = document.querySelector("ul.unorder-list");

add.appendChild(element);

let element2 = document.createElement("h2");

let text = document.createTextNode("replacement heading");

element2.appendChild(text)

element.replaceWith(element2)

let removing = document.getElementsByClassName("unorder-list")[0]

removing.removeChild(document.getElementsByClassName("second")[0])

let chang  = document.getElementById("heading")
let changable = document.createElement("h1")
let content = document.createTextNode("Nothing")
changable.appendChild(content)
changable.id = "heading"
changable.className = "last"
let parent = document.getElementsByClassName("main")[0]
parent.replaceChild(changable , document.getElementById("heading"))

function createElement(html){
    let element = document.createElement("div");
    element.innerHTML = html;
    return element.firstChild;
}

let newElement = createElement("<h1>Hello, world!</h1>");

document.getElementsByTagName("div")[1].appendChild(newElement)



