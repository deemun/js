var totalMoney = 10;
var amountNumber;
var betNumber;


function betGame() {
	
	if (betNumber == randomNumber) {
		totalMoney += parseInt(amountNumber);
	}
	else if ((betNumber == randomNumber -1) || (betNumber == randomNumber + 1)) {
		totalMoney += 0
	}
	else {
		totalMoney -= amountNumber
	}
	alert("total money now "+totalMoney);
	
	//console.log("Total money in your wallet is " + totalMoney)
	
}


while(totalMoney>=5)
{
	betNumber = prompt("On which number would you like to bet?");
	amountNumber = prompt("How much money would you like to bet?");

	var randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
	
	
	betGame();

}
console.log("total money is less than 5 dollars. Sorry you can't play more");