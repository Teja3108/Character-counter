const textarea = document.getElementById("textarea");
const total = document.getElementById("total-counter");
const remaining = document.getElementById("remaining-counter");

textarea.addEventListener("keyup", () =>{

    update();
} )

function update(){  

    total.innerHTML = textarea.value.length;

    remaining.innerHTML = textarea.getAttribute("maxlength") - textarea.value.length;


}