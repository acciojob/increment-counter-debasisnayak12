//your JS code here. If required.
const counterElem = document.getElementById('counter');
const incrementElem = document.getElementById('incrementBtn');

let counterValue = 0;

incrementElem.addEventListener('click',increase);

function increase(){
	alert(counterValue);
	counterValue++;
	counterElem.innerHTML = counterValue;
}
