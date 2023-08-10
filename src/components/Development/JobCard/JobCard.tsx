import { AnimatePresence, motion } from "framer-motion"
import Modal from "./Modal"
import { useState } from "react";
import Trigger from "./ModalTrigger";


interface Props {
    short: string,
    year: string,
    header: string,
    image: string,
    description: string
}

//{name, image, description}: Props

const JobCard = ({short, year, header, image, description}: Props) => {
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    return (
        <div className="job">
            <Trigger handleOpen={open} short={short} image={image}/>
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
            {modalOpen && <Modal handleClose={close} text={description} year={year} header={header} image={image}/>}
        </AnimatePresence>
        </div>
    )
}

export default JobCard  