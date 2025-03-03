document.addEventListener("DOMContentLoaded", (e) => {
    const inputname = document.getElementById("name");
    const inputemail = document.getElementById("email");
    const inputmsg = document.getElementById("msg");
    const errorname = document.getElementById("error-name");
    const erroremail = document.getElementById("error-email");
    const errormsg = document.getElementById("error-msg");
    const infomsg = document.getElementById("info-message");
    const maxlength = 100;

    inputname.addEventListener("input", (e) => {

        if (inputname.value.length == 0) {
            errormsg.textContent = "";
            inputname.style.border = "1px solid #1e459c";
        }

        if (inputname.validity.valid == true) {
            errorname.textContent = "";
            inputname.style.border = "3px solid rgb(100, 253, 100)";
        }
        
        else if (inputname.validity.patternMismatch == true) {
            errorname.textContent = "Sorry, That Character Isn't Allowed";
            inputname.value = inputname.value.slice(0, -1);
            errorname.style.color = "red";
            inputname.style.border = "10px solid red";
            setTimeout(() => {
                errorname.textContent = "";
                inputname.style.border = "1px solid #1e459c";
            }, 2000);
        }
    });
    
    /*inputemail.addEventListener("input", (e) => {

        if (inputemail.validity.valid == true) {
            erroremail.textContent = "";
            inputemail.style.border = "3px solid rgb(100, 253, 100)";
        }
        
        else if (inputemail.validity.typeMismatch == true) {
            erroremail.textContent = "Sorry, That Character Isn't Allowed";
            erroremail.style.color = "red";
            inputemail.style.border = "10px solid red";
            setTimeout(() => {
                erroremail.textContent = "";
                inputemail.style.border = "1px solid #1e459c";
            }, 2000);
        }
    });*/

    inputmsg.addEventListener("input", (e) => {

         validPattern = /^[a-zA-Z0-9\s.,!?']+$/;

        if (validPattern.test(inputmsg.value)) {
            errormsg.textContent = "";
            inputmsg.style.border = "3px solid rgb(100, 253, 100)";
        }
        
        else {
            if (inputmsg.value.length == 0) {
                errormsg.textContent = "";
            }

            else {
                errormsg.textContent = "Sorry, That Character Isn't Allowed";
                inputmsg.value = inputmsg.value.slice(0, -1);
                errormsg.style.color = "red";
                inputmsg.style.border = "10px solid red";
                setTimeout(() => {
                    errormsg.textContent = "";
                    inputmsg.style.border = "1px solid #1e459c";
                }, 2000);
            }
        }
    });

    inputmsg.addEventListener("input", (e) => {

        let remainingchars = maxlength - inputmsg.value.length;

        infomsg.textContent = `${remainingchars} chars remaining`;

        if (remainingchars <= 100 && remainingchars > 66) {
            infomsg.style.color = "green";
        }

        if (remainingchars <= 66 && remainingchars > 33) {
            infomsg.style.color = "orange";
        }

        if (remainingchars <= 33 && remainingchars >= 0) {
            infomsg.style.color = "red";
        }

    });

});