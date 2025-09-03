
let schoolMagic 
let schoolMagicPc
let lifePointsPlayer = 3
let lifePointsPc = 3
function startGame() {

    let secSchoolMagic = document.getElementById("selectSchoolMagic")
    secSchoolMagic.style.display = "none"

    let secPlayAgain = document.getElementById("sectionPlayAgain")
    secPlayAgain.style.display = "none"
    
    let bntSelectSpell = document.getElementById("buttonSelectCharacter")
    bntSelectSpell.addEventListener("click", selectCharacterPlayer)

    let bntSchoolMagicFire = document.getElementById("buttonSchoolMagicFire")
    bntSchoolMagicFire.addEventListener("click", schoolFire)
    let bntSchoolMagicWater = document.getElementById("buttonSchoolMagicWater")
    bntSchoolMagicWater.addEventListener("click", schoolWater)
    let bntSchoolMagicThunder = document.getElementById("buttonSchoolMagicThunder")
    bntSchoolMagicThunder.addEventListener("click", schoolThunder)
    let bntPlayAgain = document.getElementById("buttonPlayAgain")
    bntPlayAgain.addEventListener("click", playAgain)
}

window.addEventListener("load", startGame)

function selectCharacterPlayer() {

    let secSchoolMagic = document.getElementById("selectSchoolMagic")
    secSchoolMagic.style.display = "block"

    let inputHuman = document.getElementById("human")
    let inputElf = document.getElementById("elf")
    let inputOrc = document.getElementById("orc")
    let inputDwarf = document.getElementById("dwarf")
    let spanYourSpell = document.getElementById("yourrace")

    if(inputHuman.checked) {
        spanYourSpell.innerHTML = "Human"
    }else if(inputElf.checked) {
        spanYourSpell.innerHTML = "Elf"
    }else if(inputOrc.checked) {
        spanYourSpell.innerHTML = "Orc"
    }else if(inputDwarf.checked) {
        spanYourSpell.innerHTML = "Dwarf"
    }else{
        alert("you have not selected a race, please select one.")
    }

    startGamePc()
}

function startGamePc() {

    let btnSelectSpellPc = document.getElementById("buttonSelectCharacterPc")

    // We define the function selectSpellPc
    function selectSpellPc(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
        
    }
    
    // Add the event
    btnSelectSpellPc.addEventListener("click", () => {
        let pcSpell = selectSpellPc(1, 4)
        let spanPcSpell = document.getElementById("enemyrace")

        if (pcSpell == 1) {
            spanPcSpell.innerHTML = "Human"
            
        } else if (pcSpell == 2) {
            spanPcSpell.innerHTML = "Elf"
        } else if (pcSpell == 3) {
            spanPcSpell.innerHTML = "Orc"
        } else {
            spanPcSpell.innerHTML = "Dwarf"
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

    let bntSchoolMagicFire = document.getElementById("buttonSchoolMagicFire")
    bntSchoolMagicFire.disabled = true
    let bntSchoolMagicWater = document.getElementById("buttonSchoolMagicWater")
    bntSchoolMagicWater.disabled = true
    let bntSchoolMagicThunder = document.getElementById("buttonSchoolMagicThunder")
    bntSchoolMagicThunder.disabled = true

    let secPlayAgain = document.getElementById("sectionPlayAgain")
    secPlayAgain.style.display = "block"
}

function playAgain() {
    location.reload()
}













