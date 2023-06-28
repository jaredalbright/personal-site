import { motion } from "framer-motion"
import JobCard from "./JobCard/JobCard"

const Work = () => {
    return (
        <div className="resume-opts skills-align">
            <h1>Work</h1>
            <div id="timeline">
                <JobCard />
            </div>
        </div>
    )
}

export default Work  