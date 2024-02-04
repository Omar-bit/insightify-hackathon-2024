import React from 'react';
import lg from '../assets/lg.png';
import fb from '../assets/icon/fb.png';
import ig from '../assets/icon/insta.png';
import mail from '../assets/icon/mail.png';
import phone from '../assets/icon/phone.png';
import location from '../assets/icon/location.png';
import linked from '../assets/icon/linkedin.png';
import tt from '../assets/icon/tt.png';
import yt from '../assets/icon/ytube.png';
function Footer() {
  return (
    <>
      <marquee
        style={{
          fontFamily: '"Montserrat"',
          background: 'linear-gradient(to right, #FA4B37, #DF2771)',
          marginTop: 50,
        }}
        direction='left'
        onmouseover='this.stop()'
        onmouseout='this.start()'
        scrollamount={15}
      >
        <div className='marqu'>
          “insightify is the key , for a fun educative experience. insightify is
          the solution for a better educative experience. insightify is
          INNOVATION !”
        </div>
      </marquee>
      {/* FOOTER */}
      <footer>
        <div className='footer-container'>
          <div className='left-col'>
            <img
              src={lg}
              style={{ filter: 'invert(100%) brightness(200%)', width: 200 }}
            />
            <div className='logo' />
            <div className='social-media'>
              <a href='#'>
                <img src={fb} />
              </a>
              <a href='#'>
                <img src={ig} />
              </a>
              <a href='#'>
                <img src={tt} />
              </a>
              <a href='#'>
                <img src={yt} />
              </a>
              <a href='#'>
                <img src={linked} />
              </a>
            </div>
            <br />
            <br />
            <p className='rights-text'>
              Copyright © 2024 Created By The Imposters team, All Rights
              Reserved.
            </p>
            <br />
            <p>
              <img src={location} /> EPI Digital School <br />
              Route de Ceinture, Sahloul Sousse 4021
            </p>
            <br />
            <p>
              <img src={phone} /> +216 98787771
              <br />
              <img src={mail} />
              &nbsp; TheImposters24@gmail.com
            </p>
          </div>
          <div className='right-col'>
            <h1 style={{ color: '#fff' }}>Our Newsletter</h1>
            <div className='border' />
            <br />
            <p>Enter Your Email to get our News and updates.</p>
            <form className='newsletter-form'>
              <input
                className='txtb'
                type='email'
                placeholder='Enter Your Email'
              />
              <input className='btn' type='submit' defaultValue='Submit' />
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
