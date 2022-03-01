import React from 'react'
import '../style.css';

const Navbar = () => {
  return (
      <>
        <div id="navbar-content">
          <header>
            <nav>
              <div className="logo">
                Athliezure.
              </div>
              <div className="menu-item">
              <ol>
                <a href="#">
                  <li>Home</li>
                </a>
                <a href="#">
                  <li>About</li>
                </a>
                <a href="#">
                  <li>Join</li>
                </a>
                <a href="#">
                  <li>Tips</li>
                </a>
                <a href="#">
                  <li>Contact</li>
                </a>
              </ol>
              </div>
            </nav>
          </header>
        </div>
      </>
  )
}

export default Navbar