import {
    btn
} from './constants.js';

import {    
	addArray, 
    addSet, 
	showEmoji
} from "./functions.js";

document.addEventListener('DOMContentLoaded', showEmoji);

btn.addEventListener('click', function (event) {
	event.preventDefault();
	addArray();
	addSet();
  	showEmoji();
});


