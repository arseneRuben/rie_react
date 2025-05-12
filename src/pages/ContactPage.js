import React from 'react'
import Header from '../components/Header'


const ContactPage = () => {
  return (
    <>
       <Header title="Contact Us" description="who we are and how we can help together!"/>
       <section id="content" >
  <div className="container">
	
    <div className="row ">
	  <div className="clearfix ">
    	<div className="span6">
          <h2>Map</h2>
					
					<div className="map">
						<iframe src="https://maps.google.com/maps?f=d&amp;source=s_q&amp;hl=en&amp;geocode=%3BCd58rJoNFJvNFRBFbAId0JyX-ykJIXyUFkTCiTGGeAAEdFx2gg&amp;q=Brooklyn,+NY,+USA&amp;aq=0&amp;sll=37.0625,-95.677068&amp;sspn=47.704107,79.013672&amp;ie=UTF8&amp;hq=&amp;hnear=Brooklyn,+Kings,+New+York&amp;view=map&amp;t=h&amp;daddr=Brooklyn,+NY&amp;ll=40.65,-73.95&amp;spn=0.253445,0.33405&amp;output=embed"></iframe>
					</div>
					
					<div className="clearfix"></div>
					<h2>Contact Information</h2>
					<p>
						<strong>Suspendisse enim arcu, convallis non, cursus sed, dignissim et, est. Aenean semper aliquet libero.</strong>
						In ante velit, cursus ut, ultrices vitae, tempor ut, risus. Duis pulvinar. Vestibulum vel pede at sapien sodales mattis. Quisque pretium, lacus nec iaculis vehicula, arcu libero consectetuer massa, auctor aliquet mauris ligula id ipsum. Vestibulum pede. Maecenas sit amet augue Sed blandit lectus eget lectus. Mauris justo. Curabitur nibh lectus, dapibus id, tempor eu, tempor non, erat. Proin pede eros, pharetra ut, viverra sed, egestas nec, mauris. Suspendisse enim arcu, convallis non, cursus sed, dignissim et, est. 
					</p>
					<div className="padcontent_small"></div>
			</div>
		
    	<div className="span6">
          <h2>Our Address</h2>
					<div className="row">
						<div className="span3">
							<p>
							<strong>Companyname INC.</strong>
								8901 Marmora Road, <br /> 
								Glasgow, D04 89GR. <br />
								Telephone: +1 800 123 1234 <br />
								E-mail: <a href="#">mail@Companyname.com</a>
								<div className="padcontent_small"></div>
							</p>
						</div>
						<div className="span3">
							<p>
							<strong>Companyname INC.</strong>
								8901 Marmora Road, <br /> 
								Glasgow, D04 89GR. <br />
								Telephone: +1 800 123 1234 <br />
								E-mail: <a href="#">mail@Companyname.com</a>
							</p>
						</div>
					</div> 
				
					
					<div className="clearfix"></div>
					<h2>Contact Form</h2>
      			<div id="note"></div>
      			<div id="fields" className="contact-form">
      				<form id="ajax-contact-form" className="form-horizontal" action="javascript:alert('success!'); ">
      					<div className="control-group">
      						<label className="control-label" for="inputName">Your name:</label>
      							<input type="text" name="name" />
      					</div>
      					<div className="control-group">
      						<label className="control-label" for="inputEmail">Your Email:</label>
      							<input type="text" name="email" />
      					</div>
      					<div className="control-group">
      						<label className="control-label" for="inputEmail">Subject:</label>
      							<input type="text" name="subject" />
      					</div>
      					<div className="control-group">
      						<label className="control-label" for="inputEmail">Your Message:</label>
      							<textarea name="content" rows="3"></textarea>
      					</div>
      					<div className="control-group captcha">
      					<label className="control-label " for="captcha">Captcha:</label>
      						<img src="captcha/captcha.php" style={{"margin":"3px 15px 5px 0px; width:100px", "height":"35px; float:left"}}/>
      						<input type="text" name="capthca" value="" style={{"float":"left", "width":"65px"}}/>
      						<div style={{"clear":"both"}}></div>
      					</div>        
      					<button type="submit" className="btn submit btn-primary "><i className="icon-envelope icon-white"></i>&nbsp;&nbsp;submit</button>
						<div className="clearfix"></div>
      				</form>
      			</div>    
					
					<div className="padcontent"></div>
        </div>
		
	  </div>
    </div> 
  </div>
</section>
    </>
  )
}

export default ContactPage
