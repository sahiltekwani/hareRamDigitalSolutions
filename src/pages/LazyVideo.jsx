import React, { useRef, useEffect, useState } from "react";

const LazyVideo = ({ src, className }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const currentRef = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once loaded
        }
      },
      { threshold: 0.1 } // More sensitive
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      src={isVisible ? src : undefined}
    />
  );
};

export default LazyVideo;
