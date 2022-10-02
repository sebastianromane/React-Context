import React, { useContext } from "react";
import { PhotosProvider } from "../context/PhotosProvider";

const Favoritos = () => {
  const { data } = useContext(PhotosProvider);
  return (
    <div>
      <div>
      <h1>Fotos favoritas</h1>

      </div>

    <div className="container-images">
      {data
        .filter((a) => a.favorite === true)
        .map((item) => (
          <div
              className="image"
              key={item.id}
              src={item.src.tiny}
              style={{backgroundImage: `url(${item.src.tiny})`,
            }}
            >

            <div className="info-imagef">
              <p>{item.alt}</p>
            </div>

          </div>
        ))}
    </div>
    </div>

  );
};

export default Favoritos;
