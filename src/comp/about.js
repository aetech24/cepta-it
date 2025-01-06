import React, { useState, useEffect } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';
// ...existing code...

const About = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <div className="scroll-to-top" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}>
      <AiOutlineArrowUp />
    </div>
    </>
  )
}

export default About
