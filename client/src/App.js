import './App.css'
import React from 'react'
import JobsContainer from './containers/JobsContainer'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Search/>
      <JobsContainer/>
      <Footer/>
    </div>
  )
}

export default App
