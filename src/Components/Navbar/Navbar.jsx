// Components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { RiMenu2Fill } from "react-icons/ri"
import { FaGithub, FaSearch, FaPlus, FaRegStar } from "react-icons/fa"
import { TbBrandGithubCopilot } from "react-icons/tb"
import { VscIssues, VscGithubProject } from "react-icons/vsc"
import { FaCodePullRequest } from "react-icons/fa6"
import { IoBookOutline } from "react-icons/io5"
import { GoRepo, GoPackage } from "react-icons/go"
import AOS from 'aos'
import 'aos/dist/aos.css'
import myImg from '../../assets/myImage.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  // Link bosilganda menyuni yopish
  const handleLinkClick = () => {
    setShowMenu(false)
  }

  return (
    <div className='header' data-aos="fade-down">
      <div className="header_container">
        <div className="left_box_navbar">
          {/* Menu icon only visible on smaller screens */}
          <div className="menu_box" onClick={() => setShowMenu(!showMenu)}>
            <RiMenu2Fill />
          </div>
          <div className="icon_github">
            <FaGithub className='githuicon' />
            <h2>Isomiddinking</h2>
          </div>
        </div>

        {/* These elements should always be visible on desktop */}
        <div className={`right_box_navbar ${showMenu ? 'show' : ''}`}>
          <div className="search_box">
            <FaSearch className='search' />
            <input type="search" placeholder='Type / to search' />
          </div>
          <div className="capilot"><span className="icon_capilot"><TbBrandGithubCopilot /></span></div>
          <div className="new_repo_box"><span><FaPlus /></span></div>
          <div className="issues"><span><VscIssues /></span></div>
          <div className="request_box"><span><FaCodePullRequest /></span></div>
          <div className="right_img">
            <img src={myImg} alt="profile" />
          </div>
        </div>
      </div>

      {/* The 'choices' section. On desktop, it's always displayed. On mobile, it's toggled. */}
      <div className={`choices ${showMenu ? 'show' : ''}`} data-aos="fade-up"> {/* Keep data-aos if you want the animation */}
        <Link to="/sidebar" className="oveview" onClick={handleLinkClick}>
          <span><IoBookOutline /></span><h3>Overview</h3>
        </Link>
        <Link to="/repositories" className="oveview" onClick={handleLinkClick}>
          <span><GoRepo /></span><h3>Repositories <span className="number">4</span></h3>
        </Link>
        <Link to="/projects" className="oveview" onClick={handleLinkClick}>
          <span><VscGithubProject /></span><h3>Projects</h3>
        </Link>
        <Link to="/packages" className="oveview" onClick={handleLinkClick}>
          <span><GoPackage /></span><h3>Packages</h3>
        </Link>
        <Link to="/stars" className="oveview" onClick={handleLinkClick}>
          <span><FaRegStar /></span><h3>Stars</h3>
        </Link>
      </div>
    </div>
  )
}

export default Navbar