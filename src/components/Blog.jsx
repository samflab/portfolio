import './styles/Blog.scss'
import { FaMediumM } from 'react-icons/fa'
import { SiHashnode } from 'react-icons/si'
import { blogDetails } from './details/BlogDetails'
import React from 'react'

const blogLinkClick = (link) => window.open(link, '_blank')

const Blog = () => {
  return (
    <div className="Blog" id="blogs">
      <h1 className="blog-header">Blogs</h1>
      <hr className="blog-divider" />
      <div>
        <div className="blog-plate">
          {blogDetails.map((blog) => {
            return (
              <div className="blog-layout" key={blog.id}>
                <h4 className="blog-title">{blog.title}</h4>
                <p className="blog-desc">{blog.desc}</p>
                <div>
                  <div className="read-more">Read More Here: </div>
                  <button
                    className="urls"
                    onClick={() => {
                      blogLinkClick(blog.bloglink1)
                    }}
                  >
                    <FaMediumM />
                  </button>
                  {blog.bloglink2 ? (
                    <button
                      className="urls"
                      onClick={() => {
                        blogLinkClick(blog.bloglink2)
                      }}
                    >
                      <SiHashnode />
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Blog
