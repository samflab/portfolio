import React from 'react'
import { achievementDetails } from '../details/AchievementDetails'
import '../styles/Resume.scss'

const AchievementCard = () => {
  return (
    <div>
      {achievementDetails.map((achievement, index) => {
        return (
          <div className="resume-container" key={index}>
            <div>
              <h6 className="year">{achievement.year}</h6>
            </div>
            <div>
              <h4 className="course">{achievement.course}</h4>
            </div>
            <div>
              <span className="college">{achievement.college}</span>
            </div>

            <p>
              <span className="desc">{achievement.desc}</span>
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default AchievementCard
