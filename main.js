// var seconddiv = document.getElementById('orangediv')

// poping an alert when clicked
// seconddiv.addEventListener('click', function(){
    // alert('orange div is clicked')
// })


// changing the element background
// seconddiv.style.background = "blue"


// console.log('welcome, thejay, this works')

// console.log(document)

// alert('Welcome to my first day with javascript')

// document.querySelector(".right-holder").innerHTML = "supper cool it works"

// function poosomething() {
    // alert('Welcome, box 1 is clicked')
// }

var rightdiv = document.querySelector('#right-holder')
// console.log(rightdiv)


// function changetoorange() {
//     rightdiv.style.background = '#ffa800'

// }
// function changetochocolate() {
//     rightdiv.style.background = 'chocolate'

// }
// function changetoskyblue() {
//     rightdiv.style.background = 'skyblue'

// }

function printsomething(yourwriteup){
    console.log(yourwriteup)
}
printsomething('what my name')
printsomething('call my name')
printsomething('who is your daddy')





function ChangeColor(particularcolor) {
    rightdiv.style.background = particularcolor
}




var hamburgermenuholder = document.querySelector('.menubar-holder')

console.log(hamburgermenuholder)


function changeclass() {
    hamburgermenuholder.classList.toggle('purplemenu')
}
