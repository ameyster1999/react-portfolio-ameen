import ameenImage from '/Users/sheejarasheed/Desktop/portfolio/src/Assets/images/ameen.jpeg';

function HeroSection() {
    return (
        <section id="hero">
            <div className="hero-content">
                <img src={ameenImage} alt="Mohammed Ameen Abdu Rasheed"  />
                <h1>Mohammed Ameen Abdu Rasheed</h1>
                <h2>Junior Software Developer</h2>
                
            </div>
        </section>
    );
}

export default HeroSection;