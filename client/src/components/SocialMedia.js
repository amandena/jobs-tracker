import React from 'react'
import github from '../assets/social-media/white-gh.png'
import linkedin from '../assets/social-media/linkedin.png'
import medium from '../assets/social-media/medium.png'

const SocialMedia = () => {
  return(
    <div className='social-media container'>
      <a href='https://github.com/amandena'><img src={github} alt="github" width='25'/></a>
      <a href='https://www.linkedin.com/in/amandena/'><img src={linkedin} alt="linkedin" width='25'/></a>
      <a href='https://medium.com/@manda.m.johnson'><img src={medium} className='medium' alt="medium" width='25' /></a>
    </div>
  )
}

export default SocialMedia