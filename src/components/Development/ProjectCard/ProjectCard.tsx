import { AnimatePresence, motion } from "framer-motion"
import Modal from "./Modal"
import { useState } from "react";
import Trigger from "./ModalTrigger";


interface Props {
    short: string,
    stack: string,
    description: string,
    projectLink: string,
    projectDesc: string,
}

//{name, image, description}: Props

const ProjectCard = ({short, stack, description, projectLink, projectDesc}: Props) => {
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    return (
        <div className="job">
            <Trigger handleOpen={open} short={short} stack={stack}/>
        <AnimatePresence
            // Disable any initial animations on children that
            // are present when the component is first rendered
            initial={false}
            // Only render one component at a time.
            // The exiting component will finish its exit
            // animation before entering component is rendered
            mode="wait"
            // Fires when all exiting nodes have completed animating out
            onExitComplete={() => null}
        >
            {modalOpen && <Modal handleClose={close} text={description} stack={stack} header={short} projectLink={projectLink} projectDesc={projectDesc}/>}
        </AnimatePresence>
        </div>
    )
}

export default ProjectCard  