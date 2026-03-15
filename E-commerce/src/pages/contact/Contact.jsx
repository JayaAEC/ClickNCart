import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <form action="https://formspree.io/f/mojkneyw" method='POST'>
        <input type="text" placeholder='Enter your name' name='username'required/>
        <input type="email" placeholder='Enter your Email' name='email' />
        <textarea name="" placeholder='Message'></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact
