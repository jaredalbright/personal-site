import { motion } from "framer-motion"
import ProjectInfo from "./ProjectInfo.json"
import ProjectCard from "./ProjectCard/ProjectCard"

interface Project {
    short: string,
    stack: string,
    description: string,
    projectLink: any,
    projectDesc: any
}

const Projects = () => {
    return (
        <div className="resume-opts skills-align">
            <h1 className="resume-header">Projects</h1>
            <div className="jobgroup">{ProjectInfo.Projects.map((project:Project, index) => (<ProjectCard key={index} short={project.short} stack={project.stack} description={project.description} projectLink={project.projectLink} projectDesc={project.projectDesc} />))}</div>
        </div>
    )
}

export default Projects  