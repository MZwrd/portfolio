import {
    FaPaperPlane
} from "react-icons/fa"

const Contact = () => {

    return (
        <section id="contact">
            <div className="title">
                <h2>CONTACT</h2>
            </div>
            <form action="" method="">
                <h3><FaPaperPlane /> get in touch</h3>
                <input type="text" name="" id="name" placeholder="Name" required />
                <input type="email" name="" id="email" placeholder="Email" required />
                <input type="text" name="" id="phone" placeholder="Phone" required />
                <textarea name="" id="message" rows={4} placeholder="Message"></textarea>
                <button type="submit">send</button>
            </form>

        </section>
    )
}

export default Contact;