import { RefObject } from 'react';
import { getMousePos, lerp, getSiblings } from './index';
import { gsap } from "gsap";

  interface IMouse {
    x: number;
    y: number
  }

  interface IMouseEventPara {
    mouse: IMouse;
    cursor: RefObject<HTMLDivElement>
  }

  const cursorConfigs = {
    x: { previous: 0, current: 0, amt: 0.2 },
    y: { previous: 0, current: 0, amt: 0.2 },
  };

 const updateCursor = ({ mouse, cursor}: IMouseEventPara) => {
    cursorConfigs.x.current = mouse.x;
    cursorConfigs.y.current = mouse.y;

    cursorConfigs.x.previous = lerp(cursorConfigs.x.previous, cursorConfigs.x.current, cursorConfigs.x.amt);
    cursorConfigs.y.previous = lerp(cursorConfigs.y.previous, cursorConfigs.y.current, cursorConfigs.y.amt);

    if(cursor.current){
      cursor.current.style.transform = `translateX(${cursorConfigs.x.previous}px) translateY(${cursorConfigs.y.previous}px)`;
    }

    requestAnimationFrame(() => updateCursor({mouse, cursor}));
  }

  const setVideo = ({ item }: {item: Element}) => {
    const src = item.getAttribute('data-video-src');
    const video = document.querySelector(`#${src}`);
    const siblings = getSiblings(video);

    if(video?.id === src) {
      gsap.set(video, {zIndex: 4, opacity: 1})
      siblings.forEach(sibling => {
        gsap.set(sibling, {zIndex: 1, opacity: 0})
      })
    }
  }

  const scaleCursor = (child: Element, amount: number) => {
    gsap.to(child, {
      duration: 0.6,
      scale: amount,
      ease: "Power3.easeOut",
    });
  }


  const onScaleMouse = ({ cursor }: {cursor: RefObject<HTMLDivElement>}) => {
    const hoverItem = document.querySelectorAll('.hero-inner-link-item');
    hoverItem.forEach(item => {
      // If I am hovering on the item for on page load I want to scale the cursor media
      if(item.matches(':hover')){
        setVideo({ item });
      }
    })
  }

  const onMouseEnter = ({mouse, cursor}: IMouseEventPara) => {
    cursorConfigs.x.previous = cursorConfigs.x.current = mouse.x;
    cursorConfigs.y.previous = cursorConfigs.y.current = mouse.y;

    gsap.to(cursor.current, {
      duration: 1,
      ease: 'Power3.easeOut',
      opacity: 1
    });

    onScaleMouse({cursor});

    requestAnimationFrame(() => updateCursor({mouse, cursor}));

    window.removeEventListener("mousemove", () => onMouseEnter({mouse, cursor}));

  }


  interface IOnMouseMovePara {
    e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>;
    cursor: RefObject<HTMLDivElement>
  }

  export const onMouseEnterText = ({e, cursor}:IOnMouseMovePara) => {
    const item = e.currentTarget;
    setVideo({item});
    if(cursor.current && cursor.current.children){
      scaleCursor(cursor.current.children[0], 0.8);
    }
  }

  export const onMouseLeaveText = ({e, cursor}: IOnMouseMovePara) => {
    if(cursor.current && cursor.current.children){
      scaleCursor(cursor.current.children[0], 0);
    }
  }

  export const onMouseEnterATag = ({e, cursor}: IOnMouseMovePara) => {
    if(cursor.current){
      cursor.current.classList.add("media-blend");
      scaleCursor(cursor.current.children[0], 1.2);
    }
  }

  export const onMouseLeaveATag = ({e, cursor}: IOnMouseMovePara) => {
    if(cursor.current){
      cursor.current.classList.remove("media-blend");
      scaleCursor(cursor.current.children[0], 0.8);
    }
  }

  export const onMouseMove = ({e, cursor}: IOnMouseMovePara) => {
    const mouse = getMousePos(e)
    onMouseEnter({mouse, cursor});
  }
