import React from 'react'
import { EducationDetails } from '../details/EducationDetails'
import '../styles/Resume.scss'

const EducationCard = () => {
  return (
    <div>
      {EducationDetails.map((edu, index) => {
        return (
          <div className="resume-container" key={index}>
            <span>
              <h6 className="year">{edu.year}</h6>
            </span>
            <span>
              <h4 className="course">{edu.course}</h4>
            </span>
            <span>
              <span className="college">{edu.college}</span>
            </span>

            <p>
              <span className="desc">{edu.desc}</span>
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default EducationCard
