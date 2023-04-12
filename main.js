import { Adventurer } from "./modules/Adventurer.js"
import { Menu } from "./modules/Menu.js"
import { phase1 } from "./modules/phases.js"

const maindiv = document.getElementById("maindiv")

export function inner(str) {
    document.getElementById("maindiv").innerHTML = str
}

//init
let currentPhase = phase1
let carl = new Adventurer("Carl", 200, 10)
let bert = new Adventurer("Bert", 100, 35)
let kent = new Adventurer("Kent", 100, 35)
phase1.menu = new Menu([carl, bert, kent], 0, 8)
phase1.write()


//menu navigation
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        currentPhase.menu.selector--
    } else if (event.key === "ArrowDown") {
        currentPhase.menu.selector++
    }
    currentPhase.write()
})