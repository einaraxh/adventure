import { inner } from "./system.js"
import { mod } from "./system.js"


export let phase1 = {
    menu : null,
    write: function() {
        inner("Phase 1 - Select new adventurer <br>", "top")

        let message = ""
        message += this.menu.get()
        message += "<br>"
        
        let n = mod(this.menu.selector, this.menu.items.length)
        if (this.menu.items[n]) {
            inner(this.menu.items[n].tooltip(), "right")
        }
        inner(message, "left")


    }
}