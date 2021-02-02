import './App.css'
import './stylesheets/footer.css'
import './stylesheets/header.css'
import './stylesheets/scroll-arrow.css'
import React from 'react'
import JobsContainer from './containers/JobsContainer'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Header/>
      <JobsContainer/>
      <Footer/>
    </div>
  )
}

export default App
