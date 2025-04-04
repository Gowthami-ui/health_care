import React from 'react'
import './profile.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Profile = () => {
  return (
    <div id='home' className='profile'>
        <img className='profile-img' src={profile_img} alt="" />
        <h1><span>I'm Gowthami Chidhambaram,</span> Associate Software Engineer</h1>
        <p>An experienced Associate Software Engineer with a passion for creating innovation solutions to complext problems.</p>
        <div className="profile-action">
            <div className="profile-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="profile-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Profile
