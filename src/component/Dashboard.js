import React from 'react'
import react from '../logo/logo.svg'
import redux from '../logo/redux.svg'
import javascript from '../logo/php.jpeg'
import  '../component/Dashboard.css';

export const Dashboard = () => {
    return(
        <div> 

  <main id="main">
      <br/>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
      <section id="featured" class="featured">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="icon-box box-border-react">
              <img className="react-logo"  src={react}/>
              <h3><a href="">UI Development</a></h3>
              <p>React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.</p>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="icon-box box-border-redux">
            <img className="redux-logo" src={redux}/>
              <h3><a href="">State Management</a></h3>
              <p>Redux is used mostly for application state management.</p>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="icon-box box-border-php">
            <img className="php-logo"  src={javascript}/>
              <h3><a href="">OOP</a></h3>
              <p>PHP is mainly focused on server-side scripting, so you can do anything any other CGI program can do, such as collect form data, generate dynamic page content.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section id="blog" className="blog">
      <div className="container">

        <div class="row">

          <div class="col-lg-8 entries">

            <article class="entry">

              <h2 class="entry-title">
                <a href="blog-single.html">What is the difference between state and props?</a>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Dec 1, 2020</time></a></li>
                  <li class="d-flex align-items-center"><i class="icofont-comment"></i> <a href="blog-single.html">0 Comments</a></li>
                </ul>
              </div>

              <div class="entry-content">
                <p>
                “Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.
                In a function component, props is all it gets passed, and they are available by adding props as the function argument.
                In a class component, props are passed by default. There is no need to add anything special, and they are accessible as this.props in a Component instance.
                </p>
                <div class="read-more">
                  <a href="#">Read More</a>
                </div>
              </div>

            </article>

            <article class="entry">

              <h2 class="entry-title">
                <a href="blog-single.html">What is render ? </a>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Dec 5, 2020</time></a></li>
                  <li class="d-flex align-items-center"><i class="icofont-comment"></i> <a href="blog-single.html">0 Comments</a></li>
                </ul>
              </div>

              <div class="entry-content">
                <p>
                Rendering is the process of transforming your react components into DOM (Document Object Model) nodes that your browser can understand and display on the screen.
                </p>
                <div class="read-more">
                  <a href="#">Read More</a>
                </div>
              </div>

            </article>

            <article class="entry">
              <h2 class="entry-title">
                <a href="blog-single.html">What is elements?</a>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Dec 10, 2020</time></a></li>
                  <li class="d-flex align-items-center"><i class="icofont-comment"></i> <a href="blog-single.html">0 Comments</a></li>
                </ul>
              </div>

              <div class="entry-content">
                <p>
                An element describes what you want to see on the screen:
An element is an object that virtually describes the DOM nodes that a component represents.
React elements are not what we see in the browser. They are just objects in memory.
                </p>
                <div class="read-more">
                  <a href="#">Read More</a>
                </div>
              </div>

            </article> 

          </div>

          <div class="col-lg-4">

            <div class="sidebar">

              <h3 class="sidebar-title">Search</h3>
              <div class="sidebar-item search-form">
                <form action="">
                  <input type="text"/>
                  <button type="submit"><i class="icofont-search"></i></button>
                </form>

              </div>

              <h3 className="sidebar-title">Recent Posts</h3>
              <div className="sidebar-item recent-posts">
                <div className="post-item clearfix">                 
                  <h4><a href="blog-single.html">What is React?</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div className="post-item clearfix">
                 
                  <h4><a href="blog-single.html">What is JSX?</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div className="post-item clearfix">
                 
                  <h4><a href="blog-single.html">What is state in React?</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div className="post-item clearfix">
                  
                  <h4><a href="blog-single.html">What are props in React?</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div className="post-item clearfix">
                 
                  <h4><a href="blog-single.html">What is the difference between state and props?</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

              </div>

             
              
            </div>

          </div>

        </div>

      </div>
    </section>
      </div>
    </div>
  </div>  
  </main>  
  </div>
    )
}