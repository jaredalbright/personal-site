import '../index.css'
import { useState } from 'react'
import { TfiCamera, TfiDesktop } from 'react-icons/Tfi';
const Header = ({ showDev, showPhoto, selected }: { showDev: any, showPhoto: any, selected: boolean }) => {
    const [devClass, setDevClass] = useState("dp-option selected")
    const [photoClass, setPhotoClass] = useState("dp-option non-selected")

    const changeDev = () => {
        showDev();
        setDevClass("dp-option selected");
        setPhotoClass("dp-option non-selected");
        document.documentElement.classList.remove("photo")
        document.documentElement.classList.add("dev");
    }

    const changePhoto = () => {
        showPhoto();
        setPhotoClass("dp-option selected");
        setDevClass("dp-option non-selected");
        document.documentElement.classList.remove("dev")
        document.documentElement.classList.add("photo")
    }

    return (
        <div>
            <div className="dp-menu">
                <h1 id="name">Jared Albright</h1>
                <div className="dp-option-group">
                    <button className={devClass} onClick={() => changeDev()}><TfiDesktop className="dp-icon" /><h2>development</h2></button>
                    <button className={photoClass} onClick={() => changePhoto()}><TfiCamera className="dp-icon" /><h2>photos</h2></button>
                </div>
                 {//selected ? <div className="option-menu"><button className='horizontal-menu'><h2>about</h2></button><button className='horizontal-menu'><h2>projects</h2></button><button className='horizontal-menu'><h2>resume</h2></button><button className='horizontal-menu'><h2>contact</h2></button></div> : <div className="option-menu"><button className='horizontal-menu'><h2>about</h2></button><button className='horizontal-menu'><h2>projects</h2></button><button className='horizontal-menu'><h2>photos</h2></button><button className='horizontal-menu'><h2>contact</h2></button></div>}
}</div>
        </div>
    )
}

export default Header