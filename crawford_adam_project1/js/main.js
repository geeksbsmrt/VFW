var sliderPosition = function (slider, textbox) { //Places correct numeric value in text box next to slider
	//look at current page for value of the argument id's set them to = moving the slider changes the number
	var x = document.getElementById(textbox);
	var y = document.getElementById(slider);
	x.value = y.value;
}
//this will set the value in the box as soon as the page loads for all sliders
window.onload = function() { sliderPosition('refyrs', 'refyrsValue'); sliderPosition('ar1yrs', 'ar1yrsValue'); sliderPosition('ar2yrs', 'ar2yrsValue');}