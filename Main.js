let btn = document.querySelector(".btn");
let field = document.querySelector(".field");
let text = document.querySelector(".your_text");

btn.onclick = function(){
  text.textContent = field.value;
  
  
}
