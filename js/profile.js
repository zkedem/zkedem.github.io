function addToList() {
	if (targetList != undefined && addItem.value != "") {
		targetList.appendChild(document.createElement("antenna-item")).innerHTML = addItem.value;
	}
}

function editBox() {
	if (targetBox != undefined) {
		targetBox.innerHTML = editContent.value;
	}
}

addEventListener("click", function(event) {
	window.targetList = event.target.closest("antenna-container").querySelector("antenna-list");
	window.targetBox = event.target.closest("antenna-container").querySelector("antenna-box");
});
