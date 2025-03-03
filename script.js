/*/const inputname = document.querySelector("#name");
const inputemail = document.querySelector("#email");
const inputmsg = document.querySelector("#msg");
const checkbtn = document.querySelector("#check");
const output = document.querySelector("#log");

inputname.addEventListener("invalid", () => {
    console.log("Invalid Name Entered");
});

inputemail.addEventListener("invalid", () => {
    console.log("Invalid Email Address Entered");
});

inputmsg.addEventListener("invalid", () => {
    console.log("Invalid Message");
});


checkbtn.addEventListener("click", () => {
    const checkname = inputname.checkValidity();
    const checkemail = inputemail.checkValidity();
    const checkmsg = inputmsg.checkValidity();
    output.innerHTML = `checkValidity returned: ${checkname}`;
    output.innerHTML = `checkValidity returned: ${checkemail}`;
    output.innerHTML = `checkValidity returned: ${checkmsg}`;
});*/

/*document.querySelectorAll("input, textarea").forEach((inputfield) => {
    inputfield.addEventListener("keypress", (e) => {
        const validChars = /^[a-zA-z0-9 @.,!?]*$/;
        if (!validChars.test(e.key)) {
            e.preventDefault();
        }

        const errormsg = inputfield.nextElementSibling;
        if (errormsg && (errormsg.classList.contains("error-name") || errormsg.classList.contains("error-email") || errormsg.classList.contains("error-msg"))) {
            errormsg.style.display = "inline";
            errormsg.textContent = "Invalid Character Detected";
            errormsg.style.color = "red";
        }

        inputfield.style.border = "2px solid red";
        setTimeout(() => {
            inputfield.style.border = "";
            inputfield.nextElementSibling.style.display = "none";
        }, 5000);
    });
});*/