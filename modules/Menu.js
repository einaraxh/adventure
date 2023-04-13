import { mod } from "./system.js"

export class Menu {
    constructor(items, selector, space) {
        this.items      = items
        this.selector   = selector
        this.space      = space
    }
    get = function() {
        let ret = ""
        this.items.forEach((e, i) => {
            let name = e.name
            ret += name
            for (let j = 0; j < this.space-name.length; j++) {
                ret += " "
            }
            if (i == mod(this.selector, this.items.length)) {
                ret += "<=="
            }
            ret += "<br>"
        })
        return ret
    }
}