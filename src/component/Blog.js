import React from 'react'

export const Blog = () => {
    return(
        <div>
   
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <ol>
          <li><a href="index.html">Home</a></li>
          <li>Blog</li>
        </ol>
        <h2>Blog</h2>

      </div>
    </section>

    <section id="blog" className="blog">
      <div className="container">

        <div className="row">

          <div className="col-lg-8 entries">

            <article className="entry">

              <h2 className="entry-title">
                <a href="blog-single.html">What is the difference between state and props?</a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Dec 1, 2020</time></a></li>
                  <li className="d-flex align-items-center"><i className="icofont-comment"></i> <a href="blog-single.html">0 Comments</a></li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                “Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.
                In a function component, props is all it gets passed, and they are available by adding props as the function argument.
                In a class component, props are passed by default. There is no need to add anything special, and they are accessible as this.props in a Component instance.
                </p>
                <div className="read-more">
                  <a href="#">Read More</a>
                </div>
              </div>

            </article>

            <article className="entry">

              <h2 className="entry-title">
                <a href="blog-single.html">What is render ? </a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Dec 5, 2020</time></a></li>
                  <li className="d-flex align-items-center"><i className="icofont-comment"></i> <a href="blog-single.html">0 Comments</a></li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                Rendering is the process of transforming your react components into DOM (Document Object Model) nodes that your browser can understand and display on the screen.
                </p>
                <div className="read-more">
                  <a href="#">Read More</a>
                </div>
              </div>

            </article>

            <article className="entry">
              <h2 className="entry-title">
                <a href="blog-single.html">What is elements?</a>
              </h2>
              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Dec 10, 2020</time></a></li>
                  <li className="d-flex align-items-center"><i className="icofont-comment"></i> <a href="blog-single.html">0 Comments</a></li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                An element describes what you want to see on the screen:
An element is an object that virtually describes the DOM nodes that a component represents.
React elements are not what we see in the browser. They are just objects in memory.
                </p>
                <div className="read-more">
                  <a href="#">Read More</a>
                </div>
              </div>
            </article> 
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              <h3 className="sidebar-title">Search</h3>
              <div className="sidebar-item search-form">
                <form action="">
                  <input type="text"/>
                  <button type="submit"><i className="icofont-search"></i></button>
                </form>
              </div>             
              <h3 className="sidebar-title">Categories</h3>
              <div className="sidebar-item categories">
                <ul>
                  <li><a href="#">Html</a></li>
                  <li><a href="#">JavaScript</a></li>
                  <li><a href="#">es6</a></li>
                  <li><a href="#">ReactJs </a></li>
                  <li><a href="#">VueJs </a></li>
                  <li><a href="#">Redux </a></li>
                  <li><a href="#">PHP </a></li>
                  <li><a href="#">Codeigniter </a></li>
                  <li><a href="#">Laravel </a></li>
                  <li><a href="#">Bootstrap </a></li>
                  <li><a href="#">CSS </a></li>
                  <li><a href="#">Mysql </a></li>
                  <li><a href="#">Oracle </a></li>
                  <li><a href="#">Typescript </a></li>
                </ul>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}


