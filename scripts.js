const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
	const username = document.querySelector("#username").value;
	let length = username.length;
	const password = document.querySelector("#password").value;
	const confirmPassword = document.querySelector("#confirmPassword").value;

	if (length < 3 || length > 20) {
		alert("Username must be between 3-20 characters!");
	} else if (password != confirmPassword) {
		alert("Passwords do not match!");
	} else {
		return;
	}
});
