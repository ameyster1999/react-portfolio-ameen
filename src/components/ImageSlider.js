import React from 'react';
import Slider from 'react-slick';
import image1 from '/Users/sheejarasheed/Desktop/portfolio/src/Assets/images/ameen.jpeg';
import image2 from '/Users/sheejarasheed/Desktop/portfolio/src/Assets/images/ameen1.jpeg';
import image3 from '/Users/sheejarasheed/Desktop/portfolio/src/Assets/images/ameen2.jpeg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    // Add more images here
];

function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 10,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
        
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image.image} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </Slider>
    );
}

export default ImageSlider;
