"use client";

import { useRef, useCallback } from 'react';
import './BorderGlow.css';

export default function BorderGlow({
  children,
  className = '',
  borderRadius = 16,
  coneSpread = 35,
  backgroundColor = 'rgba(15, 23, 42, 0.6)',
}) {
  const cardRef = useRef(null);

  const updateCoordinates = useCallback((clientX, clientY) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const radians = Math.atan2(y - cy, x - cx);
    let degrees = radians * (180 / Math.PI) + 90;
    if (degrees < 0) degrees += 360;

    card.style.setProperty('--edge-proximity', '100');
    card.style.setProperty('--cursor-angle', `${degrees.toFixed(2)}deg`);
  }, []);

  const handlePointerMove = useCallback((e) => {
    updateCoordinates(e.clientX, e.clientY);
  }, [updateCoordinates]);

  const handleTouchMove = useCallback((e) => {
    if (e.touches && e.touches[0]) {
      updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, [updateCoordinates]);

  const handlePointerLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--edge-proximity', '0');
  }, []);

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onTouchStart={handleTouchMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={handlePointerLeave}
      className={`border-glow-card ${className}`}
      style={{
        '--card-bg': backgroundColor,
        '--border-radius': `${borderRadius}px`,
        '--cone-spread': coneSpread,
      }}
    >
      <div className="border-glow-inner">
        {children}
      </div>
    </div>
  );
}
