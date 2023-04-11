import { Adventurer } from "./modules/Adventurer.js"
import { Menu } from "./modules/Menu.js"

let maindiv = document.getElementById("maindiv")


let carl = new Adventurer("Carl", 200, 10)
let bert = new Adventurer("Bert", 100, 35)

let phase1 = {
    menu : null,
    init: function() {
        console.log("init run")
        let menu = new Menu([carl, bert], 0, 8)
        menu.write()
    }
}



//main()
function main() {
    let message = ""
    message += "Phase 1 - Select new adventurer <br>"
    message += menu.write()
    document.getElementById("maindiv").innerHTML = message
}