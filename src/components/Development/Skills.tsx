import { motion } from "framer-motion"
import awslogo from "../../assets/logos/awslogo.png"
import clogo from "../../assets/logos/clogo.png"
import csharplogo from "../../assets/logos/csharplogo.png"
import csslogo from "../../assets/logos/csslogo.png"
import expresslogo from "../../assets/logos/expresslogo.png"
import gitlogo from "../../assets/logos/gitlogo.png"
import htmllogo from "../../assets/logos/htmllogo.png"
import javalogo from "../../assets/logos/javalogo.png"
import linuxlogo from "../../assets/logos/linuxlogo.png"
import mongologo from "../../assets/logos/mongologo.png"
import pythonlogo from "../../assets/logos/pythonlogo.png"
import reactlogo from "../../assets/logos/reactlogo.png"
import sqllogo from "../../assets/logos/sqllogo.png"
import tslogo from "../../assets/logos/tslogo.png"
import unitylogo from "../../assets/logos/unitylogo.png"
import dockerlogo from "../../assets/logos/dockerlogo.png"
import SkillCard from "./SkillCard"

interface Skill {
    name:string,
    logo:string
}

const Skills= () => {
    let languages : Array<Skill> = Array(
        {"name": "Python", "logo": pythonlogo},
        {"name": "Java", "logo": javalogo},
        {"name": "C", "logo": clogo},
        {"name": "C#", "logo": csharplogo},
        {"name": "Typescript", "logo": tslogo},
        {"name": "HTML", "logo": htmllogo},
        {"name": "CSS", "logo": csslogo}
    )
    let skills : Array<Skill> = Array(
        {"name": "AWS", "logo": awslogo},
        {"name": "React", "logo": reactlogo},
        {"name": "Linux", "logo": linuxlogo},
        {"name": "MongoDB", "logo": mongologo},
        {"name": "SQL", "logo": sqllogo},
        {"name": "Git", "logo": gitlogo},
        {"name": "Unity", "logo": unitylogo},
        {"name": "Docker", "logo": dockerlogo},
        {"name": "Node/Express", "logo": expresslogo}
    )

    return (
        <div className="resume-opts skills-align">
            <h1 className="no-select remove-head-padding">Skills</h1>
            <h2 className="no-select">Languages</h2>
            <div className="skillgroup">{languages.map((language:Skill) => (<SkillCard name={language.name} image={language.logo}/>))}</div>
            <h2 className="no-select">Technologies</h2>
            <div className="skillgroup">{skills.map((skill:Skill) => (<SkillCard name={skill.name} image={skill.logo}/>))}</div>
        </div>
    )
}

export default Skills  