import React, { createContext, useEffect, useState } from "react";

export const PhotosProvider = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const endpoint = "/fotos.json";

  const dataConsult = async () => {
    const response = await (await fetch(endpoint)).json();
    const dataImg = response.photos;
    setData(dataImg);
  };

  useEffect(() => {
    dataConsult();
  }, []);

  return (
    <PhotosProvider.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </PhotosProvider.Provider>
  );
};

export default AppProvider;