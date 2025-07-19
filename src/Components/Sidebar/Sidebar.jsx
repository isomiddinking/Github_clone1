import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiGitRepositoryCommitsLine } from 'react-icons/ri';
import ProfileSidebar from '../Right/Right';
import myActive2025 from '../../assets/MyActive.png'
import myActive2024 from '../../assets/MyActive24.png'
import myActive2023 from '../../assets/MyActive2023.png'


const Sidebar = () => {
  const [activeYear, setActiveYear] = useState('2025');

  // Define contributions for each year
  const contributions = {
    '2025': 50,
    '2024': 303,
    '2023': 35,
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="github-clone-container">
     <ProfileSidebar/>

      <main className="main-content" data-aos="fade-up">
        <section className="pinned-repos">
          <div className="pinned-header" data-aos="fade-up" data-aos-delay="50">
            <h3>Pinned</h3>
            <span className="customize-link">Customize your pins</span>
          </div>

          <div className="repo-grid">
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

          <div className="active" data-aos="fade-up" data-aos-delay="100">
            <div className="btn_boxs">
              <button
                className={activeYear === '2025' ? 'active-btn' : ''}
                onClick={() => setActiveYear('2025')}
              >
                2025
              </button>
              <button
                className={activeYear === '2024' ? 'active-btn' : ''}
                onClick={() => setActiveYear('2024')}
              >
                2024
              </button>
              <button
                className={activeYear === '2023' ? 'active-btn' : ''}
                onClick={() => setActiveYear('2023')}
              >
                2023
              </button>
            </div>
            <div className="top">
              <h2>{contributions[activeYear]} contributions in the last year</h2>
              <p>Custom settings</p>
            </div>

            {activeYear === '2025' && (
              <div className="img_active img_active25" data-aos="fade-up">
                <img src={myActive2025} alt="2025 Contributions" />
              </div>
            )}

            {activeYear === '2024' && (
              <div className="img_active img_active24" data-aos="fade-up">
                <img src={myActive2024} alt="2024 Contributions" />
              </div>
            )}

            {activeYear === '2023' && (
              <div className="img_active img_active23" data-aos="fade-up">
                {/* You'll need to create MyActive23.png in your assets folder */}
                <img src={myActive2023} alt="2023 Contributions" />
              </div>
            )}
          </div>

          <div
            className="contribution-activity-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2>Contribution activity</h2>
            <div className="month-selector">
              <span className="current-month">July 2025</span>
            </div>

            <div className="activity-section">
              <div className="activity-header">
                <span className="icons">
                  <RiGitRepositoryCommitsLine />
                </span>
                <h3>Created 9 commits in 4 repositories</h3>
              </div>
              <div className="repository-list">
                <div className="repository-item">
                  <a href="#" className="repo-link">
                    isomiddinking/Restoran-web-sayti
                  </a>
                  <span className="commit-count">4 commits</span>
                  <div className="commit-bar" style={{ width: '80%' }}></div>
                </div>
                <div className="repository-item">
                  <a href="#" className="repo-link">
                    isomiddinking/3-d_Typing_game
                  </a>
                  <span className="commit-count">2 commits</span>
                  <div className="commit-bar" style={{ width: '40%' }}></div>
                </div>
                <div className="repository-item">
                  <a href="#" className="repo-link">
                    isomiddinking/Robo_market
                  </a>
                  <span className="commit-count">2 commits</span>
                  <div className="commit-bar" style={{ width: '40%' }}></div>
                </div>
                <div className="repository-item">
                  <a href="#" className="repo-link">
                    isomiddinking/Asaxiy.uz_main_original
                  </a>
                  <span className="commit-count">1 commit</span>
                  <div className="commit-bar" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>

            <div className="activity-section" data-aos="fade-up" data-aos-delay="250">
              <div className="activity-header">
                <span className="icons">
                  <RiGitRepositoryCommitsLine />
                </span>
                <h3>Created 3 repositories</h3>
              </div>
              <div className="repository-list">
                <div className="repository-item">
                  <a href="#" className="repo-link">
                    isomiddinking/3-d_Typing_game
                  </a>
                  <span className="language-indicator" style={{ backgroundColor: '#f1e05a' }}></span>
                  <span className="language-name">JavaScript</span>
                  <span className="date">Jul 4</span>
                </div>
                <div className="repository-item">
                  <a href="#" className="repo-link">
                    isomiddinking/Restoran-web-sayti
                  </a>
                  <span className="language-indicator" style={{ backgroundColor: '#563d7c' }}></span>
                  <span className="language-name">CSS</span>
                  <span className="date">Jul 3</span>
                </div>
                <div className="repository-item">
                  <a href="#" className="repo-link">
                    isomiddinking/Robo_market
                  </a>
                  <span className="language-indicator" style={{ backgroundColor: '#563d7c' }}></span>
                  <span className="language-name">CSS</span>
                  <span className="date">Jul 2</span>
                </div>
              </div>
            </div>

            <button className="show-more-button">Show more activity</button>

            <p className="guidance-text">
              Seeing something unexpected? Take a look at the{' '}
              <a
                href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-your-contribution-graph/why-are-my-contributions-not-showing-up-on-my-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub profile guide
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sidebar;