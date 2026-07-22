// Welcome message logged to the console on page load
function saludarUsuario() {
 console.log("Welcome to Wright College PC Gaming and Modding Club!");
}

// Form validation and interactive confirmation
 function validarFormulario(event) {
    event.preventDefault();

    // Ask user for confirmation before proceeding
 var confirmacion = confirm("Are you sure you want to submit this form?");

    if (!confirmacion) {
         return false;
    }

    alert("Thank you! Your message has been sent successfully.");

document.getElementById("contact-form").reset();
    return true;
}