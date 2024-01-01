    const adventurer = {
        name: "Robin",
        health: 10,
        inventory: ["sword", "potion", "artifact"],
        //object within outer object
        companion: {
            name: "Leo",
            type: "Cat",
            companionOfLeo: {
            //object within inner object
                name: "Frank",
                type: "Flea",
                accessories:{
                    //object within innermost object
                    hat: "small hat",
                    sunglasses: "sunglasses",
            },
            roll (mod = 0) {
                const result = Math.floor(Math.random() * 20) + 1 + mod;
                console.log(`${this.name} rolled a ${result}.`)
                }
        }
    }
}

//Part 2
class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
}

//Re-create Robin using Character class!
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

