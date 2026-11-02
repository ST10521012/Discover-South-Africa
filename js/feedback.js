document.addEventListener("DOMContentLoaded", function (){

    //Get the form
    const feedbackForm = document.getElementById("feedbackForm");

    //Get the message element
    const formMessage = document.getElementById("forMeassage");

    //Listen for form submission
    feedbackForm.addEventListener("submit", function (event) {

        //Prevent the page from refreshing
        event.preventDefault(); 

        //Get the input values
        const name = document.getElementById("visitorName").value.trim();
        const email = document.getElementById("visitorEmail").value.trim();
        const message = document.getElementById("visitorMessage").value.trim();

        //Checknthat all fields contain inforamtion
        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please complete all fields.";

            return;
        }

        //Check the email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";

            return;
        }
        
        //Display a success message
        formMessage.textContent = "Thank you," + name + "! Your feedback back has been recieved.";

        //Clear the form
        feedbackForm.request();
    });
});