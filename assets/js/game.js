var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Felicia";
var enemyHealth = 50;
var enemyAttack = 10;

var fight = function(){
  window.alert("Welcome to Robot Glagiators!");

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

// check enemy's health
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
} 
else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

  
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;
  
  // Log a resulting message to the console so we know that it worked.
  console.log(enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining.");

  // check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}

  // check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
  console.log("Your player is still alive!")
}
if (playerHealth === 0) {
  console.log("This will not run.");
} 
else {
  console.log("This will run instead.");
}

};

fight();