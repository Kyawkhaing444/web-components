import type { NextPage } from 'next'
import { useRef  } from 'react'
import { CursorStyle, HeroContainer, TitleContainer } from '../components/styles/HeroContainer'
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
              <a
                onMouseEnter={(e) => onMouseEnterATag({e, cursor})}
                onMouseLeave={(e) => onMouseLeaveATag({e, cursor})}
                href="#"
              >
                <span>{text}</span>
              </a>
          </div>
        ))}
      </TitleContainer>
      <CursorStyle ref={cursor}>
        <div className='cursor-media'>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload='auto'
            id="Websites"
          >
            <source src="videos/websites.mp4"
            type="video/mp4"></source>
          </video>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload='auto'
            id="Apps"
          >
            <source src="videos/apps.mp4"
            type="video/mp4"></source>
          </video>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload='auto'
            id="Branding"
          >
            <source src="videos/branding.mp4"
            type="video/mp4"></source>
          </video>
        </div>
      </CursorStyle>
    </HeroContainer>
  )
}

export default Home
