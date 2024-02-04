import React from 'react';

function Contactus() {
  return (
    <div className='diffSection' id='contactus_section'>
      <center>
        <p style={{ fontFamily: '"Montserrat"', fontSize: 50, padding: 100 }}>
          Contact Us
        </p>
      </center>
      <div className='csec' />
      <div className='back-contact'>
        <div className='cc'>
          <form
            action='mailto:salahibra04@gmail.com'
            method='post'
            encType='text/plain'
          >
            <label>
              First Name <span className='imp'>*</span>
            </label>
            <label style={{ marginLeft: 185 }}>
              Last Name <span className='imp'>*</span>
            </label>
            <br />
            <center>
              <input
                type='text'
                name=''
                style={{ marginRight: 10, width: 175 }}
                required='required'
              />
              <input
                type='text'
                name='lname'
                style={{ width: 175 }}
                required='required'
              />
              <br />
            </center>
            <label>
              Email <span className='imp'>*</span>
            </label>
            <br />
            <input
              type='email'
              name='mail'
              style={{ width: '100%' }}
              required='required'
            />
            <br />
            <label>
              Message <span className='imp'>*</span>
            </label>
            <br />
            <input
              type='text'
              name='message'
              style={{ width: '100%' }}
              required='required'
            />
            <br />
            <label>Additional Details</label>
            <br />
            <textarea name='addtional' defaultValue={''} />
            <br />
            <button type='submit' id='csubmit'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
