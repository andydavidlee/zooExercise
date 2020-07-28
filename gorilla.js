const Animal = require('./animal')

class Gorilla extends Animal {
    constructor(name, weight) {
        super(name, weight)
    }
    poundChest() {
        return `${this.name} is pounding it's chest`
    }

    showVigour() {
        return `${super.eat()} ${this.poundChest()}`
    }

    dailyRoutine() {
        return `${super.eat()} ${this.poundChest()} ${super.sleep()} ${super.wakeUp()}`
    }
}
const Gorilla = new Gorilla('George', `160kg`)
console.log(Gorilla)
console.log(Gorilla.poundChest())
console.log(Gorilla.eat())
console.log(Gorilla.sleep())
console.log(Gorilla.wakeUp())
