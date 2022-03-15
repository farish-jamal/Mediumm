import React from 'react'
import Banner from '../components/Banner';
import MainContent from '../components/MainContent';
import Copyright from '../components/Copyright';
import Header from '../components/Header';

function Home() {
  return (
    <div>
        <Header linked="/create" color="btn btn-sm btn-outline-success px-4 py-1"/>
        <Banner />
        <MainContent />
        <Copyright />
    </div>
  )
}

export default Home