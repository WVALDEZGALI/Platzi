function startGame() {
    let bntSelectSpell = document.getElementById("buttonSelectSpell")
    bntSelectSpell.addEventListener("click", selectSpellPlayer)
}

window.addEventListener("load", startGame)

/*Events we can listen to with: addEventListener("")

blur = When the element loses focus.
click = The user clicks on the element.
dblclick = The user double clicks on the element.
focus = The element gains focus.
keydown = The user presses a key.
keypress = The user presses a key and holds it down.
keyup = The user releases the key.
load = The document finishes loading.
mousedown = The user presses the mouse button on an item.
mousemove = The user moves the mouse pointer over an element.
mouseout = The user moves the pointer out of an element.
mouseover = The user holds the pointer over an element.
mouseup = The user releases the mouse button on an element.*/

function selectSpellPlayer() {
    let inputFirebolt = document.getElementById("firebolt")
    let inputWaterbolt = document.getElementById("waterbolt")
    let inputThunderbolt = document.getElementById("thunderbolt")
    let inputFireblast = document.getElementById("fireblast")
    let inputWaterblast = document.getElementById("waterblast")
    let inputThunderblast = document.getElementById("thunderblast")

    if(inputFirebolt.checked) {
        alert("You have selected the firebolt spell")
    }else if(inputWaterbolt.checked) {
        alert("You have selected the waterbolt spell")
    }else if(inputThunderbolt.checked) {
        alert("You have selected the thunderbolt spell")
    }else if(inputFireblast.checked) {
        alert("You have selected the fireblast spell")
    }else if(inputWaterblast.checked) {
        alert("You have selected the waterblast spell")
    }else if(inputThunderblast.checked) {
        alert("You have selected the thunderblast spell")
    }else{
        alert("you have not selected a spell, please select one.")
    }
}


