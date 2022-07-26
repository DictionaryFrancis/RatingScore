//-------FOR------
let ratingButtons = document.querySelector(".rating-btn")
let ratingValue
let buttons = ratingButtons.getElementsByClassName("btn")
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function () {
        let clickedButtons = document.getElementsByClassName("clicked")

        if (clickedButtons.length > 0) {
            clickedButtons[0].classList.remove("clicked")
        }

        let currentButton = this
        currentButton.classList.add("clicked")
        ratingValue = currentButton.textContent
    })
}

// //-------------------Submit
let submit = document.querySelector("#submit-btn")
let teste = document.querySelector(".test")
submit.addEventListener("click",function(){
    teste.textContent = ratingValue + " out of 5"
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
