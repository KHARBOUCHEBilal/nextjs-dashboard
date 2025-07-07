// app/ui/cube.tsx
'use client';

import React, { useRef, useEffect, useState } from 'react';

export default function Cube() {
  const cubeRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: -30, y: -30 });
  const [drag, setDrag] = useState({ isDragging: false, startX: 0, startY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!drag.isDragging) return;

      const deltaX = e.clientX - drag.startX;
      const deltaY = e.clientY - drag.startY;

      setRotation((prev) => ({
        x: prev.x - deltaY * 0.5,
        y: prev.y + deltaX * 0.5,
      }));

      setDrag({
        isDragging: true,
        startX: e.clientX,
        startY: e.clientY,
      });
    };

    const handleMouseUp = () => {
      setDrag((prev) => ({ ...prev, isDragging: false }));
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [drag]);

  const faces = [
    { name: 'Front', style: { background: 'red', transform: 'translateZ(50px)' } },
    { name: 'Back', style: { background: 'blue', transform: 'rotateY(180deg) translateZ(50px)' } },
    { name: 'Right', style: { background: 'green', transform: 'rotateY(90deg) translateZ(50px)' } },
    { name: 'Left', style: { background: 'yellow', transform: 'rotateY(-90deg) translateZ(50px)' } },
    { name: 'Top', style: { background: 'purple', transform: 'rotateX(90deg) translateZ(50px)' } },
    { name: 'Bottom', style: { background: 'orange', transform: 'rotateX(-90deg) translateZ(50px)' } },
  ];

  const styles = {
    scene: {
      width: '100px',
      height: '100px',
      position: 'relative' as const,
      transformStyle: 'preserve-3d' as const,
      transition: 'transform 0.1s ease-out',
      cursor: 'grab',
    },
    face: {
      position: 'absolute' as const,
      width: '100px',
      height: '100px',
      lineHeight: '100px',
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      color: 'white',
      textAlign: 'center' as const,
      opacity: 0.9,
      border: '1px solid white',
    },
  };

  return (
    <div
      ref={cubeRef}
      style={{
        ...styles.scene,
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
      onMouseDown={(e) =>
        setDrag({ isDragging: true, startX: e.clientX, startY: e.clientY })
      }
      onMouseLeave={() => setDrag((prev) => ({ ...prev, isDragging: false }))}
    >
      {faces.map((face) => (
        <div key={face.name} style={{ ...styles.face, ...face.style }}>
          {face.name}
        </div>
      ))}
    </div>
  );
}
