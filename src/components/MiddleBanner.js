import React from 'react'

const MiddleBanner = () => {
  return (
    <section id="blocks">
        <div className="container">
            <div className="row ">
                    <div className="clearfix ">
                        <div className="span3 ">
                            <p className="phone">
                                CALL TOLL - <span>FREE</span> <br />
                                <b>1 80<span style={{"display":"none"}}>no skype</span>0 123 1234</b>
                                FOLLOW US:
                            </p>
                            <ul className="social">
                                <li><a href="#" target="_blank"><img src="images/social_1.png" alt="" width="35" height="34" border="0" /></a></li>
                                <li><a href="#" target="_blank"><img src="images/social_4.png" alt="" width="35" height="33" border="0" /></a></li>
                                <li><a href="#" target="_blank"><img src="images/social_3.png" alt="" width="35" height="33" border="0" /></a></li>
                                <li><a href="#" target="_blank"><img src="images/social_2.png" alt="" width="35" height="34" border="0" /></a></li>
                                <li><a href="#" target="_blank"><img src="images/social_5.png" alt="" width="35" height="34" border="0" /></a></li>
                            </ul>
                            <div className="padcontent"></div>
                </div>
                        
                        <div className="span2 box">
                            <span>01</span>
                            <h3>How to help?</h3>
                            <p>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing.
                            </p>
                </div>
                        <div className="span2 box">
                            <span>02</span>
                            <h3>Our Programs</h3>
                            <p>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing.
                            </p>
                </div>
                        <div className="span2 box">
                            <span>03</span>
                            <h3>Donations</h3>
                            <p>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing.
                            </p>
                </div>
                        <div className="span2 box">
                            <span>04</span>
                            <h3>Sponsorship</h3>
                            <p>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing.
                            </p>
                </div>
                        
                    </div>
            </div> 
        </div>
    </section>
  )
}

export default MiddleBanner
