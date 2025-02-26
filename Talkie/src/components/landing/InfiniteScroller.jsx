'use client';

import { useEffect, useRef } from 'react';

function InfiniteScroller({
  words,
  speed = 15,
  direction = "left",
  additionalClasses = "",
}) {
  const scrollerRef = useRef(null);
  
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const updateScroll = () => {
      const scrollerWidth = scroller.offsetWidth;
      const containerWidth = scroller.firstChild.offsetWidth;

      if (containerWidth <= scrollerWidth) {
        scroller.style.transform = `translateX(0)`;
      } else {
        scroller.style.transform = `translateX(-${scrollerWidth}px)`;
      }
    };

    const interval = setInterval(() => {
      const containerWidth = scroller.firstChild.offsetWidth;
      scroller.style.transition = `transform ${speed}s linear`;
      scroller.style.transform = `translateX(-${containerWidth}px)`;

      setTimeout(() => {
        updateScroll();
      }, speed * 1000);
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className={`w-full overflow-hidden relative ${additionalClasses}`}>
      <div
        ref={scrollerRef}
        className="flex"
        style={{
          whiteSpace: 'nowrap',
        }}
      >
        {[...words, ...words].map((word, index) => (
          <div
            key={index}
            className="py-3 px-8 bg-fgray-100 rounded-md border-[2px] border-fgray-600 mx-6"
          >
            <span
              className="text-xl font-semibold text-fgray-800"
              style={{ whiteSpace: "nowrap" }}
            >
              {word}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteScroller;
