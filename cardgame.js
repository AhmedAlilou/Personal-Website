const card1 = new card('Lebron James', 88, 79, 89)
const card2 = new card('Joel Embiid', 67, 93, 95)
const card3 = new card('Steph Curry', 86, 97, 79)
const card4 = new card('James Harden', 87, 90, 88)
const card5 = new card('Kevin Durant', 83, 92, 90)
const card6 = new card('Ben Simmons', 89, 36, 91)

let speedButton = document.getElementById('speedButton')
let shootingButton = document.getElementById('shootingButton')
let heightButton = document.getElementById('heightButton')
message.innerHTML = "Choose a category"
let nameP = document.getElementById('name')
let speedP = document.getElementById('speed')
let shootingP = document.getElementById('shooting')
let heightP = document.getElementById('height')
let deckP = document.getElementById('cardsInDeck')
let middleP = document.getElementById('cardsInMiddle')
function card(name, speed, shooting, height) {
    this.name = name;
    this.speed = speed
    this.shooting = shooting
    this.height = height
}

let cards = [card1, card2, card3, card4, card5, card6]
let userDeck = []
let compDeck = []
let centrePile = []
let compDecision = ""

function compTurn() {
    if (compDeck[0].speed > compDeck[0].shooting && compDeck[0].speed > compDeck[0].height) {
        compDecision = "speed"
        shootingButton.disabled = true
        heightButton.disabled = true
        message.innerHTML = `Opponent has used ${compDeck[0].speed} speed.`
    } else if (compDeck[0].shooting > compDeck[0].speed && compDeck[0].shooting > compDeck[0].height) {
        compDecision = "shooting"
        speedButton.disabled = true
        heightButton.disabled = true
        message.innerHTML = `Opponent has used ${compDeck[0].shooting} shooting.`
    } else if (compDeck[0].height > compDeck[0].speed && compDeck[0].height > compDeck[0].shooting) {
        compDecision = "height"
        shootingButton.disabled = true
        speedButton.disabled = true
        message.innerHTML = `Opponent has used ${compDeck[0].height} height.`
    }

}

function win() {
    speedButton.disabled = false
    shootingButton.disabled = false
    heightButton.disabled = false
    console.log("yes")
    userDeck.push(userDeck.shift())
    userDeck.push(compDeck[0])
    for (let i = centrePile.length - 1; i >= 0; i --) {
        userDeck.push(centrePile[i])
    }
    compDeck.shift()

    nameP.innerHTML = `Name: ${userDeck[0].name}`
    speedP.innerHTML = `Speed: ${userDeck[0].speed}`
    shootingP.innerHTML = `Shooting: ${userDeck[0].shooting}`
    heightP.innerHTML = `Height: ${userDeck[0].height}`
    message.innerHTML = "Choose a category"
    deckP.innerHTML = `Cards in deck: ${userDeck.length}/${cards.length}`
    middleP.innerHTML = `Cards in middle: ${centrePile.length}` 

    console.log(userDeck)
    console.log(compDeck)
    if (compDeck.length == 0) {
        newGame()
        message.innerHTML = "You Won! Well Done!"
    }  
}

function draw() {
    speedButton.disabled = false
    shootingButton.disabled = false
    heightButton.disabled = false
    console.log("draw")
    centrePile.push(userDeck[0], compDeck[0])
    compTurn()
    

    if (userDeck.length == 0) {
        newGame()
    } else if (compDeck.length == 0) {
        newGame()
    }
}

function lose() {
    speedButton.disabled = false
    shootingButton.disabled = false
    heightButton.disabled = false
    console.log("lose")
    compDeck.push(compDeck.shift())
    compDeck.push(userDeck[0])
    for (let i = centrePile.length - 1; i >= 0; i --) {
        compDeck.push(centrePile[i])
    }
    userDeck.shift()

    if (userDeck.length > 0) {
        compTurn()
    } else {
        newGame()
        message.innerHTML = "You lost! Try Again!" 
    }

    nameP.innerHTML = `Name: ${userDeck[0].name}`
    speedP.innerHTML = `Speed: ${userDeck[0].speed}`
    shootingP.innerHTML = `Shooting: ${userDeck[0].shooting}`
    heightP.innerHTML = `Height: ${userDeck[0].height}` 
    deckP.innerHTML = `Cards in deck: ${userDeck.length}/${cards.length}`
    middleP.innerHTML = `Cards in middle: ${centrePile.length}` 
    
    console.log(userDeck)
    console.log(compDeck)

    
    
    
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
    
        // Generate random number
        let j = Math.floor(Math.random() * (i + 1));
                    
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
 }

function newGame() {
    userDeck = []
    compDeck = []
    centrePile = []
    userGo = true
    compDecision = ""
    speedButton.disabled = false
    shootingButton.disabled = false
    heightButton.disabled = false
    shuffle(cards)
    for (let i = 0; i <= cards.length - 1; i++) {
        if (i < cards.length/2) {
            userDeck.push(cards[i])
        }else {
            compDeck.push(cards[i])
        }
    }
    console.log(`user deck: ${userDeck} comp deck: ${compDeck}`)
    deckP.innerHTML = `Cards in deck: ${userDeck.length}/${cards.length}`
    middleP.innerHTML = `Cards in middle: ${centrePile.length}` 
    nameP.innerHTML = `Name: ${userDeck[0].name}`
    speedP.innerHTML = `Speed: ${userDeck[0].speed}`
    shootingP.innerHTML = `Shooting: ${userDeck[0].shooting}`
    heightP.innerHTML = `Height: ${userDeck[0].height}`
}

function speed() {
    if (userDeck[0].speed > compDeck[0].speed) {
        win()
        
    } else if (userDeck[0].speed == compDeck[0].speed) {
        draw()
    } else if (userDeck[0].speed < compDeck[0].speed) {
        lose()
    }
}

function shooting() {
    if (userDeck[0].shooting > compDeck[0].shooting) {
        win()
        
    } else if (userDeck[0].shooting == compDeck[0].shooting) {
        draw()
    } else if (userDeck[0].shooting < compDeck[0].shooting) {
        lose()
    }
}

function height() {
    if (userDeck[0].height > compDeck[0].height) {
        win()
        
    } else if (userDeck[0].height == compDeck[0].height) {
        draw()
    } else if (userDeck[0].height < compDeck[0].height) {
        lose()
    }
}

console.log(card1.speed)

newGame()