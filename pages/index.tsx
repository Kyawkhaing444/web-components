import type { NextPage } from 'next'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { CursorStyle, HeroContainer, TitleContainer } from '../components/styles/HeroContainer'
import { getMousePos, lerp } from '../utils'
import gsap from 'gsap';
import { onMouseEnterATag, onMouseEnterText, onMouseLeaveATag, onMouseLeaveText, onMouseMove } from '../utils/cursor'

const Home: NextPage = () => {
  const cursor = useRef<HTMLDivElement>(null);

  const texts = ['Websites', 'Apps', 'Branding'];

  return (
    <HeroContainer onMouseMove={(e) => onMouseMove({ e, cursor })}>
      <TitleContainer>
        {texts.map(text => (
          <div key={text} data-video-src={text} className="hero-inner-link-item"
            onMouseEnter={(e) => onMouseEnterText({e, cursor})}
            onMouseLeave={(e) => onMouseLeaveText({e, cursor})}
          >
            <div className="hover_effect_item"></div>
            <Link href="/">
              <a
               onMouseEnter={(e) => onMouseEnterATag({e, cursor})}
               onMouseLeave={(e) => onMouseLeaveATag({e, cursor})}
              >
                <span>{text}</span>
              </a>
            </Link>
          </div>
        ))}
      </TitleContainer>
      <CursorStyle ref={cursor}>
        <div className='cursor-media'>
          <video
            src="videos/websites.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            id="Websites"
          ></video>
          <video
            src="videos/apps.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            id="Apps"
          ></video>
          <video
            src="videos/branding.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            id="Branding"
          ></video>
        </div>
      </CursorStyle>
    </HeroContainer>
  )
}

export default Home
