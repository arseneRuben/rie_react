import React from 'react'

const Header = () => {
  return (
    <header>
	<div className="bg_left"></div>
    <div className="container">
    	<div className="row">
			
        	<div className="span3">
            	<div className="clearfix">
									<div className="clearfix header-block-pad">
										 <a href="index.html"><img src="images/logo.jpg" alt=""/></a>					
									</div>
							</div>
					</div>
					
					


			    <div className="span9" id="nav_section">
			      <div className="navbar navbar_ clearfix">
			        <div className="navbar-inner navbar-inner_">
			            <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse_">MENU</a>                                                   
			            <div className="nav-collapse nav-collapse_ collapse">
			                <ul className="nav sf-menu">
			                  <li className="active">
													<a href="index.html">
														Home Page
														<span>start here</span>
													</a>
												</li>
												<li className="sub-menu">
													<a href="index-1.html">
														About us
														<span>who we are</span>
													</a>
														<ul>
															<li>
															  <a href="index-1.html">
																	About
																</a>
															</li>
															<li className="sub-menu-2">
															  <a href="index-1.html">
																	History
																</a>
																	<ul>
																		<li><a href="404.html">404 page not found</a></li>
																	</ul>
															</li>
															<li>
															  <a href="index-1.html">
																	Mission
																</a>
															</li>
															<li>
															  <a href="index-1.html">
																	Sponsors
																</a>
															</li>
														</ul>
													
												</li>
												<li>
													<a href="index-2.html">
														donations
														<span>help now</span>
													</a>
												</li>
												<li>
													<a href="index-3.html">
														programs
														<span>what we do</span>
													</a>
												</li>
												<li>
													<a href="index-4.html">
														contacts
														<span>mail us</span>
													</a>
												</li>
												
			                </ul>
			            </div>
			        </div>
			      </div>
			    </div>
					

      </div>   
    </div>

</header>
  )
}

export default Header
