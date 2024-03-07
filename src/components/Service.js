import React from 'react'
import '../App.css'
import "./Service.css"
import IMG1 from '../Assets/training-icon-11.png'
import Card from './Card'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Agriculture Products',
    para:'I recommend checking the latest online sources such as business directories, company websites,',
    show:'or news articles. Additionally, you may want to specify the industry or sector in which Global Excellent Solutions Group operates, as there might be multiple companies with similar names across different fields.'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Agriculture Products',
    para:'I recommend checking the latest online sources such as business directories, company websites,',
    show:'or news articles. Additionally, you may want to specify the industry or sector in which Global Excellent Solutions Group operates, as there might be multiple companies with similar names across different fields.'
  
  },
  {
    id: 3,
    image: IMG1,
    title: 'Agriculture Products',
    para:'I recommend checking the latest online sources such as business directories, company websites,',
    show:'or news articles. Additionally, you may want to specify the industry or sector in which Global Excellent Solutions Group operates, as there might be multiple companies with similar names across different fields.'
  
  },
  {
    id: 4,
    image: IMG1,
    title: 'Agriculture Products',
    para:'I recommend checking the latest online sources such as business directories, company websites,',
    show:'or news articles. Additionally, you may want to specify the industry or sector in which Global Excellent Solutions Group operates, as there might be multiple companies with similar names across different fields.'
  
  },
  {
    id: 5,
    image: IMG1,
    title: 'Agriculture Products',
    para:'I recommend checking the latest online sources such as business directories, company websites,',
    show:'or news articles. Additionally, you may want to specify the industry or sector in which Global Excellent Solutions Group operates, as there might be multiple companies with similar names across different fields.'
  
  }
]



function Service() {
  
 
  return (
    <>
      <div id='services' className='services'>
        <h5>Our Services</h5>
        <h2>Don’t Worry To Fail.<br />
          We Have Experienced  With Best Things</h2>
          <div className='service_container'>
          {data.map((item, index)=>{
          return <Card key={index} item={item} />
        })}
          </div>
        
        <div className='service_item-cta btn-2'>
                    <a href='' className='btn'>Vieu All</a>
                  </div>
      </div>
    </>
  )
}

export default Service
