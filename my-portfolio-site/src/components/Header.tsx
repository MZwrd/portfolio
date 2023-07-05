import { FaGithub, FaTwitter } from "react-icons/fa"

const Header = () => {

    return (
        <header className="a-header">
            <nav className="nav-container">
                <ul className="nav-list">
                    <li className="nav"><a href="#profile">./PROFILE</a></li>
                    <li className="nav"><a href="#skills">./SKILLS</a></li>
                    <li className="nav"><a href="#works">./WORKS</a></li>
                    <li className="nav"><a href="#contact">./CONTACT</a></li>
                </ul>
            </nav>
            <div className="follow">
                <div className="item">
                    <a href="https://github.com/" target="_blank">
                        <FaGithub color="#ffffff" />
                    </a>

                </div>
                <div className="item">
                    <a href="https://twitter.com/?lang=ja" target="_blank">
                        <FaTwitter color="ffffff" />
                    </a>
                </div>
            </div>
        </header >
    )
}

export default Header;