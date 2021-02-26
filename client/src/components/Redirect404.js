import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

const Redirect404 = () => {
  const [redirecting, setRedirecting] = useState(false)

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      setRedirecting(true)
    }, 3000)
    return () => clearTimeout(redirectTimeout)
  }, [redirecting, setRedirecting])

  setTimeout(() => {
    setRedirecting(true)
  }, 3000)

  return (
    redirecting ? 
      <Redirect push to="/" />
    :
      <div>
        <h1 className="text-center">
          404
        </h1>
        <p className="text-center">Taking you back home in 3 seconds...</p>
      </div>
  )
}

export default Redirect404