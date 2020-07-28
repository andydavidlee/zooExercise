const Gorilla = require('./;gorilla');

class TrainedGorilla extends Gorilla {
    constructor(name,weight, hatColour) {
        super(name, weight)
        this.hatColour = hatColour;
    }

    removeHat() {
        return `${this.name} is taking off his hat`
    }

    putOnHat() {
        return `${this.name} is putting on his ${this.hatColour} hat`
    }

    dailyRoutine() {
        return `${this.removeHat()} and ${this.putOnHat()}`
    }
}

const AlbertTrainedGorilla = new TrainedGorilla('Albert', '40Kgs', 'yellow')
console.log(AlbertTrainedGorilla)
console.log(AlbertTrainedGorilla.removeHat())
console.log(AlbertTrainedGorilla.putOnHat())
console.log(AlbertTrainedGorilla.dailyRoutine())