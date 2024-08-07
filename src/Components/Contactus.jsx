import React from 'react';
import './Contactus.css';
import Swal from 'sweetalert2'

function Contactus() {
// Web3Forms website is used to send email to owner. all this syntex are available on the website from line 8-25.

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "bbebf417-70f0-408c-9283-5a6f47131149")

    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());

    // Sweetalert2 website used 25-31
        if (res.success) {
            Swal.fire({
                title: "Message Send",
                text: "Thanks For Your Response",
                icon: "success"
              });
        }
      };


  return (
    <section className='contact'>
      <form onSubmit={onSubmit}>
        <h2>CONTACT US</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className='field' placeholder='Enter Your Name' name='name'required />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="email" className='field' placeholder='Enter Your Email' name='Email'required />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea className='field-message' name='Message' placeholder='Enter Your Message' required></textarea>
        </div>
        <button type='submit'>Send Message</button>
      </form>
    </section>
  );
}

export default Contactus;
