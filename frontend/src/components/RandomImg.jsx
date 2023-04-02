import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

const imageFileNames = [
  "coffee-image1_by_card.jpg",
  "coffee-image2_by_card.jpg",
  "coffee-image3_by_card.jpg",
  "coffee-image4_by_card.jpg",
  "coffee-image5_by_card.jpg",
  "coffee-image6_by_card.jpg",
  "coffee-image7_by_card.jpg",
  "coffee-image8_by_card.jpg",
];

function getRandomImage(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

export const RandomImage = () => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      const randomImage = getRandomImage(imageFileNames);
      const imageImport = await import(`./image/images_by_card/${randomImage}`);
      setImageSrc(imageImport.default);
    };
    loadImage();
  }, []);

  return (
    <Image
      src={imageSrc}
      className="scaled-coffee-image rounded"
      alt="coffee画像Random"
    />
  );
};
