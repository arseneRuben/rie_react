import React from 'react'

const CopyRight = () => {
  return (
   <div id="copyright">
	<div className="container">
		<div className="row">	
			<div className="span9">
				
					<p>
						Copyright ATAC. &copy; 2025.  All rights reserved.
					</p>

			</div>
			<div className="span3">
					
					<form id="search-form" action="search.php" method="GET" accept-charset="utf-8" className="navbar-form" >
						<input type="text" name="s"  value='Search' onBlur="if(this.value=='') this.value='Search'" onFocus="if(this.value =='Search' ) this.value=''"  />
						<a href="#" onClick="document.getElementById('search-form').submit()"></a>
					</form>

			</div>
		</div>
	</div>
</div>
  )
}

export default CopyRight
