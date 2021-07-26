const email = document.getElementById('email');
const emailVerification = document.getElementsByClassName('verify')[0];

email.addEventListener('input', () => {
    var validity = validateEmail(email.value);
    if (!validity && email.value !== "") {
        emailVerification.innerHTML = "This is not a valid email!";
    } else {emailVerification.innerHTML = "";}
})

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}