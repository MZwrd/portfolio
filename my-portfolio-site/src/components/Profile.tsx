import {
    FaUser, FaCaretRight
} from "react-icons/fa"

const Profile = () => {

    return (
        <section id="profile" className="tage">
            <div className="title">
                <h2>PROFILE</h2>
            </div>

            <div className="profile_container">

                <div className="logo">
                    <img src="../assets/images/aikon_blackness.svg" height={"100px"} width={"100px"} alt="" />
                </div>

                <div className="textBox">
                    <ul className="about-text">
                        <li>
                            <h3><FaUser color="#bedeb0" /> ABOUT ME</h3>
                        </li>
                        <li className="sentence">
                            <FaCaretRight color="dca24c" className="rightArrow" />
                            <span>NAME : Mizuki Jindo</span>
                        </li>
                        <li className="sentence">
                            <FaCaretRight color="dca24c" className="rightArrow" />
                            <span>FROM : Aichi</span>
                        </li>
                        <li className="sentence">
                            <FaCaretRight color="dca24c" className="rightArrow" />
                            <span>UNIV : AIT Computer and Information Sciences</span>
                        </li>
                        <li className="sentence">
                            <FaCaretRight color="dca24c" className="rightArrow" />
                            <span>HOBBY : Game / Comic /  Music / Drawing</span>
                        </li>
                    </ul>

                </div>
            </div>

        </section>
    )
}

export default Profile;
