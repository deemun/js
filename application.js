$(function(){  //just calling it in jquery
	
var totalMoney = 100
var betGame = function(betNumber, randomNumber, amountNumber) {
	
	if (betNumber === randomNumber) {
		totalMoney += parseInt(amountNumber);
	}
	else if ((betNumber === randomNumber -1) || (betNumber === randomNumber + 1)) {
		totalMoney += 0
	}
	else {
		totalMoney -= amountNumber
	}
	alert("total money now "+totalMoney);
	
	//console.log("Total money in your wallet is " + totalMoney)
	
}

	$('.btn').on('click', function() {

	var betNumber = parseInt($('#betBox').val());
	alert(betNumber)
	var amountNumber = $('#amountBox').val() // jquery equivalent to getelementbyid. .val() gets the value

	var randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;


		betGame(betNumber, randomNumber, amountNumber)

	});

});




//.btn is jquery selector. looking for .class. If you wanted id, itd be #btn.

//.on~ event listener. Look for something