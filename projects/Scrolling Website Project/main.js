let stars = document.getElementById('stars') // getElementByIt is for Id
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let nouvil = document.querySelector('.nouvil') // querySelector is for class, and don't forget the dot before class name

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px'
    moon.style.top = value * 4 + 'px' // make it the moon don't go down too much from the css in main
    mountains3.style.top = value * 2 + 'px'
    mountains4.style.top = value * 1.5 + 'px'
    river.style.top = value + 'px'
    boat.style.top = value  + 'px'
    boat.style.left = value * 3 + 'px'
    nouvil.style.fontSize = value + 'px'
    if(scrollY >= 70){
        nouvil.style.fontSize = 70 + 'px'
        nouvil.style.position = "fixed"
        if(scrollY >= 531){
            nouvil.style.display = "none"
        }
        else{
            nouvil.style.display = "block"
        }
        if(scrollY >= 152){
            document.querySelector('.main').style.background ="linear-gradient(#376281 , #10001f)"
        }
        else{
            document.querySelector('.main').style.background= "linear-gradient(#200016,#10001f)"
        }

    }
}