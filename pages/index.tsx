import type { NextPage } from 'next'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { CursorStyle, HeroContainer, TitleContainer } from '../components/styles/HeroContainer'
import { getMousePos, lerp } from '../utils'
import gsap from 'gsap';
import { onMouseMove } from '../utils/cursor'

const Home: NextPage = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const cursor = useRef<HTMLDivElement>(null);

  return (
    <HeroContainer onMouseMove={(e) => onMouseMove({ e, mouse, setMouse, cursor })}>
      <TitleContainer>
        <div className="hero-inner-link-item">
          <div className="hover_effect_item"></div>
          <Link href="/"><a><span>Websites</span></a></Link>
        </div>
        <div className="hero-inner-link-item">
          <div className="hover_effect_item"></div>
          <Link href="/"><a><span>Apps</span></a></Link>
        </div>
        <div className="hero-inner-link-item">
          <div className="hover_effect_item"></div>
          <Link href="/"><a><span>Branding</span></a></Link>
        </div>
      </TitleContainer>
      <CursorStyle ref={cursor}>
        <div className='cursor-media'>
          <video
            src="videos/websites.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            id="websites"
          ></video>
          <video
            src="videos/apps.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            id="apps"
          ></video>
          <video
            src="videos/branding.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            id="branding"
          ></video>
        </div>
      </CursorStyle>
    </HeroContainer>
  )
}

export default Home
