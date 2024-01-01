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
                console.log(`${this.name} rolled a ${result}.`);
                }
        }
    }
}