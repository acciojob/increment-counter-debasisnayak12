//your JS code here. If required.
const counterElem = document.getElementById('counter');
const incrementElem = document.getElementById('incrementBtn');

let counterValue = 0;

const updateCounter = () => {
	counterElem.textContent = counterValue;
};

const incCounter = () => {
	alert(`un-incremented value: ${counterValue}`);
	
	counterValue++;
	updateCounter();
};

incrementElem.addEventListener('click',incCounter);

