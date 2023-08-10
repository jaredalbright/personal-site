import { motion } from "framer-motion"
import JobCard from "./JobCard/JobCard"
import WorkInfo from "./WorkInfo.json"
import Capital_One from "../../assets/logos/Capital_One.png"

interface Job {
    short: string,
    years: string,
    header: string,
    image: string,
    description: string
}

const Work = () => {
    return (
        <div className="resume-opts skills-align">
            <h1 className="resume-header">Work</h1>
                <div className="jobgroup">{WorkInfo.Jobs.map((job:Job) => (<JobCard short={job.short} year={job.years} header={job.header} image={job.image} description={job.description} />))}</div>
        </div>
    )
}

export default Work  