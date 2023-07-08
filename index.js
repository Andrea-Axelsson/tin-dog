import dogs from './data.js'
import Dog from './Dog.js'

let dogArray = ["rex", "bella", "teddy", "end"]
let dogMatch = getNewDog()
let isWaiting = false


// Buttons
const likeButton = document.getElementById("like-button")
const dislikeButton = document.getElementById("dislike-button")
const logoButton = document.getElementById("logo-button")
const dislikeBadge = document.getElementById("dislike-badge")
const likeBadge = document.getElementById("like-badge")

likeButton.addEventListener('click', likeDog)
dislikeButton.addEventListener('click', dislikeDog)
logoButton.addEventListener('click', refresh)

function refresh(){
  setTimeout(() => {
  document.location.reload();
}, 1000);
}


function getNewDog() {
  const nextDogData = dogs[dogArray.shift()]
  return nextDogData ? new Dog(nextDogData) : {}
}

function dislikeDog() {
  if (isWaiting) return; // Ignorera klick om vänteläge är aktivt

  dogMatch.hasBeenSwiped = true

  if (dogMatch.hasBeenSwiped) {
    dislikeBadge.style.display = 'flex'
    if (dogArray.length > 0) {
      isWaiting = true; // Aktivera vänteläge
      setTimeout(() => {
        dogMatch = getNewDog()
        render()
        dogMatch.hasBeenSwiped = false
        dislikeBadge.style.display = 'none'
        isWaiting = false; // Avaktivera vänteläge efter tidsintervall
      }, 1000)
    }else{
        isWaiting = true
        dislikeBadge.style.display = 'none'
    }
  }
}

function likeDog() {
  if (isWaiting) return; // Ignorera klick om vänteläge är aktivt

  dogMatch.hasBeenLiked = true

  if (dogMatch.hasBeenLiked) {
    likeBadge.style.display = 'flex'
    if (dogArray.length > 0) {
      isWaiting = true; // Aktivera vänteläge
      setTimeout(() => {
        dogMatch = getNewDog()
        render()
        dogMatch.hasBeenLiked = false
        likeBadge.style.display = 'none'
        isWaiting = false; // Avaktivera vänteläge efter tidsintervall
      }, 1000)
    }else{
        isWaiting = true
        likeBadge.style.display = 'none'
    }
  }
}

function render() {
  document.getElementById('dog-match').innerHTML = dogMatch.getDogHtml()
}

render()
