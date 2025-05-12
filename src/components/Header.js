import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import './Header.css'; // pour les styles personnalisés

const Header = () => {
   const location = useLocation()
  const isActive = (path) => location.pathname === path
  useEffect(() => {
    const dropdowns = document.querySelectorAll('.dropdown-submenu > a');

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('click', function (e) {
        const nextMenu = this.nextElementSibling;
        if (nextMenu && nextMenu.classList.contains('dropdown-menu')) {
          e.preventDefault();
          nextMenu.classList.toggle('show');
        }
      });
    });
  }, []);

  return (
	<header>
	<div className="container">
		<div className="row">

			<nav className="navbar navbar-expand-lg navbar-light bg-info " >
				<div className="container-fluid">
					<Link className="navbar-brand" to="/"><img src="images/big_logo.gif" alt=""/></Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDropdown" aria-controls="navbarDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarDropdown">
						<div cclassNamelass="navbar navbar_ clearfix">
			        	<div className="navbar-inner navbar-inner_"></div>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0 nav sf-menu">

								<li className="nav-item">
									<Link className="nav-link" to="/">Home</Link>
								</li>

								{/* First Level Dropdown */}
								<li className="nav-item dropdown sub-menu">
								<a className="nav-link dropdown-toggle" href="/" id="level1Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									About Us
								</a>
								<ul className="dropdown-menu" aria-labelledby="level1Dropdown">

									<li><Link className="dropdown-item" to="/mission">Mission</Link></li>

									{/* Second Level Dropdown */}
									<li  className={`dropdown-submenu ${isActive('/history') ? 'active' : ''}`}>
									<a className="dropdown-item dropdown-toggle" href="/history">History</a>
									<ul className="dropdown-menu">
										<li className={isActive('/contact') ? 'active' : ''}><Link className="dropdown-item" to="/contact">Contact</Link></li>

										
									</ul>
									</li>

								</ul>
								</li>

								<li className="nav-item">
								<Link className="nav-link" to="/contact">Contact</Link>
								</li>

							</ul>
						</div>
						</div>
				</div>
			</nav>
		
		</div>
	</div>
	</header>
  );
};

export default Header;
