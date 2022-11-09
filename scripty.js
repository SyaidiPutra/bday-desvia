let bg1 = document.querySelector('#bg1')
let bg2 = document.querySelector('#bg2')
let hero = document.querySelector('#hero')
let guit = document.querySelector('#guit')
let bata = document.querySelector('#bata')


document.addEventListener('scroll', function () {
    var val = window.scrollY
    
    bata.style.bottom = -80 - (val * 0.15) + "px"
    hero.style.bottom = -80 - (val * 0.3) + "px"
    bg2.style.top = -10 + (val * 0.05) + "px"
    bg1.style.top = -10 + (val * 0.2) + "px"
    guit.style.bottom = -80 + (val * 0.2) + "px"
    guit.style.right = (val * 0.2) + "px"

})