import React from 'react';
import Navigation from "../../Components/Navigation";
import ContactsUs from '../../Components/contactUs/Contactus';
export const ContactUs = () => {
  return (
    <div className ="contact">
    <Navigation />
    <div className='contact-divider'></div>
    <div className='contact-us'>

    <ContactsUs />
    </div>
    </div>
  )
}

export default ContactUs