import { useState, useEffect, useRef } from "react";
import "./App.css";
import Kontakt from "./components/Kontakt";
import OmMig from "./components/OmMig";
import Nav from "./components/Nav";
import Projekter from "./components/Projekter";
import Kompetencer from "./components/Kompetencer";
import projectData from "./assets/projektbeskrivelser.json";
import { TypeAnimation } from "react-type-animation";

export default function App() {
   const [isBigger, setIsBigger] = useState(false);
   const andreaRef = useRef(null);

   // Toggle size of the image
   const handleClick = () => {
      setIsBigger((prev) => !prev);
   };

   // Handle clicks outside the image to reset size
   const handleClickOutside = (event) => {
      if (andreaRef.current && !andreaRef.current.contains(event.target)) {
         setIsBigger(false);
      }
   };

   // Add and remove event listener for clicks outside the image
   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   // Sort projects by name
   projectData.sort((projekt1, projekt2) =>
      projekt1.name.localeCompare(projekt2.name)
   );

   const [scrollTop, setScrollTop] = useState(0);
   const rightPaneRef = useRef(null);

   const handleScroll = () => {
      if (rightPaneRef.current) {
         setScrollTop(rightPaneRef.current.scrollTop);
      }
   };

   useEffect(() => {
      const rightPane = rightPaneRef.current;
      if (rightPane) {
         rightPane.addEventListener("scroll", handleScroll);
      }
      return () => {
         if (rightPane) {
            rightPane.removeEventListener("scroll", handleScroll);
         }
      };
   }, []);

   return (
      <div className="grid-container">
         <div className="left-pane">
            <img
               ref={andreaRef}
               className={`andrea ${isBigger ? "bigger" : ""}`}
               src="../src/assets/img/andrea.webp"
               alt="Billede af Andrea Skadhede"
               onClick={handleClick} // Use onClick event handler
            />
            <Nav />
            <Kontakt />
         </div>
         <div className="right-pane" ref={rightPaneRef}>
            <div id="om-mig">
               <OmMig className="glitchy-content" />
            </div>
            <div id="kompetencer">
               <Kompetencer />
            </div>
            <div id="projekter">
               <h1 className="right-align">
                  <TypeAnimation
                     sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "",
                        300,
                        "Projec",
                        400,
                        "Proje",
                        300,
                        "Projekter",
                        3000,
                     ]}
                     wrapper="span"
                     speed={25}
                     repeat={Infinity}
                  />
               </h1>
               {projectData.map((project, index) => (
                  <Projekter
                     key={index}
                     name={project.name}
                     focus={project.focus}
                     img={project.img}
                     description={project.description}
                     tools={project.tools}
                     link={project.link}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}
