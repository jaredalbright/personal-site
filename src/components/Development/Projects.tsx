import { motion } from "framer-motion"

interface Project {
    header: string,
    image: string,
    description: string
}

const Projects = () => {
    return (
        <div className="resume-opts skills-align">
            <h1 className="resume-header">Projects</h1>
        </div>
    )
}

export default Projects  