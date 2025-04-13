import React from 'react'
import './styles/Resume.scss'
import EducationCard from './cards/EducationCard'

const Education = () => {
  return (
    <div className="edu" id="education">
      <h3 className="resume-sub-heading">Education</h3>
      <EducationCard />
    </div>
  )
}
export default Education
