export class Adventurer {
    constructor(name, hp, dmg) {
        this.name = name
        this.hp = hp
        this.dmg = dmg
    }
    tooltip = function(space) {
        let ret = ""
        ret += "Name:   " + this.name + "<br>"
        ret += "HP:     " + this.hp + "<br>"
        ret += "Damage: " + this.dmg + "<br>"
        return ret
    }
}