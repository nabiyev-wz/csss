import React from 'react'

const hero = () => {
    return (
        <div>
            <div className='container'>

                <div>
                    <div className="hero-big">
                        <h1>Beautiful Landing Page <br /> Design for You</h1>
                        <p>A good design is not only aesthetically pleasing, but also <br /> functional. It should be able to solve the problem </p>
                        <button>Download Template</button>
                    </div>
                </div>
                <div className="menu-big flex container op">
                    <div className="card1">
                        <img src="./public/Screenshot 2025-02-08 182022.png" alt="" />
                    </div>
                    <div className="card2" >
                        <img src="./public/aylana.png" alt="" /> <br />
                        <img className='img2' src="./public/tepa.png" alt="" />
                    </div>
                    <div className="card3">
                        <img src="./public/odam.png" alt="" />
                        <div>.</div>
                    </div>

                </div>

            </div>
           
        </div>
    )
}

export default hero
