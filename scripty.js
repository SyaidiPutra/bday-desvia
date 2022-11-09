let bg1 = document.querySelector('#bg1')
let bg2 = document.querySelector('#bg2')
let hero = document.querySelector('#hero')
let guit = document.querySelector('#guit')
let bata = document.querySelector('#bata')
let blockKon = document.querySelector('#blockKon')
let awak = document.querySelector('body')


document.addEventListener('scroll', function () {
    var val = window.scrollY
    
    bata.style.bottom = -80 - (val * 0.15) + "px"
    hero.style.bottom = -80 - (val * 0.3) + "px"
    bg2.style.top = -10 + (val * 0.05) + "px"
    bg1.style.top = -10 + (val * 0.2) + "px"
    guit.style.bottom = -80 + (val * 0.2) + "px"
    guit.style.right = (val * 0.2) + "px"

})

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    blockKon.style.display = "block"
    awak.style.overflow = "hidden"
    document.querySelector('.bamper').style.display = "none"
    document.querySelector('.div-1').style.display = "none"
    document.querySelector('#ucapan').style.display = "none"
    document.querySelector('#text').style.display = "none"
   }