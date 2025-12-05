function include(src) {
	document.head.appendChild(document.createElement("script")).setAttribute("src", src);
}

function addToList() {
	if (targetList != undefined) {
		targetList.appendChild(document.createElement("antenna-item")).innerHTML = addItem.value;
	}
}

function editBox() {
	if (targetBox != undefined) {
		targetBox.innerHTML = editContent.value;
	}
}

/*function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);*/
addEventListener("click", function(event) {
	window.targetList = event.target.closest("antenna-container").querySelector("antenna-list");
	window.targetBox = event.target.closest("antenna-container").querySelector("antenna-box");
});
include("js/map.js");
