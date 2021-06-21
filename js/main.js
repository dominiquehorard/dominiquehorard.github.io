/*
alert("Testing");
*/

/*Storing form in variable to add event listener to later*/
let form = document.getElementById("contact_form");

/*Storing the value of the input elements in variables*/
let fName = document.getElementById("firstName");
let lName = document.getElementById("lastName");
let eaddress = document.getElementById("email_address");

/*Storing the element for errors in variable*/
/*Will insert specific error messages in later*/
let errorEl = document.getElementById("error");

/*fName.addEventListener("blur", function(e){
    if (fName.value.length < 2 /!*|| lName.value.length < 2*!/) {
        alert("Names must be two or more letters.")
        /!*errMsg = 'Names must be two or more letters.';*!/
        e.preventDefault();
        errorEl.innerText = errMsg;
    }
})*/

/*Adding event listener to forms that is an IIFE to check for multiple issues with user input*/
form.addEventListener("submit", function(e){
    /*Defining variable to store error messages*/
    let errMsg;
    if (fName.value.length < 2 || lName.value.length < 2) {
        /*alert("Names must be two or more letters.")*/
        errMsg = 'Names must be two or more letters.';
        e.preventDefault();
        errorEl.innerText = errMsg;
        fName.classList.add("error_input");
        lName.classList.add("error_input");
    }

    /*RegEx that is looking for a string of just letters*/
    /*If it isn't, don't submit the form*/
    if (/^[A-Za-z]+$/.test(fName.value) === false || /^[A-Za-z]+$/.test(lName.value) === false) {
        /*alert("You can only enter letters for name inputs.")*/
        errMsg = 'You can only enter letters for first/last name.';
        e.preventDefault();
        errorEl.innerText = errMsg;
        fName.classList.add("error_input");
        lName.classList.add("error_input");
    }

    /*Converting the value of the user input to lowercase for ease and storing it in variable*/
    let e_add = eaddress.value.toLowerCase();

    /*regex looks for name that can be letters,numbers,dot,hyphen in first part*/
    /*@ symbol and then letters, digits, numbers for the domain*/
    /*dot and then between 2 to 8 letters for the extension*/
    /*an optional extension addition like .uk  or .ca*/
    if (/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(e_add) === false) {
        /*alert("Emails can only contain letters,numbers,dots,hyphens,Please review your entry");*/
        errMsg = 'Please enter a valid email, containing only letters, numbers, dots, hyphens. Please review your entry';
        e.preventDefault();
        errorEl.innerText = errMsg;
        eaddress.classList.add("error_input");
    }
});
