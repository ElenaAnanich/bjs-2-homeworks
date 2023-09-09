
"use strict";

function solveEquation(a, b, c) {
  let arr = [];  
  let d = (b ** 2) - (4 * a * c);
	if (d < 0) {
		arr.push();
	} else if (d == 0) {		
		let oneRoot = -b / (2 * a);
			arr.push(oneRoot);
	} else if (d > 0) {
		let firstRoot = (-b + Math.sqrt(d))/(2 * a);
		let secondRoot = (-b - Math.sqrt(d))/(2 * a);
			arr.push(firstRoot, secondRoot);		  		
	} 
  return arr; 
}


function calculateTotalMortgage(percent, contribution, amount, date) {
	let totalAmount = 0; 
	let mounthPercent = (percent / 100) / 12;
	let firstPayment = parseInt(contribution);
	let objectPrice = parseInt(amount);
	if (Number.isNaN(mounthPercent)){
	  return totalAmount	= `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
	} else if (Number.isNaN(firstPayment)){
	  return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;  
	} else if (Number.isNaN(objectPrice)){
	  return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;  
	  }
		else {
	let bodyCredit = objectPrice - firstPayment;
	const dateNow = new Date();
	const dateFuture = new Date(date);
	let dateTerm = Math.floor((dateFuture - dateNow) / 1000 / 60 / 60 / 24 / 30); 
	let payDay = bodyCredit * (mounthPercent + (mounthPercent / (((1 + mounthPercent) ** dateTerm) - 1)));
	totalAmount = payDay * dateTerm;
	return Number(totalAmount.toFixed(2));
	  }
	}