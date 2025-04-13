import React, { useEffect, useState } from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills.jsx'
import Achievements from './Achievement'
import './styles/Resume.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

function VerticalTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Box 
    sx={{flexGrow: 1, display:'flex', height: 220}}
   >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label='resume tabs'
        sx={{borderRight: 1, borderColor: 'divider'}}
       
      >
        <Tab
          label="Education"
          {...a11yProps(0)}
        />
        <Tab
          label="Experience"
          {...a11yProps(1)}
        />
        <Tab label="Skills" {...a11yProps(2)} 
         />
        <Tab
          label="Achievements"
          {...a11yProps(3)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Education />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Experience />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Skills />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Achievements />
      </TabPanel>
    </Box>
  )
}

const Resume = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <div className="resume-wrapper">
      <div className="resume" id="resume">
        <h1 className="resume-header">Resume</h1>
        {windowWidth >= 960 ? (
          <div className="vertical-tab">
            <VerticalTabs />
          </div>
        ) : (
          <div className="responsive-resume">
            <Education />
            <Experience />
            <Skills />
            <Achievements />
          </div>
        )}
      </div>
    </div>
  )
}

export default Resume
