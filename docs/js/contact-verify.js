//Initial DOM connection
const email = document.getElementById('email');
const emailVerification = document.getElementsByClassName('verify')[0];
const emailStatus = document.getElementsByClassName('email-status')[0];

//Event listener for email validation

email.addEventListener('input', () => {
	var validity = validateEmail(email.value);
	if (!validity && email.value !== "") {
		emailVerification.innerHTML = "Please enter a valid email";
		emailStatus.src = "images/email-x.png";
		emailStatus.style.display = "inline-block";
	} else if (validity && email.value !== "") {
		emailVerification.innerHTML = "";
		emailStatus.src = "images/email-check.png";
	} else {
		emailVerification.innerHTML = "";
		emailStatus.style.display = "none";
	}
})

//Functions

function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

// Form handling
document.getElementById("contact-form").addEventListener("submit", (e) => {
	e.preventDefault();
	const request = new FormData(e.target);

	fetch('../php/contact-form.php', {
	  method: 'POST',
	  body: request
	})
	.then((response) => {return response.json();})
	.then((response) => {
		alert(response.message);
		window.location.reload();
	});
});