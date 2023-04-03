// importing various folders/libraries to use here
import React from "react";
import "./contactForm.css";

//function that creates a hero element for the App
function ContactForm() {

//   const nameIn

// function validateForm(){

// }

  return (
    <div className="contactForm">
     <div id="overlay">
        <form className="form" onSubmit="event.preventDefault(); validateForm()">
            <h1>Contact Us</h1>

            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Your name"/>
            <small className="error"></small>

            <label for="email">Email:</label>
            <input type="text" id="email" placeholder="Your email"/>
            <small className="error"></small>

            <label for="message">Message:</label>
            <textarea id="message" placeholder="Your message" rows="6"></textarea>
            <small className="error"></small>

            <div className="center">
                <input type="submit" value="Send Message"/>
                <p id="success"></p>
            </div>


        </form>
     </div>
    </div>
  );
}

//exports the file to be used elsewhere
export default ContactForm;
