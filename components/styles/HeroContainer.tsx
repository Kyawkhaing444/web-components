import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 11;
  position: relative;
  .hero-inner-link-item{
    z-index: 10;
  }
  .hover_effect_item {
    position: relative;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: -30vh;
      bottom: -30vh;
      left: 0;
      right: 0;
    }
  }
  a {
    padding: 12px 22px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    z-index: 11;
    text-decoration: none;
    color: transparent;
    transition: color 0.3s, -webkit-text-stroke 0.3s;
    -webkit-text-stroke: 1px #000;
    &:hover {
      color: black;
      -webkit-text-stroke: 1px transparent;
    }
    span {
      line-height: 1.1;
      font-weight: 700;
      text-shadow: none;
      font-size: 5.8vw;
    }
  }
  &:first-child {
    a {
      padding-left: 0;
    }
  }
  &:last-child {
    a {
      padding-right: 0;
    }
  }
`;

export const CursorStyle = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  contain: layout style size;
  pointer-events: none;
  opacity: 0;
  &.media-blend {
    z-index: 100;
    mix-blend-mode: exclusion;
    .cursor-media {
      filter: invert(1);
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: -24px;
    left: -24px;
    display: block;
    width: 48px;
    height: 48px;
    transform: scale(0.2);
    background: black;
    border-radius: 50%;
  }
  .cursor-media {
    display: block;
    height: 350px;
    width: 350px;
    overflow: hidden;
    border-radius: 100%;
    transform: scale(0);
    margin: -175px 0 0 -175px;
    position: relative;
    video {
      height: 350px;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
    }
  }
`
