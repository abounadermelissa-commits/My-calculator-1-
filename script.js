const display= document.getElementById("display")
const result=document.getElementById("result")

function appendToDisplay (input) {
  display.innerHTML=display.innerHTML+input
}
function Clear () {
display.innerHTML=""
result.innerHTML=""
}
function Delete () {
  display.innerHTML=display.innerHTML.slice(0,-1)
  result.innerHTML=""
}
function Calculate () {
  try {
    result.innerHTML=eval(display.innerHTML)
  }
  catch {
    display.innerHTML="ERROR"
  }
}

document.getElementById("delete").addEventListener("click",Delete)
document.getElementById("clear").addEventListener("click",Clear)
document.getElementById("equal").addEventListener("click",Calculate)
const digits=document.querySelectorAll(".digit")
  digits.forEach(button => {
    button.addEventListener("click",function(){
    appendToDisplay(button.innerHTML)
  });
})
