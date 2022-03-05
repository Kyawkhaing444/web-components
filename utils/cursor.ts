import { RefObject } from 'react';
import { getMousePos, lerp } from './index';
import gsap from 'gsap';

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

  const onMouseEnter = ({mouse, cursor}: IMouseEventPara) => {
    cursorConfigs.x.previous = cursorConfigs.x.current = mouse.x;
    cursorConfigs.y.previous = cursorConfigs.y.current = mouse.y;

    gsap.to(cursor.current, {
      duration: 1,
      ease: 'Power3.easeOut',
      opacity: 1
    });

    requestAnimationFrame(() => updateCursor({mouse, cursor}));

  }


  interface IOnMouseMovePara {
    e: React.MouseEvent<HTMLDivElement>;
    setMouse: ({x,y}: IMouse) => void
    mouse: IMouse
    cursor: RefObject<HTMLDivElement>
  }

  export const onMouseMove = ({e, setMouse, mouse, cursor}: IOnMouseMovePara) => {
    setMouse(getMousePos(e))
    onMouseEnter({mouse, cursor});
  }
