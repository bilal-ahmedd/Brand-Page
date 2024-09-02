import React, { useState } from 'react'

const ContactContent = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
  
  const onSubmit = (e)=> {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setMessage(e.target[2].value);
  }

  return (
    <>
      <div className='contact-content'>
        <div className="contact-form">
          <div className='contact-btn'>
            <button> <i className="fa fa-commenting" aria-hidden="true"></i> Via Support Chat </button>
            <button> <i className="fa fa-phone" aria-hidden="true"></i> Via Call </button>
          </div>
          <button className=" contact-email-btn"> <i className="fa fa-envelope-o" aria-hidden="true"></i> Via Email Form </button>
          <form action="" onSubmit={onSubmit}>
            <div className="contact-input">
              <label htmlFor=""> Full Name </label>
              <input type="text" />
              <label htmlFor=""> Email </label>
              <input type="email" />
              <label htmlFor=""> Message </label>
              <textarea name="" id="" cols={30} rows={10}></textarea>
              <button className='contact-submit'> Submit </button>
            </div>
          </form>
        </div>
        <div className="contact-img">
          <img src="../../src/assets/contact.webp" alt="" />
        </div>
      </div>
        <div className="content">
          <p> Submit form with the values to see the values</p>
          {"Name: " + name}
          <br/>
          {"Email: " + email}
          <br/>
          {"Message: " + message}
        </div>
    </>
  )
}

export default ContactContent
