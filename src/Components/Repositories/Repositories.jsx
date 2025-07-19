import React, { useEffect } from 'react'
import './Repositories.css'
import ProfileSidebar from '../Right/Right'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Repositories = () => {

     useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });
}, []);



  return (
    <div className='repositories-container'>
        <ProfileSidebar/>
        <div className="repo-grid1">
            {/* 1 */}
            <a
              href="https://isomiddin-butterfly.netlify.app"
              target="_blank"
              className="repo-card"
              data-aos="zoom-in"
              rel="noopener noreferrer"
            >
              <div className="repo-title">
                Butterfly-animation <span className="visibility public">Public</span>
              </div>
              <p className="repo-description">CSS-based butterfly animation.</p>
              <div className="repo-meta">
                <span className="language-color css"></span>
                <span className="language-name">CSS</span>
              </div>
            </a>

            {/* 2 */}
            <a
              href="https://isomiddin-portfolio.netlify.app"
              target="_blank"
              className="repo-card"
              data-aos="zoom-in"
              data-aos-delay="100"
              rel="noopener noreferrer"
            >
              <div className="repo-title">
                My-Portfolio <span className="visibility public">Public</span>
              </div>
              <p className="repo-description">React portfolio with animations and sections.</p>
              <div className="repo-meta">
                <span className="language-color javascript"></span>
                <span className="language-name">JavaScript</span>
              </div>
            </a>

            {/* 3 */}
            <a
              href="https://isomiddin-chatapp.netlify.app"
              target="_blank"
              className="repo-card"
              data-aos="zoom-in"
              data-aos-delay="200"
              rel="noopener noreferrer"
            >
              <div className="repo-title">
                Chat-App <span className="visibility public">Public</span>
              </div>
              <p className="repo-description">Real-time React chat app using Firebase.</p>
              <div className="repo-meta">
                <span className="language-color javascript"></span>
                <span className="language-name">JavaScript</span>
              </div>
            </a>

            {/* 4 */}
            <a
              href="https://isomiddin-store.netlify.app"
              target="_blank"
              className="repo-card"
              data-aos="zoom-in"
              data-aos-delay="300"
              rel="noopener noreferrer"
            >
              <div className="repo-title">
                Online-Store <span className="visibility public">Public</span>
              </div>
              <p className="repo-description">React-based eCommerce store clone with cart.</p>
              <div className="repo-meta">
                <span className="language-color html"></span>
                <span className="language-name">HTML</span>
              </div>
            </a>
          </div>
    </div>
  )
}

export default Repositories
