import { motion } from "framer-motion"
import me from "../../assets/Me.jpg"

const About= () => {
    return (
        <div className="resume-opts about-me-align">
            <h1 className="resume-header">About me</h1>
            <img src={me} id="profile"/>
            <p id="aboutme">
                Hi my name is Jared and I am a software developer. I am currently based in New York City working as an Associate Software Engineer at Capital One and am going through their
                Technology Development program. My team develops and supports our oncall alerting system. I graduated from Virginia Tech with a BS in Computer
                Science. So what is this website? I like to think of it as a more verbose and stylish version of my resume. I wanted to brush up on my frontend knowledge and thought it would be cool
                to have a website with my name attached. Soon the other half of this website will be dedicated to my photography.
            </p>
        </div>
    )
}

export default About  