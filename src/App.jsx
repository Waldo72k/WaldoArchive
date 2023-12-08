import React, { useRef } from 'react'
import kivotos from './images/Kivotos_1.webp'
import logo from './images/WaldoArchive_ba-style@nulla.top.png'
import reisa from './images/reisa-dance-blue-archive.gif'
import arisu from './images/arisu-blue-archive.gif'
import sweetclub from './images/sweetclub.jpg'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  const ref = useRef();

  return (
    <>
      <Parallax pages={4} ref={ref}>

        <ParallaxLayer 
        speed={0.2}
        offset={0}
        factor={1.5}
        style={{
           backgroundImage: `url(${kivotos})`,
           backgroundSize: 'cover'
        }}
        >
        </ParallaxLayer>

        <ParallaxLayer 
        offset={0.2} 
        speed={1}
        factor={1}
        style={{
          backgroundImage: `url(${logo})`,}}
          >
        </ParallaxLayer>
          
        <ParallaxLayer
        speed={0.2}
        offset={3}
        factor={1}
        style={{
           backgroundImage: `url(${sweetclub})`,
           backgroundSize: 'cover'
        }}>
        </ParallaxLayer>

        <ParallaxLayer
        sticky={{ start: 0.17, end: 2.9 }}
        onClick={()=> ref.current.scrollTo(0)}
        className='ml-24'
        >
          <img src={reisa} alt="" />
        </ParallaxLayer>

        <ParallaxLayer
        offset={0.17} 
        speed={1}
        onClick={()=> ref.current.scrollTo(3)}
        >
          <img src={arisu} alt="" />
        </ParallaxLayer>

        
      </Parallax>
    </>
  )
}

export default App
