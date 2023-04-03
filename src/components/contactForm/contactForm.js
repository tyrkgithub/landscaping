// importing various folders/libraries to use here
import React from "react";
import "./contactForm.css";

//function that creates a hero element for the App
function ContactForm() {

  const nameInput = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  const success = document.querySelector("#success");
  const errorNodes = document.querySelectorAll(".error");

function validateForm(){

console.log("yes it works durrrr")
}

  return (
    <div className="contactForm">
     <div id="overlay">
        <form className="form"  onSubmit={(event) => {
       event.preventDefault();
       validateForm();
 }   }>
            <h1>Contact Us</h1>

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Your name"/>
            <small className="error"></small>

            <label htmlFor="email">Email:</label>
            <input type="text" id="email" placeholder="Your email"/>
            <small className="error"></small>

            <label htmlFor="message">Message:</label>
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
