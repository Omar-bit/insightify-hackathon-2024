import React from 'react';
import rdn3 from '../assets/rdn3.jpg';
import slh from '../assets/slh.jpg';
import chebbi from '../assets/chebbi.jpg';
import omr from '../assets/omr.jpg';
function Team() {
  return (
    <div className='diffSection' id='team_section'>
      <center>
        <p
          style={{
            fontFamily: '"Montserrat"',
            fontSize: 50,
            paddingTop: 100,
            paddingBottom: 60,
          }}
        >
          About our team :{' '}
        </p>
      </center>
      <div className='totalcard'>
        <div className='card'>
          <center>
            <img src={rdn3} />
          </center>
          <center>
            <div className='card-title'>Roudayna Ben Hassen</div>
            <div id='detail'>
              <p>“ STRIVING FOR PROGRESS, CELEBRATING THE JOURNEY. “</p>
              <div className='duty' />
              <a
                href='https://www.facebook.com/roudayna.benhassen.3'
                target='_blank'
              >
                <button className='btn-slh'>Contact +</button>
              </a>
            </div>
          </center>
        </div>
        <div className='card'>
          <center>
            <img src={slh} />
          </center>
          <center>
            <div className='card-title'>Med Salah Ibrahim</div>
            <div id='detail'>
              <p>“ DEDICATED TO EXCELLENCE, COMMITED TO GROWTH. “</p>
              <div className='duty' />
              <a href='https://www.facebook.com/rabroubinho/' target='_blank'>
                <button className='btn-dly'>Contact +</button>
              </a>
            </div>
          </center>
        </div>
        <div className='card'>
          <center>
            <img src={chebbi} />
          </center>
          <center>
            <div className='card-title'>Med Ali Chebbi</div>
            <div id='detail'>
              <p>“ NAVINGATING CHALLENGES, EMBRACING TRIUMPHS. “</p>
              <div className='duty' />
              <a href='https://www.facebook.com/daly.chebbi.58' target='_blank'>
                <button className='btn-rdn'>Contact +</button>
              </a>
            </div>
          </center>
        </div>
        <div className='card'>
          <center>
            <img src={omr} />
          </center>
          <center>
            <div className='card-title'>Omar Bouassida</div>
            <div id='detail'>
              <p>“ CHAMPIONING INNOVATION, EMBRACING CHALLENGES. “</p>
              <div className='duty' />
              <a
                href='https://www.facebook.com/omar.bouassida.5'
                target='_blank'
              >
                <button className='btn-omr'>Contact +</button>
              </a>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Team;
