import JobCard from "./JobCard/JobCard"
import WorkInfo from "./WorkInfo.json"
import capitalone from "../../assets/logos/capitalone.png"
import samet from "../../assets/logos/samet.png"
import work from "../../assets/logos/work.png"
import vt from "../../assets/logos/vt.png"

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
                <div className="jobgroup">{WorkInfo.Jobs.map((job:Job, index) => (<JobCard key={index} short={job.short} year={job.years} header={job.header} image={job.image} description={job.description} />))}</div>
        </div>
    )
}

export default Work  