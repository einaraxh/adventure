export class Menu {
    constructor(items, selector, space) {
        this.items      = items
        this.selector   = selector
        this.space      = space
    }
    write = function() {
        console.log("write")
        console.log(this.items)
        let ret = ""
        this.items.forEach((e, i) => {
            let name = e.name
            ret += name
            for (let j = 0; j < this.space-name.length; j++) {
                ret += "&nbsp"
            }
            if (i == this.selector) {
                ret += "[+]"
            }
            ret += "<br>"
        })
        return ret
    }
}