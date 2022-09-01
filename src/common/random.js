export class Random {
    static getRandomItem(array) {
        const randomIndex = this.getRandomNumber(array.length);
        return array[randomIndex]
    }

    static getRandomNumber(limit = 15) {
        return Math.floor(Math.random() * limit);
    }
}
