import { Adventurer } from "./modules/Adventurer.js"
import { Menu } from "./modules/Menu.js"
import { phase1 } from "./modules/phases.js"
import { survivors } from "./modules/Adventurer.js"

console.log(survivors)

const maindiv = document.getElementById("maindiv")

export function inner(str) {
    document.getElementById("maindiv").innerHTML = str
}

//init
let currentPhase = phase1

let candidates = []

for(let i = 0; i < 3; i++) {
    candidates.push(randPick(survivors))
}
console.log(candidates)
console.log(survivors)

phase1.menu = new Menu(candidates, 0, 8)


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

function randPick(list) {
    const n = Math.floor(Math.random()*list.length)
    const ret = list[n]
    list.splice(n, 1)
    return ret
}