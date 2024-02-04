import React from 'react';
import pappers from '../assets/icon/papers.jpg';
import q1 from '../assets/icon/q1.png';
import help from '../assets/icon/help.png';
import { Link } from 'react-router-dom';
function Services() {
  return (
    <>
      <div className='service-swipe'>
        <div className='diffSection' id='services_section'>
          <center>
            <p
              style={{
                fontFamily: '"Montserrat"',
                fontSize: 50,
                padding: 100,
                paddingBottom: 40,
                color: '#fff',
              }}
            >
              Services
            </p>
          </center>
        </div>
        <Link to='summarize'>
          <div className='s-card'>
            <img src={pappers} />
            <p>Summaries based on your courses</p>
          </div>
        </Link>
        <Link to='quiz'>
          <div className='s-card'>
            <img src={q1} />
            <p>Fix your weak spots by taking our Quizes </p>
          </div>
        </Link>
        <a href='#contactus_section'>
          <div className='s-card'>
            <img src={help} />
            <p>24x7 Online Support</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default Services;
