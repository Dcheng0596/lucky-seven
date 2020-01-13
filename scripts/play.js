
function isValidBet(event) {
    var bet = document.getElementById('bet').value;
    if (bet <= 0) {
        return false;
    }
    return true;
}

function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

const play = function(event) {
    if(isValidBet(event)) {
        var bet = document.getElementById('bet').value;
        var numRolls = 0;
        var maxMoney = bet;
        var maxMoneyRoll = 0;

        while(bet > 0) {
            var roll1= rollDice(6);
            var roll2= rollDice(6);

            if(roll1 + roll2 === 7) {
                bet+=4;
            } else {
                bet--;
            }

            numRolls++;
            if(bet > maxMoney) {
                maxMoney = bet;
                maxMoneyRoll = numRolls;
            }
        } 
        document.getElementById("starting-bet").innerHTML = "Starting Bet: ";
        document.getElementById("bet-value").innerHTML = "$" + document.getElementById('bet').value;
        document.getElementById("total-rolls").innerHTML = "Total Rolls Before Going Broke: ";
        document.getElementById("num-rolls").innerHTML = numRolls;
        document.getElementById("high-amount").innerHTML = "Highest Amount Won: ";
        document.getElementById("amount").innerHTML = "$" + maxMoney;
        document.getElementById("high-rolls").innerHTML = "Roll Count at Highest Amount Won: ";
        document.getElementById("num-high-rolls").innerHTML = maxMoneyRoll;

    } else {
        alert("Enter a number greater than 0");
    }
}
