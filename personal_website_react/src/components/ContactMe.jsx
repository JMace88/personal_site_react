import React from "react";
import './styles/contact.css'

const ContactMe = () => {
  return (
    <>
      <main>
        <div className='card'>
          <h1>To contact me please fill out this form.</h1>

          <div className='formbox'>
            <form action='success.htm'>
              <div>
                <label for='name'>Name:</label>
                <input type='text' name='name' />
              </div>
              <br />
              <div>
                <label for='email'>Email:</label>
                <input type='email' name='email' />
              </div>
              <br />
              <div>
                <label for='message'>Your message:</label>
                <textarea name='message'>Type your message here . . .</textarea>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactMe;
