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

  return (
    <div className='header' data-aos="fade-down">
      <div className="header_container">
        <div className="left_box_navbar">
          <div className="menu_box" onClick={() => setShowMenu(!showMenu)}>
            <RiMenu2Fill />
          </div>
          <div className="icon_github">
            <FaGithub className='githuicon' />
            <h2>Isomiddinking</h2>
          </div>
        </div>

        <div className={`right_box_navbar ${showMenu ? 'show' : ''}`}>
          <div className="search_box">
            <FaSearch className='search' />
            <input type="search" placeholder='Type / to search' />
          </div>
          <div className="capilot">
            <span className="icon_capilot"><TbBrandGithubCopilot /></span>
          </div>
          <div className="new_repo_box"><span><FaPlus /></span></div>
          <div className="issues"><span><VscIssues /></span></div>
          <div className="request_box"><span><FaCodePullRequest /></span></div>
          <div className="right_img">
            <img src={myImg} alt="profile" />
          </div>
        </div>
      </div>

      <div className={`choices ${showMenu ? 'show' : ''}`} data-aos="fade-up">
        <Link to="/sidebar" className="oveview">
          <span><IoBookOutline /></span><h3>Overview</h3>
        </Link>
        <Link to="/repositories" className="oveview"> 
          <span><GoRepo /></span><h3>Repositories <span className="number">4</span></h3>
        </Link>
        <Link to="/projects" className="oveview">
          <span><VscGithubProject /></span><h3>Projects</h3>
        </Link>
        <Link to="/packages" className="oveview">
          <span><GoPackage /></span><h3>Packages</h3>
        </Link>
        <Link to="/stars" className="oveview">
          <span><FaRegStar /></span><h3>Stars</h3>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
