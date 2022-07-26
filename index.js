//---Buttons Clicked Color---//
let btn1Color = document.querySelector("#btn-1")
let btn2Color = document.querySelector("#btn-2")
let btn3Color = document.querySelector("#btn-3")
let btn4Color = document.querySelector("#btn-4")
let btn5Color = document.querySelector("#btn-5")  
let count2 = document.querySelector("#btn-2").innerHTML
let count3 = document.querySelector("#btn-3").innerHTML
let count4 = document.querySelector("#btn-4").innerHTML
let count5 = document.querySelector("#btn-5").innerHTML


btn1Color.addEventListener("click", function(){
    btn1Color.classList.add("clicked")
    let counting = document.querySelector("#btn-1").innerHTML
    console.log(counting)
})
btn2Color.addEventListener("click", function(){
    btn2Color.classList.add("clicked")
    let counting = document.querySelector("#btn-2").innerHTML
    console.log(counting)
})
btn3Color.addEventListener("click", function(){
    btn3Color.classList.add("clicked")
    let counting = " " 
    counting = count3.value
})
btn4Color.addEventListener("click", function(){
    btn4Color.classList.add("clicked")
    let counting = " " 
    counting = count4.value
})
btn5Color.addEventListener("click", function(){
    btn5Color.classList.add("clicked")
    let counting = " " 
    counting = count5.value
})

//-------------------Submit
let submit = document.querySelector("#submit-btn")
let teste = document.querySelector(".test")
submit.addEventListener("click",function(){
    teste.textContent = counting + " out of 5"
})


// let submit = document.querySelector("#submit-btn")
// submit.addEventListener("click",function(){

// })






//rating = 0

// let getRating = () => {
//     return rating
// }
// let setRating = (picked) => {
//     rating = picked
// }

// let submitRating = () => {
//     if (rating ===0) {
//         document.
//     }
