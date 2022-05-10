import { Link } from "react-router-dom"
import Contact from './Contact'

const About = ({onAdd}) => {
  return (
    <div>
        <h4>Version 1.0.0.0</h4>
        <Link to="/">Go back</Link>
        <Contact onAdd={onAdd}/>
    </div>
  )
}

export default About