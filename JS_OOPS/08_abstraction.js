// Abstraction : To hide the complexity of the code.
class CoffeeMachine {
    startingMachine() {
        return `Starting the Coffee Machine.`;
    }

    brewingCoffee() {
        return `Brewing Coffee.`;
    }

    pressButton() {
        let firstMessage = this.startingMachine();
        let secondMessage = this.brewingCoffee();
        return `${firstMessage}\n${secondMessage}`
    }
}

let getCoffee = new CoffeeMachine();
console.log(getCoffee.pressButton());
