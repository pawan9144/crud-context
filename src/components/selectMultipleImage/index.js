import React, { useState, useEffect } from "react";

const UploadAndDisplayImage = () => {
  const [images, setImages] = useState([]);
  const [imageURLS, setImageURLs] = useState([]);
  console.log(
    "🚀 ~ file: index.js:6 ~ UploadAndDisplayImage ~ imageURLS",
    imageURLS
  );
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  return (
    <>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
      {imageURLS.map((imageSrc) => (
        <img src={imageSrc} alt="not fount" width={"250px"} />
      ))}
    </>
  );
};

export default UploadAndDisplayImage;
