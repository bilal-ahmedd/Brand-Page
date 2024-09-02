import React from 'react'
import ContactHeader from './ContactHeader';
import '../../css/contact.css';
import ContactContent from './ContactContent';

const Contact = () => {
  return (
    <>
    <div className='container'>
        <ContactHeader />
        <ContactContent />
    </div>
    </>
  )
}

export default Contact
