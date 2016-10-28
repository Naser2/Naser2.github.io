import React from 'react';
import ProjectList from '../server/projects';

const Projects = () => {
  let projects = ProjectList.map((project) => {
    return (
      <li className="project" key={project.id} >
        <img className="project-img" src={project.img_src} />
        <h3>{project.name}</h3>
        <p>{project.about}</p>
        <href className="project-href" href={project.href}/>
      </li>
    );
  });

  return (
    <div className="main-content">
      <h2>Projects</h2>
      <ul className="group">
        {projects}
      </ul>
    </div>
  );
}

export default Projects;
