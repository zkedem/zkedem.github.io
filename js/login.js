if (localStorage.userName != "mozart" && localStorage.passwd != "1234") {
	loginDialog.show();
}

function login() {
	if (loginUserName.value == "mozart" && loginPassword.value == "1234") {
		localStorage.setItem("userName", loginUserName.value);
		localStorage.setItem("passwd", loginPassword.value);
		loginDialog.hide();
	}
}