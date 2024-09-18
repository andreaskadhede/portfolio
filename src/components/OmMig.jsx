import Uddannelse from "./Uddannelse"
import uddannelseData from '../assets/uddannelse.json';
import { TypeAnimation } from "react-type-animation";



export default function omMig() {
    // const [count, setCount] = useState(0)
  
    return (
      <div className="component">
        <h1 className='right-align'>
        <TypeAnimation
                     sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "",
                        300,
                        "Om An",
                        600,
                        "Om ",
                        300,
                        "Om mig",
                        3000,
                     ]}
                     wrapper="span"
                     speed={25}
                     repeat={Infinity}
                  />
        </h1>
        <p>Som multimediedesignstuderende på Erhvervsakademi Aarhus med specialisering i frontendudvikling har jeg opnået stærke kompetencer i HTML, CSS, JavaScript og React.js. Jeg har lært, hvordan UX-design og kodning spiller sammen for at skabe digitale løsninger, der opfylder brugernes og virksomhedens behov.</p>
        <p>Som frivillig webansvarlig for FDF Ørnhøjs kredshjemmeside har jeg forbedret mine færdigheder inden for WordPress, herunder vedligeholdelse, performanceoptimering og SEO.</p>
        <p>Mit arbejde med React.js har givet mig dyb forståelse for skalerbare, komponentbaserede applikationer. Jeg fokuserer på at skrive ren og effektiv kode, der sikrer stabilitet og ydeevne.</p>
        <p>Jeg brænder for frontendudvikling og løser tekniske udfordringer gennem kreativitet og analytisk tænkning. Mit mål er at levere brugervenlige og visuelt appellerende digitale løsninger, der skaber værdi for virksomheder og deres kunder.<br />
        Jeg ser frem til at anvende mine færdigheder i min videre karriere og bidrage til at skabe innovative, værdifulde løsninger, der understøtter virksomheders digitale vækst.</p>
        <div className="uddannelse-component">
          <h2>Uddannelse</h2>
          {uddannelseData.map((uddannelse, index) => (
                <Uddannelse
                  key={index}
                  type={uddannelse.type}
                  school={uddannelse.school}
                  focus={uddannelse.focus}
                  year={uddannelse.year}
                />
              ))}
      </div>


      </div>
    )
  }