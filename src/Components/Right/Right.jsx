// src/components/ProfileSidebar/ProfileSidebar.jsx
import React from 'react';
import myImg from '../../assets/myImage.png'
import './Right.css';

const ProfileSidebar = () => {
  return (
    <aside className="profile-sidebar" data-aos="fade-right">
      <div className="profile-card">
        <div className="avatar-wrapper">
          <img src={myImg} alt="Isomiddin" className="profile-avatar" />
          <span className="status-indicator"></span>
        </div>
        <h2>Isomiddin Xakimjanov</h2>
        <p className="username">@isomiddinking</p>
        <button className="edit-profile-btn">Edit profile</button>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
