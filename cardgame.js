const card1 = new card('Lebron James', 'cardImages/lebron.jpeg', 88, 79, 89, 90)
const card2 = new card('Joel Embiid', 'cardImages/embiid.jpeg', 67, 93, 95, 94)
const card3 = new card('Steph Curry', 'cardImages/curry.jpeg', 86, 97, 70, 78)
const card4 = new card('James Harden', 'cardImages/harden.webp', 87, 90, 88, 91)
const card5 = new card('Kevin Durant', 'cardImages/durant.jpg', 83, 92, 90, 91)
const card6 = new card('Ben Simmons', 'cardImages/simmons.jpeg', 89, 36, 91, 90)
const card7 = new card('Giannis Antetokonmpo', 'cardImages/giannis.webp', 86, 75, 92, 93)
const card8 = new card('Ja Morant', 'cardImages/morant.jpeg', 95, 85, 73, 88)
const card9 = new card('Nikola Jokic', 'cardImages/jokic.webp', 70, 84, 94, 93)
const card10 = new card('Luka Dončić', 'cardImages/doncic.webp', 86, 92, 85, 84)

let speedButton = document.getElementById('speedButton')
let shootingButton = document.getElementById('shootingButton')
let heightButton = document.getElementById('heightButton')
let reboundButton = document.getElementById('reboundButton')
let nameP = document.getElementById('name')
let speedP = document.getElementById('speed')
let shootingP = document.getElementById('shooting')
let heightP = document.getElementById('height')
let reboundP = document.getElementById('rebound')
let deckP = document.getElementById('cardsInDeck')
let middleP = document.getElementById('cardsInMiddle')
let cardImage = document.getElementById('cardimage')

function card(name, image, speed, shooting, height, rebound) {
    this.name = name
    this.image = image
    this.speed = speed
    this.shooting = shooting
    this.height = height
    this.rebound = rebound
}

let cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10]
let userDeck = []
let compDeck = []
let centrePile = []

function compTurn() {
    if (compDeck[0].speed > compDeck[0].shooting && compDeck[0].speed > compDeck[0].height && compDeck[0].speed > compDeck[0].rebound) {
        shootingButton.disabled = true
        heightButton.disabled = true
        reboundButton.disabled = true
        message.innerHTML = `Opponent has used ${compDeck[0].speed} speed.`
    } else if (compDeck[0].shooting > compDeck[0].speed && compDeck[0].shooting > compDeck[0].height && compDeck[0].shooting > compDeck[0].rebound) {
        speedButton.disabled = true
        heightButton.disabled = true
        reboundButton.disabled = true
        message.innerHTML = `Opponent has used ${compDeck[0].shooting} shooting.`
    } else if (compDeck[0].height > compDeck[0].speed && compDeck[0].height > compDeck[0].shooting && compDeck[0].height > compDeck[0].rebound) {
        shootingButton.disabled = true
        speedButton.disabled = true
        reboundButton.disabled = true
        message.innerHTML = `Opponent has used ${compDeck[0].height} height.`
    } else if (compDeck[0].rebound > compDeck[0].speed && compDeck[0].rebound > compDeck[0].shooting && compDeck[0].rebound > compDeck[0].height) {
        shootingButton.disabled = true
        speedButton.disabled = true
        heightButton.disabled = true
        reboundButton.disabled = false
        message.innerHTML = `Opponent has used ${compDeck[0].rebound} rebounding.`
    }

}

function win() {
    speedButton.disabled = false
    shootingButton.disabled = false
    heightButton.disabled = false
    reboundButton.disabled = false
    userDeck.push(userDeck.shift())
    userDeck.push(compDeck[0])
    for (let i = centrePile.length - 1; i >= 0; i --) {
        userDeck.push(centrePile[i])
    }

    centrePile.splice(0,centrePile.length)
    compDeck.shift()

    newMessage()

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
    reboundButton.disabled = false
    console.log("draw")
    centrePile.push(userDeck[0], compDeck[0])
    userDeck.shift()
    compDeck.shift()
    newMessage()
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
    reboundButton.disabled = false
    compDeck.push(compDeck.shift())
    compDeck.push(userDeck[0])
    for (let i = centrePile.length - 1; i >= 0; i --) {
        compDeck.push(centrePile[i])
    }

    centrePile.splice(0,centrePile.length)

    userDeck.shift()

    if (userDeck.length > 0) {
        newMessage() 
        compTurn()
    } else {
        newGame()
        message.innerHTML = "You lost! Try Again!" 
    } 
    
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
    speedButton.disabled = false
    shootingButton.disabled = false
    heightButton.disabled = false
    reboundButton.disabled = false
    shuffle(cards)
    for (let i = 0; i <= cards.length - 1; i++) {
        if (i < cards.length/2) {
            userDeck.push(cards[i])
        }else {
            compDeck.push(cards[i])
        }
    }
    newMessage()
}

function newMessage() {
    deckP.innerHTML = `Cards in deck: ${userDeck.length}/${cards.length}`
    middleP.innerHTML = `Cards in middle: ${centrePile.length}` 
    nameP.innerHTML = `${userDeck[0].name}`
    speedP.innerHTML = `Speed: ${userDeck[0].speed}`
    shootingP.innerHTML = `Shooting: ${userDeck[0].shooting}`
    heightP.innerHTML = `Height: ${userDeck[0].height}`
    reboundP.innerHTML = `Rebounding: ${userDeck[0].rebound}`
    message.innerHTML = `Choose a category.`
    cardImage.src = userDeck[0].image
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

function rebound() {
    if (userDeck[0].rebound > compDeck[0].rebound) {
        win()
        
    } else if (userDeck[0].rebound == compDeck[0].rebound) {
        draw()
    } else if (userDeck[0].rebound < compDeck[0].rebound) {
        lose()
    }
}

newGame()