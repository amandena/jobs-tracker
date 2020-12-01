import React from 'react'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return(
    <footer>
      <div className='container'>
        <div className='row spacer'>
          <div className='col-12 text-center'>
            <SocialMedia/>
            <p>&copy; 2020 Amanda M Johnson</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer