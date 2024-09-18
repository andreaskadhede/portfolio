import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled] = useState(false);

  useEffect(() => {
    const rightPane = document.querySelector(".right-pane");
  
    console.log(rightPane.scrollTop)
    if (rightPane) {
      const handleScroll = () => {
        const omMig = document.querySelector("#om-mig-link");
        const kompetencer = document.querySelector("#kompetencer-link");
        const projekter = document.querySelector("#projekter-link");
  
        if (rightPane.scrollTop <= 1150) {
          omMig.classList.add("active");
          kompetencer.classList.remove("active");
          projekter.classList.remove("active");
        } else if (rightPane.scrollTop <= 2300) {
          omMig.classList.remove("active");
          kompetencer.classList.add("active");
          projekter.classList.remove("active");
        } else {
          omMig.classList.remove("active");
          kompetencer.classList.remove("active");
          projekter.classList.add("active");
        }
      };
  
      rightPane.addEventListener("scroll", handleScroll);
  
      return () => {
        rightPane.removeEventListener("scroll", handleScroll);
      };
    }

    
  }, []);

  return (
    <ul className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <li><a className='active' id='om-mig-link' href="#om-mig">Om mig</a></li>
      <li><a id='kompetencer-link' href="#kompetencer">Kompe<span className='mobile-version'>-</span>tencer</a></li>
      <li><a id='projekter-link' href="#projekter">Projekter</a></li>
    </ul>
  );
}
