let propulsion = document.querySelector(".bouton")
let aterrissage = document.querySelector(".bouton3")
let countdown = document.querySelector(".compt")
let rocket = document.querySelector(".rocket")
let satellite = document.querySelector(".satellite")
let minirock = document.querySelector(".minirock")
let minisat = document.querySelector(".minisat")
let dot = document.querySelector(".dot")
let depart = 3
let number = depart
let bool =false

propulsion.addEventListener(
  'click',
  function(){
    bool=true
    setInterval(decollage, 700)
  },false )

aterrissage.addEventListener(
'click',
function(){
    rocket.style.transform = "translateY(0px)"
    rocket.style.transition ="all 4s"
    dot.style.transform = "translateY(0px)"
    dot.style.transition ="all 4s"
    number=depart
    countdown.innerHTML=number

},false )

function decollage() {
    if(bool==true){
        if (number > 0) {
            countdown.innerHTML= (number -=1)


        } else {

            rocket.style.transform = "translateY(-700px)"
            rocket.style.transition ="all 1s"
            dot.style.transform = "translateY(-700px)"
            dot.style.transition ="all 1s"
            bool=false


        }
    }
}
minisat.addEventListener(
    'click',
    function(){
        rocket.src = "images/satellite.png"
        rocket.style.width = "500px"
        rocket.style.margin ="auto"
    },false )

minirock.addEventListener(
    'click',
    function(){
        rocket.src = "images/rocket.png"
        rocket.style.width = "666px"
        rocket.style.height = "664px"
        rocket.style.margin ="auto"



    },false )
