const textMe = document.getElementById("texty");
const Mybtn = document.getElementById("btn");


function makeText(size){
    function changeme(){
        textMe.style.fontSize = `${size}px`;
    }
    return changeme;
}

const size100 = makeText(100);
const size200 = makeText(200);
const size300 = makeText(300);

Mybtn.addEventListener("click", size100);