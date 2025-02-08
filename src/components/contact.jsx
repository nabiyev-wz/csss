import React from "react";

const Contact = () => {
    return (
        <div className="contact-container container">
            <div className="contact-content">
                <div className="con-left">
                    <img src="./public/Group 133.png" alt="" />
                </div>
                <div className="con-right">
                    <h2>Get In Touch</h2>
                    <p>
                        A good design is not only aesthetically pleasing, but <br /> also functional.
                        It should be able to solve the problem.
                    </p>
                    <form>
                        <input type="email" placeholder="Your Email" required />
                        <input type="text" placeholder="Name" required />
                        <textarea placeholder="Message" required></textarea>
                        <button type="submit">Get in Touch</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
