import React, { useEffect, useState } from 'react';
import './Apps.css'; // Import your CSS file

function Appsx() {
  // const [isSticky, setSticky] = useState(false);
  // const [height, setHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setSticky(window.scrollY > height);
  //   };

  //   const handleResize = () => {
  //     setHeight(window.innerHeight);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [height]);

  return (
    <div className="scroll-container">
      <div className="content">
        {/* Your content goes here */}
        <div className="sticky-element">
          {/* Your sticky content goes here */}
          Sticky Content
        </div>
        {/* ... more content ... */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cumque qui necessitatibus commodi officia perferendis, cupiditate dolorum, voluptas nostrum laborum deleniti id fuga repellendus laudantium. Perferendis velit nesciunt doloremque animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo doloremque dolorum modi delectus eos odit eius at magnam quos maxime nesciunt saepe ut non voluptatem minima, et totam tempore soluta!
      </div>
    </div>
  );
}

export default Appsx;
