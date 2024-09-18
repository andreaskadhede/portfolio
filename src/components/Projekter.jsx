import { useState } from 'react';

export default function Projekter(props) {
   const [selectedProject, setSelectedProject] = useState(null);

   const openProjekt = () => {
      setSelectedProject(props.id);
   }

   const closeProject = () => {
      setSelectedProject(null);
   }

   return (
      <>
         <article className="projekt component" onClick={openProjekt}>
            <div className="projekt-titel">
               <h3 className="projekt-titel-style">{props.name}</h3>
               <h4 className="projekt-titel-style">{props.focus}</h4>
            </div>
            <div className="projekt-beskrivelse">
               <p>{props.description}</p>
            </div>
         </article>

         {selectedProject === props.id && (
            <article className="projekt-info-boks">
               <a onClick={closeProject}>Luk</a>
               <article className="projekt-info">
                  <img src={props.img} alt={props.name} />

                  <div className="projekt-tekst">
                     <div className="projekt-titel">
                        <h2>{props.name}</h2>
                        <h3>{props.focus}</h3>
                     </div>
                     
                     <div className="projekt-beskrivelse">
                        <h4>Beskrivelse</h4>
                        <p>{props.description}</p>
                     </div>
                     
                     <div>
                        <h4>Værktøjer</h4>
                        <p>{props.tools}</p>
                     </div>
                     <a href={props.link}>Se det færdige projekt her</a>
                  </div>
               </article>
            </article>
         )}
      </>
   );
}
