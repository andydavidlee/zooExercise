const Animal = require('./animal')

class Squirrel extends Animal {
    constructor(name, weight) {
        super(name, weight)
    }
    eatingNuts() {
        return `${this.name} is eating nuts`
    }

    showVigour() {
        return `${super.eat()} ${this.eatingNuts()}`
    }

    dailyRoutine() {
        return `${super.eat()} ${this.eatingNuts()} ${super.sleep()} ${super.wakeUp()}`
    }
}
const Squirrel = new Squirrel('Atlas', `400g`)
console.log(Squirrel)
console.log(Squirrel.eatingNuts())
console.log(Squirrel.eat())
console.log(Squirrel.sleep())
console.log(Squirrel.wakeUp())
