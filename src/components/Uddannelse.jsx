export default function Uddannelse(props) {
    // const [count, setCount] = useState(0)
  
    return (
      <div className="uddannelse">
          <article>
            <h3>{props.type}</h3>
            <p>{props.school}</p>
            <p>{props.focus}</p>
            <p>{props.year}</p>
          </article>        
        </div>
    )
  }