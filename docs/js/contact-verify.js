//Initial DOM connection
const email = document.getElementById('email');
const emailVerification = document.getElementsByClassName('verify')[0];
const humanityVerification = document.getElementsByClassName('simple-math')[0];

//Event listener for email validation

email.addEventListener('input', () => {
    var validity = validateEmail(email.value);
    if (!validity && email.value !== "") {
        emailVerification.innerHTML = "This is not a valid email!";
    } else {emailVerification.innerHTML = "";}
})

//Functions

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function generateMath() {
    var numb1 = getRandomInt(9);
    var numb2 = getRandomInt(9);
    var answer = numb1 + numb2;
    humanityVerification.innerHTML = `
        Please verify you are not a bot: ${numb1} + ${numb2} = <input type="text" id="math-answer">
    `;
    return(answer);
}

function getRandomInt(max) {
    let int = 1 + Math.floor(Math.random() * max);
    return(int);
}

//Insert simple math equation as anti-bot measure

var answer = generateMath();

const mathAnswer = document.getElementById('math-answer');
const submitButton = document.getElementById('form-submit');

mathAnswer.addEventListener('input', () => {
    if (+mathAnswer.value == answer) {
        submitButton.disabled = false;
    } else {submitButton.disabled = true}
})
