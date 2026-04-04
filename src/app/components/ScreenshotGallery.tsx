'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Screenshot } from '../data/games';

export default function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const close = useCallback(() => setSelectedIndex(null), []);

  const prev = useCallback(() => {
    setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : screenshots.length - 1));
  }, [screenshots.length]);

  const next = useCallback(() => {
    setSelectedIndex((i) => (i !== null && i < screenshots.length - 1 ? i + 1 : 0));
  }, [screenshots.length]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, close, prev, next]);

  if (screenshots.length === 0) return null;

  const selected = selectedIndex !== null ? screenshots[selectedIndex] : null;

  return (
    <>
      <div className="screenshot-gallery">
        {screenshots.map((shot, i) => (
          <button
            key={i}
            className="screenshot-thumbnail-btn"
            onClick={() => setSelectedIndex(i)}
            type="button"
          >
            <img src={shot.src} alt={shot.alt} className="screenshot-thumbnail" />
            {shot.caption && <span className="screenshot-caption">{shot.caption}</span>}
          </button>
        ))}
      </div>

      {selected && (
        <div className="screenshot-lightbox" onClick={close}>
          <button className="screenshot-lightbox-close" onClick={close} type="button">
            &times;
          </button>
          <div className="screenshot-lightbox-content" onClick={(e) => e.stopPropagation()}>
            {screenshots.length > 1 && (
              <button className="screenshot-lightbox-nav screenshot-lightbox-prev" onClick={prev} type="button">
                &#8249;
              </button>
            )}
            <div className="screenshot-lightbox-body">
              <img src={selected.src} alt={selected.alt} className="screenshot-lightbox-image" />
              {selected.caption && (
                <p className="screenshot-lightbox-caption">{selected.caption}</p>
              )}
            </div>
            {screenshots.length > 1 && (
              <button className="screenshot-lightbox-nav screenshot-lightbox-next" onClick={next} type="button">
                &#8250;
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
