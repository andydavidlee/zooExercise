class Animal {
    constructor(name, weight) {
        this.name = name
        this.weight = weight
    }
    eat() {
        return `${this.name} is eating!`
    }
    sleep() {
        return `${this.name} is sleeping!`
    }
    wakeUp() {
        return `${this.name} is waking up!`
    }
}

module.exports = Animal