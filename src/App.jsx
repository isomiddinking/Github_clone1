// App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Footer from './Components/Footer/Footer'
import Repositories from './Components/Repositories/Repositories'
import Projects from './Components/Projects/Projects'
import Pacages from './Components/Pacages/Pacages'
import Stars from './Components/Stars/Stars'

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/sidebar"  element={<Sidebar/>}/>
            <Route path="/repositories" element={<Repositories/>} />
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/packages" element={<Pacages/>}/>
            <Route path="/stars"  element={<Stars/>}/>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
