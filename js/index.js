function include(src) {
	document.head.appendChild(document.createElement("script")).setAttribute("src", src);
}

/*function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);*/
include("js/login.js");
include("js/map.js");
include("js/profile.js");
