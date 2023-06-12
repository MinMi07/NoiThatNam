import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import images from "../../asset";
import './SlideImages.css'

function SlideImages() {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    minHeight: "300px",
    backgroundPosition: "center"
  };

  const slideImages = [
    {
      url: `${images.Khach2}`,
      caption: "Slide 1",
    },
    {
      url: `${images.Khach3}`,
      caption: "Slide 2",
    },
    {
      url: `${images.Khach4}`,
      caption: "Slide 3",
    },
    {
      url: `${images.Khach5}`,
      caption: "Slide 4",
    },
    {
      url: `${images.Khach6}`,
      caption: "Slide 5",
    },
  ];

  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div className="slideImg"
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              {/* <span style={spanStyle}>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default SlideImages;
