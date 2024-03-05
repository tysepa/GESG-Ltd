import React from 'react'
import '../App.css'
import "./Service.css"
import IMG1 from '../Assets/training-icon-11.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Agriculture Products',
  },
  {
    id: 2,
    image: IMG1,
    title: 'Agriculture Products',
  },
  {
    id: 3,
    image: IMG1,
    title: 'Agriculture Products',
  },
  {
    id: 4,
    image: IMG1,
    title: 'Agriculture Products',
  },
  {
    id: 5,
    image: IMG1,
    title: 'Agriculture Products',
  }
]



function Service() {
  return (
    <>
      <div id='services' className='services'>
        <h5>Our Services</h5>
        <h2>Don’t Worry To Fail.<br />
          We Have Experienced  With Best Things</h2>
        <div className='service-prim'>
          <div className='container service_container'>
            {
              data.map(({id,image,title})=>{
                return(
                  <article className='service_item'>
                  <div className='service_item-image'>
    
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className='service_item-cta'>
                    <a href='' className='btn'>Read More</a>
                  </div>
                </article>

                )
              })
            }
           
          </div>
          <div className='service_item-cta btn-2'>
                    <a href='' className='btn'>Vieu All</a>
                  </div>
        </div>
      </div>
    </>
  )
}

export default Service
