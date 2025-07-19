import React, { useEffect } from 'react';
import ProfileSidebar from '../Right/Right';
import { VscGithubProject } from "react-icons/vsc";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Project.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='projects'>
      <ProfileSidebar />

      <div className="card">
        <div className='Ids' data-aos="fade-up">
          <h2>Welcome to projects</h2>
          <p>
            Built like a spreadsheet, project tables give you a live canvas to filter,<br />
            sort, and group issues and pull requests. Tailor them to your needs with <br />
            custom fields and saved views.
          </p>
          <button>Learn More</button>
        </div>

        <div className="new_repositories_project" data-aos="fade-up" data-aos-delay="200">
          <span><VscGithubProject /></span>
          <h2>Create your first GitHub project</h2>
          <p>Projects are a customizable, flexible tool for planning and tracking your work.</p>
          <button>New Project</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
