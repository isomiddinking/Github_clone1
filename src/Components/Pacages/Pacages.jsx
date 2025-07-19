import React, { useEffect } from 'react'
import './Pacages.css'
import { GoPackage, GoContainer } from "react-icons/go"
import { GiFeather } from "react-icons/gi"
import { SiNuget, SiRubygems } from "react-icons/si"
import { CgNpm } from "react-icons/cg"
import ProfileSidebar from '../Right/Right'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Pacages = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <div className='Pacages'>
      <ProfileSidebar />
      <div className="Pacages_container">
        <div className="topic" data-aos="fade-up">
          <span><GoPackage /> </span>
          <h2>Get started with GitHub Packages</h2>
          <p>Safely publish packages, store your packages alongside your code, and share your packages privately with your team.</p>
        </div>

        <div className="choose" data-aos="fade-up">
          <h2>Choose a registry</h2>
          <div className="girds">
            <div className="grid_cards" data-aos="fade-right">
              <div className="tops">
                <span><GiFeather /></span>
                <h3>Apache Maven</h3>
              </div>
              <p>A default package manager used for the Java programming language and the Java runtime environment.</p>
              <button>Learn more</button>
            </div>

            <div className="grid_cards" data-aos="fade-up">
              <div className="tops">
                <span><SiNuget /></span>
                <h3>NuGet</h3>
              </div>
              <p>A free and open source package manager used for the Microsoft development platforms including .NET.</p>
              <button>Learn more</button>
            </div>

            <div className="grid_cards" data-aos="fade-left">
              <div className="tops">
                <span><SiRubygems /></span>
                <h3>RubyGems</h3>
              </div>
              <p>A standard format for distributing Ruby programs and libraries used for the Ruby programming language.</p>
              <button>Learn more</button>
            </div>

            <div className="grid_cards" data-aos="fade-up-right">
              <div className="tops">
                <span><CgNpm /></span>
                <h3>npm</h3>
              </div>
              <p>A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.</p>
              <button>Learn more</button>
            </div>

            <div className="grid_cards" data-aos="fade-up-left">
              <div className="tops">
                <span><GoContainer /></span>
                <h3>Containers</h3>
              </div>
              <p>A single place for your team to manage Docker images and decide who can see and access your images.</p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pacages
