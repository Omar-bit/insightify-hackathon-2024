import React from 'react';
import logo from './../assets/lg.png';
import menu from './../assets/icon/menu.png';
import play from './../assets/icon/play.png';
import svg1 from './../assets/extra/svg1.jpg';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <>
      {/* Navigation Bar */}
      <header id='header'>
        <nav>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <ul>
            <li>
              <a className='active' href=''>
                Home
              </a>
            </li>
            <li>
              <a href='#team_section'>Team</a>
            </li>
            <li>
              <a href='#services_section'>Services</a>
            </li>
            <li>
              <a href='#contactus_section'>Contact Us</a>
            </li>
          </ul>
          <img src={menu} className='menu' onclick='sideMenu(0)' alt='menu' />
        </nav>
        <div className='head-container'>
          <div className='quote'>
            <p>
              The beautiful thing about insightify is that it makes the process
              of revising as fun as possible.
            </p>
            <h5>
              We see that the revision for exams or even preparing flashcards as
              a game that the learner is the main character in, we get to know
              his level by asking him questions about the topic that he
              introduced, we tell him where he were mistaken and we give him the
              explanation to the right answer and a summary that focuses on his
              points of weakness.
            </h5>
            <div className='play'>
              <img src={play} alt='play' />
              <span>
                <Link to='/quiz'>Let's start the quiz !</Link>
              </span>
            </div>
          </div>
          <div className='svg-image'>
            <img src={svg1} alt='svg' />
          </div>
        </div>
        <div className='side-menu' id='side-menu'>
          <div className='close' onclick='sideMenu(1)'>
            <img src='images/icon/close.png' alt='' />
          </div>
          <ul>
            <li>
              <a href='#about_section'>About</a>
            </li>
            <li>
              <a href='#portfolio_section'>Portfolio</a>
            </li>
            <li>
              <a href='#team_section'>Team</a>
            </li>
            <li>
              <a href='#services_section'>Services</a>
            </li>
            <li>
              <a href='#contactus_section'>Contact</a>
            </li>
            <li>
              <a href='#feedBACK'>Feedback</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Nav;
