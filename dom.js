let numEl=document.getElementById("calc");
let num=0;
function increase() {
    num += 1;
    numEl.innerText = num;
}
function decrease(){
    num -= 1;
    numEl.innerText=num;
}