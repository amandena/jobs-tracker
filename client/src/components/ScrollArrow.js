import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

const ScrollArrow = () => {

  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=> {
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 100){
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <div className='float-end'>
      <i className="fas fa-arrow-circle-up fa-2x">
        <FontAwesomeIcon 
          icon={faArrowCircleUp} 
          className='scrollTop' 
          onClick={scrollTop} 
          style={{display: showScroll ? 'flex' : 'none'}}
        />
      </i>
    </div>
  )
}

export default ScrollArrow