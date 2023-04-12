import { inner } from "./system.js"
import { mod } from "./system.js"

export let phase1 = {
    menu : null,
    write: function() {
        let message = ""
        message += "Phase 1 - Select new adventurer <br>"
        message += this.menu.get()
        message += "<br>"
        
        let n = mod(this.menu.selector, this.menu.items.length)
        if (this.menu.items[n]) {
            message += this.menu.items[n].tooltip()
        }
        inner(message)


    }
}