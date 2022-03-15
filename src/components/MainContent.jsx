import React from 'react'
import About from './About'
import BlogsOverviews from './BlogsOverviews'
import HeadLines from './HeadLines'

function MainContent() {
  return (
    // <!-- Main post Starts -->
    <div class="container-sm d-flex py-3 main_post">
        <div class="stories">
            <h5>All Story</h5>
            <hr/>
            <BlogsOverviews />
            <BlogsOverviews />
            <BlogsOverviews />
        </div>
        <div class="new">
            <h5>Popular</h5>
            <hr />
            <HeadLines text="01"/>
            <HeadLines text="02"/>
            <HeadLines text="03"/>
            <HeadLines text="04"/>
            <About />
        </div>
    </div>
  )
}

export default MainContent