//Adam Crawford
//VFW 1211
<<<<<<< HEAD
//WebApp Part 3
//11/2/2012
=======
//WebApp Part 2
//10/30/2012
>>>>>>> master

document.addEventListener("DOMContentLoaded", function(){

//shorthand getElementByID
var getID = function (element) {
	var selected = document.getElementById(element);
	return selected;
<<<<<<< HEAD
	},
//short getElementsByType
	getType = function (type) {
		var lmnts = document.getElementsByType(type);
		return lmnts;
	},
//short getElementsByTagName
	getTag = function (tag) {
		var tags = document.getElementsByTagName(tag);
		return tags;
	},
	gameGender = function () {
	var radios = document.forms[0].gender;
		for (i=0, j=radios.length; i<j; i++) {
			if (radios[i].checked) {
				return radios[i].value;
			};
		};
	},
	isComp = function () {
	return getID('gcomp').checked;
	},
// Populate Select Element
	ageGroups = ["Select", "U6", "U8", "U10", "U12", "U14", "U18"],
	populateAges = function (ages) {
=======
};
//short getElementsByType
var getType = function (type) {
	var lmnts = document.getElementsByType(type);
	return lmnts;
};
//short getElementsByTagName
var getTag = function (tag) {
	var tags = document.getElementsByTagName(tag);
	return tags;
};
var gameGender = function () {
	var radios = document.forms[0].gender;
	for (i=0, j=radios.length; i<j; i++) {
		if (radios[i].checked) {
			return radios[i].value;
		};
	};
};
var isComp = function () {
	return getID('gcomp').checked;
};
// Populate Select Element
var ageGroups = ["U6", "U8", "U10", "U12", "U14", "U18"];
var populateAges = function (ages) {
>>>>>>> master
		var ageItem = getID("gage"),
			insertSelect = document.createElement("select"),
			ogroup = document.createElement("optgroup");
		ogroup.setAttribute("label", "--Ages--");
		insertSelect.appendChild(ogroup);
		insertSelect.setAttribute("id", "ageGroup");
		for (i = 0, j = ages.length; i < j; i++) {
			var insertAge = document.createElement("option"),
				opt = ages[i];
			insertAge.setAttribute("value", opt);
			insertAge.innerHTML = opt;
			insertSelect.appendChild(insertAge);
		};
		ageItem.appendChild(insertSelect);
<<<<<<< HEAD
	},
//Style input fields
	changeStyle = function (tag) {
		if (tag.value === "") {
			tag.setAttribute("class", "required");
		} else {
			tag.removeAttribute("class", "required");
		};
	},
	addBlur = function () {
		var tags = getTag("input");
		for (i=0, j=tags.length; i<j; i++) {
			if (tags[i].type === "checkbox" || tags[i].type === "radio" || tags[i].type === "range" || tags[i].type === "submit" || tags[i].type === "hidden") {
				continue;
			} else {
				tags[i].addEventListener("blur", function(){
					changeStyle(this);
				});
			};
		};
	},
	toggleDisplay = function (state) {
		switch(state){
			case "on":
				getID('createGame').style.display = "none";
				getID('clear').style.display = "inline";
				getID('display').style.display = "none";
				getID('addNew').style.display = "inline";
				break;
			case "off":
				getID('createGame').style.display = "block";
				getID('clear').style.display = "inline";
				getID('display').style.display = "inline";
				getID('data').style.display = "none";
				getID('addNew').style.display = "none";
				break;
			default:
				return false;
		};
	},
	createModifyLinks = function (key, linksLi) {
		var editLink = document.createElement('a'),
			editText = "Edit Match";
		editLink.href = "#";
		editLink.key = key;
		editLink.addEventListener("click", editMatch);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);
		
		var deleteLink = document.createElement('a'),
			deleteText = "Delete Match";
		deleteLink.href = "#";
		deleteLink.key = key;
		deleteLink.addEventListener("click", deleteMatch);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	},
	saveData = function () {
		var UUID = Math.floor(Math.random()*10000000000001),
			values = {};
=======
	};
//Style input fields
var changeStyle = function (tag) {
	if (tag.value === "") {
		tag.setAttribute("class", "required");
	} else {
		tag.removeAttribute("class", "required");
	}
}
var addBlur = function () {
	var tags = getTag("input");
	for (i=0, j=tags.length; i<j; i++) {
		if (tags[i].type === "checkbox" || tags[i].type === "radio" || tags[i].type === "range" || tags[i].type === "submit" || tags[i].type === "hidden") {
			continue;
		} else {
			tags[i].addEventListener("blur", function(){
				changeStyle(this);
			});
		};
	};
};
var toggleDisplay = function (state) {
	switch(state){
		case "on":
			getID('createGame').style.display = "none";
			getID('clear').style.display = "inline";
			getID('display').style.display = "none";
			getID('addNew').style.display = "inline";
			break;
		case "off":
			getID('createGame').style.display = "block";
			getID('clear').style.display = "inline";
			getID('display').style.display = "inline";
			getID('data').style.display = "none";
			getID('addNew').style.display = "none";
			break;
		default:
			return false;
	};
};
var saveData = function () {
	var comp = isComp();
	var gend = gameGender();
	var UUID = Math.floor(Math.random()*10000000000001);
	var values = {};
>>>>>>> master
		values.gDate = ["Game Date: ", getID('gdate').value];
		values.gTime = ["Game Time: ", getID('gtime').value];
		values.gField = ["Game Field: ", getID('gfield').value];
		values.gAge = ["Age Group: ", getID('ageGroup').value];
<<<<<<< HEAD
		values.gGender = ["Gender: ", gameGender()];
		values.gComp = ["Is Competetive: ", isComp()];
=======
		values.gGender = ["Gender: ", gend];
		values.gComp = ["Is Competetive: ", comp];
>>>>>>> master
		values.gHome = ["Home Team: ", getID('ghome').value];
		values.gAway = ["Away Team: ", getID('gaway').value];
		values.gComments = ["Comments: ", getID('gspec').value];
		values.ref = ["Referee: ", getID('refname').value];
		values.refGrd = ["Grade: ", getID('refgrade').value];
		values.refYrs = ["Years Reffing: ", getID('refyrs').value];
		values.refEml = ["Email: ", getID('refemail').value];
		values.ar1 = ["AR 1: ", getID('ar1name').value];
		values.ar1Grd = ["Grade: ", getID('ar1grade').value];
		values.ar1Yrs = ["Years Reffing: ", getID('ar1yrs').value];
		values.ar1Eml = ["Email: ", getID('ar1email').value];
		values.ar2 = ["AR 2: ", getID('ar2name').value];
		values.ar2Grd = ["Grade: ", getID('ar2grade').value];
		values.ar2Yrs = ["Years Reffing: ", getID('ar2yrs').value];
		values.ar2Eml = ["Email: ", getID('ar2email').value];
<<<<<<< HEAD
		localStorage.setItem(UUID, JSON.stringify(values));
		alert("Added Game to the Schedule.");
	},
	displayData = function () {
		toggleDisplay("on");
		var createDiv = document.createElement("div"),
			createList = document.createElement("ul");
		createDiv.setAttribute("id", "data");
		createDiv.appendChild(createList);
		document.body.appendChild(createDiv);
		getID('data').style.display = "display";
		for (i=0,j=localStorage.length; i<j; i++) {
			var createLi = document.createElement("li"),
				linksLi = document.createElement("li"),
				key = localStorage.key(i),
				value = localStorage.getItem(key),
				obj = JSON.parse(value),
				createSubList = document.createElement("ul");
			createList.appendChild(createLi);
			createLi.appendChild(createSubList);
			for (var k in obj) {
				var createSubLi = document.createElement("li"),
					liText = obj[k][0] + " " + obj[k][1];
				createSubList.appendChild(createSubLi);
				createSubLi.innerHTML = liText;
				linksLi.setAttribute("id", "modifyLinks");
				createSubList.appendChild(linksLi);
			};
			createModifyLinks(localStorage.key(i), linksLi);
		};
	},
	clearData = function () {
		localStorage.clear();
		alert("Cleared");
		window.location.reload();
		return false;
	},
	editMatch = function () {
		var data = localStorage.getItem(this.key),
			values = JSON.parse(data),
			radios = document.forms[0].gender;
		toggleDisplay("off");
		getID('gdate').value = values.gDate[1];
		getID('gtime').value = values.gTime[1];
		getID('gfield').value = values.gField[1];
		getID('ageGroup').value = values.gAge[1];
		for (i = 0, j = radios.length; i<j; i++) {
			if (radios[i].value === "Boys" && values.gGender[1] === "Boys") {
				radios[i].setAttribute("checked");
			} else if (radios[i].value === "Girls" && values.gGender[1] === "Girls") {
				radios[i].setAttribute("checked");
			};
		};
		if (values.gComp[1]) {
			getID('gcomp').setAttribute("checked");
		};
		getID('ghome').value = values.gHome[1];
		getID('gaway').value = values.gAway[1];
		getID('gspec').value = values.gComments[1];
		getID('refname').value = values.ref[1];
		getID('refgrade').value = values.refGrd[1];
		getID('refyrs').value = values.refYrs[1];
		getID('refemail').value = values.refEml[1];
		getID('ar1name').value = values.ar1[1];
		getID('ar1grade').value = values.ar1Grd[1];
		getID('ar1yrs').value = values.ar1Yrs[1];
		getID('ar1email').value = values.ar1Eml[1];
		getID('ar2name').value = values.ar2[1];
		getID('ar2grade').value = values.ar2Grd[1];
		getID('ar2yrs').value = values.ar2Yrs[1];
		getID('ar2email').value = values.ar2Eml[1];
		
		save.removeEventListener("click", storeData);
		getID('submit').value = "Edit Match";
		var editSubmit = getID('submit');
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
	},
	validate = function () {
		var getDate = getID('gdate'),
			getTime = getID('gtime'),
			getField = getID('gfield'),
			getAge = getID('ageGroup'),
			getRadios = document.forms[0].gender;
			getHome = getID('ghome'),
			getAway = getID('gaway'),
			getRef = getID('refname'),
			getRefEml = getID('refemail'),
			getAR1Name = getID('ar1name'),
			getAR1Eml = getID('ar1email'),
			getAR2Name = getID('ar2name'),
			getAR2Eml = getID('ar2email'),
			errorArray = [];
			
			if (getDate.value === "") {
				var gDateError = "Please enter a date.";
				errorArray.push(gDateError);
				getDate.setAttribute("class", "required");
			};
			if (getTime.value === "") {
				var gTimeError = "Please enter a time.";
				errorArray.push(gTimeError);
				getTime.setAttribute("class", "required");
			};
			if (getField.value === "") {
				var gFieldError = "Please enter a field.";
				errorArray.push(gFieldError);
				getField.setAttribute("class", "required");
			};
			if (getAge.value === "Select") {
				var gAgeError = "Please select an age.";
				errorArray.push(gFieldError);
				getAge.setAttribute("class", "required");
			};
			var emlRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;  //modified end of RE to accept addresses from .info and TLD's with 4 chars in them
			if(!(re.exec(getRefEml.value))) {
				var refEmlError = "Please enter a valid email address for the Referee.";
				getRefEml.setAttribute("class", "required");
				errorArray.push(refEmlError);
			};
			if(!(re.exec(getAR1Eml.value))) {
				var AR1EmlError = "Please enter a valid email address for AR1.";
				getAR1Eml.setAttribute("class", "required");
				errorArray.push(AR1EmlError);
			};
			if(!(re.exec(getAR2Eml.value))) {
				var AR2EmlError = "Please enter a valid email address for AR2.";
				getAR2Eml.setAttribute("class", "required");
				errorArray.push(AR2EmlError);
			};
			if (getHome.value === "") {
				var gHomeError = "Please enter a Home team.";
				errorArray.push(gHomeError);
				getHome.setAttribute("class", "required");
			};
			if (getAway.value === "") {
				var gAwayError = "Please enter an Away team.";
				errorArray.push(gTimeError);
				getAway.setAttribute("class", "required");
			};
			if (getRef.value === "") {
				var gRefError = "Please enter a Referee name.";
				errorArray.push(gRefError);
				getRef.setAttribute("class", "required");
			};
			if (getAR1Name.value === "") {
				var gAR1Error = "Please enter an AR1 name.";
				errorArray.push(gAR1Error);
				getAR1Name.setAttribute("class", "required");
			};
			if (getAR2Name.value === "") {
				var gAR2Error = "Please enter an AR2 name.";
				errorArray.push(gAR2Error);
				getAR2Name.setAttribute("class", "required");
			};
			for (i=0, j=getRadios.length; i<j; i++) {
				if (getRadios[i].checked) {
					break;
				} else if (i===j) {
					var gGendError = "Please select a game gender.";
					errorArray.push(gGendError);
					getRadios.setAttribute("class", "required");
				};
			};
	},
	deleteMatch = function () {
		var ask = confirm("Delete this match?");
		if (ask) {
			localStorage.removeItem(this.key);
			alert("Match deleted.");
			window.location.reload();
		} else {
			alert("Match not deleted.");
		};
	},
	displaySchedule = getID('display'),
	clearSchedule = getID('clear'),
	save = getID('submit')
;
// Call Functions
populateAges(ageGroups);
addBlur();
displaySchedule.addEventListener("click", displayData);
clearSchedule.addEventListener("click", clearData);
save.addEventListener("click", validate);
=======
	localStorage.setItem(UUID, JSON.stringify(values));
	alert("Added Game to the Schedule.");
};
var displayData = function () {
	toggleDisplay("on");
	var createDiv = document.createElement("div");
	createDiv.setAttribute("id", "data");
	createDiv.setAttribute("class", "prefixed");
	var createList = document.createElement("ul");
	createDiv.appendChild(createList);
	document.body.appendChild(createDiv);
	getID('data').style.display = "display";
	for (i=0,j=localStorage.length; i<j; i++) {
		var createLi = document.createElement("li");
		createList.appendChild(createLi);
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		var createSubList = document.createElement("ul");
		createLi.appendChild(createSubList);
		for (var k in obj) {
			var createSubLi = document.createElement("li");
			createSubList.appendChild(createSubLi);
			var liText = obj[k][0] + " " + obj[k][1];
			createSubLi.innerHTML = liText;
		};
	};
};
var clearData = function () {
	localStorage.clear();
	alert("Cleared");
	window.location.reload();
	return false;
}


// Call Functions
populateAges(ageGroups);
addBlur();
var displaySchedule = getID('display');
displaySchedule.addEventListener("click", displayData);
var clearSchedule = getID('clear');
clearSchedule.addEventListener("click", clearData);
var save = getID('submit');
save.addEventListener("click", saveData);
>>>>>>> master
});
