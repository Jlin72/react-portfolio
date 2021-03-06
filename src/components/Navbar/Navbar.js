import React from 'react';
// import {useContext} from 'react';
import { Link } from 'react-router-dom';
// import Context from '../Util/Context';

const Navbar = () => {
  // const {active} = useContext(Context);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <Link to='/' className='navbar-brand'>Jhonny Lin</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav mr-auto'>
            <li className={`nav-item ${window.location.pathname === '/'? "active" : ''}`}>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className={`nav-item ${window.location.pathname === '/portfolio'? "active" : ''}`}>
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
            </li>
            <li className={`nav-item ${window.location.pathname === '/contact'? "active" : ''}`}>
              <Link to="/contact" className="nav-link">Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;