const basket1 = document.querySelector("#b1")
const basket2 = document.querySelector("#b2")
console.log( Number(basket1.textContent))

const leftBtn = document.querySelector(".left")
.addEventListener("click", function(){
basket1.textContent = `${Number(basket1.textContent)+10}`
basket2.textContent = `${Number(basket2.textContent)-10}`
})
const rightBtn = document.querySelector(".right")
.addEventListener("click", function(){
basket2.textContent = `${Number(basket2.textContent)+10}`
basket1.textContent = `${Number(basket1.textContent)-10}`
})