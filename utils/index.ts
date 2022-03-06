// Linear interpolation
export const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

// Gets the mouse position
export const getMousePos = (e: React.MouseEvent) => {
  let posx = 0;
  let posy = 0;
  if (e.clientX || e.clientY) {
    posx = e.clientX;
    posy = e.clientY;
  }
  return { x: posx, y: posy };
};

// Get sibilings
export const getSiblings = (e: Element | null) => {
  // for collecting siblings
  let siblings = [] as ChildNode[];
  if(!e){
    return [];
  }
  // if no parent, return no sibling
  if (!e.parentNode) {
    return siblings;
  }
  // first child of the parent node
  let sibling = e.parentNode.firstChild;
  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};
