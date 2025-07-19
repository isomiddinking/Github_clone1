// src/components/ProfileSidebar/ProfileSidebar.jsx
import React from 'react';
import './Right.css';

const ProfileSidebar = () => {
  return (
    <aside className="profile-sidebar" data-aos="fade-right">
      <div className="profile-card">
        <div className="avatar-wrapper">
          <img src="/src/assets/myImage.png" alt="Isomiddin" className="profile-avatar" />
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
