const card1 = new card('Lebron James', 86, 79)
const card2 = new card('Joel Embiid', 67, 92)
const card3 = new card('Steph Curry', 86, 97)
const card4 = new card('James Harden', 87, 90)
const card5 = new card('Kevin Durant', 83, 92)
const card6 = new card('Ben Simmons', 89, 36)

function card(name, speed, shooting) {
    this.name = name;
    this.speed = speed
    this.shooting = shooting
}

let cards = [card1, card2, card3, card4, card5, card6]
let userDeck = []
let compDeck = []
let centrePile = []
let userGo = true

function compTurn() {
    for (let i = 0; i > 0 && i < 3; i++) {
        
    }
}

function win() {
    userDeck.push(userDeck.shift())
    userDeck.push(compDeck[0])
    for (let i = centrePile.length - 1; i >= 0; i --) {
        userDeck.push(centrePile[i])
    }
    compDeck.pop()
}

function draw() {
    centrePile.push(userDeck[0], compDeck[0])
    !userGo
}

function lose() {
    compDeck.push(compDeck.shift())
    compDeck.push(userDeck[0])
    for (let i = centrePile.length - 1; i >= 0; i --) {
        compDeck.push(centrePile[i])
    }
    userDeck.pop()
    !userGo
    if (userGo == false) {
        compTurn()
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
    shuffle(cards)
    for (let i = 0; i <= cards.length - 1; i++) {
        if (i < cards.length/2)
            userDeck.push(cards[i])
        else {
            compDeck.push(cards[i])
        }
    }
    console.log(`user deck: ${userDeck} comp deck: ${compDeck}`)
}

function speed() {
    if (userDeck[0].speed > compDeck[0].speed) {
        console.log("yes")
        win()
        
    } else if (userDeck[0].speed == compDeck[0].speed) {
        console.log("draw")
        draw()
    } else if (userDeck[0].speed < compDeck[0].speed) {
        console.log("lose")
        lose()
    }
}





console.log(card1.speed)

newGame()