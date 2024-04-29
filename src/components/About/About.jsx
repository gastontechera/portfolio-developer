import React from 'react';
import './About.css';
import profileImage from '../../assets/images/code-2.jpg';

import html from '../../assets/images/skills/html.png';
import css from '../../assets/images/skills/css.png';
import javascript from '../../assets/images/skills/javascript.png';
import react_dark from '../../assets/images/skills/react_dark.png';
import cs from '../../assets/images/skills/cs.png';
import dotnet from '../../assets/images/skills/dotnet.png';
import mysql_dark from '../../assets/images/skills/mysql_dark.png';
import nodejs_dark from '../../assets/images/skills/nodejs_dark.png';

function About() {
  return (
    <div id="about" className="container-fluid px-0 pt-5">
      <div className="row">
        <div className="col-12 p-0">
          {/* <h2 className="text-center h2 mb-3 text-color mx-5">About Me</h2> */}
          <div className='d-flex justify-content-center' >
            <p id='about-me' className='mx-5'>
              My name is Gastón Techera. I'm a Web Developer and UX/UI designer, committed to providing high-quality and customized solutions to meet your specific requirements.
            </p>
          </div>
          <h2 className='text-center text-color mx-5 mt-5' >Skills</h2>




          <div className="row row-cols-4 row-cols-md-8 m-5 justify-content-md-center">
            <div className="col-sm-3 col-md-1 mb-3">
              <div className="skill-icon">
                <a href="https://react.dev/" target="_blank">
                  <img src={react_dark} className="card-img-top" alt="..." />
                </a>
                {/* <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div> */}
              </div>
            </div>

            <div className="col-sm-3 col-md-1">
              <div className="skill-icon">
                <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" >
                  <img src={javascript} className="card-img-top" alt="..." />
                </a>
                {/* <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div> */}
              </div>
            </div>

            <div className="col-sm-3 col-md-1">
              <div className="skill-icon">
                <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" >
                  <img src={html} className="card-img-top" alt="..." />
                </a>
                {/* <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div> */}
              </div>
            </div>

            <div className="col-sm-3 col-md-1">
              <div className="skill-icon">
                <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" >
                  <img src={css} className="card-img-top" alt="..." />
                </a>
                {/* <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div> */}
              </div>
            </div>

            <div className="col-sm-3 col-md-1">
              <div className="skill-icon">
                <a href="https://nodejs.org/en" target="_blank" >
                  <img src={nodejs_dark} className="card-img-top" alt="..." />
                </a>
                {/* <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div> */}
              </div>
            </div>

            <div className="col-sm-3 col-md-1">
              <div className="skill-icon">
                <a href="https://www.mysql.com/" target="_blank" >
                  <img src={mysql_dark} className="card-img-top" alt="..." />
                </a>
                {/* <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div> */}
              </div>
            </div>

            <div className="col-sm-3 col-md-1">
              <div className="skill-icon">
                <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" >
                  <img src={cs} className="card-img-top" alt="..." />
                </a>
                {/* <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div> */}
              </div>
            </div>

            <div className="col-sm-3 col-md-1">
              <div className="skill-icon">
                <a href="https://dotnet.microsoft.com/en-us/" target="_blank" >
                  <img src={dotnet} className="card-img-top" alt="..." />
                </a>
                {/* <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div> */}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center" id='about-image'>
            <img src={profileImage} className="img-fluid" alt="About" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
