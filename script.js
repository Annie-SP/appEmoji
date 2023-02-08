'use strict';
document.addEventListener('DOMContentLoaded', showEmoji);
let resultArray = document.getElementById('array');
let resultSet = document.getElementById('set');
let emojiInput = document.querySelector('.input-emoji');
const btn = document.querySelector('.btn');
let random = 0;
let emojiiList = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸'];
//let emojii = ['&#128512', '&#128516', '&#128513', '&#128514'];



btn.addEventListener('click', function (event) {
	event.preventDefault();
	showEmoji();
	addArray();
	addSet();
  
});

let arrayOfEmoji = [];
let setOfEmoji = new Set();

function addArray() {
	let val = emojiInput.value;
  	arrayOfEmoji.push(val);
	resultArray.innerHTML += val;

	console.log('arrayOfEmoji---->',arrayOfEmoji);

}

function addSet() {
	let value = emojiInput.value
  	setOfEmoji.add(value); 
    resultSet.innerHTML += value;
    console.log('setOfEmoji----->',setOfEmoji);
}

function showEmoji(){
	 random = Math.floor(Math.random() * emojiiList.length);
	emojiInput.value = emojiiList[random];
	console.log(emojiiList);
}

 // emojiInput.value = emojiiList[random];