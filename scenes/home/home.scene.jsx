import React from 'react';
import Header from './scenes/header/header.scene'
import Timeline from './scenes/timeline/timeline.scene';
import System from './scenes/system/system.scene';
import Projects from './scenes/projects/projects.scene';

const HomeScene = () => {
  return(
    <>
      <Header/>
      <Timeline/>
      <System/>
      <Projects/>
    </>
  )
}

export default HomeScene
