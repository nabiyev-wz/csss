import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
const footer = () => {
    return (
        <div>
            <div className="footer-bigg">
                <div className="footer-big container flex">
                    <div className="logo">
                        <img src="./public/Group 128.png" alt="" />
                        <p style={{ color: "#6c6c6c" }}>A good design is not only aesthetically <br /> pleasing, but also functional. It should be <br /> able to solve the problem </p>
                    </div>
                    <div className="section">
                        <h3 style={{ color: "#fff" }}>Sections</h3>
                        <p style={{ color: "#6c6c6c" }}>Home <br />
                            Section <br />
                            OneSection <br />
                            TwoSection <br />
                            Tree</p>
                    </div>
                    <div className="pic">
                        <p style={{ color: "#6c6c6c" }}>Home <br />
                            Section <br />
                            OneSection <br />
                            TwoSection <br />
                            Tree</p>
                    </div>
                    <div className="pic">
                        <p style={{ color: "#6c6c6c" }}> Home <br />
                            Section <br />
                            OneSection <br />
                            TwoSection <br />
                            Tree</p>
                    </div>
                </div>
            </div>
            <div className="bot container">
                <p style={{ color: "#6c6c6c" }}>All Rights Reservd Inkyy.com 2022</p>
                <CiTwitter />
                <FaLinkedinIn />
                <FaDiscord />
            </div>
        </div>
    )
}

export default footer
