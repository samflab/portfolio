import React from 'react'
import { ExperienceDetails } from '../details/ExperienceDetails'
import '../styles/Resume.scss'

const ExperienceCard = () => {
  return (
    <div>
      {ExperienceDetails.map((exp, index) => {
        return (
          <div className="resume-container" key={index}>
            <div>
              <h6 className="year">{exp.duration}</h6>
            </div>
            <div>
              <h4 className="course">{exp.job}</h4>
            </div>
            <div>
              <span className="college">{exp.company}</span>
            </div>

            <p>
              <span className="desc">{exp.desc}</span>
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default ExperienceCard
