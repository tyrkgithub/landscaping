import React from "react";
import "../pages/pages.css";
import ContactForm from "../components/contactForm/contactForm";



// function that creates a body for the homepage including information about what the app is about
function Contact() {
  return (
    <section className="body section">
     <ContactForm/>
    </section>
  );
}

export default Contact;