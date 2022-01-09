window.alert("welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["chuck", "big 'ole butt boy", "the Clap"];
var enemyHealth = 50;
var enemyAttack = 12;

//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};


//create function
var fight = function(enemyName) {
    // repeat and execute as long as the enemy is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        //Alert players that they are starting the round
        
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //Confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight! Goodbye!");
            console.log(playerName + " has chosen to skip the fight.");
            //subtract money from playerMoney for skipping
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney: ", playerMoney);
            break;
            }
        }

        

        /*generate random damage value based on
        player's attack power*/
        var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;
            console.log(
                playerName + " has earned 20 moneys. " + playerName + " now has " + playerMoney + " moneys."
            );

            // create a window.confirm that asks if they want to go to the shop

            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        /*generate random damage value based on
        enemy's attack power*/
        var damage = randomNumber(enemyAttack - 3, enemyAttack);

        playerHealth = Math.max(0, playerHealth - damage);
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
            );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.")
        }
    }
};    


//function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let the player know what round they are in
            // remember that arrays start at 0, so it 
            // needs to have 1 added to it
            window.alert("welcome to Robot Gladiators! Round " + (i + 1));
        
            // pick new enemy to fight based on index
            //of enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before new fight
            enemyHealth = randomNumber(40,60);

            // debugger;

            // pass the pickedEnemyName variable's value
            //into the fight function, where it will 
            //assume the value of the enemyName 
            //parameter
            fight(pickedEnemyName);

            //if the player is still alive and we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                //ask if player wantes to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                
                //if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        } 
        else {
            window.alert("You have lost your robot battle! Game Over!");
            break;
        }
    } 
    
    endGame();
};

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    //if the player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle. RIP.");
    }

    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILLY', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill": //new case
        case "REFILL":
            if (playerMoney >= 7){
                window.alert("Refilling player's health by 20 for 7 moneys.");
                //increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                console.log(playerName + " now has" + playerHealth + " health and " + playerMoney + " moneys.");
            }
            else {
                window.alert("You don't have enought money!");
            }
            break;
        
        case "upgrade": //new case
        case "UPGRADE":
            if (playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for 7 moneys.");
                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
                console.log(playerName + " now has" + playerAttack + " attack and " + playerMoney + " moneys.");
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "leave": //new case
        case "LEAVE":
            window.alert("Leaving the store.");
            //do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            //call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

startGame();









