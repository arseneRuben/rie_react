import React from 'react'

const Banner = ({title, description}) => {
  return (
    <section id="blocks" className="subpage">
    <div className="container">
        <div className="row ">
                <div className="span12 ">
                    <h5>{title} <span>{description}</span></h5>
                </div>
        </div> 
    </div>
    </section>
  )
}

export default Banner
