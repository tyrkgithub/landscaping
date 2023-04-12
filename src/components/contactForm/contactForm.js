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

  clearMessages();
  let errorFlag = false;

if(nameInput.value.length < 1){
  errorNodes[0].innerText = "Name cannot be blank";
  nameInput.classList.add("error-border");
  errorFlag = true;
}

if(!emailIsValid(email.value)){
  errorNodes[1].innerText = "Invailid email address";
  email.classList.add("error-border");
    errorFlag = true;

}

if(message.value.length < 1){
  errorNodes[2].innerText = "Please enter message";
  message.classList.add("error-border");
    errorFlag = true;

}
if(!errorFlag){
  success.innerText = "Success!";
}

}

function clearMessages(){
  for(let i = 0; i < errorNodes.length; i++){
    errorNodes[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error-border")
  email.classList.remove("error-border")
  message.classList.remove("error-border")
}

function emailIsValid(email){
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

  return (
    <div className="wrapper">
    <div className="contactForm">
     <div id="overlay">
        <form target="_blank" className="form"  onSubmit={(event) => {
       event.preventDefault();
       validateForm();
 }   } action="https://formsubmit.co/tiayorke@hotmail.co.uk" method="POST">
            <h1>Contact Us</h1>

            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="Your name"/>
            <small className="error"></small>

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="Your email"/>
            <small className="error"></small>

            <label htmlFor="message">Message:</label>
            <textarea type="message" name="message" id="message" placeholder="Your message" rows="6"></textarea>
            <small className="error"></small>

            <div className="center">
                <input type="submit" value="Send Message"/>
                <p id="success"></p>
            </div>


        </form>
     </div>
    </div>
    </div>
  );
}

//exports the file to be used elsewhere
export default ContactForm;
