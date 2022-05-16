countries = ["Andorra", "flags/ad.png", "United Arab Emirates", "flags/ae.png", "Afghanistan", "flags/af.png", "Antigua and Barbuda", "flags/ag.png", "Albania", "flags/al.png", "Armenia", "flags/am.png", "Angola", "flags/ao.png", "Argentina", "flags/ar.png", "Austria", "flags/at.png", "Australia", "flags/au.png", "Azerbaijan", "flags/az.png", "Bosnia and Herzegovina", "flags/ba.png", "Barbados", "flags/bb.png", "Bangladesh", "flags/bd.png", "Belgium", "flags/be.png", "Burkina Faso", "flags/bf.png", "Bulgaria", "flags/bg.png", "Bahrain", "flags/bh.png", "Burundi", "flags/bi.png", "Benin", "flags/bj.png", "Brunei", "flags/bn.png", "Bolivia", "flags/bo.png", "Brazil", "flags/br.png", "Bahamas", "flags/bs.png", "Bhutan", "flags/bt.png", "Norway", "flags/bv.png", "Botswana", "flags/bw.png", "Belarus", "flags/by.png", "Belize", "flags/bz.png", "Canada", "flags/ca.png", "Dem.Rep. of the Congo", "flags/cd.png", "Central African Republic", "flags/cf.png", "Republic of the Congo", "flags/cg.png", "Switzerland", "flags/ch.png", "Ivory Coast", "flags/ci.png", "Chile", "flags/cl.png", "Cameroon", "flags/cm.png", "China", "flags/cn.png", "Colombia", "flags/co.png", "Costa Rica", "flags/cr.png", "Cuba", "flags/cu.png", "Cape Verde", "flags/cv.png", "Cyprus", "flags/cy.png", "Czechia", "flags/cz.png", "Germany", "flags/de.png", "Djibouti", "flags/dj.png", "Denmark", "flags/dk.png", "Dominica", "flags/dm.png", "Dominican Republic", "flags/do.png", "Algeria", "flags/.png", "dz", "flags/.png", "Ecuador", "flags/ec.png", "Estonia", "flags/ee.png", "Egypt", "flags/eg.png", ]

let randomIndex = Math.floor(Math.random()*51)
let index = countries[randomIndex]
let image = false
let flag = document.getElementById('flag')
let score = 0
let scoreP = document.getElementById('score')
let highscore = 0
let highscoreP = document.getElementById('highscore')
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let button4 = document.getElementById('button4')
let box = document.getElementById('options')
let button_1 = ""
let button_2 = ""
let button_3 = ""
let button_4 = ""
let options = [button_1, button_2, button_3, button_4]
let answer = ""
let choice = ""



function newCountry() {
    randomIndex = Math.floor(Math.random()*51)
    index = countries[randomIndex]
    image = index.includes("/")
    

    if (image == true) {
        randomIndex --
        index = countries[randomIndex]
    }
}

function newRound() {
    button_1 = ""
    button_2 = ""
    button_3 = ""
    button_4 = ""
    options[0] = ""
    options[1] = ""
    options[2] = ""
    options[3] = ""

    randomIndex = Math.floor(Math.random()*51)
    index = countries[randomIndex]
    image = index.includes("/")
    if (image == false) {
        randomIndex ++
        index = countries[randomIndex]
    }

    flag.src = index

    answer = countries[randomIndex -1]
    options[Math.floor(Math.random()*options.length)] = answer

    for (let i = 0; i < options.length; i++) {
        while (options[i] == "") {
            newCountry()
            options[i] = index

            // checking for duplicates
            for(let j = 0; j < 5; j++)
                if (options[i] == options[i+1]) {
                    newCountry()
                    options[i] = index
                } else if (options[i] == options[i+2]) {
                    newCountry()
                    options[i] = index
                } 
                
                else if (options[i] == options[i+3]) {
                    newCountry()
                    options[i] = index
                } 
                else if (options[i] == options[i-1]) {
                    newCountry()
                    options[i] = index
                } 
                else if (options[i] == options[i-2]) {
                    newCountry()
                    options[i] = index
                } 
                else if (options[i] == options[i-3]) {
                    newCountry()
                    options[i] = index
                } else {
                    break
                }
            
        }
    }
    button1.innerHTML = options[0]
    button2.innerHTML = options[1]
    button3.innerHTML = options[2]
    button4.innerHTML = options[3]

}

function win() {
    score ++
    scoreP.innerHTML = `Score: ${score}`
    newRound()
}

function lose() {
    if (score > highscore) {
        highscore = score
        highscoreP.innerHTML = `HighScore: ${highscore}`
    }
    score = 0
    scoreP.innerHTML = `Score: ${score}`
    newRound()
    
}

function Button1() {
    if (answer == options[0]){
        win()
    } else {
        lose()
    }     
}

function Button2() {
    if (answer == options[1]){
        win()
    } else {
        lose()
    }        
}

function Button3() {
    if (answer == options[2]){
        win()
    } else {
        lose()
    }        
}

function Button4() {
    if (answer == options[3]){
        win()
    } else {
        lose()
    }       
}



newRound()