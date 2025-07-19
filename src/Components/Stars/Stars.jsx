// src/Components/Stars/Stars.jsx
import React, { useEffect } from 'react'
import './Stars.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaRegStar } from 'react-icons/fa'
import ProfileSidebar from '../Right/Right'
import StarsPage from '../Star_page/Star_psga'

const Stars = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="Stars">
      <ProfileSidebar />

      <div className="Stars_container">
        <div className="start_top" data-aos="fade-down">
          <h3>Lists (0)</h3>
          <div className="right_top">
            <h3>Sort</h3>
            <button>Create list</button>
          </div>
        </div>

        <div className="star_card" data-aos="zoom-in">
          <span className="star_icon">
            <FaRegStar />
          </span>
          <h2>Create your first list</h2>
          <p>
            Lists make it easier to organize and curate repositories that you
            have starred. <span>Create your first list</span>
          </p>
        </div>

        <div data-aos="fade-up">
          <StarsPage />
        </div>
      </div>
    </div>
  )
}

export default Stars
