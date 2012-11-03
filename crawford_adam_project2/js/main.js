//Adam Crawford
//VFW 1211
//WebApp Part 3
//11/2/2012

document.addEventListener("DOMContentLoaded", function(){

//shorthand getElementByID
var getID = function (element) {
	var selected = document.getElementById(element);
	return selected;
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
	ageGroups = ["U6", "U8", "U10", "U12", "U14", "U18"],
	populateAges = function (ages) {
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
	saveData = function () {
		var comp = isComp(),
			gend = gameGender(),
			UUID = Math.floor(Math.random()*10000000000001),
			values = {};
		values.gDate = ["Game Date: ", getID('gdate').value];
		values.gTime = ["Game Time: ", getID('gtime').value];
		values.gField = ["Game Field: ", getID('gfield').value];
		values.gAge = ["Age Group: ", getID('ageGroup').value];
		values.gGender = ["Gender: ", gend];
		values.gComp = ["Is Competetive: ", comp];
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
		localStorage.setItem(UUID, JSON.stringify(values));
		alert("Added Game to the Schedule.");
	},
	displayData = function () {
		toggleDisplay("on");
		var createDiv = document.createElement("div"),
			createList = document.createElement("ul");
		createDiv.setAttribute("id", "data");
		createDiv.setAttribute("class", "prefixed");
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
				createSubList.appendChild(linksLi);
			};
			//createModifyLinks();
		};
	},
	clearData = function () {
		localStorage.clear();
		alert("Cleared");
		window.location.reload();
		return false;
	},
	displaySchedule = getID('display'),
	clearSchedule = getID('clear'),
	save = getID('submit');
// Call Functions
populateAges(ageGroups);
addBlur();
displaySchedule.addEventListener("click", displayData);
clearSchedule.addEventListener("click", clearData);
save.addEventListener("click", saveData);
});
