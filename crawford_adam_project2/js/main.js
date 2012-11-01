//Adam Crawford
//VFW 1211
//WebApp Part 2
//10/30/2012

document.addEventListener("DOMContentLoaded", function(){

//shorthand getElementByID
var getID = function (element) {
	var selected = document.getElementById(element);
	return selected;
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

// Populate Select Element
var ageGroups = ["U6", "U8", "U10", "U12", "U14", "U18"];
var populateAges = function (ages) {
		var ageItem = getID("gAge"),
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

// Call Functions
populateAges(ageGroups);
addBlur();
});