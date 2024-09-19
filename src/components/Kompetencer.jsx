export default function Kompetencer() {
   // const [count, setCount] = useState(0)

   return (
      <div className="component">
         <h1>
            Kompe<span className="small-version">-</span>tencer
         </h1>

         <h2>Personlig kompetencer</h2>
         <ul className="personlige-kompetencer">
            <li>Sans for detaljer</li>
            <li>Selvstændig</li>
            <li>Lærevillig og arbejdsom</li>
            <li>Tilpasningsdygtig</li>
            <li>Problemløser</li>
         </ul>

         <h2>Sociale kompetencer</h2>
         <ul className="sociale-kompetencer">
            <li>Evne til at lære fra mig</li>
            <li>Hjælpsom</li>
            <li>Samarbejdsvillig</li>
            <li>God til at kommunikere</li>
         </ul>

         <h2>Tekniske kompetencer</h2>
         <div className="tekniske-kompetencer">
            <div className="tool">
               <div className="kompetence-billede">
                  <img src="/img/html.webp" alt="HTML5 logo" />
                  <img src="/img/css.webp" alt="CSS3 logo" />
               </div>

               <div className="tool-tekst">
                  <h3>HTML og CSS</h3>
                  <p>
                     Erfaren i at skabe moderne, brugerfokuserede websites med
                     HTML5 og CSS3. Kompetent i komplekse layouts, animationer
                     og responsive design for både desktop og mobil. Sikrer
                     cross-browser kompatibilitet og høj ydeevne.
                  </p>
                  <h5>Rutineret</h5>
               </div>
            </div>

            <div className="tool">
               <img
                  className="kompetence-billede"
                  src="/img/javascript.webp"
                  alt="JavaScript logo"
               />
               <div className="tool-tekst">
                  <h3>JavaScript</h3>
                  <p>
                     Dygtig til at tilføje interaktivitet og dynamik til
                     webapplikationer med JavaScript. Erfaring med asynkron
                     programmering, DOM-manipulation og event-håndtering for at
                     forbedre brugeroplevelsen.
                  </p>
                  <h5>Øvet</h5>
               </div>
            </div>

            <div className="tool">
               <img
                  className="kompetence-billede"
                  src="/img/react.webp"
                  alt="React.js logo"
               />
               <div className="tool-tekst">
                  <h3>React.js</h3>
                  <p>
                     Grundlæggende kendskab til React.js, med fokus på
                     komponentopbygning og tilstandshåndtering. Erfaring med
                     state, props og routing for at bygge dynamiske
                     brugergrænseflader.
                  </p>
                  <h5>Nybegynder</h5>
               </div>
            </div>

            <div className="tool">
               <img
                  className="kompetence-billede"
                  src="/img/wordpress.webp"
                  alt="WordPress logo"
               />
               <div className="tool-tekst">
                  <h3>WordPress</h3>
                  <p>
                     Erfaring med administration og opdatering af
                     WordPress-hjemmesider med færdigudviklede temaer.
                     Komfortabel med at opdatere indhold og sikre optimal
                     ydeevne gennem regelmæssige opdateringer og teknisk
                     vedligeholdelse.
                  </p>
                  <h5>Let øvet</h5>
               </div>
            </div>
         </div>
      </div>
   );
}
