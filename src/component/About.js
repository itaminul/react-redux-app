import React from 'react'
import  '../component/Dashboard.css';
export const About = () => {
    return(
        <div>
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <ol>
          <li><a href="index.html">Home</a></li>
          <li>About Us</li>
        </ol>
        <h2>About Us</h2>

      </div>
    </section>
    <section id="featured" class="featured">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="">             
              <h3><a href="">Web Development</a></h3>
              <p>React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.</p>
            </div>
          </div>
          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="">
         
              <h3><a href="">Web Design</a></h3>
              <p>Redux is used mostly for application state management.</p>
            </div>
          </div>
          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="">
          
              <h3><a href="">API</a></h3>
              <p>PHP is mainly focused on server-side scripting, so you can do anything any other CGI program can do, such as collect form data, generate dynamic page content.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    
    
        </div>
    )
}


