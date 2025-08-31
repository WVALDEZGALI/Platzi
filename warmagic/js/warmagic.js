
let schoolMagic 
let schoolMagicPc
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
    let spanYourLifePoints = document.getElementById("yourlifepoints")

    if(inputFirebolt.checked) {
        spanYourSpell.innerHTML = "Firebolt"
        spanYourLifePoints.innerHTML = "1000"
    }else if(inputWaterbolt.checked) {
        spanYourSpell.innerHTML = "Waterbolt"
        spanYourLifePoints.innerHTML = "1000"
    }else if(inputThunderbolt.checked) {
        spanYourSpell.innerHTML = "Thunderbolt"
        spanYourLifePoints.innerHTML = "1000"
    }else if(inputFireblast.checked) {
        spanYourSpell.innerHTML = "Fireblast"
        spanYourLifePoints.innerHTML = "1000"
    }else if(inputWaterblast.checked) {
        spanYourSpell.innerHTML = "Waterblast"
        spanYourLifePoints.innerHTML = "1000"
    }else if(inputThunderblast.checked) {
        spanYourSpell.innerHTML = "Thunderblast"
        spanYourLifePoints.innerHTML = "1000"
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
        let spanPcLifePoints = document.getElementById("enemylifepoints")

        if (pcSpell == 1) {
            spanPcSpell.innerHTML = "Firebolt"
            spanPcLifePoints.innerHTML = "1000"
        } else if (pcSpell == 2) {
            spanPcSpell.innerHTML = "Waterbolt"
            spanPcLifePoints.innerHTML = "1000"
        } else if (pcSpell == 3) {
            spanPcSpell.innerHTML = "Thunderbolt"
            spanPcLifePoints.innerHTML = "1000"
        } else if (pcSpell == 4) {
            spanPcSpell.innerHTML = "Fireblast"
            spanPcLifePoints.innerHTML = "1000"
        } else if (pcSpell == 5) {
            spanPcSpell.innerHTML = "Waterblast"
            spanPcLifePoints.innerHTML = "1000"
        } else {
            spanPcSpell.innerHTML = "Thunderblast"
            spanPcLifePoints.innerHTML = "1000"
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
    
    if (schoolMagic == schoolMagicPc) {
        createMessage("Draw 🤝")
    } else if (
        (schoolMagic == "FIRE" && schoolMagicPc == "THUNDER") ||
        (schoolMagic == "WATER" && schoolMagicPc == "FIRE") ||
        (schoolMagic == "THUNDER" && schoolMagicPc == "WATER")
    ) {
        createMessage("¡You win! 🎉")
    } else {
        createMessage("You lost 😢")
    }
}

function createMessage(combatResult) {

    let sectionHistoryCombatLog = document.getElementById("sectionCombatLog")

    let paragraph = document.createElement("p")
    paragraph.innerHTML = "You have selected " + schoolMagic + " school magic. And the enemy has selected " + schoolMagicPc + " school magic. " + combatResult
    sectionHistoryCombatLog.appendChild(paragraph)
}











