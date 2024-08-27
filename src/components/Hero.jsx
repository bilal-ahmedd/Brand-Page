import React from 'react'

const Hero = () => {
    return (
        <div className='container'>
            <div className="hero-section">
                <div className="hero-content">
                    <h1> Your Feet Deserve The Best. </h1>
                    <p> Your feet deserve the best and we are here to help you out with your shoes choices. Your feet deserve the best and we are here to help you out with your shoes choices.</p>
                    <div className="hero-btn">
                        <button> Shop Now </button>
                        <button> Category </button>
                    </div>
                    <span> Also Avalaible on: </span>
                    <div className="hero-brand-logo">
                    <img src="/src/assets/flipkart.png" alt="" width={30} height={30} />
                    <img src="/src/assets/amazon.png" alt="" width={30} height={30} />
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/assets/hero-image.png" alt="" width={580} height={500} />
                </div>
            </div>
            
        </div>
    )
}

export default Hero
