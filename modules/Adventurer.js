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

const names = [
    "Lars",
    "Anders",
    "Johan",
    "Peter",
    "Daniel",
    "Jan",
    "Mikael",
    "Per",
    "Erik",
    "Fredrik",
    "Andreas",
    "Stefan",
    "Hans",
    "Magnus",
    "Mats",
    "Jonas",
    "Alexander",
    "Martin",
    "Thomas",
    "Bengt",
    "Bo",
    "Nils",
    "Björn",
    "Karl",
    "David",
    "Emil",
    "Leif",
    "Simon",
    "Henrik",
    "Ulf",
    "Mattias",
    "Marcus",
    "William",
    "Anton",
    "Sven",
    "Patrik",
    "Robert",
    "Joakim",
    "Adam",
    "Håkan",
    "Kjell",
    "Tommy",
    "Göran",
    "Christer",
    "Carl",
    "Elias",
    "Oscar",
    "Robin",
    "Niklas"
  ]

function fiveRand(min, max) {
    return min + 5*Math.round(Math.random()*(max-min)/5)
}

export let survivors = []
for (let i = 0; i < 50; i++) {
    survivors.push(new Adventurer(names[i], fiveRand(75, 150), fiveRand(5, 40)))
}