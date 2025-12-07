const playerName = "Mario";
const currentLives = 3;
const coins = [
    {Level: 1, coin: 25},
    {Level: 2, coin: 30},
    {Level: 3, coin: 45},
];
let sum = 0;
let avg = 0
for (let s = 0; s < coins.length; s++){
     sum = sum + coins[s].coin
     avg = sum % 3;
};
console.log("số coin dư:", avg);