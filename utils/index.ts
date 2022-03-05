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
