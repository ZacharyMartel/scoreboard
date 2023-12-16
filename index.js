let homeScore = 0
let guestScore = 0
document.getElementById("homeScore").textContent = homeScore
document.getElementById("guestScore").textContent = guestScore


////// Home Btns////////////////
function homePlus1() {
    homeScore += 1
    document.getElementById("homeScore").textContent = homeScore
}

function homePlus2() {
    homeScore += 2
    document.getElementById("homeScore").textContent = homeScore
}

function homePlus3() {
    homeScore += 3
    document.getElementById("homeScore").textContent = homeScore
}



////// Guest Btns///////////////
function guestPlus1() {
   guestScore +=1
    document.getElementById("guestScore").textContent = guestScore
}

function guestPlus2() {
    guestScore +=2
    document.getElementById("guestScore").textContent = guestScore
}

function guestPlus3() {
    guestScore +=3
    document.getElementById("guestScore").textContent = guestScore
}


////// RESET/////////////
function reset() {
    homeScore = 0
    guestScore = 0
    document.getElementById("homeScore").textContent = homeScore
    document.getElementById("guestScore").textContent = guestScore
}