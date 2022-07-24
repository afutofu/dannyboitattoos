import React, { useState } from "react";

const Gallery = () => {
  const [pics, setPics] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <section id="gallery">
      <div className="container">
        <div className="info">
          <h2>Gallery</h2>
          <h3>Latest Works</h3>
          <p>
            More works available on{" "}
            <a
              href="https://www.instagram.com/dannyboimendez88/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="instagram">Instagram</span>
            </a>
          </p>
        </div>
      </div>
      <div className="image-container">
        <div className="image-container-1">
          {pics.map((el) => {
            return <div className="image">{el}</div>;
          })}
        </div>
        <div className="image-container-2">
          {pics.map((el) => {
            return <div className="image">{el}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
