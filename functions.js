import {
    resultArray,
    resultSet,
    emojiInput,
    emojiiList
} from './constants.js';

let arrayOfEmoji = [];
let setOfEmoji = new Set();

function addArray() {
	let val = emojiInput.value;
  	arrayOfEmoji.push(val);
	resultArray.innerHTML = `<p>[${arrayOfEmoji} ]</p>`
	// console.log('arrayOfEmoji---->',arrayOfEmoji);
}

function addSet() {
	let value = emojiInput.value;
  	setOfEmoji.add(value); 
    let myArr = Array.from(setOfEmoji); 
    resultSet.innerHTML = `<p>[${myArr} ]</p>`
    // console.log('setOfEmoji----->',setOfEmoji);
}

function showEmoji(){
	 let random = Math.floor(Math.random() * emojiiList.length);
	 emojiInput.value = emojiiList[random];
}

export {
    addArray, 
    addSet,
    showEmoji
}