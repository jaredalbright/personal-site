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
                Science. Outside of work I enjoy spending time with friends, snowboarding, wakeboarding, lifting weights and photography. If you're interested in my photography check out 
                the other half of this website.
            </p>
        </div>
    )
}

export default About  