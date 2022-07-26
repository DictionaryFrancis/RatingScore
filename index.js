//-------FOR------
let submit = document.querySelector("#submit-btn")
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
        submit.disabled = false
    })
}

// //-------------------Submit
let container = document.querySelector("#container")
submit.addEventListener("click",function(){
    container.innerHTML = `
    <img class="" src="illustration.svg" alt="star image">

    <p>You selected ${ratingValue} out of 5</p> 

    <h1>Thank you!</h1>

    <p>
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
    </p>
    `
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
