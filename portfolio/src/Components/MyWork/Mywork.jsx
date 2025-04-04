import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div id='mywork' className='mywork'>
        <div className="mywork-tittle">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {Mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Mywork
