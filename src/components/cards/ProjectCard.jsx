import React from 'react'
import '../styles/Project.scss'
import { ProjectDetails } from '../details/ProjectDetails'

const ProjectCard = () => {
  const urlClick = (link) => window.open(link, '_blank')

  return (
    <div className="project-container ">
      {ProjectDetails.map((project, index) => {
        return (
          <div className="card-content project-card" key={index}>
            <img
              variant="top"
              src={project.image}
              height="150"
              width="150"
              alt="project icon"
              className="project-icons"
            />
            <h3 className="project-title">{project.title}</h3>

            <p className="project-body">{project.body}</p>
            <div>
              <button
                className="urls"
                onClick={() => {
                  urlClick(project.demourl)
                }}
              >
                Demo
              </button>
              <button
                className="urls"
                onClick={() => {
                  urlClick(project.codeurl)
                }}
              >
                Code
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectCard
