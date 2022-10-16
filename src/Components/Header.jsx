import React from 'react'
import {Navbar,Nav,Container,Row} from 'react-bootstrap'
import {Link} from 'react-router-dom';
function Header() {
    return (
        <div >
            <header class="sticky-top sticky-sm-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
           
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" >Shree mohini plywood</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
         
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart"><i className="fa-solid fa-cart-shopping"></i>    Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login"><i className="fa-solid fa-user"></i>login</Link>
        </li>
      
       
      </ul>
      
    </div>
  </div>

</nav>
            </header>
        </div>
    )
}

export default Header
