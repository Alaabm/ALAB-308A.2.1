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
    //Part 4
    static MAX_HEALTH = 100;
    static ROLES = ["Fighter", "Healer", "Wizard"]

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

//Part 3
class Adventurer extends Character {
    constructor (name, role) {
        super(name);
      // Adventurers have specialized roles.
        this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

class Companion extends Adventurer{
    constructor (name, type) {
        super(name, type);
        //Companion is a specific type of Companion and name
        this.name = name;
        this.type = type;
        // Every Companion has accessories
        this.accessories.push("hat", "sunglasses")
        //Companions have the ability to teleprt
        teleport () 
        console.log(`${this.name} is teleporting...`);
        super.roll();
        //Companions have the ability to fly
        fly () 
        console.log(`${this.name} is flying...`);
        super.roll();
        
}
}

//Part 5 Gather Your Party
class AdventurerFactory {  
    constructor (role) {
        this.role = role;
        this.adventurers = [];
    }
    generate (name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
        return this.adventurers[index];
    }
    findByName (name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

