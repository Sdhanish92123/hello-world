import React, { useState, useEffect } from "react";
import "./Gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = () => {
      const data = [
        {
          id: 1,
          url: "https://fastly.picsum.photos/id/1/300/200.jpg?hmac=-NJkMeYPrdetftjjcJ9lbfAZcXVJhZy4rqGvbP0P8Hg",
          title: "Image 1",
        },
        {
          id: 2,
          url: "https://fastly.picsum.photos/id/2/300/200.jpg?hmac=19a921SJWDsZIU79S0Pi_xIKrXkOV3qT31RFX6Vp-eU",
          title: "Image 2",
        },
        {
          id: 3,
          url: "https://fastly.picsum.photos/id/3/300/200.jpg?hmac=ula8zMkIchvBcwRqnDwGF7JjZXMpZwtHrEEHzqZPitU",
          title: "Image 3",
        },
        {
          id: 4,
          url: "https://fastly.picsum.photos/id/4/300/200.jpg?hmac=6AiyQ6mB_-wNMrEWO6HP0kKlr9OyFzxEoEiWhNC5rOA",
          title: "Image 4",
        },
        {
          id: 5,
          url: "https://fastly.picsum.photos/id/5/300/200.jpg?hmac=OEThX-GUhKMPjHoNILLrmIrAOlqx2XdgXqUf4FMNx5E",
          title: "Image 5",
        },
      ];
      setImages(data);
    };
    fetchImages();
  }, []);

  const handleDeleteImage=(imageId)=>{
    setImages(images.filter((image)=>image.id !== imageId))
  }

  return (
    <div>
      <h1 className="title">Image Gallery</h1>

      {
        images.length >0 ?
        (
            <div className="image-grid">

        {
            images.map((image )=>(
                <div className="image-card" key={image.id}>
                    <img src={image.url} alt="" />
                <div className="image-details">
                  <h3>{image.title} </h3>
                  <button onClick={()=>handleDeleteImage(image.id)}>Delete</button>
                </div>
              </div>
            ))
        
        }
      </div>
        ):
        <p className="no-images">No Images</p>
      }
      
    </div>
  );
}

export default Gallery;
