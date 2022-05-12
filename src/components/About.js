import '../about.css';
import { Link } from "react-router-dom"
import Contact from './Contact'
import Comments from './Comments'


const About = ({onAdd, texts}) => {
  return (
    <div>
        <h4>Version 1.0.0.0</h4>
        <Link to="/">Go back</Link>
        <Contact onAdd={onAdd}/>
        {
          texts.length > 0 ? (<Comments texts={texts}/>) : ('No comments to show!')
        }
        
    </div>
  )
}

export default About