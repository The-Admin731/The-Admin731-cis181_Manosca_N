/*
    Applied Lab 3-2
    Ducky World JavaScript
*/

/*
    Displays a welcome message.
*/
function welcomeCustomer() {
    alert("Welcome to Ducky World!");
}

/*
    Prompts the user for their name and displays a greeting.
*/
function greetCustomer() {
    var userName = prompt("Please enter your name:");
    if (userName) {
        alert("Hello, " + userName + "!");
    }
}

/*
    Calculates and displays the total number of ducks ordered.
*/
function calculateTotalDucks() {
    var yellow = Number(document.getElementById("yellow").value) || 0;
    var pink = Number(document.getElementById("pink").value) || 0;
    var blue = Number(document.getElementById("blue").value) || 0;
    var astro = Number(document.getElementById("astro").value) || 0;

    var sum = yellow + pink + blue + astro;
    alert("Total ducks ordered: " + sum);
}

/*
    Validates the order before submitting the form.
    Return true to allow submission.
    Return false to prevent submission.
*/
function validateOrder() {
    var yellow = Number(document.getElementById("yellow").value) || 0;
    var pink = Number(document.getElementById("pink").value) || 0;
    var blue = Number(document.getElementById("blue").value) || 0;
    var astro = Number(document.getElementById("astro").value) || 0;

    var total = yellow + pink + blue + astro;

    /* Check if at least one duck is selected */
    if (total <= 0) {
        alert("Please select at least one duck.");
        return false;
    }

    /* Ask for order confirmation */
    var confirmed = confirm("Are you sure you want to place this order?");
    if (!confirmed) {
        return false;
    }

    return true;
}