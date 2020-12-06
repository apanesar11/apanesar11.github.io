import React from 'react';
import Header from './scenes/header/header.scene'
import Timeline from './scenes/timeline/timeline.scene';
import System from './scenes/system/system.scene';
import Projects from './scenes/projects/projects.scene';
import Resume from './scenes/resume/resume.scene';
import Footer from './scenes/footer/footer.scene';

const HomeScene = () => {
  return(
    <>
      <Header/>
      <Timeline/>
      <System/>
      <Projects/>
      <Resume/>
      <Footer/>
    </>
  )
}

export default HomeScene
