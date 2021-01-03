import React from 'react'

import { Link } from 'react-router-dom'

export const Topnavbar = () => {
    return(
        <div>
            <Link>


  <header id="header">
    <div className="container d-flex">

      <div className="logo mr-auto">
        <h1 className="text-light"><a href="index.html"><span>Link2Idea</span></a></h1>
      </div>

      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active"><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          <li><Link to="/tutorial">Tutorial</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>
      </nav>

    </div>
  </header>
  </Link>
        </div>
    )
}


