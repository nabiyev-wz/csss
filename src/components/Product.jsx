import React from 'react'
import { FaBox } from "react-icons/fa";
import { LuFileStack } from "react-icons/lu";
import { SiCelestron } from "react-icons/si";
import { CiText } from "react-icons/ci";
import { FaPenRuler } from "react-icons/fa6";
import { FaDisplay } from "react-icons/fa6";

const Product = () => {
    return (
        <div>
            <div className="top container">
                <h1>Feature Boxes</h1>
                <p>A good design is not only aesthetically pleasing, but also <br /> functional. It should be able to solve the problem </p>
            </div>
            <div className="cards container">
                <div className="card">
                    <FaBox />
                    <h3>Fully Customizable</h3>
                    <p>A good design is not only aesthetically <br /> pleasing, but also functional. It should be <br /> able to solve the problem </p>
                </div>
                <div className="card">
                <LuFileStack />
                    <h3>Responsive Design</h3>
                    <p>A good design is not only aesthetically <br /> pleasing, but also functional. It should be <br /> able to solve the problem </p>
                </div>
                <div className="card">
                <SiCelestron />
                    <h3>High Performance</h3>
                    <p>A good design is not only aesthetically <br /> pleasing, but also functional. It should be <br /> able to solve the problem </p>
                </div>
                
            </div>
            <div className="cards container">
                <div className="card">
                <CiText />
                    <h3>Fully Customizable</h3>
                    <p>A good design is not only aesthetically <br /> pleasing, but also functional. It should be <br /> able to solve the problem </p>
                </div>
                <div className="card">
                <FaPenRuler />
                    <h3>Responsive Design</h3>
                    <p>A good design is not only aesthetically <br /> pleasing, but also functional. It should be <br /> able to solve the problem </p>
                </div>
                <div className="card">
                <FaDisplay />
                    <h3>High Performance</h3>
                    <p>A good design is not only aesthetically <br /> pleasing, but also functional. It should be <br /> able to solve the problem </p>
                </div>
                
            </div>
        </div>
    )
}

export default Product