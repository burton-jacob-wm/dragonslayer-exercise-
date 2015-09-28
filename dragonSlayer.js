//Variables
var playerHealth = 9;
var dragonHealth = 7;

//Dragon Damage
function dragonDamage(damage) {
    dragonHealth -= damage;
    console.log("You stab the dragon. (-" + damage + ")");
}
//Player Damage
function playerDamage (Damage) {
    playerHealth -= Damage;
    console.log("You dragon attacks you. (-" + Damage + ")");
}

//DRAGON FIGHT
while (dragonHealth > 0) {
    if (Math.random() < 0.3) {
        playerDamage(Math.floor(Math.random() * 7));
    }
    else if (Math.random() < 0.8) {
        playerDamage(Math.floor(Math.random() * 5));
    }
    else {
        console.log("The dragon sits there. (-0)");
    }
    //PLAYER ATTACKING
    if (Math.random() < 0.3) {
        dragonDamage(Math.floor(Math.random() * 7));
    }
    else if (Math.random() < 0.8) {
        dragonDamage(Math.floor(Math.random() * 5));
    }
    else {
        console.log("You miss the dragon. (-0)");
    }
    //DED PLAYER
    if (playerHealth <= 0) {
        console.log("You are ded.");
        break;
    }
}
console.log("The dragon is ded let us rejoice.");
//Apparently you are able to kill yourself and the dragon but idk.