import {
    FaCaretRight, FaCode, FaJava, FaHtml5, FaCss3, FaSass, FaJs, FaDatabase,
    FaLinux, FaIdCard, FaOtter, FaPhp, FaDocker, FaNodeJs, FaReact, FaAws
} from "react-icons/fa"

const Skills = () => {

    return (
        <section id="skills">
            <div className="title">
                <h2>SKILL</h2>
            </div>
            
            {/* Programming */}
            <div className="skill_container">
                <ul>
                    <li>
                        <h3><FaCode color="3b5f95" /> Programming</h3>
                    </li>
                    <li className="sentence">
                        <FaCaretRight color="dca24c" className="icon" />
                        <span> Java </span>
                        <FaJava color="cd4432" className="icon" />
                    </li>
                    <li className="sentence">
                        <FaCaretRight color="dca24c" className="icon" />
                        <span>
                            HTML <FaHtml5 color="cd7a32" className="icon" />/
                            CSS <FaCss3 color="328acd" className="icon" />
                            SCSS <FaSass color="d97fed" className="icon" />/
                            JS <FaJs color="ede621" className="icon" />
                        </span>
                    </li>
                    <li className="sentence">
                        <FaCaretRight color="dca24c" className="icon" />
                        <span> PHP </span>
                        <FaPhp color="#576fbd" className="icon" />
                        <span> NodeJS </span>
                        <FaNodeJs color="#576fbd" className="icon" />
                        <span> React </span>
                        <FaReact color="#576fbd" className="icon" />
                    </li>
                    <li className="sentence">
                        <FaCaretRight color="dca24c" className="icon" />
                        <span> MySQL </span>
                        <FaDatabase color="#2e542f" className="icon" />
                    </li>
                    <li className="sentence">
                        <FaCaretRight color="dca24c" className="icon" />
                        <span> Linux </span>
                        <FaLinux color="#b37812" className="icon" />
                    </li>
                    <li className="sentence">
                        <FaCaretRight color="dca24c" className="icon" />
                        <span> AWS <FaAws color="#8a335a" className="icon" /> / Docker <FaDocker color="#12b388" className="icon" /></span>

                    </li>

                </ul>

                {/* Qualifications */}
                <ul>
                    <li>
                        <h3><FaIdCard color="3b5f95" /> Qualifications</h3>
                    </li>

                    <li className="sentence">
                        {/* <p>(2021/03)</p> */}
                        <FaCaretRight color="dca24c" className="icon" />
                        <span>oracle java programming silver SE11</span>
                    </li>
                    <li className="sentence">
                        {/* <p>(2023/04)</p> */}
                        <FaCaretRight color="dca24c" className="icon" />
                        <span>AWS Certified Cloud Practitioner</span>
                    </li>
                </ul>

                {/* Other */}
                <ul>
                    <li>
                        <h3><FaOtter color="3b5f95" /> Other</h3>
                    </li>
                    <li className="sentence">
                        <FaCaretRight color="dca24c" className="icon" />
                        <span>Maya / Blender</span>
                    </li>
                    <li className="sentence">
                        <FaCaretRight color="dca24c" className="icon" />
                        <span>Photoshop</span>
                    </li>
                    <li className="sentence">
                        <FaCaretRight color="dca24c" className="icon" />
                        <span>Substance 3D Painter</span>
                    </li>
                    <li className="sentence">
                        <FaCaretRight color="dca24c" className="icon" />
                        <span>ZBrush</span>
                    </li>
                </ul>
            </div>

        </section>
    )
}

export default Skills;
