import React from 'react'
import SliderComponent from '../components/Slider'
import MiddleBanner from '../components/MiddleBanner'


const HomePage = () => {
  return (
    <>

        <SliderComponent/>
        <MiddleBanner/>
        <section id="content" >
  <div className="container">
	
    <div className="row ">
	  <div className="clearfix ">
    	<div className="span3 ">
          <h1>Welcome  to Charity Center</h1>
					
					<p>
						<b>
							Suspendisse enim arcu, convallis non, cursus sed, dignissim et, est. Aenean semper aliquet libero.
						</b>
						In ante velit, cursus ut, ultrices vitae, tempor ut, risus. Duis pulvinar. Vestibulum vel pede at sapien sodales mattis. Quisque pretium, lacus nec iaculis vehicula, arcu libero consectetuer massa, auctor aliquet mauris ligula id ipsum. Vestibulum pede. Maecenas sit amet augue. Sed blandit lectus eget lectus. Mauris justo. Curabitur nibh lectus, dapibus id, tempor eu, tempor non, erat. 
					</p>
					
					<div className="padcontent"></div>
			</div>
		
    	<div className="span6 ">
          <h2>Featured Programs</h2>
					<img src="images/photo_5.jpg" alt="" width="164" height="164" border="0" className="alignleft photo" />
					<p className="max-size1">
						<strong>Building School</strong>
						In ante velit, cursus ut, ultrices vitae, tempor ut, risus. Duis pulvinar. Vestibulum vel pede at sapien sodales mattis. Quisque pretium, lacus nec iaculis vehicula, arcu libero consectetuer massa, auctor aliquet mauris ligula id ipsum. 
					</p> 
					<a href="#" className="read">read more</a>
					<div className="padcontent"></div>

					<img src="images/photo_6.jpg" alt="" width="164" height="164" border="0"  className="alignleft photo"/>
					<p className="max-size1">
						<strong>Food for African Children</strong>
						In ante velit, cursus ut, ultrices vitae, tempor ut, risus. Duis pulvinar. Vestibulum vel pede at sapien sodales mattis. Quisque pretium, lacus nec iaculis vehicula, arcu libero consectetuer massa, auctor aliquet mauris ligula id ipsum. 
					</p> 
					<a href="#" className="read">read more</a>
					
					<div className="padcontent"></div>
					
        </div>
		
    	<div className="span3 ">
          <h2>Mission</h2>
					<ul className="list">
						<li>MISSION / VISION</li>
						<li>HISTORY</li>
						<li>STAFF</li>
						<li>DONATIONS</li>
						<li>PROJECT INFORMATION</li>
					</ul>
					<div className="padcontent"></div>
					<img src="images/bg_donate.jpg" alt="" width="108" height="143" border="0" className="alignright latin" />
					<h3>Change the Life of those who  have no hope!</h3>
					<a href="#" className="donate">Donate Now!</a>
					<div className="padcontent"></div>
      </div>
	  </div>
    </div> 
  </div>
</section>

    </>
  )
}

export default HomePage
