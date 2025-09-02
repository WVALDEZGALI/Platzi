
let schoolMagic 
let schoolMagicPc
let lifePointsPlayer = 3
let lifePointsPc = 3
function startGame() {
    let bntSelectSpell = document.getElementById("buttonSelectSpell")
    bntSelectSpell.addEventListener("click", selectSpellPlayer)

    let bntSchoolMagicFire = document.getElementById("buttonSchoolMagicFire")
    bntSchoolMagicFire.addEventListener("click", schoolFire)
    let bntSchoolMagicWater = document.getElementById("buttonSchoolMagicWater")
    bntSchoolMagicWater.addEventListener("click", schoolWater)
    let bntSchoolMagicThunder = document.getElementById("buttonSchoolMagicThunder")
    bntSchoolMagicThunder.addEventListener("click", schoolThunder)


}

window.addEventListener("load", startGame)

function selectSpellPlayer() {
    let inputFirebolt = document.getElementById("firebolt")
    let inputWaterbolt = document.getElementById("waterbolt")
    let inputThunderbolt = document.getElementById("thunderbolt")
    let inputFireblast = document.getElementById("fireblast")
    let inputWaterblast = document.getElementById("waterblast")
    let inputThunderblast = document.getElementById("thunderblast")
    let spanYourSpell = document.getElementById("yourspell")

    if(inputFirebolt.checked) {
        spanYourSpell.innerHTML = "Firebolt"
    }else if(inputWaterbolt.checked) {
        spanYourSpell.innerHTML = "Waterbolt"
    }else if(inputThunderbolt.checked) {
        spanYourSpell.innerHTML = "Thunderbolt"
    }else if(inputFireblast.checked) {
        spanYourSpell.innerHTML = "Fireblast"
    }else if(inputWaterblast.checked) {
        spanYourSpell.innerHTML = "Waterblast"
    }else if(inputThunderblast.checked) {
        spanYourSpell.innerHTML = "Thunderblast"
    }else{
        alert("you have not selected a spell, please select one.")
    }
}

window.addEventListener("load", startGamePc)

function startGamePc() {
    let btnSelectSpellPc = document.getElementById("buttonSelectSpellPc")

    // Definimos la función selectSpellPc
    function selectSpellPc(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // Agregamos el evento
    btnSelectSpellPc.addEventListener("click", () => {
        let pcSpell = selectSpellPc(1, 6)
        let spanPcSpell = document.getElementById("enemyspell")

        if (pcSpell == 1) {
            spanPcSpell.innerHTML = "Firebolt"
            
        } else if (pcSpell == 2) {
            spanPcSpell.innerHTML = "Waterbolt"
        } else if (pcSpell == 3) {
            spanPcSpell.innerHTML = "Thunderbolt"
        } else if (pcSpell == 4) {
            spanPcSpell.innerHTML = "Fireblast"
        } else if (pcSpell == 5) {
            spanPcSpell.innerHTML = "Waterblast"
        } else {
            spanPcSpell.innerHTML = "Thunderblast"
        }
    })
}

function schoolFire () {
    schoolMagic = "FIRE"
    schoolMagicEnemy()
}
function schoolWater () {
    schoolMagic = "WATER"
    schoolMagicEnemy()
}function schoolThunder () {
    schoolMagic = "THUNDER"
    schoolMagicEnemy()
}

function schoolMagicEnemy () {

    function selectSchoolMagicPc(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    let schoolMagicRandom = selectSchoolMagicPc(1, 3)

    if (schoolMagicRandom == 1) {
        schoolMagicPc = "FIRE"
    } else if (schoolMagicRandom == 2) {
        schoolMagicPc = "WATER"
    } else {
        schoolMagicPc = "THUNDER"
    }

    combat()
    
}

function combat() {
    let spanYourLifePoints = document.getElementById("yourlifepoints") 
    let spanEnemyLifePoints = document.getElementById("enemylifepoints")


    
    if (schoolMagic == schoolMagicPc) {
        createMessage("Draw 🤝")
    } else if (
        (schoolMagic == "FIRE" && schoolMagicPc == "THUNDER") || //&& double ampersand logical operator and. Only in the case where both conditions are true will it be true, in the other cases it will be false.
        (schoolMagic == "WATER" && schoolMagicPc == "FIRE") || // || double pipe logical operator or. Only in the case where both conditions are false will it be false, in the other cases it will be true.
        (schoolMagic == "THUNDER" && schoolMagicPc == "WATER") // ! not
    ) {
        createMessage("¡You win! 🎉")
        lifePointsPc --
        spanEnemyLifePoints.innerHTML = lifePointsPc
    } else {
        createMessage("You lost 😢")
        lifePointsPlayer --
        spanYourLifePoints.innerHTML = lifePointsPlayer
    }

    lifeCounter()
}

function lifeCounter() {
    if (lifePointsPc == 0) {
        createMessageFinal("Congratulations You WIN ✌")
    }else if(lifePointsPlayer == 0) {
        createMessageFinal("Sorry You LOSE 😭")
    }
}

function createMessage(combatResult) {

    let sectionHistoryCombatLog = document.getElementById("sectionCombatLog")

    let paragraph = document.createElement("p")
    paragraph.innerHTML = "You have selected " + schoolMagic + " school magic. And the enemy has selected " + schoolMagicPc + " school magic. " + combatResult
    sectionHistoryCombatLog.appendChild(paragraph)
}

function createMessageFinal(combatResultFinal) {

    let sectionHistoryCombatLogFinal = document.getElementById("sectionCombatLogFinal")

    let paragraph = document.createElement("p")
    paragraph.innerHTML = combatResultFinal
    sectionHistoryCombatLogFinal.appendChild(paragraph)
}













