import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './components/styles/App.css'
import Resume from './components/Resume'
import ProjectWork from './components/Project'
import Blog from './components/Blog'
import Contact from './components/Contant'
import Footer from './components/Footer'
import Achievements from './components/Achievement'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="projects">
        <ProjectWork />
      </section>
      <section id="blogs">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}
const routeConfig = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <div>About</div>,
      },
      {
        path: '/contact',
        element:<Contact/>,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/projects',
        element: <ProjectWork />,
      },
      {
        path: '/blogs',
        element: <Blog />,
      },
      {
        path: '/achievement',
        element: <Achievements/>,
      },
      {
        path: '/education',
        element: <Education/>,
      },
      {
        path: '/experience',
        element:<Experience/>,
      },
      {
        path: '/skills',
        element: <Skills/>,
      },
    ],
  },
])
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(<RouterProvider router={routeConfig} />)
