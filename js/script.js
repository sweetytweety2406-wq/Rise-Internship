const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const result = document.getElementById("result");

    if(name === "" || email === "" || message === ""){
        result.textContent = "Please fill all fields";
        return;
    }

    result.textContent = "Form Submitted Successfully";

    form.reset();
});